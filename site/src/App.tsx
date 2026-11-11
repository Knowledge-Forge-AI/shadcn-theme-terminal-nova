import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  FALLBACK_FAMILIES,
  appearanceProfileUrl,
  type AppearanceFamily,
  type FamilyId,
  type ThemeMode,
  cssExcerpt,
  loadAppearanceCss,
  loadAppearanceFamilies,
  specimenUrl,
} from "@/catalog";

type ThemePreference = "system" | ThemeMode;
type GalleryTab = "form" | "card" | "dialog" | "table";

const PROJECTS = [
  { number: "1", name: "Theme Forge", status: "Active" },
  { number: "2", name: "Terminal Nova", status: "Draft" },
  { number: "3", name: "Nebular", status: "Active" },
];

function getSystemMode(): ThemeMode {
  return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useResolvedTheme(preference: ThemePreference): ThemeMode {
  const [systemMode, setSystemMode] = useState<ThemeMode>(getSystemMode);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemMode(media.matches ? "dark" : "light");
    update();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return preference === "system" ? systemMode : preference;
}

function useAppearanceCatalog(): AppearanceFamily[] {
  const [families, setFamilies] = useState<AppearanceFamily[]>(FALLBACK_FAMILIES);

  useEffect(() => {
    let active = true;
    void loadAppearanceFamilies().then((loaded) => {
      if (active) setFamilies(loaded);
    });
    return () => {
      active = false;
    };
  }, []);

  return families;
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

function SunIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>;
}

function MoonIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 15.3A8.5 8.5 0 0 1 8.7 3.5 8.5 8.5 0 1 0 20.5 15.3Z" /></svg>;
}

function FormIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="1.5" /><path d="M8 8h8M8 12h5M8 16h8" /></svg>;
}

function LayersIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 4 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 16l8 4 8-4" /></svg>;
}

function MessageIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z" /><path d="M8 9h8M8 12h5" /></svg>;
}

function TableIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 10h16M9 5v14M15 5v14" /></svg>;
}

function WarningIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 4 8 15H4L12 4Z" /><path d="M12 9v4M12 16h.01" /></svg>;
}

function Header({ preference, onPreferenceChange }: { preference: ThemePreference; onPreferenceChange: (value: ThemePreference) => void }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="#top" aria-label="Terminal Nova home">Terminal Nova</a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#components">Components</a>
          <a href="#families">Families</a>
          <a href="#install">Install</a>
          <a href="#docs">Docs</a>
          <a href="https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <div className="theme-switch" aria-label="Appearance mode">
          <button type="button" className={preference === "system" ? "active" : ""} aria-pressed={preference === "system"} onClick={() => onPreferenceChange("system")}>System</button>
          <button type="button" className={preference === "light" ? "active" : ""} aria-pressed={preference === "light"} onClick={() => onPreferenceChange("light")}><SunIcon />Light</button>
          <button type="button" className={preference === "dark" ? "active" : ""} aria-pressed={preference === "dark"} onClick={() => onPreferenceChange("dark")}><MoonIcon />Dark</button>
        </div>
      </div>
    </header>
  );
}

function HeroSpecimen() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState<string | null>("Email is required.");
  const [saved, setSaved] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setNotice("Email is required.");
      setSaved(false);
      return;
    }
    setNotice(null);
    setSaved(true);
  };

  return (
    <Card className="hero-specimen">
      <div className="hero-form">
        <form onSubmit={submit} noValidate>
          <Label htmlFor="hero-name">Name</Label>
          <Input id="hero-name" name="name" defaultValue="Ada Lovelace" />
          <Label htmlFor="hero-email">Email</Label>
          <Input id="hero-email" name="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setNotice(null); setSaved(false); }} placeholder="ada@example.com" aria-invalid={Boolean(notice)} aria-describedby="hero-email-message" />
          <Label htmlFor="hero-role">Role</Label>
          <select id="hero-role" name="role" className="native-select" defaultValue="Developer">
            <option>Developer</option>
            <option>Designer</option>
            <option>Product lead</option>
          </select>
          <div className="hero-form-actions">
            <Button type="submit">{saved ? "Saved" : "Save changes"}</Button>
            <Button type="button" variant="outline" onClick={() => { setEmail(""); setNotice("Email is required."); setSaved(false); }}>Reset</Button>
          </div>
          <p id="hero-email-message" className={notice ? "form-message error" : "form-message"} role={notice ? "alert" : undefined}>{notice ?? "Ready to save locally."}</p>
        </form>
      </div>
      <div className="hero-projects">
        <Table>
          <TableCaption className="sr-only">Terminal Nova project status</TableCaption>
          <TableHeader><TableRow><TableHead>#</TableHead><TableHead>Project</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>{PROJECTS.map((project) => <TableRow key={project.number}><TableCell>{project.number}</TableCell><TableCell>{project.name}</TableCell><TableCell><span className={project.status === "Active" ? "status-text active" : "status-text"}>{project.status}</span></TableCell></TableRow>)}</TableBody>
        </Table>
      </div>
    </Card>
  );
}

