import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function Mechanical_spider(props) {
  const { nodes } = useGLTF('/models/mechanical_spider.glb')

  // Define a custom metallic material
  const metalMaterial = new MeshStandardMaterial({
    color: 0x888888,      // Slightly dark silver tone
    metalness: 1,         // Fully metallic
    roughness: 0.2,       // Low roughness for a shiny surface
    envMapIntensity: 1.0  // Increase reflection if environment map is used
  })

  return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_3.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_4.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_5.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_6.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_7.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_8.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_9.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_10.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_11.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_12.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_13.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_14.geometry} material={metalMaterial} />
          <mesh geometry={nodes.Object_15.geometry} material={metalMaterial} />
        </group>
      </group>
  )
}

useGLTF.preload('/models/mechanical_spider.glb')
