const story = {
  "main0": {
    text: "You wake up on a normal Monday morning.",
    character: "Narrator",
    options: [
      { text: "Next", nextId: "main1" },
    ]
  },
  "main1": {
    text: "You brush your teeth and get ready.",
    character: "Narrator",
    options: [
      { text: "Next", nextId: "main2" }
    ]
  },
  "main2": {
    text: "You have 8 hours of classes today.",
    character: "Narrator",
    options: [
      { text: "Next", nextId: "main3" }
    ]
  }
};

















// 2. Game State
let currentSceneId = "main0";

// 3. The Function that draws the game
function startScene() {
  const scene = story[currentSceneId];
  const contentDiv = document.getElementById('scene');
  const container = document.getElementById('game');

  // Clear out the old content and buttons
  contentDiv.innerHTML = "";

  // Set the Character Name and Dialogue
  const nameTag = document.createElement('h3');
  nameTag.innerText = scene.character;
  
  const dialogue = document.createElement('p');
  dialogue.innerText = scene.text;

  contentDiv.appendChild(nameTag);
  contentDiv.appendChild(dialogue);

  // Change the background image
  container.style.backgroundImage = `url(${scene.background})`;

  // Create the buttons for choices
  scene.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option.text;
    
    // When clicked, update the ID and redraw everything
    btn.onclick = () => {
      currentSceneId = option.nextId;
      startScene();
    };
    
    contentDiv.appendChild(btn);
  });
}

// Start the game for the first time
startScene();