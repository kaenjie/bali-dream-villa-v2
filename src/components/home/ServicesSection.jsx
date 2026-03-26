import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import SpaIcon from "../icons/SpaIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import BookIcon from "../icons/BookIcon";
import ScrollIcon from "../icons/ScrollIcon";
import FacilitiesIcon from "../icons/FacilitiesIcon";
import ServiceCard from "../services/ServiceCard";

const services = [
  { name: "Spa", subtitle: "Wellness & Ritual", Icon: SpaIcon, path: "/spa" },
  {
    name: "Room Service",
    subtitle: "In-Villa Dining",
    Icon: RoomServiceIcon,
    path: "/room-service",
  },
  {
    name: "Villa Compendium",
    subtitle: "Villa Guide",
    Icon: BookIcon,
    path: "/compendium",
  },
  {
    name: "Villa Rules",
    subtitle: "Policies & Info",
    Icon: ScrollIcon,
    path: "/rules",
  },
  {
    name: "Facilities & Activities",
    subtitle: "Pool, Garden & Amenities",
    Icon: FacilitiesIcon,
    path: "/facilities",
  },
];

export default function ServicesSection({ labelStyle, visible = true }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = el.scrollLeft / maxScroll;
    setScrollProgress(progress);
  };

  return (
    <section className={`bali-up d2 ${visible ? "on" : ""}`}>
      <p className="label-jost">Services</p>

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-[12px] overflow-x-auto no-scrollbar pt-[8px]"
      >
        {services.map((service, i) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            subtitle={service.subtitle}
            Icon={service.Icon}
            isVisible={true}
            delayClass={`s${i}`}
            onClick={() => navigate(service.path)}
          />
        ))}
      </div>

      {/* Slider */}
      <div className="mt-4 flex justify-center">
        <div className="relative w-[60px] h-[4px] bg-[#e7dfd7] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#8b7d6b] rounded-full transition-all duration-200"
            style={{
              width: `${
                (scrollRef.current?.clientWidth /
                  scrollRef.current?.scrollWidth) *
                85
              }%`,
              transform: `translateX(${
                scrollProgress *
                (80 -
                  (scrollRef.current?.clientWidth /
                    scrollRef.current?.scrollWidth) *
                    80)
              }px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
