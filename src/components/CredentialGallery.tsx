
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const CredentialGallery = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create credential cards
    const credentials = [];
    const colors = [0x00ffff, 0x8b5cf6, 0xf59e0b, 0x10b981, 0xef4444];
    
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BoxGeometry(2, 1.2, 0.1);
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[i],
        transparent: true,
        opacity: 0.8
      });
      const credential = new THREE.Mesh(geometry, material);
      
      credential.position.x = (i - 2) * 3;
      credential.position.y = Math.sin(i) * 2;
      credential.rotation.y = i * 0.2;
      
      scene.add(credential);
      credentials.push(credential);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 8;
    camera.position.y = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      credentials.forEach((credential, index) => {
        credential.rotation.y += 0.01 + index * 0.002;
        credential.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            3D Credential Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visualize your skills as interactive NFTs in our immersive 3D space
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-white/10 p-8">
          <div ref={mountRef} className="w-full h-96 rounded-xl overflow-hidden" />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {['Solidity Expert', 'React Ninja', 'DeFi Architect', 'Full-Stack Dev', 'Smart Contract Auditor'].map((skill, index) => (
              <div key={skill} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-sm font-semibold text-white mb-1">{skill}</div>
                <div className="text-xs text-gray-400">NFT Credential</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
