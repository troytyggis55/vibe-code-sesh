import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { World, Body, Box, Vec3, Material, ContactMaterial } from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.css';

function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(6, 6, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf0f0f0);
    const mount = mountRef.current;
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.target.set(0, 0, 0);
    controls.update();

    const world = new World();
    world.gravity.set(0, -9.82, 0);

    const chassisMat = new Material('chassisMat');
    const groundMat = new Material('groundMat');
    const contactMat = new ContactMaterial(chassisMat, groundMat, { friction: 0.001, restitution: 0 });
    world.defaultContactMaterial = contactMat;

    const chassisShape = new Box(new Vec3(1, 0.5, 2));
    const chassisBody = new Body({ mass: 150, material: chassisMat });
    chassisBody.addShape(chassisShape);
    chassisBody.position.set(0, 1, 0);
    chassisBody.angularDamping = 0.5;
    world.addBody(chassisBody);

    const chassisGeometry = new THREE.BoxGeometry(2, 1, 4);
    const chassisMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const chassisMesh = new THREE.Mesh(chassisGeometry, chassisMaterial);
    scene.add(chassisMesh);

    const groundShape = new Box(new Vec3(50, 0.1, 50));
    const groundBody = new Body({ mass: 0, material: groundMat });
    groundBody.addShape(groundShape);
    groundBody.position.set(0, -1, 0);
    world.addBody(groundBody);

    const groundGeometry = new THREE.BoxGeometry(100, 0.2, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.position.y = -1;
    scene.add(groundMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const keys: Record<string, boolean> = { forward: false, backward: false, left: false, right: false };
    const driveSpeed = 10;
    const turnSpeed = 5;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowUp') keys.forward = true;
      if (e.code === 'ArrowDown') keys.backward = true;
      if (e.code === 'ArrowLeft') keys.left = true;
      if (e.code === 'ArrowRight') keys.right = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowUp') keys.forward = false;
      if (e.code === 'ArrowDown') keys.backward = false;
      if (e.code === 'ArrowLeft') keys.left = false;
      if (e.code === 'ArrowRight') keys.right = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let goalMesh: THREE.Mesh;
    let goalPosition: THREE.Vector3 = new THREE.Vector3();
    const spawnGoal = () => {
      if (goalMesh) scene.remove(goalMesh);
      const range = 45;
      const x = (Math.random() - 0.5) * 2 * range;
      const z = (Math.random() - 0.5) * 2 * range;
      goalPosition.set(x, 0.5, z);
      const geo = new THREE.SphereGeometry(1, 16, 16);
      const mat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      goalMesh = new THREE.Mesh(geo, mat);
      goalMesh.position.copy(goalPosition);
      scene.add(goalMesh);
    };
    spawnGoal();

    let frameId: number;
    const animate = () => {
      world.step(1 / 60);

      const time = performance.now() / 1000;
      const hue = (time * 40) % 360;
      const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
      chassisMaterial.color.copy(color);
      const dist = chassisBody.position.distanceTo(new Vec3(goalPosition.x, goalPosition.y, goalPosition.z));
      if (dist < 1.5) {
          setScore(s => s + 1);
          spawnGoal();
      }

      const forwardVec = new Vec3(0, 0, -1);
      const worldForward = new Vec3();
      chassisBody.quaternion.vmult(forwardVec, worldForward);
      if (keys.forward) {
        chassisBody.velocity.x = worldForward.x * driveSpeed;
        chassisBody.velocity.z = worldForward.z * driveSpeed;
      } else if (keys.backward) {
        chassisBody.velocity.x = -worldForward.x * driveSpeed;
        chassisBody.velocity.z = -worldForward.z * driveSpeed;
      } else {
        chassisBody.velocity.x *= 0.95;
        chassisBody.velocity.z *= 0.95;
      }
      if (keys.left) chassisBody.angularVelocity.y = turnSpeed;
      else if (keys.right) chassisBody.angularVelocity.y = -turnSpeed;
      else chassisBody.angularVelocity.y *= 0.9;

      chassisMesh.position.copy(chassisBody.position as unknown as THREE.Vector3);
      chassisMesh.quaternion.copy(chassisBody.quaternion as unknown as THREE.Quaternion);

      groundMesh.position.y = -1;

      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (mount) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fullscreen-container">
     <div className="score">Score: {score}</div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default App;
