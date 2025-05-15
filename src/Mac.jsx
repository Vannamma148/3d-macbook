import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

export const Mac = () => {
    let model = useGLTF("./mac.glb");
    let tex = useTexture("./red.jpg");
    let meshes ={};
    model.scene.traverse(e=>{
       
            meshes[e.name] =e;
       
    })
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map =tex;
    meshes.matte.material.emissiveIntensity =0;
    meshes.matte.material.metalness =0; 
    meshes.matte.material.roughness =1; 
 // Adjust scale (x, y, z) independently
  const scale = [0.7, 0.7, 1]; // x, y, z



    let data =useScroll();

    useFrame((state, delta)=>{
        meshes.screen.rotation.x= THREE.MathUtils.degToRad(170 - data.offset * 75);
    })
  return (
    <group position={[0, -10, 20]} scale={scale}>
    <primitive object={model.scene}/>
    </group>
  )
}
