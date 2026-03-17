export default function ServiceCard({
  name,
  subtitle,
  Icon,
  isVisible,
  delayClass,
  onClick,
}) {
  return (
    <div
      className={`svc-card svc-up ${delayClass} ${isVisible ? "on" : ""}`}
      onClick={onClick}
      style={{
        padding: "20px 16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        className="icon-wrap"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(255,240,210,0.1)",
          border: "0.5px solid rgba(255,240,210,0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(218,188,145,0.92)",
        }}
      >
        <Icon />
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "12.5px",
            fontWeight: "500",
            color: "rgba(250,242,228,0.97)",
            letterSpacing: "0.3px",
            marginBottom: "4px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "10.5px",
            fontWeight: "300",
            color: "rgba(198,168,125,0.82)",
            letterSpacing: "0.5px",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
