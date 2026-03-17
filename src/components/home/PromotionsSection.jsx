export default function PromotionsSection({ labelStyle, visible, promos }) {
  return (
    <section className={`bali-up d3 ${visible ? "on" : ""}`}>
      <p style={labelStyle}>Promotions</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "8px",
        }}
      >
        {promos.map((promo, i) => (
          <div
            key={i}
            className="promo-tile"
            style={{
              background:
                i === 1 ? "rgba(20,10,2,0.82)" : "rgba(255,245,230,0.07)",
              border:
                i === 1
                  ? "0.5px solid rgba(170,120,55,0.38)"
                  : "0.5px solid rgba(255,240,210,0.14)",
              padding: "20px 12px 16px",
              minHeight: "92px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "8.5px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color:
                  i === 1 ? "rgba(190,148,88,0.88)" : "rgba(200,172,132,0.65)",
                marginBottom: "8px",
              }}
            >
              {promo.tag}
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "300",
                fontStyle: "italic",
                color:
                  i === 1 ? "rgba(250,238,215,0.97)" : "rgba(245,235,218,0.92)",
                lineHeight: "1.4",
                whiteSpace: "pre-line",
              }}
            >
              {promo.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