function HeroSection() {
  return (
    <section id="top" className="hero-section page-section">
      <div className="hero-copy">
        <h1>Give your components a shared visual language.</h1>
        <p>Coordinated light and dark themes for Tailwind and shadcn. Explore the components, then take the tokens into your own project.</p>
        <div className="hero-actions">
          <Button asChild size="lg"><a href="#components">Explore components <ArrowIcon /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#install">Installation guide</a></Button>
        </div>
      </div>
      <HeroSpecimen />
    </section>
  );
}

const galleryTabs: Array<{ id: GalleryTab; label: string; icon: ReactNode }> = [
  { id: "form", label: "Form", icon: <FormIcon /> },
  { id: "card", label: "Card", icon: <LayersIcon /> },
  { id: "dialog", label: "Dialog", icon: <MessageIcon /> },
  { id: "table", label: "Table", icon: <TableIcon /> },
];

function FormGalleryDemo() {
  const [name, setName] = useState("Ada Lovelace");
  const [email, setEmail] = useState("ada@example.com");
  const [role, setRole] = useState("Developer");
  const [notifications, setNotifications] = useState(true);
  const [compact, setCompact] = useState(false);
  const [notice, setNotice] = useState("Ready for a local submit.");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setNotice("Enter a name and a valid email address.");
      return;
    }
    setNotice(`Submitted ${name.trim()} locally as ${role}.`);
  };

  const clear = () => {
    setName("");
    setEmail("");
    setRole("Developer");
    setNotifications(false);
    setCompact(false);
    setNotice("Form cleared locally.");
  };

  return (
    <form className="gallery-form-demo" aria-label="Gallery demo form" onSubmit={submit} noValidate>
      <div className="field-group"><Label htmlFor="gallery-name">Name</Label><Input id="gallery-name" value={name} onChange={(event) => setName(event.target.value)} /></div>
      <div className="field-group"><Label htmlFor="gallery-email">Email</Label><Input id="gallery-email" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={!email.includes("@")} /></div>
      <div className="field-group"><Label htmlFor="gallery-role">Role</Label><select id="gallery-role" className="native-select" value={role} onChange={(event) => setRole(event.target.value)}><option>Developer</option><option>Designer</option></select></div>
      <div className="field-group"><Label htmlFor="gallery-disabled">Disabled</Label><Input id="gallery-disabled" defaultValue="Not editable" disabled /></div>
      <div className="field-group"><Label htmlFor="gallery-error">Error</Label><Input id="gallery-error" defaultValue="invalid email" aria-invalid /></div>
      <div className="field-group"><Label htmlFor="gallery-focus">Focus</Label><Input id="gallery-focus" defaultValue="Focused input" /></div>
      <div className="gallery-form-options">
        <label className="check-row"><input type="checkbox" checked={notifications} onChange={(event) => setNotifications(event.target.checked)} /> Enable notifications</label>
        <label className="check-row"><input type="checkbox" checked={compact} onChange={(event) => setCompact(event.target.checked)} /> Use compact layout</label>
      </div>
      <div className="gallery-form-actions"><Button type="submit">Submit</Button><Button type="button" variant="outline" onClick={clear}>Clear</Button></div>
      <p className="form-message" role="status">{notice}</p>
    </form>
  );
}

