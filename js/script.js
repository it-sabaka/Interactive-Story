const story = {
  "scene_0": { text: "You wake up on a normal Monday morning.", character: "Narrator", options: [{ text: "Next", nextId: "scene_1" }] },
  "scene_1": { text: "You brush your teeth and get ready.", character: "Narrator", options: [{ text: "Next", nextId: "scene_2" }] },
  "scene_2": { text: "You have 8 hours of classes today.", character: "Narrator", options: [{ text: "Next", nextId: "scene_3" }] },
  "scene_3": { text: "There is no one outside..", character: "Narrator", options: [{ text: "Next", nextId: "scene_4" }] },
  "scene_4": { text: "But that's completly normal. Cuz it's 6 in the morning!", character: "Narrator", options: [{ text: "Next", nextId: "scene_5" }] },
  "scene_5": { text: "You walked to the train station.", character: "Narrator", options: [{ text: "Next", nextId: "scene_6" }] },
  "scene_6": { text: "There is no one at the train station also. Now that's weird.", character: "Narrator", options: [{ text: "Next", nextId: "scene_7" }] },
  "scene_7": { text: "The screens are working though, and you see that your train will arrive in 3 minutes.", character: "Narrator", options: [{ text: "Next", nextId: "scene_8" }] },
  "scene_8": { text: "The train arrives.", character: "Narrator", options: [{ text: "Next", nextId: "scene_9" }] },
  "scene_9": { text: "It is completely empty.", character: "Narrator", options: [{ text: "Next", nextId: "scene_10" }] },
  "scene_10": { text: "Inside it feels darker than usual.", character: "Narrator", options: [{ text: "Next", nextId: "scene_11" }] },
  "scene_11": { text: "You slept badly last night.", character: "Narrator", options: [{ text: "Take a 30 minute nap", nextId: "scene_15" }, { text: "Ignore sleepiness and stay awake", nextId: "scene_14" }], },
  "scene_12": { text: "Take a 30 minute nap.", character: "Narrator", options: [{ text: "Next", nextId: "scene_13" }] },
  "scene_13": { text: "Ignore sleepiness and stay awake.", character: "Narrator", options: [{ text: "Next", nextId: "scene_14" }] },
  "scene_14": { text: "It's all quiet and dark, it's like perfect for sleeping. Man, are you sure you don't want to take a nap?", character: "Narrator", options: [{ text: "Yes", nextId: "scene_19" }, { text: "Nah", nextId: "scene_15" }], },
  "scene_15": { text: "You're sleeping as good, as never before..", character: "Narrator", options: [{ text: "Next", nextId: "scene_18" }] },
  "scene_16": { text: "yes", character: "Narrator", options: [{ text: "Next", nextId: "scene_17" }] },
  "scene_17": { text: "nah", character: "Narrator", options: [{ text: "Next", nextId: "scene_18" }] },
  "scene_18": { text: "You wake up 3 hours later", character: "Narrator", options: [{ text: "Next", nextId: "scene_20" }] },
  "scene_19": { text: "Something feels off", character: "Narrator", options: [{ text: "Next", nextId: "scene_21" }] },
  "scene_20": { text: "Oh no I overslept", character: "You", options: [{ text: "Next", nextId: "scene_22" }] },
  "scene_21": { text: "All this emptyness and darkness...", character: "Narrator", options: [{ text: "Next", nextId: "scene_26" }] },
  "scene_22": { text: "You see a dark figure in the distance slowly approaching you.", character: "Narrator", options: [{ text: "Run for your life", nextId: "scene_28" }, { text: "Stay calm in hopes that it won't get you", nextId: "scene_27" }, { text: "Try talking", nextId: "scene_29" }], },
  "scene_24": { text: "Stay calm in hopes that it won't get you", character: "Narrator", options: [{ text: "Next", nextId: "scene_25" }] },
  "scene_25": { text: "Try talking", character: "Narrator", options: [{ text: "Next", nextId: "scene_26" }] },
  "scene_26": { text: "Go off at the next stop?", character: "Narrator", options: [{ text: "Yes", nextId: "scene_34" }, { text: "No", nextId: "scene_22" }], },
  "scene_27": { text: "Nope. Bad ending #4", character: "Narrator", options: [{ text: "Restart", nextId: "scene_0" }] },
  "scene_28": { text: "You run to the next train car", character: "Narrator", options: [{ text: "Next", nextId: "scene_32" }] },
"scene_29": { text: "Hey, what's up bro?✌", character: "You", options: [{ text: "Next", nextId: "scene_33" }] },
  "scene_30": { text: "yes", character: "Narrator", options: [{ text: "Next", nextId: "scene_31" }] },
  "scene_31": { text: "no", character: "Narrator", options: [{ text: "Next", nextId: "scene_32" }] },
  "scene_32": { text: "You see a good place to hide, the toilet.", character: "Narrator", options: [{ text: "Hide in the toilet", nextId: "scene_39" }, { text: "Run further away", nextId: "scene_40" }], },
  "scene_33": { text: "Ayy hallo. Oh, det er jævla dårlig as, har ikke spiste i flere år allerede.", character: "Ghost", options: [{ text: "Next", nextId: "scene_37" }] },
  "scene_34": { text: "As you're walking towards the doors, you see a lot of people at the station.", character: "Narrator", options: [{ text: "Next", nextId: "scene_38" }] },
  "scene_35": { text: "Hide in the toilet", character: "Narrator", options: [{ text: "Next", nextId: "scene_36" }] },
  "scene_36": { text: "Run furter away", character: "Narrator", options: [{ text: "Next", nextId: "scene_37" }] },
  "scene_37": { text: "Vent litt.. Deg.. Jeg kan spise deig😈", character: "Ghost", options: [{ text: "Next", nextId: "scene_41" }] },
  "scene_38": { text: "Just like it is usually.", character: "Narrator", options: [{ text: "Next", nextId: "scene_42" }] },
  "scene_39": { text: "Lights start to flicker", character: "Narrator", options: [{ text: "Next", nextId: "scene_43" }] },
  "scene_40": { text: "You trip on a banana peel and die from internal bleeding. Bad ending #1", character: "Narrator", options: [{ text: "Restart", nextId: "scene_0" }] },
  "scene_41": { text: "It eats you and you die. Bad ending #2", character: "Narrator", options: [{ text: "Restart", nextId: "scene_0" }] },
  "scene_42": { text: "Finally you go out.", character: "Narrator", options: [{ text: "Next", nextId: "scene_44" }] },
  "scene_43": { text: "The door slowly opens on its own.", character: "Narrator", options: [{ text: "Next", nextId: "scene_45" }] },
  "scene_44": { text: "You look at the train.", character: "Narrator", options: [{ text: "Next", nextId: "scene_46" }] },
  "scene_45": { text: "Well hello there big boy", character: "Ghost", options: [{ text: "Next", nextId: "scene_47" }] },
  "scene_46": { text: "The screen says: RE666: Hell.", character: "Narrator", options: [{ text: "Next", nextId: "scene_48" }] },
  "scene_47": { text: "And then it jumps at you. Bad ending #3", character: "Narrator", options: [{ text: "Restart", nextId: "scene_0" }] },
  "scene_48": { text: "...", character: "Narrator", options: [{ text: "Next", nextId: "scene_49" }] },
  "scene_49": { text: "You take the next train peacefully.", character: "Narrator", options: [{ text: "Next", nextId: "scene_50" }] },
  "scene_50": { text: "And your life continues as normal.", character: "Narrator", options: [{ text: "Next", nextId: "scene_51" }] },
  "scene_51": { text: "Or does it? (insert vsauce music)", character: "Narrator", options: [{ text: "Next", nextId: "scene_52" }] },
  "scene_52": { text: "Good ending.", character: "Narrator", options: [{ text: "Restart", nextId: "scene_0" }] }

};

