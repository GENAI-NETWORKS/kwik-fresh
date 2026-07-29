// Organic SVG wave/leaf dividers between sections
export default function WaveDivider({
  flip = false,
  topColor = '#ffffff',
  bottomColor = '#f0faf3',
  className = '',
}) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          transform: flip ? 'scaleY(-1)' : 'none',
          fill: bottomColor,
        }}
      >
        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

export function LeafDivider({
  topColor = '#ffffff',
  fillColor = '#f0faf3',
  className = '',
}) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', fill: fillColor }}
      >
        <path d="M0,60 Q200,0 400,60 Q600,120 800,60 Q1000,0 1200,60 Q1320,90 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
