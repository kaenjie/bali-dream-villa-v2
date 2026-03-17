export default function InfoIconCircle({ children }) {
  return (
    <div
      style={{
        width: "31px",
        height: "31px",
        borderRadius: "50%",
        background: "rgba(255,240,210,0.08)",
        border: "0.5px solid rgba(255,240,210,0.16)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(200,168,120,0.85)",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}
