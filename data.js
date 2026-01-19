// Edit this file as the Olympics progress.
// Keep it simple: participants, draft picks, and scoring entries.

const GAME = {
  title: "Fantasy Olympics",
  scoringRules: [
    { label: "Gold", points: 5 },
    { label: "Silver", points: 3 },
    { label: "Bronze", points: 1 },
    // Example bonus category (optional):
    // { label: "World Record", points: 2 },
  ],

  participants: [
    "Joe",
    "Alex",
    "Sam",
    "Taylor",
    "Jordan",
    "Casey",
  ],

  // Draft picks: you decide what a "pick" is (athlete, country, event, team).
  // Keep as text for flexibility.
  draft: {
    "Joe":    ["USA (overall)", "Mikaela Shiffrin", "Men's Hockey - Canada"],
    "Alex":   ["Norway (overall)", "Women's Figure Skating - Kaori Sakamoto"],
    "Sam":    ["Canada (overall)"],
    "Taylor": ["Japan (overall)"],
    "Jordan": ["Germany (overall)"],
    "Casey":  ["Sweden (overall)"],
  },

  // Scoring entries: each entry gives points to ONE participant.
  // Add one row per medal/result as they happen.
  scoringEntries: [
    // Example rows (delete these and add real ones later):
    { date: "2026-02-06", participant: "Joe",   category: "Gold",   event: "Alpine Skiing - Example Event", notes: "" },
    { date: "2026-02-06", participant: "Alex",  category: "Silver", event: "Biathlon - Example Event",     notes: "" },
    { date: "2026-02-07", participant: "Joe",   category: "Bronze", event: "Ski Jump - Example Event",     notes: "" },
  ]
};
