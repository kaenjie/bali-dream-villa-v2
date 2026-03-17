import SparkleIcon from "../icons/SparkleIcon";
import ArrowRight from "../icons/ArrowRight";

export default function ServicesSection({
  labelStyle,
  visible,
  onNavigateServices,
}) {
  return (
    <section className={`bali-up d2 ${visible ? "on" : ""}`}>
      <p style={labelStyle}>Services</p>
      <button
        className="svc-row"
        onClick={onNavigateServices}
        style={{
          width: "100%",
          padding: "17px 18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(255,240,210,0.1)",
            border: "0.5px solid rgba(255,240,210,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(218,185,140,0.9)",
            flexShrink: 0,
          }}
        >
          <SparkleIcon />
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'Jost',sans-serif",
              fontSize: "12.5px",
              fontWeight: "500",
              color: "rgba(250,242,228,0.97)",
              marginBottom: "4px",
              letterSpacing: "0.3px",
            }}
          >
            Explore Our Services
          </p>
          <p
            style={{
              fontFamily: "'Jost',sans-serif",
              fontSize: "11px",
              color: "rgba(200,172,132,0.78)",
              letterSpacing: "0.4px",
            }}
          >
            Spa · Room Service · Facilities · Activities
          </p>
        </div>
        <div style={{ color: "rgba(195,168,128,0.55)" }}>
          <ArrowRight />
        </div>
      </button>
    </section>
  );
}
