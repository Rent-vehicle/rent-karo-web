// components/Overlay.tsx
"use client";

import React from "react";

interface OverlayProps {
  isVisible: boolean;
  onClick?: () => void;
  blur?: boolean;
  opacity?: number;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick, blur = true, opacity = 0.3 }) => {
  if (!isVisible) return null;

  return (
    <div
      onClick={onClick}
      className={`fixed h-screen w-screen inset-0 z-50 ${blur ? "backdrop-blur-sm" : ""}`}
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    />
  );
};

export default Overlay;
