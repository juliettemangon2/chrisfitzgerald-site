import React from "react";
import "../styles/aurora.css";

export function AuroraBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-cl-ink text-cl-cream">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="aurora" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
