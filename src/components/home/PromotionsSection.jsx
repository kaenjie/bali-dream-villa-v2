import { useNavigate } from "react-router-dom";
import canggu from "../../assets/promotions/canggu.jpg";
import seminyak from "../../assets/promotions/seminyak.jpg";
import suite from "../../assets/promotions/suite.jpg";

const promosData = [
  {
    tag: "Canggu",
    image: canggu,
    path: "/canggu",
  },
  {
    tag: "Seminyak",
    image: seminyak,
    path: "/seminyak",
  },
  {
    tag: "Suite",
    image: suite,
    path: "/suite",
  },
];

export default function PromotionsSection({ labelStyle, visible }) {
  const navigate = useNavigate();

  return (
    <section className="bali-up d5 on md:pt-6">
      <p className="label-jost text-[10px] md:text-[13px] xl:text-[14px] 2xl:text-[14px]">
        Promotions
      </p>

      <div className="grid grid-cols-3 gap-[8px] md:gap-[12px] xl:gap-[14px] 2xl:gap-[16px] md:pt-[8px]">
        {promosData.map((promo, i) => (
          <div
            key={i}
            className={`promo-tile bg-[rgba(255,245,230,0.07)] border-[0.5px] border-[rgba(255,240,210,0.14)] p-[8px] xl:p-[12px] 2xl:p-[14px] min-h-[120px] flex flex-col`}
          >
            {/* TAG */}
            <p className="promo-tag text-center pb-[5px] xl:pb-[8px] 2xl:pb-[10px] text-[8px] md:text-[12px] xl:text-[13px] 2xl:text-[14px]">
              {promo.tag}
            </p>

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
