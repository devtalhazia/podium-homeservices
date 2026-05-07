export default function LarryVideoSection() {
  return (
    <section
      style={{
        backgroundColor: '#f0f0f3',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '24px',
        width: '100%',
        padding: '80px',
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '24px',
          width: '80%',
          maxWidth: '1440px',
          paddingBottom: '24px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Grenette Regular", sans-serif',
            fontSize: '46px',
            fontWeight: 400,
            lineHeight: '110%',
            color: '#1c1b18',
            textAlign: 'center',
            margin: 0,
            wordBreak: 'break-word',
          }}
        >
          The most customizable and coachable AI Employee in the industry
        </h2>
      </div>

      {/* Video container */}
      <div
        style={{
          width: '80%',
          maxWidth: '1440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '1.80882',
            position: 'relative',
            backgroundColor: '#000',
            overflow: 'hidden',
            borderRadius: '20px',
          }}
        >
          {/* Video fallback */}
          <video
            src="https://framerusercontent.com/assets/xkr5n1V8EVIj0igTSzJHuIa3xyA.mp4"
            loop
            muted
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />

          {/* Play button overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: 'rgb(255, 255, 255)',
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              pointerEvents: 'none',
            }}
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