let currentSceneId = "scene_0";
let typewriterTimeoutId = null;
let typewriterRunId = 0;
let autoAdvanceTimeoutId = null;
let autoAdvanceAnimationId = null;
const scenePngIds = new Set([15, 16, 17, 27, 30, 31, 35, 36]);
const sceneImageCache = [];
const backgroundMusic = new Audio('./audio/bgmusic.mp3');
backgroundMusic.loop = true;
backgroundMusic.preload = 'auto';
const vsauceMusic = new Audio('./audio/vsauces.mp3');
vsauceMusic.loop = false;
vsauceMusic.preload = 'auto';
let hasStartedBackgroundMusic = false;

function startBackgroundMusic() {
  if (hasStartedBackgroundMusic) {
    return;
  }

  hasStartedBackgroundMusic = true;
  backgroundMusic.play().catch(() => {
    hasStartedBackgroundMusic = false;
  });
}

function clearAutoAdvance() {
  if (autoAdvanceTimeoutId) {
    clearTimeout(autoAdvanceTimeoutId);
    autoAdvanceTimeoutId = null;
  }

  if (autoAdvanceAnimationId) {
    cancelAnimationFrame(autoAdvanceAnimationId);
    autoAdvanceAnimationId = null;
  }

  const existingProgress = document.getElementById('auto-progress-track');
  if (existingProgress) {
    existingProgress.remove();
  }
}