function CardGalleryDemo() {
  return (
    <Card className="gallery-inner-card">
      <CardHeader><CardTitle>Project handoff</CardTitle><CardDescription>One set of roles, every surface in step.</CardDescription><CardAction><Button variant="outline" size="icon-sm" aria-label="More project options">•••</Button></CardAction></CardHeader>
      <CardContent><p className="body-note">Terminal Nova keeps primary actions, muted surfaces, and focus states readable in both modes.</p></CardContent>
      <CardFooter className="gallery-card-footer"><Button>Primary</Button><Button variant="outline">Secondary</Button></CardFooter>
    </Card>
  );
}

function DialogGalleryDemo() {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="dialog-demo">
      <Card className="gallery-inner-card compact-card"><CardHeader><CardTitle>Settings</CardTitle><CardDescription>Adjust theme options.</CardDescription></CardHeader><CardContent><p className="body-note">Open the real Radix dialog to change the preview mode.</p><Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button>Open settings</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Settings</DialogTitle><DialogDescription>These local controls demonstrate the dialog focus and close path.</DialogDescription></DialogHeader><div className="dialog-fields"><Label htmlFor="dialog-theme">Theme</Label><select id="dialog-theme" className="native-select" defaultValue="Terminal Nova"><option>Terminal Nova</option><option>Nebular</option></select><label className="check-row"><input type="checkbox" defaultChecked /> Use dark mode by default</label></div><DialogFooter><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><DialogClose asChild><Button onClick={() => setSaved(true)}>Save</Button></DialogClose></DialogFooter></DialogContent></Dialog>{saved ? <p className="form-message" role="status">Settings saved locally.</p> : null}</CardContent></Card>
    </div>
  );
}

function TableGalleryDemo() {
  const [selected, setSelected] = useState("terminal-nova");
  const rows = [{ id: "terminal-nova", name: "Terminal Nova", status: "Active" }, { id: "nebular", name: "Nebular", status: "Development" }, { id: "starlight", name: "Starlight", status: "Paired" }];
  const selectRow = (id: string) => setSelected(id);
  const keyboardSelect = (event: ReactKeyboardEvent<HTMLTableRowElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectRow(id);
    }
  };
  return (
    <div className="table-demo"><Table><TableCaption>Available profile consumers</TableCaption><TableHeader><TableRow><TableHead>Profile</TableHead><TableHead>Status</TableHead><TableHead>Mode</TableHead></TableRow></TableHeader><TableBody>{rows.map((row) => <TableRow key={row.id} data-state={selected === row.id ? "selected" : undefined} tabIndex={0} onClick={() => selectRow(row.id)} onKeyDown={(event) => keyboardSelect(event, row.id)}><TableCell>{row.name}</TableCell><TableCell>{row.status}</TableCell><TableCell>{selected === row.id ? "Selected" : "Available"}</TableCell></TableRow>)}</TableBody></Table></div>
  );
}

function SettingsPanel() {
  const [savedTheme, setSavedTheme] = useState("Terminal Nova");
  const [savedDarkMode, setSavedDarkMode] = useState(true);
  const [theme, setTheme] = useState(savedTheme);
  const [darkMode, setDarkMode] = useState(savedDarkMode);
  const [notice, setNotice] = useState<string | null>(null);

  const save = () => {
    setSavedTheme(theme);
    setSavedDarkMode(darkMode);
    setNotice("Settings saved locally.");
  };

  const discard = () => {
    setTheme(savedTheme);
    setDarkMode(savedDarkMode);
    setNotice("Changes discarded locally.");
  };

  return (
    <Card className="settings-card">
      <CardHeader><CardTitle>Settings</CardTitle><CardDescription>Adjust theme options.</CardDescription></CardHeader>
      <CardContent><Label htmlFor="settings-theme">Theme</Label><select id="settings-theme" className="native-select" value={theme} onChange={(event) => setTheme(event.target.value)}><option>Terminal Nova</option><option>Nebular</option></select><label className="check-row"><input type="checkbox" checked={darkMode} onChange={(event) => setDarkMode(event.target.checked)} /> Use dark mode by default</label>{notice ? <p className="form-message" role="status">{notice}</p> : null}</CardContent>
      <CardFooter className="settings-actions"><Dialog><DialogTrigger asChild><Button variant="outline">Cancel</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Discard local changes?</DialogTitle><DialogDescription>Your changes stay local to this specimen until you save them.</DialogDescription></DialogHeader><DialogFooter><DialogClose asChild><Button variant="outline">Close</Button></DialogClose><DialogClose asChild><Button onClick={discard}>Discard changes</Button></DialogClose></DialogFooter></DialogContent></Dialog><Button type="button" onClick={save}>Save</Button></CardFooter>
    </Card>
  );
}

function ComponentGallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("form");
  const demo = activeTab === "form" ? <FormGalleryDemo /> : activeTab === "card" ? <CardGalleryDemo /> : activeTab === "dialog" ? <DialogGalleryDemo /> : <TableGalleryDemo />;
  return (
    <section id="components" className="page-section gallery-section section-rule">
      <div className="section-heading"><h2>Components that feel like one system</h2><p>Practical examples using Tailwind and shadcn components, styled with Terminal Nova.</p></div>
      <div className="gallery-layout">
        <nav className="gallery-tabs" aria-label="Component examples">{galleryTabs.map((tab) => <button type="button" key={tab.id} className={activeTab === tab.id ? "active" : ""} aria-current={activeTab === tab.id ? "page" : undefined} onClick={() => setActiveTab(tab.id)}>{tab.icon}<span>{tab.label}</span></button>)}</nav>
        <Card className="gallery-stage"><CardContent>{demo}</CardContent></Card>
        <SettingsPanel />
      </div>
    </section>
  );
}

function FamilyFrame({ family, mode }: { family: AppearanceFamily; mode: ThemeMode }) {
  const familyLabel = family.label;
  return (
    <div className={`family-frame ${mode}`}>
      <div className="family-frame-heading"><strong>{familyLabel} — {mode === "light" ? "Light" : "Dark"}</strong><span>development preview</span></div>
      <iframe title={`${familyLabel} ${mode} component specimen`} src={specimenUrl(family.id, mode)} loading="lazy" />
    </div>
  );
}

