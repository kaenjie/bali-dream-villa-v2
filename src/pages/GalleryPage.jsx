// src/pages/GalleryPage.jsx

import { useNavigate } from "react-router-dom";
import BackIcon from "../components/icons/BackIcon";

export default function GalleryPage({ title, images }) {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full font-serif bg-gradient-to-br from-[#6b5344] to-[#4a3728]">
      {/* NAVBAR */}
      <div className="sticky top-0 z-10 flex items-center gap-3 p-3 bg-black/50 backdrop-blur-sm">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-[#fff0d233] text-[#f8ebd2]"
        >
          <BackIcon />
        </button>

        <h1 className="text-white text-2xl tracking-wide">{title}</h1>
      </div>

      {/* GALLERY */}
      <div className="flex flex-col">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} ${i + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
