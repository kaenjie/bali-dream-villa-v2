import { forwardRef } from "react";

const FooterCopyright = forwardRef(function FooterCopyright({ visible }, ref) {
  return (
    <div
      ref={ref}
      className={`bali-up d5 ${visible ? "on" : ""} py-[16px] px-[24px] pb-[28px] text-center`}
    >
      <p className="font-jost text-[9.5px] tracking-[2.5px] text-[rgba(175,148,108,0.45)] uppercase">
        © The Bali Dream Villa
      </p>
    </div>
  );
});

export default FooterCopyright;
