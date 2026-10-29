import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prima SFA - Sales Force Automation for Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0B1437 0%, #2451F5 60%, #7C5CFF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#FF7A2F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "32px",
              color: "#0B1437",
            }}
          >
            P
          </div>
          <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Prima SFA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#14B8A6",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Sales Force Automation • Sri Lanka
          </span>
          <h1 style={{ fontSize: "56px", fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
            Run your entire field sales on one app.
          </h1>
          <p style={{ fontSize: "24px", color: "#E2E8F0", margin: 0 }}>
            Van Invoicing • Live GPS Tracking • Cheque Collections • 100% Offline Mode
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: "18px",
            color: "#CBD5E1",
          }}
        >
          <span>Prima Management Services (Pvt) Ltd</span>
          <span>https://primasfa.lk</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
