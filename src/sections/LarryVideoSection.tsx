export default function LarryVideoSection() {
  return (
    <section className="flex flex-col items-center justify-start gap-[24px] w-full p-[80px] bg-[#f0f0f3]">
      <div className="flex flex-col items-center justify-start gap-[24px] w-[80%] max-w-[1440px] pb-[24px]">
        <h2 className="m-0 font-grenette text-[46px] font-normal leading-[110%] text-[#1c1b18] text-center break-words">
          The most customizable and coachable AI Employee in the industry
        </h2>
      </div>

      <div className="w-[80%] max-w-[1440px] flex items-center justify-center">
        <div
          className="w-full relative bg-black overflow-hidden rounded-[20px]"
          style={{ aspectRatio: '1.80882' }}
        >
          <video
            src="https://framerusercontent.com/assets/xkr5n1V8EVIj0igTSzJHuIa3xyA.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-white opacity-50 flex items-center justify-center z-[2] pointer-events-none"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginLeft: '3.6px' }}
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
