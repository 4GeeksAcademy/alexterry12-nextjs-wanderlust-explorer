"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

export default function RevealOnScroll({ children, className = "" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal-enter ${isVisible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
