"use client";

const TOTAL_PAGES = 2;
const REPORT_DATE = "30.06.2026";

// Zeiterfassung aus 351 Commits (Nicht-Merge) ab Beauftragung 30.03. Sessions getrennt bei >90 Min Pause.
// [Datum, Tag, Tätigkeit, Commits, Stunden]
type SheetRow = [string, string, string, number, number];
const SHEET_A: SheetRow[] = [
  ["02.04.", "Do", "Projekt-Setup, Tests", 1, 1.0],
  ["03.04.", "Fr", "Light-Theme, Dashboard", 11, 3.0],
  ["04.04.", "Sa", "Voice-Auswahl, PDF-Export", 18, 5.0],
  ["08.04.", "Mi", "Auswertung, Transkript", 4, 2.0],
  ["14.04.", "Di", "Admin-Statistik, DSGVO", 5, 2.5],
  ["15.04.", "Mi", "Self-Host-Bootstrap", 9, 3.5],
  ["16.04.", "Do", "Hetzner-Deployment", 19, 5.0],
  ["17.04.", "Fr", "LiveKit-/Kong-Update", 2, 1.0],
  ["19.04.", "So", "Landingpage-Redesign", 25, 7.5],
  ["20.04.", "Mo", "Scoring & Voice-Zuordnung", 64, 3.0],
  ["29.04.", "Mi", "Security-Härtung", 2, 1.0],
  ["12.05.", "Di", "Nitzschke-Rebrand, LLM", 2, 1.5],
  ["13.05.", "Mi", "Setup-Screen, TURN/ICE", 1, 1.0],
  ["15.05.", "Fr", "Branding & Design-System", 3, 2.5],
  ["17.05.", "So", "Charakter-Video, Modus", 3, 1.0],
  ["18.05.", "Mo", "Bild-Upload, Briefing", 3, 2.5],
  ["19.05.", "Di", "Bild-Upload, LLM-Debug", 1, 1.0],
  ["28.05.", "Do", "Prio-1 Kundenfeedback", 1, 1.0],
  ["29.05.", "Fr", "Szenario-Varianten, Personas", 4, 1.5],
];
const SHEET_B: SheetRow[] = [
  ["03.06.", "Mi", "Kompetenzfelder, Trump-Case", 18, 3.5],
  ["04.06.", "Do", "Backend-Lock, Logo", 20, 4.5],
  ["05.06.", "Fr", "Auswertung v2 (Spinnennetz)", 4, 3.0],
  ["06.06.", "Sa", "LLM-Self-Play", 1, 1.0],
  ["08.06.", "Mo", "Login-Final, Agent-Tuning", 34, 10.5],
  ["09.06.", "Di", "TURN/TLS-Relay", 22, 7.5],
  ["10.06.", "Mi", "Invite ohne Daten, Format", 6, 2.0],
  ["11.06.", "Do", "FallbackAdapter, Reconnect", 2, 1.0],
  ["12.06.", "Fr", "Nutzer-ID, LiveKit-Update", 3, 1.5],
  ["13.06.", "Sa", "Label „Nutzer-ID“", 1, 1.0],
  ["14.06.", "So", "Nachbesprechung-Auswertung", 27, 7.0],
  ["15.06.", "Mo", "Szenario-Ende-Marker", 1, 1.0],
  ["16.06.", "Di", "Übung-2-Auswertung, Prompts", 10, 7.0],
  ["17.06.", "Mi", "Charakter-Prompts & Porträts", 3, 2.0],
  ["18.06.", "Do", "Einstiegs-Prompts", 1, 1.0],
  ["19.06.", "Fr", "Trainingsmodus-Labels", 1, 1.0],
  ["23.06.", "Di", "Mandanten-API, Fehler-Handling", 8, 2.5],
  ["24.06.", "Mi", "Karten-Editor, Mandantenfilter", 7, 2.0],
  ["26.06.", "Fr", "Mandanten-Picker, 3-Stufen-Rechte", 4, 1.5],
];

function SheetTable({ rows, subLabel, subHours }: { rows: SheetRow[]; subLabel: string; subHours: number }) {
  return (
    <table className="sheet">
      <thead>
        <tr><th>Datum</th><th>Tag</th><th>Tätigkeit</th><th className="r">Std</th></tr>
      </thead>
      <tbody>
        {rows.map(([d, wd, win, , h]) => {
          const we = wd === "Sa" || wd === "So";
          return (
            <tr key={d}>
              <td>{d}</td>
              <td className={we ? "we" : ""}>{wd}</td>
              <td>{win}</td>
              <td className="r">{h.toLocaleString("de-DE", { minimumFractionDigits: 1 })}</td>
            </tr>
          );
        })}
        <tr className="sub"><td colSpan={3}>{subLabel}</td><td className="r">{subHours.toLocaleString("de-DE", { minimumFractionDigits: 1 })}</td></tr>
      </tbody>
    </table>
  );
}

function Brand() {
  return (
    <div className="brand">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/codana-logo.webp" alt="codana" />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="page-header">
      <Brand />
      <div>Projektbericht · KI-Gesprächspartner · Nitzschke · {REPORT_DATE}</div>
    </div>
  );
}

function PageFooter({ page }: { page: number }) {
  return (
    <div className="page-footer">
      <span>Vertraulich · Codana GmbH</span>
      <span>Seite {String(page).padStart(2, "0")} / {String(TOTAL_PAGES).padStart(2, "0")}</span>
    </div>
  );
}

