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
      className={`svc-card svc-up ${delayClass} ${
        isVisible ? "on" : ""
      } min-w-[100px] py-[12px] px-[8px] flex flex-col items-center justify-center text-center gap-[14px] rounded-[999px]`}
    >
      {/* ICON */}
      <div className="w-[36px] h-[36px] rounded-full bg-[rgba(255,240,210,0.1)] border border-[rgba(255,240,210,0.16)] flex items-center justify-center text-[rgba(218,188,145,0.92)]">
        <Icon />
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-center">
        <p className="svc-card-name text-[12px] leading-tight">{name}</p>
        <p className="svc-card-subtitle text-[10px] opacity-70 leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
