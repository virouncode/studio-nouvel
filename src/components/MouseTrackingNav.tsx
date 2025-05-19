"use client";

import { useEffect, useRef, useState } from "react";

interface MouseTrackingNavProps {
  children: React.ReactNode;
  timeout?: number;
}

const MouseTrackingNav = ({
  children,
  timeout = 3000,
}: MouseTrackingNavProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show the nav on initial load, then hide after timeout
    setIsVisible(true);

    // Initial timer to hide the nav after timeout
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    // Handle mouse movement
    const handleMouseMove = () => {
      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Show the nav
      setIsVisible(true);

      // Set a new timer to hide the nav after timeout
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, timeout);
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeout]); // Only depend on timeout, not on the timer state

  return (
    <div
      className={`transition-opacity duration-500 h-full w-full ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
};

export default MouseTrackingNav;
