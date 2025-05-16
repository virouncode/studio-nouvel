"use client";

import { ReactNode } from "react";

interface AnimatedLinkProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedLink = ({ children, delay = 0 }: AnimatedLinkProps) => {
  return (
    <div
      className="transform translate-y-4 opacity-0 animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedLink;
