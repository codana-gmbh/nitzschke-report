"use client";

const TOTAL_PAGES = 3;
const REPORT_DATE = "30.06.2026";

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
    "MAI-Voice-2 als Fallback-Anbieter",
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
    "CSV / JSON-Export",
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

        {/* ===== PAGE 1 · COVER ===== */}
        <div className="page cover">
          <div className="page-header cover-top">
            <Brand />
            <div>Projektabschlussbericht</div>
          </div>
          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 20 }}>
              Nitzschke · Vertraulich
            </div>
            <h1 className="cover-title">
              KI-Gesprächspartner<br />
              für <span>modernes</span><br />
              Kompetenztraining.
            </h1>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, fontSize: 13 }}>
              {[
                ["Auftraggeber", "Nitzschke GmbH"],
                ["Erstellt von", "Codana GmbH"],
                ["Angebot", "AG5930 · 20.03.2026"],
                ["Projektstart", "März 2026"],
                ["Abnahme", "26.06.2026"],
                ["Status", "✅ Live · nitzschke.ai"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ color: "var(--muted)", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontWeight: 600 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <PageFooter page={1} />
        </div>

        {/* ===== PAGE 2 · ALLE TASKS ===== */}
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
          <PageFooter page={2} />
        </div>

        {/* ===== PAGE 3 · ANGEBOT / EXTRAS / ABNAHME ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

              {/* LEFT: Freigegebenes Budget */}
              <div>
                <h2><span className="num">02</span>Freigegebenes Budget</h2>
                <table style={{ marginBottom: 16 }}>
                  <thead>
                    <tr><th>Pos.</th><th>Leistung</th><th style={{ textAlign: "right" }}>h</th><th style={{ textAlign: "right" }}>€ netto</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Konzeption &amp; Architektur</td><td style={{ textAlign: "right" }}>12</td><td style={{ textAlign: "right" }}>1.425</td></tr>
                    <tr><td>2</td><td>Web App (Next.js)</td><td style={{ textAlign: "right" }}>44</td><td style={{ textAlign: "right" }}>5.225</td></tr>
                    <tr><td>3</td><td>Backend API &amp; Datenhaltung</td><td style={{ textAlign: "right" }}>33</td><td style={{ textAlign: "right" }}>3.919</td></tr>
                    <tr><td>4</td><td>Deployment &amp; QS</td><td style={{ textAlign: "right" }}>6</td><td style={{ textAlign: "right" }}>713</td></tr>
                    <tr><td>5</td><td>ConvAI / LiveKit</td><td style={{ textAlign: "right" }}>24</td><td style={{ textAlign: "right" }}>2.850</td></tr>
                    <tr style={{ background: "var(--paper-2)" }}>
                      <td></td><td>Angebot AG5930</td>
                      <td style={{ textAlign: "right" }}>119</td>
                      <td style={{ textAlign: "right" }}>14.131</td>
                    </tr>
                    <tr><td>+</td><td>Mandantensystem (freigegeben)</td><td style={{ textAlign: "right" }}>6</td><td style={{ textAlign: "right" }}>713</td></tr>
                    <tr style={{ background: "var(--red-soft)" }}>
                      <td></td><td><strong>Umgesetzt &amp; freigegeben</strong></td>
                      <td style={{ textAlign: "right" }}><strong>125</strong></td>
                      <td style={{ textAlign: "right" }}><strong>14.844</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h3 style={{ marginTop: 4 }}>Freigegeben · noch offen</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>3D-Avatare <span style={{ fontSize: 10, color: "var(--muted)" }}>(optionales Angebot)</span></td>
                      <td style={{ textAlign: "right" }}><span className="badge red-soft">noch nicht umgesetzt</span></td>
                    </tr>
                  </tbody>
                </table>

                <p style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.6, marginTop: 10 }}>
                  Freigegeben durch den Kunden: Gesamtangebot AG5930 zzgl. Mandantensystem (6 h). Das optionale Angebot „3D-Avatare" ist ebenfalls freigegeben, aber noch nicht umgesetzt. Alle weiteren auf dieser Seite gelisteten Leistungen wurden ohne Aufpreis umgesetzt.
                </p>
              </div>

              {/* RIGHT: Ohne Aufpreis + Abnahme */}
              <div>
                <h2><span className="num">03</span>Ohne Aufpreis umgesetzt</h2>
                <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>Folgende Aufgaben wurden zusätzlich unter der Haube erledigt — nicht in Rechnung gestellt.</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, lineHeight: 1.8 }}>
                  {[
                    "Nutzer-ID statt E-Mail (Datenschutz)",
                    "TURN/TLS-Relay (Firewall-tauglich)",
                    "Loki/Grafana-Monitoring",
                    "Staging-Server (staging.nitzschke.ai)",
                    "Einladungscode-Flow ohne E-Mail",
                    "LLM-Self-Play für interne Prompt-Tests",
                    "Admin-Debug-Panel (Live-Sessions)",
                    "MAI-Voice-2 als Fallback-TTS",
                    "Relay-Reconnect & FallbackAdapter",
                    "Verbindungsdiagnose-Seite (öffentlich)",
                  ].map(i => <li key={i}>✓ {i}</li>)}
                </ul>

                <div className="note good" style={{ marginTop: 24 }}>
                  <strong>Projektabnahme · Theodor Schalagin · 26.06.2026</strong><br />
                  <span style={{ fontStyle: "italic", fontSize: 12 }}>„wir haben alles getestet, sieht soweit ganz gut aus. Du kannst die Version gerne in die Produktion bringen."</span>
                </div>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)", fontSize: 11, color: "var(--muted)", lineHeight: 1.8 }}>
                  122 Pull Requests · März – Juni 2026<br />
                  Live: nitzschke.ai · Staging: staging.nitzschke.ai
                </div>
              </div>
            </div>

          </div>
          <PageFooter page={3} />
        </div>

      </div>
    </>
  );
}
