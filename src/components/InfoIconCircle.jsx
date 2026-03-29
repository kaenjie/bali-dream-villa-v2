export default function InfoIconCircle({ children }) {
  return (
    <div
      className="w-[36px] h-[36px]
        md:w-[44px] md:h-[44px]
        xl:w-[44px] xl:h-[44px]
        2xl:w-[50px] 2xl:h-[50px] rounded-full bg-[rgba(255,240,210,0.08)] border-[0.5px] border-[rgba(255,240,210,0.16)] flex items-center justify-center text-[rgba(200,168,120,0.85)] shrink-0"
    >
      {children}
    </div>
  );
}
