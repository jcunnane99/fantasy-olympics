// Fantasy Olympics Game Data
// Populate participants, draft picks, and scoring entries as the game progresses

const GAME = {
  title: "Fantasy Olympics",

  // Scoring rules
  scoringRules: [
    { label: "Gold", points: 100 },
    { label: "Silver", points: 75 },
    { label: "Bronze", points: 50 }
    // Optional bonus categories can be added here
    // { label: "Olympic Record", points: 15 },
    // { label: "World Record", points: 25 }
  ],

  // Add team / participant names here
  participants: [
    // Example:
    // "Team Example"
  ],

  // Draft selections by participant
  // Format:
  // "Team Name": ["Pick 1", "Pick 2"]
  draft: {
    // Example:
    // "Team Example": []
  },

  // Scoring log
  // Add entries as medals/results occur
  scoringEntries: [
    // Example:
    // {
    //   date: "2026-02-06",
    //   participant: "Team Example",
    //   category: "Gold",
    //   event: "Men's Downhill Skiing",
    //   notes: ""
    // }
  ]
};