function startSingleOptionAutoAdvance(option, container) {
  clearAutoAdvance();

  const durationMs = 10000;
  const progressTrack = document.createElement('div');
  progressTrack.id = 'auto-progress-track';
  progressTrack.className = 'auto-progress-track';

  const progressFill = document.createElement('div');
  progressFill.className = 'auto-progress-fill';

  progressTrack.appendChild(progressFill);
  container.appendChild(progressTrack);

  const startTime = performance.now();

  function animateProgress(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    progressFill.style.width = `${progress * 100}%`;

    if (progress < 1) {
      autoAdvanceAnimationId = requestAnimationFrame(animateProgress);
      return;
    }

    autoAdvanceAnimationId = null;
  }

  autoAdvanceAnimationId = requestAnimationFrame(animateProgress);

  autoAdvanceTimeoutId = setTimeout(() => {
    clearAutoAdvance();
    currentSceneId = option.nextId;
    startScene();
  }, durationMs);
}

function typeWriterText(element, text, onDone) {
  typewriterRunId += 1;
  const currentRunId = typewriterRunId;

  if (typewriterTimeoutId) {
    clearTimeout(typewriterTimeoutId);
    typewriterTimeoutId = null;
  }

  element.textContent = "";

  const chars = Array.from(text);
  const baseDelay = 20;
  const punctuationDelay = 130;
  const sentenceEndDelay = 210;

  function typeNext(index) {
    if (currentRunId !== typewriterRunId) {
      return;
    }

    if (index >= chars.length) {
      typewriterTimeoutId = null;
      onDone();
      return;
    }

    const char = chars[index];
    element.textContent += char;

    let delay = baseDelay;
    if (/[.!?]/.test(char)) {
      delay = sentenceEndDelay;
    } else if (/[,;:]/.test(char)) {
      delay = punctuationDelay;
    }

    typewriterTimeoutId = setTimeout(() => {
      typeNext(index + 1);
    }, delay);
  }

  typeNext(0);
}

function getSceneBackground(sceneId) {
  const sceneNumber = Number(sceneId.replace('scene_', ''));

  if (Number.isNaN(sceneNumber)) {
    return null;
  }

  const extension = scenePngIds.has(sceneNumber) ? 'png' : 'jpg';
  return `./scenes/${sceneNumber}.${extension}`;
}

function preloadSceneImages() {
  const backgroundUrls = Array.from(new Set(
    Object.keys(story)
      .map((sceneId) => getSceneBackground(sceneId))
      .filter(Boolean)
  ));

  const preloadJobs = backgroundUrls.map((url) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = resolve;
      img.onerror = resolve;
      img.src = url;

      // Keep references so already-loaded images stay warm in memory.
      sceneImageCache.push(img);
    });
  });

  return Promise.all(preloadJobs);
}

const sceneImagesPreloadPromise = preloadSceneImages();

function startScene() {
  clearAutoAdvance();

  const scene = story[currentSceneId];
  const contentDiv = document.getElementById('scene');
  const container = document.getElementById('game');

  if (currentSceneId === 'scene_51') {
    vsauceMusic.currentTime = 0;
    vsauceMusic.play().catch(() => {
    });
  }

  contentDiv.innerHTML = "";

  const textBlock = document.createElement('div');
  textBlock.className = 'scene-text-block';

  const nameTag = document.createElement('h3');
  nameTag.className = 'scene-character';
  nameTag.innerText = scene.character;
  
  const dialogue = document.createElement('p');
  dialogue.className = 'scene-text';

  textBlock.appendChild(nameTag);
  textBlock.appendChild(dialogue);
  contentDiv.appendChild(textBlock);

  const optionsWrap = document.createElement('div');
  optionsWrap.className = 'scene-options';
  optionsWrap.style.opacity = '0';
  optionsWrap.style.pointerEvents = 'none';

  const sceneBackground = getSceneBackground(currentSceneId);
  if (sceneBackground) {
    container.style.backgroundImage = `url(${sceneBackground})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
  } else {
    container.style.backgroundImage = 'none';
  }

  scene.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'scene-option';
    btn.innerText = option.text;

    btn.onclick = () => {
      clearAutoAdvance();
      currentSceneId = option.nextId;
      startScene();
    };
    
    optionsWrap.appendChild(btn);
  });

  contentDiv.appendChild(optionsWrap);

  typeWriterText(dialogue, scene.text, () => {
    optionsWrap.style.opacity = '1';
    optionsWrap.style.pointerEvents = 'auto';

    if (scene.options.length === 1) {
      startSingleOptionAutoAdvance(scene.options[0], container);
    }
  });
}

const startScreen = document.getElementById('start-screen');
const game = document.getElementById('game');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  startBackgroundMusic();

  playButton.disabled = true;
  playButton.textContent = 'LOADING...';

  sceneImagesPreloadPromise.finally(() => {
    startScreen.style.display = 'none';
    game.style.display = 'block';
    startScene();
  });
});