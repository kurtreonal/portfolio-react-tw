import React, { useEffect } from "react";

export default function ParticleBackground() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "fixed inset-0 -z-10 overflow-hidden";
    document.body.appendChild(container);

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full opacity-70 blur-[1px]";
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const color = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        backgroundColor: color,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      });
      container.appendChild(particle);
    }

    return () => container.remove();
  }, []);

  return null;
}
