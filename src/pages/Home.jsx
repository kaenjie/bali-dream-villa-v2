import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import villaImage from "../assets/Villa.jpeg";
import logo from "../assets/logo.webp";

const PhoneIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 8.18 8.18l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const promos = [
    { title: "Garden\nRelaxation", tag: "Nature" },
    { title: "Breakfast\nSpecial", tag: "Dining" },
    { title: "Tropical\nWalk", tag: "Adventure" },
  ];

  const label = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "9.5px",
    letterSpacing: "3px",
    color: "rgba(205,178,138,0.82)",
    textTransform: "uppercase",
    marginBottom: "14px",
  };

  return (
    <div
      className="w-full max-w-md mx-auto"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .bali-up { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .bali-up.on { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.08s} .d2{transition-delay:.18s}
        .d3{transition-delay:.3s}  .d4{transition-delay:.42s}
        .d5{transition-delay:.54s}

        .svc-row {
          background: rgba(255,245,230,0.07);
          border: 0.5px solid rgba(255,240,210,0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 3px;
          transition: background .3s ease, transform .25s ease;
        }
        .svc-row:hover { background: rgba(255,245,230,0.13); transform:translateX(3px); }

        .promo-tile {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 3px;
          overflow: hidden;
          transition: transform .4s ease;
          cursor: pointer;
        }
        .promo-tile:hover { transform: translateY(-4px); }

        .ghost-btn {
          position:relative; display:inline-flex; align-items:center; gap:10px;
          background:none; border:none; cursor:pointer; padding:4px 0;
          font-family:'Jost',sans-serif; font-size:10.5px; letter-spacing:2.5px;
          text-transform:uppercase; color:rgba(235,210,175,0.9);
          transition:color .3s ease;
        }
        .ghost-btn::after {
          content:''; position:absolute; bottom:0; left:0;
          height:0.5px; width:0; background:rgba(220,185,140,0.8);
          transition:width .4s ease;
        }
        .ghost-btn:hover::after { width:100%; }
        .ghost-btn:hover { color:rgba(255,238,210,1); }
      `}</style>

      {/* BG PHOTO */}
      <img
        src={villaImage}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(168deg, rgba(18,9,2,0.55) 0%, rgba(14,7,1,0.72) 35%, rgba(10,5,1,0.88) 100%)",
        }}
      />

      {/* WARM RADIAL TINT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at 65% 5%, rgba(140,90,30,0.22) 0%, transparent 55%)",
        }}
      />

      {/* NOISE */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.022,
          zIndex: 3,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="n">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          className={`bali-up ${visible ? "on" : ""}`}
          style={{
            padding: "52px 24px 26px",
            borderBottom: "0.5px solid rgba(255,240,210,0.12)",
            textAlign: "center",
          }}
        >
          <img
            src={logo}
            alt="The Bali Dream"
            style={{
              height: "70px",
              margin: "0 auto",
              display: "block",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              width: "34px",
              height: "0.5px",
              background: "rgba(200,168,120,0.42)",
              margin: "18px auto 0",
            }}
          />
        </div>

        {/* FROSTED CONTENT PANEL*/}
        <div
          style={{
            margin: "20px 16px 16px",
            borderRadius: "14px",
            background: "rgba(12,6,1,0.52)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "0.5px solid rgba(255,240,210,0.1)",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "28px 20px 24px",
            gap: "36px",
          }}
        >
          {/* WELCOME */}
          <section className={`bali-up d1 ${visible ? "on" : ""}`}>
            <p style={label}>Welcome</p>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "300",
                color: "rgba(252,244,230,0.97)",
                lineHeight: "1.25",
                marginBottom: "15px",
                fontStyle: "italic",
              }}
            >
              A Peaceful Sanctuary
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "27px",
                }}
              >
                in the Heart of Bali
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "13px",
                fontWeight: "300",
                color: "rgba(225,205,172,0.88)",
                lineHeight: "1.9",
                marginBottom: "20px",
              }}
            >
              Welcome to The Bali Dream Villa — a retreat designed for comfort,
              privacy, and unforgettable moments. Every detail is crafted for
              your journey.
            </p>
            <button className="ghost-btn" onClick={() => navigate("/services")}>
              Contact Us <ArrowRight />
            </button>
          </section>

          {/* SERVICES */}
          <section className={`bali-up d2 ${visible ? "on" : ""}`}>
            <p style={label}>Services</p>
            <button
              className="svc-row"
              onClick={() => navigate("/services")}
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

          {/* PROMOTION */}
          <section className={`bali-up d3 ${visible ? "on" : ""}`}>
            <p style={label}>Promotions</p>
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
                        i === 1
                          ? "rgba(190,148,88,0.88)"
                          : "rgba(200,172,132,0.65)",
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
                        i === 1
                          ? "rgba(250,238,215,0.97)"
                          : "rgba(245,235,218,0.92)",
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

          {/* CONTACT */}
          <section className={`bali-up d4 ${visible ? "on" : ""}`}>
            <p style={label}>Contact</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "11px" }}
            >
              {[
                { Icon: PhoneIcon, text: "+62 361 737 788" },
                { Icon: MailIcon, text: "info@thebalidreamvilla.com" },
              ].map(({ Icon, text }, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
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
                    <Icon />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "300",
                      color: "rgba(230,210,180,0.9)",
                      wordBreak: "break-all",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div
          className={`bali-up d5 ${visible ? "on" : ""}`}
          style={{ padding: "16px 24px 28px", textAlign: "center" }}
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
      </div>
    </div>
  );
}
