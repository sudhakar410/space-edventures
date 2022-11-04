module.exports = () => {
  var length = 10,
    charset = "abcdefghjkmnpqrstuvwxyz123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  return retVal;

  // let phraseLength = 4;
  // let phraseArray = [];

  // for (let i = 0; i < phraseLength; i++) {
  //   let newWord = pickARandomWord();
  //   // while (phraseArray.includes(newWord)) {
  //   //   newWord = pickARandomWord();
  //   // }
  //   phraseArray.push(newWord)
  // }

  // spliceIndex = Math.floor(Math.random()*(phraseLength-1));
  // spliceWord = fillWords[Math.floor(Math.random()*fillWords.length)];

  // phraseArray.splice(spliceIndex,0,spliceWord);

  // return phraseArray.join(' ');
};

function pickARandomWord() {
  return spaceWords[Math.floor(Math.random() * spaceWords.length)];
}

fillWords = ["of the", "of", "on", "from", "and"];

spaceWords = [
  "space",
  "ship",
  "galaxy",
  "warp",
  "drive",
  "extraterrestrial",
  "relativity",
  "galactic",
  "resistance",
  "futile",
  "galaxy",
  "retrograde",
  "gemini",
  "mothership",
  "gravity",
  "robot",
  "greetings",
  "future",
  "robotic",
  "greetings",
  "future",
  "robots",
  "ground",
  "control",
  "rocket",
  "science",
  "earth",
  "complex",
  "computer",
  "system",
  "rotation",
  "frightening",
  "dystopia",
  "human",
  "absolute",
  "zero",
  "destiny",
  "satellites",
  "acceleration",
  "error",
  "saturn",
  "activate",
  "hyperspace",
  "commencing",
  "science",
  "activate",
  "ignition",
  "affirmative",
  "scientist",
  "affirmative",
  "detecting",
  "strange",
  "anomaly",
  "matrix",
  "scientific",
  "discovery",
  "afterglow",
  "different",
  "planet",
  "scientific",
  "alien",
  "invasion",
  "parallel",
  "universe",
  "alien",
  "lifeforms",
  "orbit",
  "secure",
  "ship",
  "operations",
  "systems",
  "infinity",
  "sentient",
  "beings",
  "alpha",
  "instrumentation",
  "singularity",
  "altitude",
  "interference",
  "solar",
  "eclipse",
  "amazing",
  "machines",
  "interplanetary",
  "solar",
  "system",
  "amazing",
  "machines",
  "interstellar",
  "solstice",
  "amplified",
  "cosmos",
  "alternate",
  "reality",
  "kinetic",
  "somewhere",
  "cosmos",
  "outer",
  "space",
  "launchpad",
  "space",
  "unidentified",
  "object",
  "outer",
  "space",
  "space",
  "cadet",
  "android",
  "libra",
  "spaced",
  "apparatus",
  "light",
  "spaceship",
  "aquarius",
  "luminosity",
  "asteroids",
  "magnetic",
  "stardust",
  "astronauts",
  "magnetism",
  "stellar",
  "atmosphere",
  "magnitude",
  "stranded",
  "atmosphere",
  "mars",
  "stratosphere",
  "atomic",
  "supernova",
  "reveals",
  "secrets",
  "supersonic",
  "aurora",
  "mercury",
  "systems",
  "beam",
  "meteor",
  "bionic",
  "molecules",
  "technological",
  "progress",
  "telepathy",
  "mutant",
  "teleporation",
  "star",
  "terminal",
  "velocity",
  "nebula",
  "cosmic",
  "chemistry",
  "dark",
  "army",
  "chromatic",
  "neptune",
  "exploration",
  "space",
  "chromosphere",
  "nova",
  "final",
  "frontier",
  "docking",
  "nuclear",
  "golden",
  "rule",
  "docking",
  "oblivion",
  "heavens",
  "landing",
  "observatory",
  "rebel",
  "army",
  "landing",
  "distant",
  "planet",
  "surface",
  "sun",
  "takeoff",
  "distant",
  "planet",
  "universe",
  "takeoff",
  "blue",
  "moon",
  "world",
  "clusters",
  "constellations",
  "data",
  "orbit",
  "cold",
  "fusion",
  "orbital",
  "future",
  "collisions",
  "orion",
  "time",
  "comet",
  "time",
  "travel",
  "commander",
  "galaxy",
  "titanium",
  "computers",
  "mission",
  "traveling",
  "through",
  "space",
  "time",
  "constellations",
  "ultraviolet",
  "cosmic",
  "uranus",
  "cosmic",
  "rays",
  "velocity",
  "cosmological",
  "singularity",
  "venus",
  "cosmology",
  "counting",
  "retrofire",
  "parallax",
  "virtual",
  "reality",
  "cyberspace",
  "physics",
  "visible",
  "nature",
  "dark",
  "energy",
  "pisces",
  "visible",
  "nature",
  "dark",
  "matter",
  "planetary",
  "visible",
  "nature",
  "deep",
  "space",
  "planetary",
  "nebulas",
  "walking",
  "moon",
  "doubt",
  "believe",
  "pluto",
  "warp",
  "speed",
  "drone",
  "post",
  "human",
  "exist",
  "cyberspace",
  "dystopian",
  "nightmare",
  "prepare",
  "launch",
  "humans",
  "dystopian",
  "nightmares",
  "prepare",
  "terminate",
  "welcome",
  "humans",
  "earth",
  "prism",
  "space",
  "dust",
  "eclipse",
  "mathematics",
  "forces",
  "beyond",
  "control",
  "electricity",
  "mathematics",
  "electromagnetic",
  "quadrant",
  "time",
  "electromagnetism",
  "quadrant",
  "transported",
  "elements",
  "quadrant",
  "become",
  "humanity",
  "engage",
  "quadrant",
  "worlds",
  "apart",
  "engine",
  "stable",
  "quantum",
  "physics",
  "wormhole",
  "atomic",
  "radiation",
  "terminated",
  "escape",
  "radioactive",
  "evolution",
  "reflection"
];