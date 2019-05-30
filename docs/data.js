var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3576.5,
      "initialViewParameters": {
        "yaw": 0.07921109682128424,
        "pitch": -0.20217773935485717,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.014010636511251562,
          "pitch": 0.21486357370224596,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3580,
      "initialViewParameters": {
        "yaw": -1.5496611798404665,
        "pitch": 0.05922203880441046,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.31860931513022805,
          "pitch": 0.4052468235915647,
          "rotation": 0,
          "target": "2-open-air-right"
        },
        {
          "yaw": 1.5868372608725991,
          "pitch": 0.2824963187772287,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.981001980563419,
          "pitch": 0.4852450734186107,
          "rotation": 0,
          "target": "3-open-air-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-open-air-right",
      "name": "Open Air Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3575.5,
      "initialViewParameters": {
        "yaw": 0.00014376852174891042,
        "pitch": 0,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.765185409448467,
          "pitch": 0.5538784187286474,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-open-air-left",
      "name": "Open Air Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3575.5,
      "initialViewParameters": {
        "yaw": -3.0655329961559215,
        "pitch": -0.009725034945988753,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.401840669090765,
          "pitch": 0.46445162217428404,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rustic Corner Bar and Grill",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
