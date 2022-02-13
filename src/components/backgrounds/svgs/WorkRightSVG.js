import React from 'react'
import anime from 'animejs'

function WorkRightSVG () {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#work_r_svg',
      d: [
        { value: 'M109 313C150.404 158.427 350.109 -9.52518 415.609 1.47482L415.609 2614.75C333.276 2532.42 109 2614.75 8 2414C-41.8867 2314.84 168.609 2279.5 168.609 2066.5C168.609 1850.96 231.609 1780.25 302.109 1709.75C372.609 1639.25 350.109 1502.47 168.609 1393.97C-12.8911 1285.47 14.4468 1114 226.5 890C290.598 822.291 14.4468 750 302.109 593C372.706 554.47 41.5 565 109 313Z' },
        { value: 'M81 360.5C122.404 205.926 342.757 -10.4874 408.257 0.512616L408.257 2613.79C325.924 2531.46 0.647949 2637.77 0.647949 2413.04C0.647949 2241 322.672 2300.98 200.5 2126.5C33.5 1888 90.7568 1791 161.257 1720.5C231.757 1650 382 1629 200.5 1520.5C19 1412 -11.5532 1281.5 200.5 1057.5C322.62 928.5 81.0535 883.356 267 613.5C408.257 408.5 13.5 612.5 81 360.5Z' }
      ],
      easing: 'linear',
      duration: 20000,
      direction: 'alternate',
      loop: true
    })
  }, [])

  return (
    <div className=''>
      <svg className='absolute right-0 top-0 h-full' viewBox="0 0 412 2615" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='work_r_svg' d="M164.162 323.5C111.762 172.3 345.662 -9.99763 411.162 1.00237L411.162 2614.28C328.829 2531.95 193.5 2536.5 70.5 2424.5C-11.5729 2349.77 -5.5 2093.5 10 2040.5C70.5 1833.63 227.162 1779.78 297.662 1709.28C368.162 1638.78 345.662 1502 164.162 1393.5C-17.3379 1285 261.141 996.503 164.162 788.5C87 623 260.5 749.5 260.5 581C260.5 500.573 229.662 512.5 164.162 323.5Z" fill="url(#paint0_linear_434_13)"/>
      <defs>
        <linearGradient id="paint0_linear_434_13" x1="680.662" y1="3391.5" x2="630.162" y2="-162.5" gradientUnits="userSpaceOnUse">
        <stop offset="0.332442" stop-color="#852F42"/>
        <stop offset="1" stop-color="#FB764D"/>
        </linearGradient>
      </defs>
      </svg>
    </div>
  )
}

export default WorkRightSVG
