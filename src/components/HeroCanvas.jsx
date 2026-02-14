import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture, Float, ContactShadows, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const FloatingShape = ({ position, color, speed, factor }) => {
    return (
        <Float speed={speed} rotationIntensity={factor} floatIntensity={factor}>
            <mesh position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
};

const GeometricField = () => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle rotation for the entire group
        group.current.rotation.x = Math.cos(t / 4) / 8;
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;

        // Mouse interaction (parallax)
        const x = (state.mouse.x * window.innerWidth) / 100;
        const y = (state.mouse.y * window.innerHeight) / 100;
        group.current.rotation.x += y * 0.01;
        group.current.rotation.y += x * 0.01;
    });

    return (
        <group ref={group}>
            {/* Main Central Shape */}
            <FloatingShape position={[2, 0, 0]} color="#f97415" speed={2} factor={1} />
            <FloatingShape position={[-2, -1, 1]} color="#0f172a" speed={1.5} factor={1.5} />
            <FloatingShape position={[0, 2, -2]} color="#ffffff" speed={3} factor={0.5} />

            {/* Background Elements */}
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const HeroCanvas = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-70">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <GeometricField />
                <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