function FamiliesSection({ families }: { families: AppearanceFamily[] }) {
  const [selectedFamily, setSelectedFamily] = useState<FamilyId>("terminal-nova");
  const activeFamily = families.find((family) => family.id === selectedFamily) ?? FALLBACK_FAMILIES[0];
  return (
    <section id="families" className="page-section families-section section-rule">
      <div className="section-heading"><h2>A family, in light and dark</h2><p>Coordinated themes for a consistent experience across light and dark mode.</p></div>
      <div className="families-layout">
        <aside className="family-selector" aria-label="Theme family selection">
          <h3>Families <span>(development previews)</span></h3>
          <div className="family-choice-list">{families.map((family) => <button type="button" key={family.id} className={selectedFamily === family.id ? "selected" : ""} aria-pressed={selectedFamily === family.id} onClick={() => setSelectedFamily(family.id)}><span className="radio-dot" aria-hidden="true" />{family.label}</button>)}</div>
          <p className="family-note">{activeFamily?.description} Development preview only. Gallery choices change only these previews.</p>
          <a className="profile-download" href={appearanceProfileUrl(activeFamily.id)} download>Download selected development-preview source profile JSON</a>
        </aside>
        <div className="family-specimens">
          <FamilyFrame family={activeFamily} mode="light" />
          <FamilyFrame family={activeFamily} mode="dark" />
          <p className="iframe-boundary-note">Development previews update with the selected family and mode; the parent page remains unchanged.</p>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({ families }: { families: AppearanceFamily[] }) {
  const [family, setFamily] = useState<FamilyId>("terminal-nova");
  const [mode, setMode] = useState<ThemeMode>("light");
  const [css, setCss] = useState<string | null>(null);
  const [stage, setStage] = useState<"profile" | "loading" | "generated" | "ready">("profile");
  const [copied, setCopied] = useState(false);
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const requestIdRef = useRef(0);
  const familyLabel = families.find((entry) => entry.id === family)?.label ?? "Terminal Nova";
  const code = useMemo(() => cssExcerpt(css, family, mode), [css, family, mode]);

  useEffect(() => () => {
    requestIdRef.current += 1;
  }, []);

  const generate = async () => {
    const requestId = ++requestIdRef.current;
    setCss(null);
    setStage("loading");
    const generated = await loadAppearanceCss(family);
    if (requestId !== requestIdRef.current) return;
    setCss(generated);
    setStage("generated");
  };

  const copyCode = async () => {
    setCopyNotice(null);
    setCopied(false);
    if (typeof navigator === "undefined" || !navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
      setCopyNotice("Clipboard unavailable; select the sample manually.");
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopyNotice("Copy failed; select the sample manually.");
    }
  };

  return (
    <section id="docs" className="page-section workflow-section section-rule">
      <div className="section-heading"><h2>From a generated example to your project</h2><p>Inspect a prepared family example, then copy or download its local assets.</p></div>
      <div className="workflow-layout">
        <div className="workflow-steps">
          <Card className={stage === "profile" ? "step-card current" : "step-card"}><CardContent><span className="step-number">1</span><h3>Choose a family example</h3><p>Select a prepared family and mode example; this preview does not edit profile data.</p><div className="workflow-controls"><Label htmlFor="workflow-family">Family</Label><select id="workflow-family" className="native-select" value={family} onChange={(event) => { requestIdRef.current += 1; setFamily(event.target.value as FamilyId); setCss(null); setStage("profile"); }}>{families.map((entry) => <option key={entry.id} value={entry.id}>{entry.label}</option>)}</select><Label htmlFor="workflow-mode">Mode</Label><select id="workflow-mode" className="native-select" value={mode} onChange={(event) => { requestIdRef.current += 1; setMode(event.target.value as ThemeMode); setCss(null); setStage("profile"); }}><option value="light">Light</option><option value="dark">Dark</option></select><a className="profile-download" href={appearanceProfileUrl(family)} download>Download development-preview source profile JSON</a></div></CardContent></Card>
          <Card className={stage !== "profile" ? "step-card current" : "step-card"}><CardContent><span className="step-number">2</span><h3>Load generated CSS example</h3><p>Load the prepared CSS example for the selected family and mode.</p><Button type="button" onClick={() => void generate()} disabled={stage === "loading"}>{stage === "loading" ? "Loading CSS example…" : "Load CSS example"}</Button>{stage === "generated" ? <p className="workflow-status">{css ? `${familyLabel} generated example loaded locally.` : `${familyLabel} generated CSS example is unavailable locally.`}</p> : null}</CardContent></Card>
          <Card className={stage === "ready" ? "step-card current" : "step-card"}><CardContent><span className="step-number">3</span><h3>Review locally</h3><p>Review the generated example in both modes.</p><Button type="button" variant="outline" onClick={() => setStage("ready")} disabled={stage !== "generated" || css === null}>Mark preview reviewed</Button>{stage === "ready" ? <p className="workflow-status">Local preview result recorded.</p> : null}</CardContent></Card>
        </div>
        <Card className="code-panel"><CardHeader><CardTitle>CSS (generated example)</CardTitle><CardAction><Button type="button" variant="ghost" size="sm" onClick={() => void copyCode()}>{copied ? "Copied" : "Copy"}</Button></CardAction></CardHeader><CardContent><pre><code>{code}</code></pre>{copyNotice ? <p className="workflow-status" role="status">{copyNotice}</p> : null}</CardContent></Card>
      </div>
    </section>
  );
}

function InstallSection() {
  const [copied, setCopied] = useState(false);
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const code = `@import "tailwindcss";\n@import "@knowledge-forge-ai/shadcn-theme-terminal-nova/styles/theme.css";`;
  const copy = async () => {
    setCopyNotice(null);
    setCopied(false);
    if (typeof navigator === "undefined" || !navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
      setCopyNotice("Clipboard unavailable; select the sample manually.");
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopyNotice("Copy failed; select the sample manually.");
    }
  };
  return (
    <section id="install" className="page-section install-section section-rule">
      <div className="section-heading"><h2>Install and make it yours</h2><p>Add the theme to your Tailwind and shadcn project, then tailor it to your needs.</p></div>
      <div className="install-layout">
        <ol className="install-list"><li><span>1</span><p>Set up Tailwind and shadcn in your project.</p></li><li><span>2</span><p>Install the published package: <code>npm install @knowledge-forge-ai/shadcn-theme-terminal-nova@0.2.0</code>.</p></li><li><span>3</span><p>Import the Terminal Nova theme CSS.</p></li><li><span>4</span><p>Use the components and extend the tokens as needed.</p></li></ol>
        <Card className="code-panel install-code"><CardHeader><CardTitle>Example (app.css)</CardTitle><CardAction><Button type="button" variant="ghost" size="sm" onClick={() => void copy()}>{copied ? "Copied" : "Copy"}</Button></CardAction></CardHeader><CardContent><pre><code>{code}</code></pre>{copyNotice ? <p className="workflow-status" role="status">{copyNotice}</p> : null}</CardContent></Card>
      </div>
    </section>
  );
}

function MobileInset() {
  return (
    <section className="mobile-inset-section" aria-label="Mobile navigation and component specimen">
      <div className="mobile-inset-copy"><span className="mobile-symbol" aria-hidden="true">⌕</span><h2>Mobile (navigation and component specimen)</h2><p>A responsive look at the navigation and core component on a mobile device.</p></div>
      <div className="mobile-phone" role="img" aria-label="Static mobile component illustration"><div className="mobile-phone-header"><strong>Terminal Nova</strong><span aria-hidden="true">≡</span></div><h3>Give your components a shared visual language.</h3><p>Coordinated light and dark themes for Tailwind and shadcn.</p><span className="mobile-phone-button">Explore components</span><span className="mobile-phone-label">Email</span><span className="mobile-phone-field">ada@example.com</span><span className="mobile-phone-field">Developer</span><span className="mobile-phone-button">Save changes</span></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer"><div className="footer-brand">Terminal Nova</div><nav aria-label="Footer links"><a href="https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova" target="_blank" rel="noreferrer">Source</a><a href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">Docs</a><a href="https://github.com/Knowledge-Forge-AI/shadcn-theme-terminal-nova/blob/main/LICENSE" target="_blank" rel="noreferrer">License</a><a href="https://github.com/shadcn-ui/ui/blob/d549251bab2e57dbf72f7c909d6458c02c43f529/LICENSE.md" target="_blank" rel="noreferrer">shadcn attribution</a><a href="https://github.com/Knowledge-Forge-AI" target="_blank" rel="noreferrer">Theme Forge</a></nav><span className="footer-divider" aria-hidden="true" /><p>Software and identity artwork have separate terms.</p></footer>
  );
}

export function App() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const resolvedTheme = useResolvedTheme(preference);
  const families = useAppearanceCatalog();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.dataset.theme = resolvedTheme;
  }, [resolvedTheme]);

  return (
    <div className="site-shell">
      <Header preference={preference} onPreferenceChange={setPreference} />
      <main>
        <HeroSection />
        <section className="project-mascot" aria-labelledby="mascot-heading">
  <figure><img src="/orihime.webp" alt="Orihime, a plum-haired celestial weaver in a lilac kimono-inspired dress, holding a golden shuttle and threads of starlight." width="1024" height="1536" loading="lazy" decoding="async" /><figcaption>Orihime · Theme Forge</figcaption></figure>
  <div className="mascot-copy"><p className="mascot-eyebrow">Celestial weaver · Theme Forge</p><h2 id="mascot-heading">A shared thread, a distinct expression.</h2><p>Orihime is Theme Forge’s celestial weaver. Across the family, shared design intent becomes a different expression in each component system.</p></div>
</section>
        <ComponentGallery />
        <FamiliesSection families={families} />
        <WorkflowSection families={families} />
        <InstallSection />
      </main>
      <MobileInset />
      <Footer />
    </div>
  );
}
