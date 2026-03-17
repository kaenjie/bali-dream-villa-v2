import { forwardRef } from "react";

const FooterCopyright = forwardRef(function FooterCopyright({ visible }, ref) {
  return (
    <div
      ref={ref}
      className={`bali-up d5 ${visible ? "on" : ""}`}
      style={{
        padding: "16px 24px 28px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Jost',sans-serif",
          fontSize: "9.5px",
          letterSpacing: "2.5px",
          color: "rgba(175,148,108,0.45)",
          textTransform: "uppercase",
        }}
      >
        © The Bali Dream Villa
      </p>
    </div>
  );
});

export default FooterCopyright;
