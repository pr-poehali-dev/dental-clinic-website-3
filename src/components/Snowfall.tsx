import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 30; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 5,
        opacity: Math.random() * 0.6 + 0.3,
        size: Math.random() * 4 + 2,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 text-white/80"
          style={{
            left: `${flake.left}%`,
            animation: `snowfall ${flake.animationDuration}s linear infinite`,
            opacity: flake.opacity,
            fontSize: `${flake.size}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❄
        </div>
      ))}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
          }
        }
      `}</style>
    </div>
  );
}
