function HeroShrimmer() {
  return (
    <div className="max-w-7xl bg-overview md:h-[700px] 512px:h-[500px] 448px:h-[420px] h-[370px]">
      <div className="512px:w-1/2 w-[70%] absolute md:bottom-48 md:left-24 448px:bottom-32 448px:left-12 bottom-24 left-8">
        <div className="bg-info max-w-lg md:h-[48px] h-[36px]"></div>
        <div className="md:mt-4 mt-2 bg-info max-w-3xs md:h-[32px] h-[20px]"></div>
        <div className="flex gap-4 mt-8">
          <div className="bg-info flex items-center gap-2 md:w-[112px] md:h-[48px] w-[96px] h-[36px] justify-center rounded-sm hover:cursor-pointer"></div>
          <div className="bg-info flex items-center gap-2 md:w-[150px] w-[125px] md:h-[48px] h-[36px] justify-center rounded-sm hover:cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroShrimmer;
