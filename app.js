function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function pointsForCategory(category) {
  const row = GAME.scoringRules.find(r => r.label === category);
  return row ? row.points : 0;
}

function renderScoringRules() {
  const mount = document.getElementById("scoringRules");
  if (!mount) return;

  const rows = GAME.scoringRules
    .map(r => `<tr><td>${r.label}</td><td><span class="badge">${r.points} pts</span></td></tr>`)
    .join("");

  mount.innerHTML = `
    <table>
      <thead><tr><th>Category</th><th>Points</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDraft() {
  const mount = document.getElementById("draftResults");
  if (!mount) return;

  const people = [...GAME.participants].sort((a,b) => a.localeCompare(b));
  const sections = people.map(p => {
    const picks = (GAME.draft[p] || []).map(x => `<li>${x}</li>`).join("") || "<li><em>No picks yet</em></li>";
    return `
      <div class="card" style="margin:12px 0;">
        <h3 style="margin:0 0 8px;">${p}</h3>
        <ol style="margin:0; padding-left:18px;">${picks}</ol>
      </div>
    `;
  }).join("");

  mount.innerHTML = sections;
}

function computeTotals() {
  const totals = {};
  for (const p of GAME.participants) totals[p] = 0;

  for (const entry of GAME.scoringEntries) {
    if (!totals.hasOwnProperty(entry.participant)) totals[entry.participant] = 0;
    totals[entry.participant] += pointsForCategory(entry.category);
  }
  return totals;
}

function renderLeaderboard() {
  const mount = document.getElementById("leaderboard");
  if (!mount) return;

  const totals = computeTotals();
  const sorted = Object.entries(totals).sort((a,b) => b[1] - a[1]);

  const rows = sorted.map(([name, pts], idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${name}</strong></td>
      <td><span class="badge">${pts} pts</span></td>
    </tr>
  `).join("");

  mount.innerHTML = `
    <table>
      <thead><tr><th>Place</th><th>Participant</th><th>Total</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderEntries() {
  const mount = document.getElementById("entries");
  if (!mount) return;

  const entries = [...GAME.scoringEntries].sort((a,b) => (b.date || "").localeCompare(a.date || ""));
  const rows = entries.map(e => `
    <tr>
      <td>${e.date || ""}</td>
      <td>${e.participant}</td>
      <td>${e.category} (${pointsForCategory(e.category)} pts)</td>
      <td>${e.event || ""}</td>
      <td>${e.notes || ""}</td>
    </tr>
  `).join("");

  mount.innerHTML = `
    <table>
      <thead><tr><th>Date</th><th>Participant</th><th>Category</th><th>Event</th><th>Notes</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="5"><em>No entries yet</em></td></tr>`}</tbody>
    </table>
  `;
}

renderScoringRules();
renderDraft();
renderLeaderboard();
renderEntries();
