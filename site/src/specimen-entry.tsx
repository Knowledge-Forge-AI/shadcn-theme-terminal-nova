import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpecimenApp } from "@/specimen-main";
import "@/specimen.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpecimenApp />
  </StrictMode>,
);
