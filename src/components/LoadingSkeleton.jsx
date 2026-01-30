import React from "react";
import "./LoadingSkeleton.css";

export default function LoadingSkeleton({ count = 8 }) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-poster"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-info"></div>
        </div>
      ))}
    </div>
  );
}
