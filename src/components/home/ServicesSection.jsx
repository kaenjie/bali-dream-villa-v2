import { useNavigate } from "react-router-dom";
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

  return (
    <section className={`bali-up d2 ${visible ? "on" : ""}`}>
      <p className="label-jost">Services</p>

      <div className="flex gap-[12px] overflow-x-auto no-scrollbar pt-[8px]">
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
    </section>
  );
}
