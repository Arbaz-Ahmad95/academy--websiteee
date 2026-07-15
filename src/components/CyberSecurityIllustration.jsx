import React from 'react';

export default function CyberSecurityIllustration() {
  // Symmetrical circuit paths for the right side
  const circuitPaths = [
    { d: "M 700,320 L 750,320 L 785,285 L 880,285", endX: 880, endY: 285 },
    { d: "M 710,360 L 765,360 L 800,325 L 920,325", endX: 920, endY: 325 },
    { d: "M 720,400 L 765,400 L 795,430 L 850,430", endX: 850, endY: 430 },
    { d: "M 715,440 L 775,440 L 815,480 L 930,480", endX: 930, endY: 480 },
    { d: "M 700,480 L 760,480 L 790,510 L 860,510", endX: 860, endY: 510 },
    { d: "M 675,520 L 745,520 L 775,550 L 900,550", endX: 900, endY: 550 },
    { d: "M 640,560 L 765,560 L 805,600 L 920,600", endX: 920, endY: 600 },
    { d: "M 600,600 L 740,600 L 775,635 L 840,635", endX: 840, endY: 635 },
    { d: "M 550,640 L 720,640 L 755,675 L 870,675", endX: 870, endY: 675 },
    { d: "M 500,680 L 680,680 L 720,720 L 800,720", endX: 800, endY: 720 }
  ];

  // Intersections / branches for the right side
  const circuitBranches = [
    { d: "M 765,360 L 785,380 L 845,380", endX: 845, endY: 380 },
    { d: "M 775,440 L 795,460 L 835,460", endX: 835, endY: 460 },
    { d: "M 765,560 L 785,580 L 855,580", endX: 855, endY: 580 },
    { d: "M 720,640 L 735,655 L 785,655", endX: 785, endY: 655 }
  ];

  // Background particles scattered around the shield
  const particles = [
    { cx: 500, cy: 180, r: 1.5, op: 0.6, glow: true },
    { cx: 460, cy: 200, r: 2.0, op: 0.8, glow: false },
    { cx: 540, cy: 200, r: 1.2, op: 0.5, glow: false },
    { cx: 420, cy: 220, r: 2.5, op: 0.7, glow: true },
    { cx: 580, cy: 220, r: 1.8, op: 0.6, glow: false },
    { cx: 280, cy: 280, r: 1.5, op: 0.5, glow: false },
    { cx: 260, cy: 360, r: 2.2, op: 0.8, glow: true },
    { cx: 290, cy: 440, r: 1.2, op: 0.4, glow: false },
    { cx: 250, cy: 520, r: 2.5, op: 0.7, glow: true },
    { cx: 270, cy: 600, r: 1.8, op: 0.6, glow: false },
    { cx: 240, cy: 680, r: 1.5, op: 0.5, glow: false },
    { cx: 720, cy: 280, r: 1.5, op: 0.5, glow: false },
    { cx: 740, cy: 360, r: 2.2, op: 0.8, glow: true },
    { cx: 710, cy: 440, r: 1.2, op: 0.4, glow: false },
    { cx: 750, cy: 520, r: 2.5, op: 0.7, glow: true },
    { cx: 730, cy: 600, r: 1.8, op: 0.6, glow: false },
    { cx: 760, cy: 680, r: 1.5, op: 0.5, glow: false },
    { cx: 500, cy: 780, r: 2.0, op: 0.8, glow: true },
    { cx: 450, cy: 750, r: 1.2, op: 0.5, glow: false },
    { cx: 550, cy: 750, r: 1.5, op: 0.6, glow: false },
    { cx: 480, cy: 820, r: 2.5, op: 0.7, glow: true },
    { cx: 520, cy: 820, r: 1.8, op: 0.6, glow: false },
    { cx: 150, cy: 200, r: 2.0, op: 0.5, glow: true },
    { cx: 850, cy: 200, r: 2.0, op: 0.5, glow: true },
    { cx: 100, cy: 450, r: 1.5, op: 0.4, glow: false },
    { cx: 900, cy: 450, r: 1.5, op: 0.4, glow: false },
    { cx: 120, cy: 700, r: 2.5, op: 0.6, glow: true },
    { cx: 880, cy: 700, r: 2.5, op: 0.6, glow: true },
    { cx: 200, cy: 850, r: 1.5, op: 0.5, glow: false },
    { cx: 800, cy: 850, r: 1.5, op: 0.5, glow: false },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: 600,
      aspectRatio: '1/1',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Neon Glow Filters */}
          <filter id="glow-neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Background Radial Glow */}
          <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0088ff" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#0058ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#040b16" stopOpacity="0" />
          </radialGradient>

          {/* Shield Fill Gradient */}
          <linearGradient id="shield-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0a1a30" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#040b16" stopOpacity="0.95" />
          </linearGradient>

          {/* Shield Outline Gradient */}
          <linearGradient id="shield-outline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#58BFFF" />
            <stop offset="100%" stopColor="#7ED4FF" />
          </linearGradient>

          {/* Lock Body Gradient */}
          <linearGradient id="lock-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0d2c54" />
            <stop offset="50%" stopColor="#1a4f8a" />
            <stop offset="100%" stopColor="#0b1d33" />
          </linearGradient>

          {/* Circuit Traces Gradient */}
          <linearGradient id="line-grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a2a5c" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#58BFFF" stopOpacity="1" />
          </linearGradient>

          {/* Symmetrical Right Side Circuit Group */}
          <g id="circuits-right">
            {/* Main Lines */}
            {circuitPaths.map((path, index) => (
              <path
                key={`line-${index}`}
                d={path.d}
                stroke="url(#line-grad-right)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Branch Lines */}
            {circuitBranches.map((path, index) => (
              <path
                key={`branch-${index}`}
                d={path.d}
                stroke="url(#line-grad-right)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Nodes at endpoints */}
            {circuitPaths.map((node, index) => (
              <g key={`node-group-${index}`}>
                <circle
                  cx={node.endX}
                  cy={node.endY}
                  r="5"
                  fill="#58BFFF"
                  filter="url(#glow-neon)"
                  opacity="0.9"
                />
                <circle
                  cx={node.endX}
                  cy={node.endY}
                  r="2"
                  fill="#FFFFFF"
                />
              </g>
            ))}

            {/* Nodes at branch endpoints */}
            {circuitBranches.map((node, index) => (
              <g key={`branch-node-group-${index}`}>
                <circle
                  cx={node.endX}
                  cy={node.endY}
                  r="4"
                  fill="#58BFFF"
                  filter="url(#glow-neon)"
                  opacity="0.8"
                />
                <circle
                  cx={node.endX}
                  cy={node.endY}
                  r="1.5"
                  fill="#FFFFFF"
                />
              </g>
            ))}
          </g>
        </defs>

        {/* --- Radial Glow Behind Shield --- */}
        <circle cx="500" cy="500" r="450" fill="url(#bg-glow)" />

        {/* --- Background Particles --- */}
        <g>
          {particles.map((p, index) => (
            <circle
              key={`particle-${index}`}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="#58BFFF"
              opacity={p.op}
              filter={p.glow ? "url(#glow-soft)" : undefined}
            />
          ))}
        </g>

        {/* --- Symmetrical Circuit traces (Left & Right) --- */}
        <g>
          {/* Right side circuits */}
          <use href="#circuits-right" />

          {/* Left side circuits (Mirrored) */}
          <use href="#circuits-right" transform="translate(1000, 0) scale(-1, 1)" />
        </g>

        {/* --- Shield Group --- */}
        <g>
          {/* 1. Shield Inner Fill (Blocks circuit lines underneath) */}
          <path
            d="M 500,238 L 640,258 C 670,262 750,275 750,290 C 800,340 800,580 500,735 C 200,580 200,340 250,290 C 250,275 330,262 360,258 L 500,238 Z"
            fill="url(#shield-grad)"
          />

          {/* 2. Soft Broad Glow Behind Outline */}
          <path
            d="M 500,238 L 640,258 C 670,262 750,275 750,290 C 800,340 800,580 500,735 C 200,580 200,340 250,290 C 250,275 330,262 360,258 L 500,238 Z"
            fill="none"
            stroke="url(#shield-outline-grad)"
            strokeWidth="5"
            opacity="0.4"
            filter="url(#glow-neon)"
          />

          {/* 3. Outer Crisp Glowing Outline */}
          <path
            d="M 500,238 L 640,258 C 670,262 750,275 750,290 C 800,340 800,580 500,735 C 200,580 200,340 250,290 C 250,275 330,262 360,258 L 500,238 Z"
            fill="none"
            stroke="url(#shield-outline-grad)"
            strokeWidth="2.5"
            filter="url(#glow-soft)"
          />

          {/* 4. Inner Crisp Glowing Outline */}
          <path
            d="M 500,253 L 605,270 C 630,274 710,285 710,305 C 752,352 752,562 500,700 C 248,562 248,352 290,305 C 290,285 370,274 395,270 L 500,253 Z"
            fill="none"
            stroke="url(#shield-outline-grad)"
            strokeWidth="1.2"
            opacity="0.85"
            filter="url(#glow-soft)"
          />
        </g>

        {/* --- Centered Padlock Group --- */}
        <g>
          {/* Shackle Glow */}
          <path
            d="M 460,480 V 415 A 40,40 0 0 1 540,415 V 480"
            fill="none"
            stroke="url(#shield-outline-grad)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#glow-neon)"
          />

          {/* Shackle Crisp */}
          <path
            d="M 460,480 V 415 A 40,40 0 0 1 540,415 V 480"
            fill="none"
            stroke="url(#shield-outline-grad)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Lock Body */}
          <rect
            x="430"
            y="475"
            width="140"
            height="115"
            rx="16"
            fill="url(#lock-grad)"
            stroke="url(#shield-outline-grad)"
            strokeWidth="2"
            filter="url(#glow-soft)"
          />

          {/* Lock Body Inner Glow Simulation */}
          <rect
            x="434"
            y="479"
            width="132"
            height="107"
            rx="12"
            fill="none"
            stroke="rgba(88, 191, 255, 0.45)"
            strokeWidth="1.5"
            filter="url(#glow-soft)"
          />

          {/* Keyhole */}
          <g>
            {/* Inner Dark Cutout */}
            <path
              d="M 500,517 A 9,9 0 0 0 491,526 C 491,529.5 493,532.5 496,534 L 492,554 A 2,2 0 0 0 494,556 H 506 A 2,2 0 0 0 508,554 L 504,534 C 507,532.5 509,529.5 509,526 A 9,9 0 0 0 500,517 Z"
              fill="#040B16"
            />
            {/* Glowing Outline */}
            <path
              d="M 500,517 A 9,9 0 0 0 491,526 C 491,529.5 493,532.5 496,534 L 492,554 A 2,2 0 0 0 494,556 H 506 A 2,2 0 0 0 508,554 L 504,534 C 507,532.5 509,529.5 509,526 A 9,9 0 0 0 500,517 Z"
              fill="none"
              stroke="#58BFFF"
              strokeWidth="1.2"
              filter="url(#glow-soft)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
