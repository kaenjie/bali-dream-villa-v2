import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import villaImage from "../assets/Villa.jpeg";
import logo from "../assets/logo.webp";
import ServicesSection from "../components/home/ServicesSection";
import PromotionsSection from "../components/home/PromotionsSection";
import HeadOfficeSection from "../components/home/HeadOfficeSection";
import FollowUsSection from "../components/home/FollowUsSection";
import FooterCopyright from "../components/FooterCopyright";
import canggu from "../assets/promotions/canggu.jpg";
import seminyak from "../assets/promotions/seminyak.jpg";
import suite from "../assets/promotions/suite.jpg";

export default function Home() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto font-cormorant bg-[#1a1208] min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[260px] w-fully">
        <img
          src={villaImage}
          alt=""
          className="w-full h-full object-cover object-[center_30%]"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#1a1208]" />

        {/* subtle warm tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(212,175,55,0.15),transparent_60%)]" />

        {/* LOGO */}
        <div className="absolute inset-0 flex items-start justify-center pt-10">
          <img
            src={logo}
            alt="The Bali Dream"
            className="h-[60px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Sheet */}
      <div
        className={`relative -mt-12 z-10 rounded-t-[26px] bg-[rgba(18,10,4,0.88)] backdrop-blur-xl border border-[rgba(255,240,210,0.12)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] px-5 pt-6 pb-7 flex flex-col gap-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
      >
        <ServicesSection visible={visible} />
        <PromotionsSection visible={visible} />
        <HeadOfficeSection visible={visible} />
        <FollowUsSection visible={visible} />

        <FooterCopyright ref={footerRef} visible={visible} />
      </div>
    </div>
  );
}
