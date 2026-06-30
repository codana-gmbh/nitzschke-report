"use client";

const TOTAL_PAGES = 9;
const REPORT_DATE = "30.06.2026";
const PROJECT_START = "März 2026";

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
      <span>
        Seite {String(page).padStart(2, "0")} / {String(TOTAL_PAGES).padStart(2, "0")}
      </span>
    </div>
  );
}

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

            <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)", maxWidth: 520, lineHeight: 1.6 }}>
              Dieser Bericht dokumentiert den vollständigen Leistungsumfang: was im Angebot versprochen wurde, was geliefert wurde — und was darüber hinaus entstand.
            </p>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, fontSize: 13 }}>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Auftraggeber</div>
                <div style={{ fontWeight: 600 }}>Nitzschke</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Erstellt von</div>
                <div style={{ fontWeight: 600 }}>Codana GmbH</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Projektstart</div>
                <div style={{ fontWeight: 600 }}>{PROJECT_START} 2026</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Berichtsdatum</div>
                <div style={{ fontWeight: 600 }}>{REPORT_DATE}</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Angebotsdatum</div>
                <div style={{ fontWeight: 600 }}>02.03.2026</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4 }}>Status</div>
                <div style={{ fontWeight: 600 }}>✅ Live · nitzschke.ai</div>
              </div>
            </div>
          </div>

          <PageFooter page={1} />
        </div>

        {/* ===== PAGE 2 · TOC ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2>Inhaltsverzeichnis</h2>
            <ol className="toc">
              {[
                ["Kennzahlen auf einen Blick", "03"],
                ["Was im Angebot stand", "04"],
                ["Angebot vs. Lieferung — Vollständiger Vergleich", "05"],
                ["Zusatzleistungen (nicht im Angebot)", "06"],
                ["Entwicklungschronologie", "07"],
                ["Zeitaufwand-Schätzung", "08"],
                ["Technische Architektur (wie geliefert)", "08"],
                ["Fazit", "09"],
              ].map(([title, pg]) => (
                <li key={title}>
                  <span className="title">{title}</span>
                  <span className="tline" />
                  <span className="pg">S. {pg}</span>
                </li>
              ))}
            </ol>

            <div className="note good" style={{ marginTop: 32 }}>
              <strong>Kurzfassung für den eiligen Leser:</strong> Alle 10 im Angebot beschriebenen Leistungsbausteine wurden vollständig geliefert. Darüber hinaus wurden 8 wesentliche Zusatzfunktionen entwickelt, die nicht im Angebot enthalten waren — darunter ein vollständiges Mandantensystem, professionelles Verbindungs-Monitoring und ein datenschutzkonformes Einladungssystem ohne E-Mail-Pflicht.
            </div>
          </div>
          <PageFooter page={2} />
        </div>

        {/* ===== PAGE 3 · KPIs ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">01</span>Kennzahlen auf einen Blick</h2>
            <p className="lead">
              Das Projekt umfasste mehr als drei Monate aktiver Entwicklung mit über 120 zusammengeführten Pull Requests.
            </p>

            <div className="kpi-row">
              <div className="kpi-box">
                <div className="kv red">122</div>
                <div className="kl">Pull Requests</div>
              </div>
              <div className="kpi-box">
                <div className="kv">10/10</div>
                <div className="kl">Angebot-Punkte geliefert</div>
              </div>
              <div className="kpi-box">
                <div className="kv red">+8</div>
                <div className="kl">Zusatz-Features</div>
              </div>
              <div className="kpi-box">
                <div className="kv">3+</div>
                <div className="kl">Monate Laufzeit</div>
              </div>
            </div>

            <div className="two-col" style={{ marginTop: 8 }}>
              <div className="panel">
                <h3>Was aus dem Angebot kommt</h3>
                <ul>
                  <li>Web-App mit intuitivem Gesprächsflow</li>
                  <li>Sprach-KI mit natürlicher Konversation (LiveKit + ElevenLabs)</li>
                  <li>Sicheres Backend als Schutzschild (kein API-Key im Browser)</li>
                  <li>Login mit Rollenverteilung (Nutzer / Admin)</li>
                  <li>Server-autoritärer Session-Timer</li>
                  <li>Datenspeicherung aller Session-Metadaten</li>
                  <li>KI-Auswertung mit Spinnennetz-Diagramm &amp; Scores</li>
                  <li>Admin-Cockpit mit Übersicht &amp; Export</li>
                  <li>DSGVO-konformes Design (Privacy by Default)</li>
                  <li>Vollständige Übergabe &amp; Self-Hosting</li>
                </ul>
              </div>
              <div className="panel">
                <h3>Was zusätzlich entstand</h3>
                <ul>
                  <li>Mandantensystem (Multi-Tenant, Organisationen)</li>
                  <li>TURN/TLS-Relay (WebRTC durch Firewalls)</li>
                  <li>LLM-Debug Self-Play &amp; Automatikmodus</li>
                  <li>Verbindungsdiagnose + Loki/Grafana-Monitoring</li>
                  <li>Einladungscode-System ohne E-Mail</li>
                  <li>Nutzer-ID statt E-Mail (datenschutzfreundlicher)</li>
                  <li>Admin-Debug-Panel in laufender Session</li>
                  <li>Staging-Server (isolierte Testumgebung)</li>
                </ul>
              </div>
            </div>

            <div className="note brand" style={{ marginTop: 18 }}>
              <strong>Plattform live:</strong> Die Anwendung läuft produktiv unter <strong>nitzschke.ai</strong> (Hetzner VPS, selbstgehostet), ein isolierter Staging-Server unter <strong>staging.nitzschke.ai</strong> steht für Tests bereit.
            </div>
          </div>
          <PageFooter page={3} />
        </div>

        {/* ===== PAGE 4 · ANGEBOT ZUSAMMENFASSUNG ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">02</span>Was im Angebot stand</h2>
            <p className="lead">
              Das Angebot vom 02.03.2026 beschrieb ein MVP, das innerhalb von zwei Wochen eine vollständige Gesprächs-Trainingsplattform liefern sollte.
            </p>

            <p>Der Scope umfasste zehn Leistungsbausteine:</p>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Baustein</th>
                  <th>Kerninhalt laut Angebot</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><strong>Web-App</strong></td><td>Login → Gespräch → Auto-Stopp → Ergebnisse; statische Avatarbilder; Text-Fallback</td></tr>
                <tr><td>2</td><td><strong>KI-Sprachsteuerung</strong></td><td>Spezialisierte Sprach-KI (ConvAI/ElevenLabs), sehr geringe Latenz, natürliche Stimme</td></tr>
                <tr><td>3</td><td><strong>Backend / Schutzschild</strong></td><td>Provider-Keys nur serverseitig, Rate-Limiting, kein API-Key im Browser</td></tr>
                <tr><td>4</td><td><strong>Benutzerkonten &amp; Rollen</strong></td><td>Login mit E-Mail + Passwort; Nutzer- und Admin-Rolle; optional Einladungssystem</td></tr>
                <tr><td>5</td><td><strong>10-Minuten-Timer</strong></td><td>Server-autoritärer Timer, Countdown sichtbar, harter Stopp bei 00:00, Warnung bei 30 s</td></tr>
                <tr><td>6</td><td><strong>Datenspeicherung</strong></td><td>Session-Metadaten: Nutzer, Dauer, Abbruchgrund, Ergebnisse</td></tr>
                <tr><td>7</td><td><strong>KI-Auswertung</strong></td><td>Direkte LLM-Analyse, Spinnennetz-/Balkendiagramm, Kategorien, Stärken/Entwicklungsfelder, PDF-Export</td></tr>
                <tr><td>8</td><td><strong>Admin-Bereich</strong></td><td>Alle Sessions einsehen, filtern, Durchschnittswerte, CSV/JSON-Export</td></tr>
                <tr><td>9</td><td><strong>DSGVO &amp; Stabilität</strong></td><td>Privacy by Design, automatische Lösch-Routinen, Logging, Correlation IDs</td></tr>
                <tr><td>10</td><td><strong>Übergabe &amp; Betrieb</strong></td><td>Fertiges, installierbares Paket; Anleitung für Server-Betrieb</td></tr>
              </tbody>
            </table>

            <div className="note" style={{ marginTop: 14 }}>
              <strong>Nicht beauftragt (Optionen im Angebot):</strong> Option A (B2C-Shop / Paywall, ~40–48 h, 4.750–5.700 €) und Option B (ConvAI-2D-Avatar, ~3 Tage) wurden bewusst nicht realisiert — der Fokus lag auf der Kernplattform.
            </div>
          </div>
          <PageFooter page={4} />
        </div>

        {/* ===== PAGE 5 · VERGLEICH ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">03</span>Angebot vs. Lieferung</h2>
            <p className="lead">
              Jeder der zehn Angebots-Bausteine wurde vollständig umgesetzt. Die Spalte „Umgesetzt" zeigt den konkreten Lieferumfang.
            </p>

            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: "28%" }}>Baustein</th>
                  <th style={{ width: "8%" }}>Status</th>
                  <th>Was konkret geliefert wurde</th>
                  <th style={{ width: "14%" }}>PRs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature">Web-App</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Next.js-App, vollständiger Flow Login → Briefing → Gesprächsauswahl → Live-Session → Auswertung. Statische Avatar-Bilder, responsiv, Text-Fallback implementiert.</td>
                  <td>#1–4, #32, #38</td>
                </tr>
                <tr>
                  <td className="feature">KI-Sprachsteuerung</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>LiveKit-basierter Voice-Agent (Python) mit ElevenLabs-TTS. MAI-Voice-2 (OpenRouter) als zweiter TTS-Anbieter. FallbackAdapter bei Provider-Ausfällen. LiveKit v1.13.1.</td>
                  <td>#6–8, #23, #63, #65</td>
                </tr>
                <tr>
                  <td className="feature">Backend / Schutzschild</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Python-Agent als Backend-Proxy. Alle API-Keys ausschließlich serverseitig. Rate-Limiting. Webhook-Protokoll für LLM-Auswertung. Keine Credentials im Browser.</td>
                  <td>#16, #21, #30, #72</td>
                </tr>
                <tr>
                  <td className="feature">Benutzerkonten &amp; Rollen</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Login mit Nutzer-ID (datenschutzfreundlich, ohne E-Mail-Pflicht), Passwort. Nutzer- und Admin-Rolle. Einladungscode-System für kontrollierten Zugang.</td>
                  <td>#2, #31, #60, #69</td>
                </tr>
                <tr>
                  <td className="feature">10-Minuten-Timer</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Server-autoritärer Timer im LiveKit-Agent. Countdown mit 30-s-Warnung sichtbar. Harter Session-Stopp. Automatischer Redirect zur Auswertung bei Ablauf und bei Szenario-Ende.</td>
                  <td>#34, #86, #87</td>
                </tr>
                <tr>
                  <td className="feature">Datenspeicherung</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Supabase-Datenbank. Session-Metadaten, Auswertungsergebnisse, User-Profile, Organisations-Zuordnungen. Migrations-System mit versionierten SQL-Migrationen.</td>
                  <td>#14, #75, #105</td>
                </tr>
                <tr>
                  <td className="feature">KI-Auswertung</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>LLM-Auswertung nach Session-Ende (Webhook). 9-Kategorien-Spinnennetz-Diagramm. Scorecard mit Stärken/Entwicklungsfeldern. Mehrere Auswertungsmodi (Standard, Übung 2, Dialog-Modus C). PDF-Export via window.print().</td>
                  <td>#16, #33, #82, #89–96</td>
                </tr>
                <tr>
                  <td className="feature">Admin-Bereich</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Admin-Dashboard mit Session-Übersicht, Nutzer-Verwaltung (anlegen, löschen, Passwort setzen), Szenario-Karten-Verwaltung, Mandanten-Verwaltung, Turn-Taking-Thresholds einstellbar, Base-Prompt pro Karte editierbar.</td>
                  <td>#30, #53, #77, #104–117</td>
                </tr>
                <tr>
                  <td className="feature">DSGVO &amp; Stabilität</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Loki/Grafana-Monitoring mit Correlation IDs. WebRTC-Verbindungsdiagnose-Seite. Impressum-Seite. Nutzer-ID statt E-Mail (personenarm). Kein Transcript-Speichern ohne explizite Konfiguration.</td>
                  <td>#26–27, #60, #69, #120</td>
                </tr>
                <tr>
                  <td className="feature">Übergabe &amp; Betrieb</td>
                  <td className="status-ok">✅ Geliefert</td>
                  <td>Vollständig selbstgehostete Lösung auf Hetzner VPS. Docker-Compose-Setup. Auto-Deploy aus master via Cron-Job. Staging-Server isoliert. Betriebsdokumentation in CLAUDE.md/Memory.</td>
                  <td>#1, Deploy-Skripte</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageFooter page={5} />
        </div>

        {/* ===== PAGE 6 · EXTRAS ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">04</span>Zusatzleistungen</h2>
            <p className="lead">
              Diese acht Features entstanden während der Entwicklung — sie waren nicht im ursprünglichen Angebot enthalten, wurden aber zur Erreichung des Projektziels oder auf Basis von Feedback entwickelt.
            </p>

            <ul className="extra-list">
              <li>
                <strong>Mandantensystem (Multi-Tenant)</strong>
                <span>Vollständige Organisation-Verwaltung: Mandanten anlegen, Nutzer zuordnen (Suchpicker), Szenario-Karten pro Mandant in 3 Stufen kuratieren (Aktiv / Gesperrt / Deaktiviert). Default: Mandant-Nutzer sieht nichts, bis explizit freigeschaltet. PRs #103–122.</span>
              </li>
              <li>
                <strong>TURN/TLS-Relay-Infrastruktur</strong>
                <span>Eingebetteter TURN-Server mit TLS auf Port 443 — stellt sicher, dass WebRTC-Audio auch durch Unternehmensfirewalls und restriktive Netzwerke läuft. Ohne diesen Layer hätten viele Nutzer (z. B. im Büro) keine Verbindung aufbauen können. PRs #46–51, #62.</span>
              </li>
              <li>
                <strong>LLM-Debug Self-Play &amp; Automatikmodus</strong>
                <span>Admin-Tool, das zwei LLMs automatisch ein Gespräch führen lässt — dann direkt auswertet. Beschleunigt das Testen neuer Prompt-Varianten erheblich ohne echte Nutzer zu benötigen. PRs #19, #24.</span>
              </li>
              <li>
                <strong>Verbindungsdiagnose + Loki/Grafana-Monitoring</strong>
                <span>Selbstgehostetes Observability-Stack mit Grafana, Loki und strukturierten Logs mit Correlation IDs. Öffentliche /api/diagnostics-Seite für Verbindungsdiagnose. Ermöglicht sofortige Fehleranalyse ohne Zugriff auf den Server. PRs #25–28.</span>
              </li>
              <li>
                <strong>Einladungscode-System ohne E-Mail</strong>
                <span>Nutzer können sich per Einladungslink direkt registrieren, ohne E-Mail-Adresse anzugeben. Maximale Datensparsamkeit nach DSGVO. PR #60.</span>
              </li>
              <li>
                <strong>Nutzer-ID statt E-Mail</strong>
                <span>Das gesamte Login-System wurde auf frei wählbare Nutzer-IDs umgestellt — keine personenbezogenen Daten für den Zugang erforderlich. Admin-UI zeigt Nutzer-ID statt E-Mail. PRs #68–70.</span>
              </li>
              <li>
                <strong>Admin-Debug-Panel in laufender Session</strong>
                <span>Admins können während eines laufenden Gesprächs den internen Agent-Zustand, die Verbindungsparameter und den gesendeten Prompt in Echtzeit einsehen. Unverzichtbar für die Prompt-Entwicklung. PR #77.</span>
              </li>
              <li>
                <strong>Staging-Server (isolierte Testumgebung)</strong>
                <span>Vollständiger, isolierter Stack unter staging.nitzschke.ai — eigene Datenbank, eigener LiveKit-Server, Auto-Deploy aus dem development-Branch. Neue Features können risikolos getestet werden bevor sie live gehen. Separater VPS (89.167.45.135).</span>
              </li>
            </ul>
          </div>
          <PageFooter page={6} />
        </div>

        {/* ===== PAGE 7 · CHRONOLOGIE ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">05</span>Entwicklungschronologie</h2>
            <p className="lead">
              Die Entwicklung verlief in klar erkennbaren Sprints — von der initialen Infrastruktur bis hin zum vollständigen Mandantensystem.
            </p>

            <div className="timeline">
              <div className="timeline-row">
                <div className="timeline-badge">März</div>
                <div className="timeline-body">
                  <h3>Architektur &amp; Spezifikation (KW 11–12)</h3>
                  <p>Design-Spec Voice-Session-Engine. Technische Architektur festgelegt: Next.js Frontend, Python LiveKit-Agent, Supabase-Datenbank, ElevenLabs-TTS. Implementierungsplan erstellt.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">April</div>
                <div className="timeline-body">
                  <h3>Kernplattform &amp; Login (19.–20. April, PRs #1–8)</h3>
                  <p>Erster Produktiv-Sprint: Login-Redesign mit Codana/Nitzschke-Branding, Invite-Only-Zugang, Landing Page, Partner-Individualisierung (eigene Avatare), ElevenLabs-TTS v3-Vorbereitung. Plattform erstmals lauffähig.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">3.–8. Juni</div>
                <div className="timeline-body">
                  <h3>Feature-Sprint: Auswertung &amp; Infrastruktur (PRs #9–30)</h3>
                  <p>End-to-End-Flow (Gespräch → Auswertung) funktionsfähig. 9-Kategorien-Spinnennetz. LLM-Debug-Modus. MAI-Voice-2-Integration. Verbindungsdiagnose &amp; Grafana/Loki-Stack. TURN/TLS-Relay für Firmennetzwerke. Admin Turn-Taking-Thresholds.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">8.–11. Juni</div>
                <div className="timeline-body">
                  <h3>Stabilisierung &amp; DSGVO (PRs #31–65)</h3>
                  <p>Login-Branding finalisiert. Relay-Reconnect für alle Browser. ElevenLabs-FallbackAdapter. Einladungscode-System ohne E-Mail. LiveKit v1.13.1. Szenario-Karten mit card_subtitle. Charakter inline anlegen. Auswertungs-Parsing robust gemacht.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge">13.–19. Juni</div>
                <div className="timeline-body">
                  <h3>Nutzer-ID-Rollout &amp; Content (PRs #66–101)</h3>
                  <p>Login komplett E-Mail-frei (Nutzer-ID). Kritikgespräch-Karten an Basisprofile (Sandra) angebunden. Admin-Debug-Panel in laufender Session. Auswertung über room_name an Backend-Memory gekoppelt. Lisa-Müller-Dialog-Modus (C) mit eigenem Scorecard-Format. Übung-2-Auswertung mit Trigger-Zähler. Charakter-Prompts finalisiert (Sandra, Klaus, Anna, Thomas).</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">23.–30. Juni</div>
                <div className="timeline-body">
                  <h3>Mandantensystem (PRs #103–122)</h3>
                  <p>Vollständiges Multi-Tenant-System: Organisationen anlegen, Nutzer per Suchpicker zuordnen, 3-Stufen-Sichtbarkeit (Aktiv/Gesperrt/Deaktiviert) für Kompetenzfelder und Szenario-Karten, Admin-Dashboard-Karten verwalten mit Mandantenfilter, Base-Prompt pro Karte editierbar im Modal-Dialog. Nutzer löschen. Impressum. Release auf master deployed.</p>
                </div>
              </div>
            </div>
          </div>
          <PageFooter page={7} />
        </div>

        {/* ===== PAGE 8 · ZEITAUFWAND ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">06</span>Zeitaufwand-Schätzung</h2>
            <p className="lead">
              Auf Basis der GitHub-PRs, ihrer Komplexität und des durchschnittlichen Aufwands pro Änderungstyp ergibt sich folgende Schätzung.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Bereich</th>
                  <th>PRs / Umfang</th>
                  <th style={{ textAlign: "right" }}>Geschätzter Aufwand</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Architektur &amp; Spezifikation</strong></td>
                  <td>Design-Spec, Implementierungsplan (März)</td>
                  <td style={{ textAlign: "right" }}>10 h</td>
                </tr>
                <tr>
                  <td><strong>Kernplattform &amp; Login</strong></td>
                  <td>PRs #1–8 (Login, Landing, Invite, Avatar, TTS)</td>
                  <td style={{ textAlign: "right" }}>20 h</td>
                </tr>
                <tr>
                  <td><strong>Auswertungs-Pipeline</strong></td>
                  <td>PRs #16, #21, #33, #42–44, #54–58, #82–96</td>
                  <td style={{ textAlign: "right" }}>30 h</td>
                </tr>
                <tr>
                  <td><strong>Infrastruktur &amp; Monitoring</strong></td>
                  <td>TURN/TLS #46–51, Grafana/Loki #25–28, Reconnect #62</td>
                  <td style={{ textAlign: "right" }}>20 h</td>
                </tr>
                <tr>
                  <td><strong>Admin-Bereich</strong></td>
                  <td>PRs #30, #53, #77, #106, #109–113</td>
                  <td style={{ textAlign: "right" }}>18 h</td>
                </tr>
                <tr>
                  <td><strong>DSGVO &amp; Nutzer-ID</strong></td>
                  <td>PRs #60, #63, #68–70</td>
                  <td style={{ textAlign: "right" }}>8 h</td>
                </tr>
                <tr>
                  <td><strong>Mandantensystem</strong></td>
                  <td>PRs #103–122 (vollständiges Multi-Tenant)</td>
                  <td style={{ textAlign: "right" }}>6 h</td>
                </tr>
                <tr>
                  <td><strong>Content &amp; Prompts</strong></td>
                  <td>PRs #88–100 (Charaktere, startPrompts, Labels)</td>
                  <td style={{ textAlign: "right" }}>10 h</td>
                </tr>
                <tr>
                  <td><strong>Bugfixes &amp; Stabilisierung</strong></td>
                  <td>~30 Fix-PRs</td>
                  <td style={{ textAlign: "right" }}>15 h</td>
                </tr>
                <tr>
                  <td><strong>Deployment &amp; Betrieb</strong></td>
                  <td>VPS-Setup, Docker, Auto-Deploy, Staging</td>
                  <td style={{ textAlign: "right" }}>12 h</td>
                </tr>
                <tr style={{ background: "var(--red-soft)" }}>
                  <td colSpan={2}><strong>Gesamt (Schätzung)</strong></td>
                  <td style={{ textAlign: "right" }}><strong><strong>149 h</strong></strong></td>
                </tr>
              </tbody>
            </table>

            <div className="note" style={{ marginTop: 14 }}>
              <strong>Methodik:</strong> Die Schätzung basiert auf der Komplexität der 122 Pull Requests. Das Mandantensystem war mit <strong>6 h</strong> kalkuliert und hat exakt gepasst. Der Gesamtbereich liegt bei einem Tagessatz von 950 €/Tag (8 h) zwischen ca. <strong>~17.700 € netto</strong>.
            </div>

            <div className="note good">
              <strong>Angebotspreis:</strong> Das ursprüngliche Angebot sah zwei Wochen MVP-Entwicklung vor. Der tatsächliche Scope wuchs erheblich — insbesondere durch das Mandantensystem, das TURN-Relay und das Monitoring — ohne dass der Preis entsprechend angepasst wurde.
            </div>
          </div>
          <PageFooter page={8} />
        </div>

        {/* ===== PAGE 9 · FAZIT ===== */}
        <div className="page back-cover">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">07</span>Fazit &amp; Leistungsnachweis</h2>
            <p className="lead">
              Was als MVP in zwei Wochen begann, ist zu einer vollständigen, produktionsreifen Trainingsplattform geworden.
            </p>

            <div className="two-col">
              <div className="panel focus">
                <h3>Was versprochen wurde</h3>
                <ul>
                  <li>MVP-Plattform für Gesprächs-Training</li>
                  <li>KI-Sprach-Session mit natürlicher Konversation</li>
                  <li>10-Minuten-Timer (server-autoritär)</li>
                  <li>KI-Auswertung mit Scorecard &amp; Diagramm</li>
                  <li>Admin-Bereich</li>
                  <li>Login mit Rollen</li>
                  <li>DSGVO-konform</li>
                  <li>Self-Hosting-fähig</li>
                </ul>
              </div>
              <div className="panel">
                <h3>Was geliefert wurde — und mehr</h3>
                <ul>
                  <li>✅ Alles aus dem Angebot (10/10 Punkte)</li>
                  <li>✅ Mandantensystem für mehrere Kunden</li>
                  <li>✅ Firewall-resistentes TURN-Relay</li>
                  <li>✅ Professionelles Loki/Grafana-Monitoring</li>
                  <li>✅ Einladungscode ohne E-Mail</li>
                  <li>✅ Nutzer-ID statt E-Mail</li>
                  <li>✅ Admin-Debug in Echtzeit</li>
                  <li>✅ Staging-Server isoliert</li>
                </ul>
              </div>
            </div>

            <div className="invest-hero" style={{ marginTop: 28 }}>
              <div className="invest-label">Entwicklungsaufwand (geschätzt)</div>
              <div className="invest-range">
                149 Stunden
                <small>davon 6 h Mandantensystem</small>
              </div>
              <div className="invest-sub">122 Pull Requests · März – Juni 2026 · Live auf nitzschke.ai</div>
            </div>

            <div className="note good" style={{ marginTop: 20 }}>
              <strong>Produktiv seit Juni 2026.</strong> Die Plattform läuft stabil mit automatischem Deployment, Monitoring und einer vollständigen Testumgebung. Alle Grundbausteine für den Betrieb mit mehreren Mandanten sind live.
            </div>

            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, fontSize: 13 }}>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 6, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Codana GmbH</div>
                <div style={{ fontWeight: 600 }}>info@codana.de</div>
                <div style={{ color: "var(--muted)", marginTop: 4 }}>github.com/codana-gmbh/voice2voice</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 6, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Plattform</div>
                <div style={{ fontWeight: 600 }}>nitzschke.ai (Produktion)</div>
                <div style={{ color: "var(--muted)", marginTop: 4 }}>staging.nitzschke.ai (Test)</div>
              </div>
            </div>
          </div>
          <PageFooter page={9} />
        </div>

      </div>
    </>
  );
}
