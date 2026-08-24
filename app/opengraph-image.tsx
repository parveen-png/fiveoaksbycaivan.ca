import { ImageResponse } from "next/og";

export const alt = "Five Oaks by Caivan in Oakville — independent project updates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#38bdf8",
          }}
        >
          Coming Soon • Oakville, Ontario
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>Five Oaks</div>
          <div style={{ marginTop: 12, fontSize: 32, color: "#e2e8f0" }}>
            Caivan townhomes and detached homes
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#C9D6DC",
            maxWidth: 820,
          }}
        >
          Independent project information. Not the official Caivan or Five Oaks
          website.
        </div>
      </div>
    ),
    size,
  );
}
