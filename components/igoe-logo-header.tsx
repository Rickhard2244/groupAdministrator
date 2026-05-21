import React from "react";

export function IgoeLogoHeader() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      <img
        src="/gap.png"
        alt="Group Administrators, Ltd."
        style={{ height: 40, width: "auto", display: "block" }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: "4px",
            }}
          >
            <span>☎ 800-323-1683</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>✉ fsa@groupadministrators.com</span>
          </div>
        </div>

        <div style={{ fontSize: "14px", fontWeight: "500", color: "#333" }}>
          Login
        </div>
      </div>
    </header>
  );
}
