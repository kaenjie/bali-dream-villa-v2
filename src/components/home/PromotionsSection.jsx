import { useNavigate } from "react-router-dom";
import canggu from "../../assets/promotions/canggu.jpg";
import seminyak from "../../assets/promotions/seminyak.jpg";
import suite from "../../assets/promotions/suite.jpg";

const promosData = [
  {
    tag: "Canggu",
    // title: "Garden\nRelaxation",
    image: canggu,
    path: "/canggu",
  },
  {
    tag: "Seminyak",
    // title: "Breakfast\nSpecial",
    image: seminyak,
    path: "/seminyak",
  },
  {
    tag: "Suite",
    // title: "Tropical\nWalk",
    image: suite,
    path: "/suite",
  },
];

export default function PromotionsSection({ labelStyle, visible }) {
  const navigate = useNavigate();

    return (
    <section className={`bali-up d3 ${visible ? "on" : ""}`}>
      <p className="label-jost">Promotions</p>

      <div className="grid grid-cols-3 gap-[8px]">
        {promosData.map((promo, i) => (
          <div
            key={i}
            className={`promo-tile bg-[rgba(255,245,230,0.07)] border-[0.5px] border-[rgba(255,240,210,0.14)] p-[5px] min-h-[120px] flex flex-col`}
          >
            {/* TEXT */}
            <p className="promo-tag">{promo.tag}</p>

            <p className={`promo-title ${i === 1 ? 'promo-title-strong' : ''}`}>
              {promo.title}
            </p>
            {/* ✅ GAMBAR */}
            <img
              src={promo.image}
              alt={promo.tag}
              className="w-full h-full object-cover rounded-[6px]"
              delayClass={`s${i}`}
              onClick={() => navigate(promo.path)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}