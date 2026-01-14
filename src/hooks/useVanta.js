import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

export const useVanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          // Colors optimized for the "Aayush Kumar" theme
          highlightColor: 0xff5a00, // Subtle Orange
          midtoneColor: 0x1a0a2e,  // Deep Purple
          lowlightColor: 0x0a0a0a, // Near Black
          baseColor: 0x050505,     // Background Black
          blurFactor: 0.8,
          speed: 1.5,
          zoom: 0.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return vantaRef;
};