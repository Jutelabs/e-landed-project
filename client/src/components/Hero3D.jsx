import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleWave = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#D4AF37"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Hero3D = ({ title, subtitle, buttons }) => {
    const [is3DSupported, setIs3DSupported] = useState(true);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setIs3DSupported(false);
            }
        } catch (e) {
            setIs3DSupported(false);
        }
    }, []);

    return (
        <div className="relative w-full h-[85vh] overflow-hidden bg-black">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Use the asset we copied, or fallback to a placeholder if it failed */}
                <img
                    src="/src/assets/hero-bg.png"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop"; }}
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* 3D Layer - Only render if supported to avoid crash */}
            {is3DSupported && (
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 1] }} fallback={null}>
                        <ParticleWave />
                    </Canvas>
                </div>
            )}

            {/* Content Layer */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl pt-20">
                    {/* Premium Title */}
                    <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight mb-6 drop-shadow-2xl">
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 font-light mb-10 tracking-wide max-w-2xl mx-auto drop-shadow-xl">
                        {subtitle}
                    </p>

                    <div className="flex gap-6 justify-center">
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3D;
