import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import starsTexture from './stars.jpg'

const App = () => {
  const canvasRef = useRef();
  const [speedFactor, setSpeedFactor] = useState(1);

  useEffect(() => {
    canvasRef.current.innerHTML = '';
    //create renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    //create global speed factor
    const globalSpeedFactor = speedFactor;

    //create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1, 1000
    );

    //create camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    // Position camera
    camera.position.set(20, 20, 50);
    controls.update();


    //create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    ambientLight.intensity = 0.1; 

    //Create sunlight
    const sunLight = new THREE.PointLight(0xffffff, 10);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    sunLight.castShadow = true;

    sunLight.intensity = 500;

    sunLight.color.setHex(0xffddaa);

    // Load the texture for background
    const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(starsTexture);

// Create materials for each face of the cube
const materials = [
  // Right side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0x333333   }),
  // Left side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0x333333   }),
  // Top side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0x333333   }),
  // Bottom side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide , color: 0x333333  }),
  // Front side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0x333333  }), // Set side to BackSide
  // Back side
  new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0x333333   })
];

// Create a cube geometry
const cubeGeometry = new THREE.BoxGeometry(1000, 1000, 1000);

// Create the cube mesh
const cube = new THREE.Mesh(cubeGeometry, materials);

// Add the cube to the scene
scene.add(cube);

    // Create the sun
    var sunTextureLoader = new THREE.TextureLoader();
    var sunTexture = sunTextureLoader.load(process.env.PUBLIC_URL + '/Textures/sun.jpg')
    var sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    var sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture, emissive: 0xffff00, emissiveIntensity: 1, emissiveMap: sunTexture, });
    var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    //Create Mercury
    var mercuryTextureLoader = new THREE.TextureLoader();
    var mercuryTexture = mercuryTextureLoader.load(process.env.PUBLIC_URL + '/Textures/mercury.jpg')
    var mercuryGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    var mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
    var mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercury.position.set(3, 0, 0);
    scene.add(mercury);

    //Create Venus
    var venusTextureLoader = new THREE.TextureLoader();
    var venusTexture = venusTextureLoader.load(process.env.PUBLIC_URL + '/Textures/venus.jpg')
    var venusGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    var venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
    var venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(5, 0, 0);
    scene.add(venus);

    //Create Earth
    var earthTextureLoader = new THREE.TextureLoader();
    var earthTexture = earthTextureLoader.load(process.env.PUBLIC_URL + '/Textures/earth.jpg')
    var earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    var earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(10, 0, 0);
    scene.add(earth);

    //Create Earth's moon
    var moonTextureLoader = new THREE.TextureLoader();
    var moonTexture = moonTextureLoader.load(process.env.PUBLIC_URL + '/Textures/moon.jpg')
    var moonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    var moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    var moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(1.2, 0, 0);
    earth.add(moon);

    //Create Mars
    var marsTextureLoader = new THREE.TextureLoader();
    var marsTexture = marsTextureLoader.load(process.env.PUBLIC_URL + '/Textures/mars.jpg')
    var marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
    var mars = new THREE.Mesh(marsGeometry, marsMaterial);
    mars.position.set(12, 0, 0);
    scene.add(mars);

    // Create Phobos
    var phobosTextureLoader = new THREE.TextureLoader();
    var phobosTexture = phobosTextureLoader.load(process.env.PUBLIC_URL + '/Textures/phobos.jpg')
    var phobosGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    var phobosMaterial = new THREE.MeshStandardMaterial({ map: phobosTexture });
    var phobos = new THREE.Mesh(phobosGeometry, phobosMaterial);
    phobos.position.set(1, 0, 0);
    mars.add(phobos);

    //Create Jupiter
    var jupiterTextureLoader = new THREE.TextureLoader();
    var jupiterTexture = jupiterTextureLoader.load(process.env.PUBLIC_URL + '/Textures/jupiter.jpg')
    var jupiterGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
    var jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiter.position.set(15, 0, 0);
    scene.add(jupiter);

    // Create Io
    var ioTextureLoader = new THREE.TextureLoader();
    var ioTexture = ioTextureLoader.load(process.env.PUBLIC_URL + '/Textures/io.jpg')
    var ioGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    var ioMaterial = new THREE.MeshStandardMaterial({ map: ioTexture });
    var io = new THREE.Mesh(ioGeometry, ioMaterial);
    io.position.set(1, 0, 0);
    jupiter.add(io);

    //Create Saturn
    var saturnTextureLoader = new THREE.TextureLoader();
    var saturnTexture = saturnTextureLoader.load(process.env.PUBLIC_URL + '/Textures/saturn.jpg')
    var saturnGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
    var saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.position.set(20, 0, 0);
    scene.add(saturn);

    // Create Saturn's rings
    var ringGeometry = new THREE.RingGeometry(0.7, 1.2, 32); // Adjust inner and outer radius as needed
    var ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Color of the rings
      side: THREE.DoubleSide
    });
    var rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    rings.position.set(0, 0, 0);
    saturn.add(rings)

    // Create Titan
    var titanTextureLoader = new THREE.TextureLoader();
    var titanTexture = titanTextureLoader.load(process.env.PUBLIC_URL + '/Textures/titan.jpg')
    var titanGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    var titanMaterial = new THREE.MeshStandardMaterial({ map: titanTexture });
    var titan = new THREE.Mesh(titanGeometry, titanMaterial);
    titan.position.set(1.7, 0, 0);
    saturn.add(titan);

    //Create Uranus
    var uranusTextureLoader = new THREE.TextureLoader();
    var uranusTexture = uranusTextureLoader.load(process.env.PUBLIC_URL + '/Textures/uranus.jpg')
    var uranusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
    var uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranus.position.set(25, 0, 0);
    scene.add(uranus);

    // Create Titania
    var titaniaTextureLoader = new THREE.TextureLoader();
    var titaniaTexture = titaniaTextureLoader.load(process.env.PUBLIC_URL + '/Textures/titania.jpg')
    var titaniaGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    var titaniaMaterial = new THREE.MeshStandardMaterial({ map: titaniaTexture });
    var titania = new THREE.Mesh(titaniaGeometry, titaniaMaterial);
    titania.position.set(1, 0, 0);
    uranus.add(titania);

    //Create Neptune
    var neptuneTextureLoader = new THREE.TextureLoader();
    var neptuneTexture = neptuneTextureLoader.load(process.env.PUBLIC_URL + '/Textures/neptune.jpg')
    var neptuneGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
    var neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptune.position.set(30, 0, 0);
    scene.add(neptune);

    // Create Triton
    var tritonTextureLoader = new THREE.TextureLoader();
    var tritonTexture = tritonTextureLoader.load(process.env.PUBLIC_URL + '/Textures/triton.jpg')
    var tritonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    var tritonMaterial = new THREE.MeshStandardMaterial({ map: tritonTexture });
    var triton = new THREE.Mesh(tritonGeometry, tritonMaterial);
    triton.position.set(1, 0, 0);
    neptune.add(triton);

    // Create orbital paths
    const orbitalPaths = [
      { distance: 2, color: 0xffffff, opacity: 0.05 },
      { distance: 7, color: 0xffffff, opacity: 0.05 },
      { distance: 10, color: 0xffffff, opacity: 0.05 },
      { distance: 12, color: 0xffffff, opacity: 0.05 },
      { distance: 13.5, color: 0xff0000, opacity: 0.25 }, // Asteroid belt
      { distance: 15, color: 0xffffff, opacity: 0.05 },
      { distance: 20, color: 0xffffff, opacity: 0.05 },
      { distance: 25, color: 0xffffff, opacity: 0.05 },
      { distance: 30, color: 0xffffff, opacity: 0.05 }
    ];

    orbitalPaths.forEach(path => {
      const { distance, color, opacity } = path;

      const ringGeometry = new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64);
      const ringMaterial = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    });

    // Animate loop
    function animate() {
      requestAnimationFrame(animate);

      // Update the position of planets in orbit
      updatePlanetPosition(mercury, 2, 1 * speedFactor);
      updatePlanetPosition(venus, 7, 0.8 * speedFactor);
      updatePlanetPosition(earth, 10, 0.6 * speedFactor);
      updatePlanetPosition(mars, 12, 0.5 * speedFactor);
      updatePlanetPosition(jupiter, 15, 0.3 * speedFactor);
      updatePlanetPosition(saturn, 20, 0.2 * speedFactor);
      updatePlanetPosition(uranus, 25, 0.1 * speedFactor);
      updatePlanetPosition(neptune, 30, 0.1 * speedFactor);

      //sun and planet rotation
      sun.rotation.y += 0.01 * globalSpeedFactor;
      mercury.rotation.y += 0.02 * globalSpeedFactor;
      venus.rotation.y += 0.015 * globalSpeedFactor;
      earth.rotation.y += 0.01 * globalSpeedFactor;
      mars.rotation.y += 0.008 * globalSpeedFactor;
      jupiter.rotation.y += 0.003 * globalSpeedFactor;
      saturn.rotation.y += 0.002 * globalSpeedFactor;
      uranus.rotation.y += 0.001 * globalSpeedFactor;
      neptune.rotation.y += 0.001 * globalSpeedFactor;

      //moons rotation
      moon.rotation.y += 0.02 * globalSpeedFactor;
      phobos.rotation.y += 0.03 * globalSpeedFactor;
      io.rotation.y += 0.025 * globalSpeedFactor;
      titan.rotation.y += 0.015 * globalSpeedFactor;
      titania.rotation.y += 0.012 * globalSpeedFactor;
      triton.rotation.y += 0.01 * globalSpeedFactor;

      controls.update();
      renderer.render(scene, camera);
    }

    function updatePlanetPosition(planet, distanceFromSun, orbitSpeed) {
      const time = Date.now() * 0.0001;
      const angle = time * orbitSpeed // / distanceFromSun;

      // Update the position of the planet along its orbit
      planet.position.x = Math.cos(angle) * distanceFromSun;
      planet.position.z = Math.sin(angle) * distanceFromSun;
    }

    animate();

    //clean up on unmount
    return () => {
      renderer.dispose();
    };
  }, [speedFactor]);

  //function to handle speed factor change
  const handleSpeedChange = (increment) => {
    setSpeedFactor((prevSpeedFactor) => Math.max(0.1, Math.min(10, prevSpeedFactor + increment)));
  };

  const resetSpeed = () => {
    setSpeedFactor(1);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSpeedChange(0.5)}>Slow Down</button>
        <button onClick={resetSpeed}>Normal Speed</button>
        <button onClick={() => handleSpeedChange(2)}>Speed Up</button>
      </div>
      <div ref={canvasRef} />
    </div>
  );
};

export default App;
