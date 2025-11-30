"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  useAnimations,
} from "@react-three/drei";

function BearModel() {
  const { scene, animations } = useGLTF("/bear.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        const m = obj.material;
        m.roughness = 0;
        m.metalness = 1;
        m.clearcoat = 1;
        m.clearcoatRoughness = 0.1;
        m.ior = 1.5;
        m.thickness = 0.8;
        m.transmission = 0.9;
        m.needsUpdate = true;
      }
    });

    const firstAction = animations[0] && actions[animations[0].name];
    if (firstAction) {
      firstAction.reset().play();
    }

    return () => {
      if (firstAction) {
        firstAction.stop();
      }
    };
  }, [scene, animations, actions]);

  return <primitive object={scene} />;
}

export function Bear3D() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [1.5, 1.5, 2.5], fov: 40 }}
    >
      <Environment files="/hdr.hdr" background={false} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 5]} intensity={1} />

      <Center>
        <BearModel />
      </Center>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
        minAzimuthAngle={-Math.PI / 4} // límite izquierda  (-45º)
        maxAzimuthAngle={Math.PI / 4} // límite derecha   (+45º)
      />
    </Canvas>
  );
}

useGLTF.preload("/bear.glb");
