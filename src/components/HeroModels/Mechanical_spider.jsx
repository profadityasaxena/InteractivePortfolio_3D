import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial, Color } from 'three'

export function Mechanical_spider(props) {
  const { nodes } = useGLTF('/models/mechanical_spider.glb')

  // Define a strong, forged metal look
  const steelMaterial = new MeshStandardMaterial({
    color: new Color(0x555555),   // Steel grey
    metalness: 1.0,               // Fully metallic
    roughness: 0.4,               // Slightly rough for realism
    envMapIntensity: 0.9,         // Reflections from environment
    reflectivity: 0.8             // Helps simulate polished strength
  })

  return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_3.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_4.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_5.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_6.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_7.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_8.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_9.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_10.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_11.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_12.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_13.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_14.geometry} material={steelMaterial} />
          <mesh geometry={nodes.Object_15.geometry} material={steelMaterial} />
        </group>
      </group>
  )
}

useGLTF.preload('/models/mechanical_spider.glb')
