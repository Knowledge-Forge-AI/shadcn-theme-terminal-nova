import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { appearanceCssUrl, FALLBACK_FAMILIES, FAMILY_IDS, type FamilyId, type ThemeMode } from "@/catalog";

function queryValue<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  const value = new URLSearchParams(window.location.search).get(key);
  return value && allowed.includes(value as T) ? value as T : fallback;
}

function SpecimenApp() {
  const family = queryValue<FamilyId>("family", FAMILY_IDS, "terminal-nova");
  const mode = queryValue<ThemeMode>("mode", ["light", "dark"], "light");
  const [selected, setSelected] = useState("Theme Forge");
  const [saved, setSaved] = useState(false);
  const familyLabel = FALLBACK_FAMILIES.find((entry) => entry.id === family)?.label ?? "Terminal Nova";

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.family = family;
    root.dataset.theme = mode;
    root.classList.toggle("dark", mode === "dark");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.dataset.cttnAppearance = family;
    link.href = appearanceCssUrl(family);
    document.head.append(link);
    return () => link.remove();
  }, [family, mode]);

  const rows = useMemo(() => [
    { name: "Theme Forge", status: "Active" },
    { name: "Terminal Nova", status: "Draft" },
    { name: "Nebular", status: "Active" },
  ], []);

  return (
    <main className="specimen-shell">
      <header className="specimen-header"><strong>{familyLabel}</strong><span>{mode === "dark" ? "Dark" : "Light"} specimen</span></header>
      <Card className="specimen-card">
          <CardHeader><CardTitle>Project</CardTitle><CardDescription>A themed card with actions.</CardDescription><CardAction><Dialog><DialogTrigger asChild><Button variant="outline" size="icon-sm" aria-label="Open project settings">•••</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Project settings</DialogTitle><DialogDescription>Local component specimen dialog.</DialogDescription></DialogHeader><Label htmlFor="specimen-project">Project name</Label><Input id="specimen-project" defaultValue={familyLabel} /><DialogFooter><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><DialogClose asChild><Button onClick={() => setSaved(true)}>Save</Button></DialogClose></DialogFooter></DialogContent></Dialog></CardAction></CardHeader>
        <CardContent>
          <div className="specimen-form"><Label htmlFor="specimen-name">Name</Label><Input id="specimen-name" defaultValue="Ada Lovelace" /><Label htmlFor="specimen-email">Email</Label><Input id="specimen-email" defaultValue="ada@example.com" /><Label htmlFor="specimen-role">Role</Label><select id="specimen-role" className="specimen-select" defaultValue="Developer"><option>Developer</option><option>Designer</option></select></div>
          <Table><TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>{rows.map((row) => <TableRow key={row.name} data-state={selected === row.name ? "selected" : undefined} onClick={() => setSelected(row.name)}><TableCell>{row.name}</TableCell><TableCell>{row.status}</TableCell></TableRow>)}</TableBody></Table>
        </CardContent>
        <CardFooter><Button>Primary</Button><Button variant="outline">Secondary</Button></CardFooter>
      </Card>
      {saved ? <p className="specimen-note" role="status">Project settings saved locally.</p> : null}
      <p className="specimen-note">Development preview for the selected family and mode.</p>
    </main>
  );
}

export { SpecimenApp };
