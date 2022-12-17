import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

async function loadParticles(options) {
  await loadFull(tsParticles);

  await tsParticles.load(options);
}

const configs = {

  detectRetina: true,
  particles: {
    stroke: {
      width: 12,
      color: {
        value: ["#FFC0CB", "#00FF00", "#FFA500", "#FF0000", "#ADD8E6"]
      }
    },
    move: {
      angle: {
        value: 10,
        offset: 0
      },
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out"
      },
      speed: 7.9
    },
    number: {
      value: 160,
      limit: 600
    },
    opacity: {
      value: 1
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 6
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 6
      }
    },
    shape: {
      type: "line"
    },
    size: {
      value: 15
    },
    roll: {
      darken: {
        enable: true,
        value: 30
      },
      enlighten: {
        enable: true,
        value: 30
      },
      enable: true,
      mode: "both",
      speed: {
        min: 3,
        max: 6
      }
    },
    wobble: {
      distance: 5,
      enable: true,
      move: true,
      speed: {
        min: -1,
        max: 1
      }
    }
  }
};
