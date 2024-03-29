var config = {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#6ECDDD", "#36BB93", "#7D43AE", "#E31565", "#EBA91F", "#692406"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#111820"
      }
    },
    "opacity": {
      "value": .5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": .1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": .9,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "in",
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 9
      }
    }
  },
  "retina_detect": true
};


particlesJS('bg', config);
