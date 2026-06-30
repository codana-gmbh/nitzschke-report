"use client";

const TOTAL_PAGES = 6;
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
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--muted)", maxWidth: 480, lineHeight: 1.6 }}>
              Was versprochen wurde, was geliefert wurde — und was darüber hinaus entstand.
            </p>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, fontSize: 13 }}>
              {[
                ["Auftraggeber", "Nitzschke"],
                ["Erstellt von", "Codana GmbH"],
                ["Projektstart", "März 2026"],
                ["Berichtsdatum", REPORT_DATE],
                ["Angebotsdatum", "02.03.2026"],
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

        {/* ===== PAGE 2 · KENNZAHLEN + ANGEBOT ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">01</span>Kennzahlen</h2>

            <div className="kpi-row">
              <div className="kpi-box"><div className="kv red">122</div><div className="kl">Pull Requests</div></div>
              <div className="kpi-box"><div className="kv">10/10</div><div className="kl">Angebot-Punkte</div></div>
              <div className="kpi-box"><div className="kv red">+8</div><div className="kl">Zusatz-Features</div></div>
              <div className="kpi-box"><div className="kv">149 h</div><div className="kl">Aufwand (geschätzt)</div></div>
            </div>

            <h2 style={{ marginTop: 32 }}><span className="num">02</span>Was im Angebot stand</h2>
            <p style={{ marginBottom: 12, color: "var(--muted)", fontSize: 13 }}>Angebot vom 02.03.2026 · MVP in zwei Wochen · 10 Leistungsbausteine</p>

            <table>
              <thead>
                <tr><th>#</th><th>Baustein</th><th>Kerninhalt</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><strong>Web-App</strong></td><td>Login → Gespräch → Auto-Stopp → Ergebnisse</td></tr>
                <tr><td>2</td><td><strong>KI-Sprachsteuerung</strong></td><td>ElevenLabs/ConvAI, geringe Latenz, natürliche Stimme</td></tr>
                <tr><td>3</td><td><strong>Backend</strong></td><td>API-Keys serverseitig, Rate-Limiting</td></tr>
                <tr><td>4</td><td><strong>Login &amp; Rollen</strong></td><td>E-Mail + Passwort, Nutzer- und Admin-Rolle</td></tr>
                <tr><td>5</td><td><strong>10-Minuten-Timer</strong></td><td>Server-autoritär, Countdown, harter Stopp</td></tr>
                <tr><td>6</td><td><strong>Datenspeicherung</strong></td><td>Session-Metadaten, Dauer, Ergebnisse</td></tr>
                <tr><td>7</td><td><strong>KI-Auswertung</strong></td><td>LLM-Analyse, Spinnennetz-Diagramm, PDF-Export</td></tr>
                <tr><td>8</td><td><strong>Admin-Bereich</strong></td><td>Sessions, Nutzer, Filter, CSV/JSON-Export</td></tr>
                <tr><td>9</td><td><strong>DSGVO &amp; Stabilität</strong></td><td>Privacy by Design, Logging, Correlation IDs</td></tr>
                <tr><td>10</td><td><strong>Übergabe &amp; Betrieb</strong></td><td>Installierbares Paket, Server-Anleitung</td></tr>
              </tbody>
            </table>
          </div>
          <PageFooter page={2} />
        </div>

        {/* ===== PAGE 3 · VERGLEICH ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">03</span>Angebot vs. Lieferung</h2>

            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: "22%" }}>Baustein</th>
                  <th style={{ width: "8%" }}>Status</th>
                  <th>Geliefert</th>
                  <th style={{ width: "14%" }}>PRs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature">Web-App</td>
                  <td className="status-ok">✅</td>
                  <td>Next.js, Flow Login → Briefing → Session → Auswertung. Avatar-Bilder, Text-Fallback.</td>
                  <td>#1–4, #32</td>
                </tr>
                <tr>
                  <td className="feature">KI-Sprachsteuerung</td>
                  <td className="status-ok">✅</td>
                  <td>LiveKit + ElevenLabs-TTS. MAI-Voice-2 als Fallback-Anbieter. LiveKit v1.13.1.</td>
                  <td>#6–8, #23, #63, #65</td>
                </tr>
                <tr>
                  <td className="feature">Backend</td>
                  <td className="status-ok">✅</td>
                  <td>Python-Agent als Proxy. Keys nur serverseitig. Webhook für LLM-Auswertung.</td>
                  <td>#16, #21, #72</td>
                </tr>
                <tr>
                  <td className="feature">Login &amp; Rollen</td>
                  <td className="status-ok">✅</td>
                  <td>Nutzer-ID (ohne E-Mail-Pflicht), Passwort. Nutzer- und Admin-Rolle. Einladungscode.</td>
                  <td>#2, #60, #69</td>
                </tr>
                <tr>
                  <td className="feature">10-Minuten-Timer</td>
                  <td className="status-ok">✅</td>
                  <td>Server-autoritär im Agent. Countdown, 30-s-Warnung, harter Stopp, Auto-Redirect.</td>
                  <td>#34, #86, #87</td>
                </tr>
                <tr>
                  <td className="feature">Datenspeicherung</td>
                  <td className="status-ok">✅</td>
                  <td>Supabase. Session-Metadaten, Auswertungen, User-Profile, Org-Zuordnungen.</td>
                  <td>#14, #75, #105</td>
                </tr>
                <tr>
                  <td className="feature">KI-Auswertung</td>
                  <td className="status-ok">✅</td>
                  <td>LLM-Webhook nach Session. 9-Kategorien-Spinnennetz, Scorecard, 3 Auswertungsmodi, PDF.</td>
                  <td>#16, #33, #82, #89–96</td>
                </tr>
                <tr>
                  <td className="feature">Admin-Bereich</td>
                  <td className="status-ok">✅</td>
                  <td>Sessions, Nutzer (anlegen/löschen), Karten-Editor, Mandanten, Turn-Thresholds, Base-Prompt.</td>
                  <td>#30, #53, #77, #104–117</td>
                </tr>
                <tr>
                  <td className="feature">DSGVO &amp; Stabilität</td>
                  <td className="status-ok">✅</td>
                  <td>Loki/Grafana-Monitoring, Correlation IDs, Verbindungsdiagnose, Impressum, Nutzer-ID.</td>
                  <td>#26–27, #60, #120</td>
                </tr>
                <tr>
                  <td className="feature">Übergabe &amp; Betrieb</td>
                  <td className="status-ok">✅</td>
                  <td>Hetzner VPS, Docker-Compose, Auto-Deploy aus master, Staging-Server.</td>
                  <td>#1, Skripte</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageFooter page={3} />
        </div>

        {/* ===== PAGE 4 · EXTRAS ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">04</span>Zusatzleistungen <span style={{ fontSize: 14, fontWeight: 500, color: "var(--muted)" }}>(nicht im Angebot)</span></h2>

            <ul className="extra-list">
              <li>
                <strong>Mandantensystem (Multi-Tenant)</strong>
                <span>Organisationen anlegen, Nutzer per Suchpicker zuordnen, Szenario-Karten in 3 Stufen kuratieren (Aktiv / Gesperrt / Deaktiviert). PRs #103–122.</span>
              </li>
              <li>
                <strong>TURN/TLS-Relay</strong>
                <span>Eingebetteter TURN-Server auf Port 443 — WebRTC läuft auch durch Unternehmensfirewalls. PRs #46–51, #62.</span>
              </li>
              <li>
                <strong>LLM-Debug Self-Play</strong>
                <span>Zwei LLMs führen automatisch ein Gespräch und werden direkt ausgewertet — für Prompt-Tests ohne echte Nutzer. PRs #19, #24.</span>
              </li>
              <li>
                <strong>Loki/Grafana-Monitoring</strong>
                <span>Selbstgehostetes Observability-Stack, strukturierte Logs mit Correlation IDs, öffentliche Verbindungsdiagnose-Seite. PRs #25–28.</span>
              </li>
              <li>
                <strong>Einladungscode ohne E-Mail</strong>
                <span>Registrierung per Link, keine personenbezogenen Daten erforderlich. PR #60.</span>
              </li>
              <li>
                <strong>Nutzer-ID statt E-Mail</strong>
                <span>Login komplett ohne E-Mail — frei wählbare Nutzer-ID. PRs #68–70.</span>
              </li>
              <li>
                <strong>Admin-Debug-Panel (Live)</strong>
                <span>Agent-Zustand, Verbindungsparameter und Prompt in Echtzeit während laufender Session. PR #77.</span>
              </li>
              <li>
                <strong>Staging-Server</strong>
                <span>Isolierter Stack unter staging.nitzschke.ai, eigene DB, Auto-Deploy aus development-Branch.</span>
              </li>
            </ul>
          </div>
          <PageFooter page={4} />
        </div>

        {/* ===== PAGE 5 · CHRONOLOGIE + ZEITAUFWAND ===== */}
        <div className="page">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">05</span>Chronologie &amp; Zeitaufwand</h2>

            <div className="timeline">
              <div className="timeline-row">
                <div className="timeline-badge">März</div>
                <div className="timeline-body">
                  <h3>Architektur &amp; Spec</h3>
                  <p>Design-Spec, technische Architektur (Next.js, Python-Agent, Supabase, ElevenLabs), Implementierungsplan.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">Apr.</div>
                <div className="timeline-body">
                  <h3>Kernplattform · PRs #1–8</h3>
                  <p>Login, Branding, Invite-Only, Avatare, TTS-Vorbereitung. Plattform erstmals lauffähig.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">3.–8. Jun</div>
                <div className="timeline-body">
                  <h3>Auswertung &amp; Infrastruktur · PRs #9–30</h3>
                  <p>End-to-End-Flow, Spinnennetz, LLM-Debug, MAI-Voice-2, Grafana/Loki, TURN/TLS-Relay.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">8.–11. Jun</div>
                <div className="timeline-body">
                  <h3>Stabilisierung &amp; DSGVO · PRs #31–65</h3>
                  <p>Relay-Reconnect, FallbackAdapter, Einladungscode, LiveKit v1.13.1, Auswertungs-Parsing.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge">13.–19. Jun</div>
                <div className="timeline-body">
                  <h3>Nutzer-ID &amp; Content · PRs #66–101</h3>
                  <p>E-Mail-freier Login, Kritikgespräch-Karten (Sandra), Dialog-Modus C (Lisa Müller), Übung-2-Auswertung, Charakter-Prompts.</p>
                </div>
              </div>
              <div className="timeline-row">
                <div className="timeline-badge hl">23.–30. Jun</div>
                <div className="timeline-body">
                  <h3>Mandantensystem · PRs #103–122</h3>
                  <p>Multi-Tenant komplett: Organisationen, Nutzer-Picker, 3-Stufen-Sichtbarkeit, Karten-Editor, Impressum. Release auf master.</p>
                </div>
              </div>
            </div>

            <table style={{ marginTop: 24 }}>
              <thead>
                <tr><th>Bereich</th><th style={{ textAlign: "right" }}>h</th></tr>
              </thead>
              <tbody>
                {[
                  ["Architektur & Spec", 10],
                  ["Kernplattform & Login", 20],
                  ["Auswertungs-Pipeline", 30],
                  ["Infrastruktur & Monitoring", 20],
                  ["Admin-Bereich", 18],
                  ["DSGVO & Nutzer-ID", 8],
                  ["Mandantensystem", 6],
                  ["Content & Prompts", 10],
                  ["Bugfixes & Stabilisierung", 15],
                  ["Deployment & Betrieb", 12],
                ].map(([label, h]) => (
                  <tr key={label as string}>
                    <td>{label}</td>
                    <td style={{ textAlign: "right" }}>{h} h</td>
                  </tr>
                ))}
                <tr style={{ background: "var(--red-soft)" }}>
                  <td><strong>Gesamt</strong></td>
                  <td style={{ textAlign: "right" }}><strong>149 h · ~17.700 € netto</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageFooter page={5} />
        </div>

        {/* ===== PAGE 6 · FAZIT ===== */}
        <div className="page back-cover">
          <PageHeader />
          <div style={{ flex: 1 }}>
            <h2><span className="num">06</span>Fazit</h2>

            <div className="two-col">
              <div className="panel focus">
                <h3>Versprochen</h3>
                <ul>
                  <li>Gesprächs-Trainingsplattform</li>
                  <li>KI-Sprach-Session</li>
                  <li>10-Minuten-Timer</li>
                  <li>KI-Auswertung mit Diagramm</li>
                  <li>Admin-Bereich</li>
                  <li>Login mit Rollen</li>
                  <li>DSGVO-konform</li>
                  <li>Self-Hosting</li>
                </ul>
              </div>
              <div className="panel">
                <h3>Geliefert</h3>
                <ul>
                  <li>✅ Alles aus dem Angebot (10/10)</li>
                  <li>✅ Mandantensystem</li>
                  <li>✅ TURN-Relay (Firewall-sicher)</li>
                  <li>✅ Loki/Grafana-Monitoring</li>
                  <li>✅ Einladungscode ohne E-Mail</li>
                  <li>✅ Nutzer-ID statt E-Mail</li>
                  <li>✅ Admin-Debug live</li>
                  <li>✅ Staging-Server</li>
                </ul>
              </div>
            </div>

            <div className="invest-hero" style={{ marginTop: 24 }}>
              <div className="invest-label">Entwicklungsaufwand</div>
              <div className="invest-range">
                149 Stunden · ~17.700 € netto
                <small>122 Pull Requests · März – Juni 2026</small>
              </div>
              <div className="invest-sub">Live auf nitzschke.ai · Staging: staging.nitzschke.ai</div>
            </div>

            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, fontSize: 13 }}>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Codana GmbH</div>
                <div style={{ fontWeight: 600 }}>info@codana.de</div>
              </div>
              <div>
                <div style={{ color: "var(--muted)", marginBottom: 4, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Repository</div>
                <div style={{ fontWeight: 600 }}>github.com/codana-gmbh/voice2voice</div>
              </div>
            </div>
          </div>
          <PageFooter page={6} />
        </div>

      </div>
    </>
  );
}
