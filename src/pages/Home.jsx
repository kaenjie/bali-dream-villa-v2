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
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const promos = [
    {
      title: "Garden\nRelaxation",
      tag: "Nature",
      image: canggu,
    },
    {
      title: "Breakfast\nSpecial",
      tag: "Dining",
      image: seminyak,
    },
    {
      title: "Tropical\nWalk",
      tag: "Adventure",
      image: suite,
    },
  ];



  return (
    <div className="w-full max-w-md mx-auto font-cormorant relative overflow-hidden min-h-screen">


      {/* BG PHOTO */}
      <img src={villaImage} alt="" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 overlay-gradient-home" />

      {/* WARM RADIAL TINT */}
      <div className="absolute inset-0 z-20 radial-tint-home" />

      {/* NOISE */}
      <svg className="absolute inset-0 w-full h-full home-noise z-30" xmlns="http://www.w3.org/2000/svg">
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
      <div className="relative z-40 min-h-screen flex flex-col">
        {/* HEADER */}
        <div className={`bali-up ${visible ? "on" : ""} pt-[40px] pb-[26px] px-[24px] border-b border-[rgba(255,240,210,0.12)] text-center`}>
          <img src={logo} alt="The Bali Dream" className="h-[70px] mx-auto block object-contain" />
        </div>

        {/* FROSTED CONTENT PANEL*/}
        <div className="m-[20px_16px_16px] frosted-panel flex flex-col flex-1 p-[28px_20px_24px] gap-[36px]">
          <ServicesSection visible={visible} />

          <PromotionsSection
            visible={visible}
            promos={promos}
          />

          <HeadOfficeSection visible={visible} />

          <FollowUsSection visible={visible} />
        </div>

        {/* FOOTER */}
        <FooterCopyright ref={footerRef} visible={visible} />
      </div>
    </div>
  );
}
