import React from 'react'

const HeroLights = () => {
    return (
        <>
            <ambientLight intensity={2} color="green" />
            <directionalLight position={[3, 3, 3]} intensity={50} color="white"/>
            <spotLight position={[2, -2, 2]} intensity={20} angle={10} penumbra={1} color="red" />
            <spotLight position={[2, -4, 6]} intensity={11} angle={10} penumbra={1} color="blue" />
            <pointLight position={[0, 0, 0]} intensity={10} color="violet" />
        </>
    )
}
export default HeroLights
