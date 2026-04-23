import { ImageResponse } from "next/og";

export const alt = "RADIKAL CORE — Real Power. No Compromise.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hazard stripe top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 20,
            background:
              "repeating-linear-gradient(-45deg, #ffed00 0, #ffed00 12px, #1d1d1b 12px, #1d1d1b 24px)",
          }}
        />
        {/* Hazard stripe bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 20,
            background:
              "repeating-linear-gradient(-45deg, #ffed00 0, #ffed00 12px, #1d1d1b 12px, #1d1d1b 24px)",
          }}
        />

        {/* EST badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
            color: "#888",
            fontSize: 14,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#ffed00" }}>▲</span>
          <span>EST. 2014 — REBORN 2026</span>
          <span style={{ color: "#ffed00" }}>▲</span>
        </div>

        {/* RADIKAL */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#f0f0f0",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          RADIKAL
        </div>

        {/* CORE label */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#ffed00",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginTop: 12,
          }}
        >
          CORE
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 40,
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#888" }}>REAL POWER.</span>
          <span style={{ color: "#ffed00" }}>NO COMPROMISE.</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
