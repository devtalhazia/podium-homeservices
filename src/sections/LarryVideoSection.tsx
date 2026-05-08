export default function LarryVideoSection() {
  return (
    <section className="flex w-full flex-col items-center justify-start gap-[24px] bg-[#f0f0f3] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-start gap-[24px] pb-[24px] desktop:w-[80%]">
        <h2 className="m-0 break-words text-center font-grenette text-[30px] font-normal leading-[110%] text-ink tablet:text-[38px] desktop:text-[46px]">
          The most customizable and coachable AI Employee in the industry
        </h2>
      </div>

      <div className="flex w-full max-w-[1440px] items-center justify-center desktop:w-[80%]">
        <div className="relative w-full overflow-hidden rounded-[20px] bg-black aspect-[1.80882]">
          <video
            src="https://framerusercontent.com/assets/xkr5n1V8EVIj0igTSzJHuIa3xyA.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="absolute left-0 top-0 h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-[2] flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/50"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-[3.6px]"
              aria-hidden="true"
            >
              <polygon points="5,3 19,12 5,21" fill="rgb(33, 33, 33)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