const TASKS: [string, string[]][] = [
  ["Kernplattform", [
    "Next.js-Projektsetup & Deployment-Pipeline",
    "Login / Registrierung mit Invite-Code",
    "Nutzer- und Admin-Rollentrennung",
    "Szenario-Auswahl & Briefing-Screen",
    "Avatar-Bilder & Text-Fallback",
    "Kompetenzfelder Kommunikation & Typen",
    "Szenario-Karten-Editor im Admin",
    "\"How to\"-Menü & Onboarding-Text",
    "Donald Trump als Featured Case",
    "Impressum-Seite",
  ]],
  ["KI & Voice", [
    "LiveKit-Integration (WebRTC)",
    "ElevenLabs TTS-Anbindung",
    "Python-Agent als Proxy-Backend",
    "LLM-Persona & Prompt-Verwaltung",
    "Charakter-Prompts (Sandra, Typen, Trump)",
    "Dialog-Modus C (Lisa Müller)",
    "LLM-Self-Play für Prompt-Tests",
    "10-Minuten-Timer (server-autoritär)",
    "30-Sekunden-Vorwarnung & Hard Stop",
    "Auto-Redirect nach Session-Ende",
  ]],
  ["Auswertung", [
    "LLM-Webhook nach Session-Ende",
    "9-Kategorien-Spinnennetz-Diagramm",
    "Scorecard-Ansicht",
    "3 Auswertungsmodi (Übung 1/2/C)",
    "PDF-Export der Auswertung",
    "Admin: Alle Auswertungen einsehen",
    "Auswertungs-Protokoll (Mark Format)",
  ]],
  ["Admin & Daten", [
    "Session-Übersicht & Filter",
    "Nutzerverwaltung (anlegen / löschen)",
    "Turn-Threshold-Konfiguration",
    "Base-Prompt-Editor",
    "Admin-Debug-Panel live",
    "Supabase Datenmodell & Migrationen",
    "GDPR-konformes Logging",
  ]],
  ["Infrastruktur", [
    "Hetzner VPS Setup",
    "Docker-Compose Stack",
    "Auto-Deploy aus master (Cron)",
    "Staging-Server staging.nitzschke.ai",
    "Auto-Deploy aus development-Branch",
    "TURN/TLS-Relay auf Port 443",
    "Relay-Reconnect & FallbackAdapter",
    "Verbindungsdiagnose-Seite (öffentlich)",
    "Loki/Grafana-Monitoring",
    "Structured Logs mit Correlation IDs",
  ]],
  ["Datenschutz", [
    "Nutzer-ID statt E-Mail-Pflicht",
    "Einladungscode ohne persönliche Daten",
    "API-Keys ausschließlich serverseitig",
    "Privacy by Design (kein PII im Log)",
  ]],
];

export default function Page() {
  return (
    <>
      <div className="download-bar">
        <button className="download-btn" onClick={() => window.print()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Als PDF speichern
        </button>
      </div>

      <div className="doc">

        {/* ===== PAGE 1 · ALLE TASKS ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">01</span>Alle umgesetzten Aufgaben</h2>

            <div className="task-grid">
              {TASKS.map(([group, items]) => (
                <div key={group} className="task-group">
                  <div className="task-group-label">{group}</div>
                  {items.map(item => (
                    <div key={item} className="task-item">✓ {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <PageFooter page={1} />
        </div>

        {/* ===== PAGE 2 · ZEITERFASSUNG (DETAIL) ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: 20 }}><span className="num">02</span>Zeiterfassung · Detail</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
              <SheetTable rows={SHEET_A} subLabel="Zwischensumme April – Mai" subHours={46.5} />
              <SheetTable rows={SHEET_B} subLabel="Zwischensumme Juni" subHours={60.5} />
            </div>

            <h3 style={{ marginTop: 28 }}>Abrechnung <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 400 }}>· Stundensatz 118,75 € netto</span></h3>
            <table style={{ marginTop: 8 }}>
              <thead>
                <tr><th>Leistung</th><th style={{ textAlign: "right" }}>h</th><th style={{ textAlign: "right" }}>€ netto</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bereits bezahlt <span style={{ fontSize: 11, color: "var(--muted)" }}>· Schlussrechnung RE6118</span></td>
                  <td style={{ textAlign: "right" }}>95,0</td>
                  <td style={{ textAlign: "right" }}>11.281,25</td>
                </tr>
                <tr>
                  <td>Mandantensystem</td>
                  <td style={{ textAlign: "right" }}>6,0</td>
                  <td style={{ textAlign: "right" }}>712,50</td>
                </tr>
                <tr>
                  <td>Zusätzliche Anpassungen</td>
                  <td style={{ textAlign: "right" }}>6,0</td>
                  <td style={{ textAlign: "right" }}>712,50</td>
                </tr>
                <tr style={{ background: "var(--red-soft)" }}>
                  <td><strong>Gesamt</strong></td>
                  <td style={{ textAlign: "right" }}><strong>107,0</strong></td>
                  <td style={{ textAlign: "right" }}><strong>12.706,25</strong></td>
                </tr>
              </tbody>
            </table>

            <div className="invest-hero" style={{ marginTop: 16, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ textAlign: "left" }}>
                  <div className="invest-label" style={{ marginBottom: 4 }}>Erfasste Entwicklungszeit gesamt</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>95 h bezahlt + 12 h zusätzlich · 12.706,25 € netto</div>
                </div>
                <div style={{ fontFamily: "var(--font-inter-tight)", fontSize: 40, fontWeight: 700, letterSpacing: "-.025em" }}>107,0 h</div>
              </div>
            </div>
          </div>
          <PageFooter page={2} />
        </div>

      </div>
    </>
  );
}
