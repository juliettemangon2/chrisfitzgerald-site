import React from "react";
import "../styles/aurora.css"; // make sure this file exists

export function AuroraBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-cl-cream text-cl-ink">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="aurora" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
