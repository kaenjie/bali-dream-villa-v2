import InfoIconCircle from "../InfoIconCircle";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

export default function HeadOfficeSection({ labelStyle, visible }) {
  return (
    <section className="bali-up d5 on border-t border-[rgba(255,240,210,0.08)] pt-[32px]">
      <p className="label-jost text-[10px] md:text-[13px] xl:text-[14px] 2xl:text-[14px]">
        Head Office
      </p>
      <div className="flex flex-col md:flex-row gap-[16px] md:gap-[60px] xl:gap-[80px] 2xl:gap-[80px] md:pt-[8px]">
        <div className="flex items-center gap-[12px]">
          <InfoIconCircle>
            <MailIcon />
          </InfoIconCircle>
          <p className="ho-contact text-[12px] md:text-[16px] 2xl:text-[18px]">
            info@thebalidreamvilla.com
          </p>
        </div>

        <div className="flex items-center gap-[12px]">
          <InfoIconCircle>
            <PhoneIcon />
          </InfoIconCircle>
          <div className="flex flex-col gap-[4px] md:flex-row md:gap-[20px]">
            <p className="ho-contact text-[12px] md:text-[16px] 2xl:text-[18px]">
              +62 361 737788
            </p>
            <p className="hidden md:block text-[12px] md:text-[16px] 2xl:text-[18px]">
              |
            </p>
            <p className="ho-contact text-[12px] md:text-[16px] 2xl:text-[18px]">
              +62 878 0651 4620
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
