export default function ServiceCard({
  name,
  subtitle,
  Icon,
  isVisible,
  delayClass,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`svc-card svc-up ${delayClass} ${isVisible ? "on" : ""}
      min-w-[100px] md:min-w-[130px] 2xl:min-w-[150px]
      py-[12px] md:py-[16px] 2xl:py-[18px]
      px-[8px] md:px-[12px] 2xl:px-[14px]
      flex flex-col items-center justify-center text-center
      gap-[14px] md:gap-[18px]
      rounded-[999px]
      `}
    >
      {/* ICON */}
      <div
        className="
        w-[36px] h-[36px]
        md:w-[44px] md:h-[44px]
        xl:w-[44px] xl:h-[44px]
        2xl:w-[50px] 2xl:h-[50px]
        rounded-full
        bg-[rgba(255,240,210,0.1)]
        border border-[rgba(255,240,210,0.16)]
        flex items-center justify-center
        text-[rgba(218,188,145,0.92)]
        "
      >
        <Icon />
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center">
        <p className="svc-card-name text-[12px] md:text-[16px] 2xl:text-[18px] leading-tight">
          {name}
        </p>
        <p className="svc-card-subtitle text-[10px] md:text-[14px] 2xl:text-[14px] opacity-70 leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
