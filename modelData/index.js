// Fake data to simulate a database
import avSoundbites from "./arianaVenti";
import hoSoundbites from "./honestOcean";
import djcSoundbites from "./djCobra";

export const SOUNDBITES_DATA = ["Soundbite1", "Soundbite2", "Soundbite3"];

// TO USE FIREBASE, STORE MF USER DATA INFO?
export const USERS = {
  dj_cobra: {
    name: "DJ Cobra",
    soundbites: djcSoundbites,
  },
  ariana_venti: {
    name: "Ariana Venti",
    soundibtes: avSoundbites,
  },
  honest_ocean: {
    name: "Honest Ocean",
    soundbites: hoSoundbites,
  },
};

//  soundbite = {
//      coverimage
//      replied: [id, ]
//      previous: {
//          soundbite obj
//      }
//  }
