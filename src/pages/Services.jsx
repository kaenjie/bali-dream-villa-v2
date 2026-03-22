import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import villaImage from "../assets/Villa.jpeg";
import BackIcon from "../components/icons/BackIcon";
import SpaIcon from "../components/icons/SpaIcon";
import RoomServiceIcon from "../components/icons/RoomServiceIcon";
import BookIcon from "../components/icons/BookIcon";
import ScrollIcon from "../components/icons/ScrollIcon";
import FacilitiesIcon from "../components/icons/FacilitiesIcon";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  { name: "Spa", subtitle: "Wellness & Ritual", Icon: SpaIcon },
  { name: "Room Service", subtitle: "In-Villa Dining", Icon: RoomServiceIcon },
  { name: "Villa Compendium", subtitle: "Villa Guide", Icon: BookIcon },
  { name: "Villa Rules", subtitle: "Policies & Info", Icon: ScrollIcon },
  {
    name: "Facilities & Activities",
    subtitle: "Pool, Garden & Amenities",
    Icon: FacilitiesIcon,
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto font-cormorant relative overflow-hidden min-h-screen">


      {/* BG PHOTO */}
      <img src={villaImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 overlay-gradient-services" />

      {/* WARM TINT */}
      <div className="absolute inset-0 z-20 radial-tint-home" />

      {/* NOISE */}
      <svg className="absolute inset-0 w-full h-full home-noise z-30" xmlns="http://www.w3.org/2000/svg">
        <filter id="n2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n2)" />
      </svg>

      {/* CONTENT */}
      <div className="relative z-40 min-h-screen flex flex-col px-[20px] pb-[32px]">
        {/* TOP NAV*/}
        <div className={`svc-up hdr ${visible ? "on" : ""} flex justify-between items-center pt-[52px] pb-[8px]`}>
          {[{ action: () => navigate("/"), Icon: BackIcon }].map(
            ({ action, Icon }, i) => (
              <button
                key={i}
                className="nav-btn w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] border-[0.5px] border-[rgba(255,240,210,0.18)] flex items-center justify-center text-[rgba(248,235,210,0.88)] cursor-pointer"
                onClick={action}
              >
                <Icon />
              </button>
            ),
          )}
        </div>

        {/* TITLE */}
        <div className={`svc-up ttl ${visible ? "on" : ""} pt-[28px] px-[4px] pb-[24px]`}>
          <p className="label-jost">
            The Bali Dream Villa
          </p>
          <h1 className="text-[40px] font-[300] text-[rgba(252,244,230,0.97)] tracking-[1.5px] italic leading-[1.15]">
            Our Services
          </h1>
          <div className="w-[32px] h-[0.5px] bg-[rgba(200,168,120,0.42)] mt-[15px]" />
        </div>

        {/* FROSTED PANEL*/}
        <div className="frosted-panel-dark p-[22px_18px] flex-1 rounded-[14px]">
          <div className="grid grid-cols-2 gap-[10px]">
            {services.map((service, i) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                subtitle={service.subtitle}
                Icon={service.Icon}
                isVisible={visible}
                delayClass={`s${i}`}
                onClick={() => {
                  if (service.name === "Spa") {
                    navigate("/spa");
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className={`svc-up ftr ${visible ? "on" : ""} mt-[22px] pt-[18px] border-t border-[rgba(255,240,210,0.1)] flex justify-between`}>
          {["www.thebalidream.com", "+62 361 737 788"].map((t, i) => (
            <p key={i} className="font-jost text-[11px] font-[300] text-[rgba(188,158,112,0.6)] tracking-[0.5px]">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
