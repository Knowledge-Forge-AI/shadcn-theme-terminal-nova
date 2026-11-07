/** @vitest-environment jsdom */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "@/App";
import { cn } from "@/lib/utils";
import { SpecimenApp } from "@/specimen-main";

beforeEach(() => {
  document.documentElement.className = "";
  document.documentElement.removeAttribute("data-theme");
  window.history.replaceState({}, "", "/");
});

afterEach(() => {
  cleanup();
});

describe("Terminal Nova consumer behavior", () => {
  it("associates labels with controls and exposes the hero validation state", () => {
    render(<App />);

    const emailInputs = screen.getAllByLabelText("Email");
    expect(emailInputs.length).toBeGreaterThan(0);
    expect(emailInputs[0].getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByRole("alert").textContent).toContain("Email is required.");
  });

  it("switches the root theme preference without persistence", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Dark" }));

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.cookie).toBe("");
  });

  it("validates and then accepts the local hero form", async () => {
    const user = userEvent.setup();
    render(<App />);

    const email = screen.getAllByLabelText("Email")[0];
    await user.clear(email);
    await user.click(screen.getAllByRole("button", { name: "Save changes" })[0]);
    expect(screen.getByRole("alert").textContent).toContain("Email is required.");

    await user.type(email, "ada@example.com");
    await user.click(screen.getAllByRole("button", { name: "Save changes" })[0]);
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getAllByRole("button", { name: "Saved" }).length).toBeGreaterThan(0);
  });

  it("keeps primary asChild links on the primary foreground role", () => {
    render(<App />);

    const primaryLink = screen.getByRole("link", { name: /Explore components/ });
    expect(primaryLink.getAttribute("data-slot")).toBe("button");
    expect(primaryLink.className).toContain("text-primary-foreground");
  });

  it("opens the Radix dialog, handles Escape, and returns focus", async () => {
    const user = userEvent.setup();
    render(<App />);

    const trigger = screen.getByRole("button", { name: "Cancel" });
    await user.click(trigger);
    expect(screen.queryByRole("dialog")).not.toBeNull();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it("closes dialog actions and keeps gallery form actions local and observable", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Dialog" }));
    const openSettings = screen.getByRole("button", { name: "Open settings" });
    await user.click(openSettings);
    const dialog = screen.getByRole("dialog");
    await user.click(within(dialog).getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(openSettings);

    await user.click(openSettings);
    await user.click(within(screen.getByRole("dialog")).getByRole("button", { name: "Save" }));
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByText("Settings saved locally.")).toBeDefined();

    await user.click(screen.getByRole("button", { name: "Form" }));
    const form = screen.getByRole("form", { name: "Gallery demo form" });
    const email = within(form).getByLabelText("Email");
    await user.click(within(form).getByRole("button", { name: "Clear" }));
    expect(email).toHaveProperty("value", "");
    expect(within(form).getByRole("status").textContent).toContain("Form cleared locally.");
    await user.click(within(form).getByRole("button", { name: "Submit" }));
    expect(within(form).getByRole("status").textContent).toContain("valid email");

    await user.type(within(form).getByLabelText("Name"), "Ada Lovelace");
    await user.type(email, "ada@example.com");
    await user.click(within(form).getByRole("button", { name: "Submit" }));
    expect(within(form).getByRole("status").textContent).toContain("Submitted Ada Lovelace locally");
  });

  it("discards Settings edits on Cancel and reports Save locally", async () => {
    const user = userEvent.setup();
    render(<App />);

    const theme = screen.getByLabelText("Theme");
    await user.selectOptions(theme, "Nebular");
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    await user.click(within(screen.getByRole("dialog")).getByRole("button", { name: "Discard changes" }));
    expect(theme).toHaveProperty("value", "Terminal Nova");
    expect(screen.getByText("Changes discarded locally.")).toBeDefined();

    await user.selectOptions(theme, "Nebular");
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(theme).toHaveProperty("value", "Nebular");
    expect(screen.getByText("Settings saved locally.")).toBeDefined();
  });

  it("shows all six family previews without changing the parent mode", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Dark" }));
    for (const family of ["Terminal Nova", "Nebular", "Developer", "Graphic Designer", "Anime", "Gamer"]) {
      expect(screen.getByRole("button", { name: family })).toBeDefined();
    }

    const anime = screen.getByRole("button", { name: "Anime" });
    await user.click(anime);
    expect(anime.getAttribute("aria-pressed")).toBe("true");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(screen.getByTitle("Anime light component specimen").getAttribute("src")).toContain("family=anime");
    expect(screen.getByTitle("Anime dark component specimen").getAttribute("src")).toContain("mode=dark");
    expect(screen.getByRole("link", { name: "Download selected development-preview source profile JSON" }).getAttribute("href")).toBe("/appearances/profiles/anime.profile.json");
    expect(screen.getByRole("link", { name: "Download development-preview source profile JSON" }).getAttribute("href")).toBe("/appearances/profiles/terminal-nova.profile.json");
  });

  it("ignores a stale CSS example response after the family changes", async () => {
    const user = userEvent.setup();
    const requests: Array<{ url: string; resolve: (response: Response) => void }> = [];
    const fetchMock = vi.fn((input: RequestInfo | URL) => {
      const url = String(input);
      if (url.endsWith("catalog.json")) return Promise.resolve({ ok: false } as Response);
      return new Promise<Response>((resolve) => requests.push({ url, resolve }));
    });
    vi.stubGlobal("fetch", fetchMock);

    try {
      render(<App />);
      const family = screen.getByLabelText("Family");
      await user.selectOptions(family, "anime");
      await user.click(screen.getByRole("button", { name: "Load CSS example" }));
      await user.selectOptions(family, "gamer");
      const animeRequest = requests.find((request) => request.url.includes("/anime/cttn.css"));
      expect(animeRequest).toBeDefined();
      animeRequest?.resolve({ ok: true, text: async () => ":root { --example: anime; }" } as Response);
      await waitFor(() => expect(screen.queryByText("Anime generated example loaded locally.")).toBeNull());
      expect(screen.getByRole("button", { name: "Mark preview reviewed" }).hasAttribute("disabled")).toBe(true);
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("reports a useful local fallback when the clipboard API is unavailable", async () => {
    const user = userEvent.setup();
    const originalClipboard = navigator.clipboard;
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
    try {
      render(<App />);
      await user.click(screen.getAllByRole("button", { name: "Copy" })[0]);
      expect(screen.getByText("Clipboard unavailable; select the sample manually.")).toBeDefined();
      expect(screen.queryByRole("button", { name: "Copied" })).toBeNull();
    } finally {
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: originalClipboard });
    }
  });

  it("reports a useful local fallback when clipboard writing fails", async () => {
    const user = userEvent.setup();
    const originalClipboard = navigator.clipboard;
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("clipboard denied")) },
    });
    try {
      render(<App />);
      await user.click(screen.getAllByRole("button", { name: "Copy" })[0]);
      await waitFor(() => expect(screen.getByText("Copy failed; select the sample manually.")).toBeDefined());
      expect(screen.queryByRole("button", { name: "Copied" })).toBeNull();
    } finally {
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: originalClipboard });
    }
  });

  it("accepts a six-family specimen query and falls back invalid values", () => {
    window.history.replaceState({}, "", "/specimen.html?family=anime&mode=dark");
    const valid = render(<SpecimenApp />);
    expect(document.documentElement.getAttribute("data-family")).toBe("anime");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(valid.container.querySelector("header")?.textContent).toContain("Anime");
    valid.unmount();

    window.history.replaceState({}, "", "/specimen.html?family=unknown&mode=solar");
    render(<SpecimenApp />);
    expect(document.documentElement.getAttribute("data-family")).toBe("terminal-nova");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(screen.getByRole("banner").textContent).toContain("Terminal Nova");
    expect(screen.getByRole("banner").textContent).toContain("Light specimen");
  });

  it("merges conflicting token utility classes in the approved cn helper", () => {
    const merged = cn("bg-primary text-primary-foreground", "bg-secondary");
    expect(merged).toContain("bg-secondary");
    expect(merged).not.toContain("bg-primary");
    expect(merged).toContain("text-primary-foreground");
  });

  it("keeps the table selection affordance keyboard reachable", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Table" }));
    const table = screen.getByRole("table", { name: "Available profile consumers" });
    const rows = within(table).getAllByRole("row");
    const nebular = rows.find((row) => row.textContent?.includes("Nebular"));
    expect(nebular).toBeDefined();
    nebular?.focus();
    await user.keyboard("{Enter}");
    expect(nebular?.getAttribute("data-state")).toBe("selected");
  });
});
