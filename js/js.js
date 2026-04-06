// 1. Your Story Data (The "Database")
const story = {
  "start": {
    text: "You wake up on a normal Monday morning.",
    // background: "../img/1.jpg",
    character: "Narrator",
    options: [
      { text: "Next", nextId: "knock_path" },
      { text: "Kick it down!", nextId: "kick_path" }
    ]
  },
  "knock_path": {
    text: "A tiny window opens. 'Who goes there?' a voice squeaks.",
    // background: "../img/2.jpg",
    character: "Gatekeeper",
    options: [
      { text: "Restart", nextId: "start" }
    ]
  },
  "kick_path": {
    text: "Your foot hurts, and the door didn't budge. You look silly.",
    // background: "../img/3.jpg",
    character: "Narrator",
    options: [
      { text: "Try knocking instead", nextId: "knock_path" }
    ]
  }
};