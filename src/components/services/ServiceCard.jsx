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
      className={`svc-card svc-up ${delayClass} ${isVisible ? "on" : ""} p-[18px] pt-[20px] px-[16px] flex flex-col gap-[14px]`}
      onClick={onClick}
    >
      <div className="icon-wrap w-[42px] h-[42px] rounded-full bg-[rgba(255,240,210,0.1)] border-[0.5px] border-[rgba(255,240,210,0.16)] flex items-center justify-center text-[rgba(218,188,145,0.92)]">
        <Icon />
      </div>
      <div>
        <p className="svc-card-name">{name}</p>
        <p className="svc-card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
