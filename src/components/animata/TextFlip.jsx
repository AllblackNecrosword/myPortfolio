"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function TextFlip() {
  const words = useMemo(
    () => ["clean code", "efficient code", "continuous learning"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const tallestRef = useRef(null);

  // Set max height based on tallest word
  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;
      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current.removeChild(span);
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  // Cycle words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="box-content flex gap-4 text-3xl font-semibold">
      <div
        ref={tallestRef}
        className="relative overflow-hidden transition-all duration-500"
        style={{ minWidth: "200px" }} >
        <span key={currentIndex} className="block animate-flip-word">
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
}
