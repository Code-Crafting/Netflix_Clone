function HeroShrimmer() {
  return (
    <div className="max-w-7xl bg-overview h-[720px]">
      <div className="w-1/2 absolute bottom-48 left-24">
        <div className="bg-info max-w-lg h-[48px]"></div>
        <div className="mt-4 bg-info max-w-3xs h-[32px]"></div>
        <div className="flex gap-4 mt-8">
          <div className="bg-info flex items-center gap-2 w-[112px] h-[48px] justify-center rounded-sm hover:cursor-pointer"></div>
          <div className="bg-info flex items-center gap-2 w-[150px] h-[48px] justify-center rounded-sm hover:cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroShrimmer;
