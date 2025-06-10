
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const FloatingObjects = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric objects
    const objects = [];
    
    // Create various 3D shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.6),
      new THREE.DodecahedronGeometry(0.3),
      new THREE.TorusGeometry(0.3, 0.1, 8, 16),
      new THREE.ConeGeometry(0.3, 0.8, 6),
    ];

    const colors = [0x00ffff, 0x8b5cf6, 0xf59e0b, 0x10b981, 0xef4444, 0xff6b9d];
    
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.6,
        shininess: 100
      });
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      scene.add(mesh);
      objects.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00ffff, 0.5, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      objects.forEach((obj, index) => {
        // Rotation
        obj.mesh.rotation.x += obj.rotationSpeed.x;
        obj.mesh.rotation.y += obj.rotationSpeed.y;
        obj.mesh.rotation.z += obj.rotationSpeed.z;
        
        // Floating motion
        obj.mesh.position.y += Math.sin(Date.now() * obj.floatSpeed + obj.floatOffset) * 0.005;
        obj.mesh.position.x += Math.cos(Date.now() * obj.floatSpeed * 0.5 + obj.floatOffset) * 0.003;
      });
      
      // Camera gentle movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      objects.forEach(obj => {
        obj.mesh.geometry.dispose();
        obj.mesh.material.dispose();
      });
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-5 pointer-events-none opacity-30"
      style={{ zIndex: -5 }}
    />
  );
};

