import React from 'react'
import anime from 'animejs'

function WorkLeftSVG () {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#work_l_svg',
      d: [
        { value: 'M247 155.782C192.208 5.43178 65.5 -7.99742 1.71661e-05 3.00258L0 2616.28C82.3333 2533.95 325 2547 247 2377C200.711 2276.11 33.6665 2157.59 113.5 2086C205.5 2003.5 247 1883 205.5 1685C185.047 1587.42 143.5 1442 325 1333.5C506.5 1225 186.648 999.813 205.5 908.503C247 707.5 146.81 657.57 113.5 537.5C92 460 336 400 247 155.782Z' },
        { value: 'M247 154.724C112.364 68.2354 65.5 -9.05496 1.71661e-05 1.94504L0 2615.22C82.3333 2532.89 447.965 2656 325 2388C278.71 2287.11 125.666 2257.59 205.5 2186C297.5 2103.5 391.5 1954 205.5 1683.94C148.947 1601.83 43.7894 1411.48 247 1353C558 1263.5 306.148 1073.31 325 982C366.5 780.997 146.81 858.07 113.5 738C92 660.5 572 363.5 247 154.724Z' }
      ],
      easing: 'linear',
      duration: 20000,
      direction: 'alternate',
      loop: true
    })
  }, [])

  return (
    <div className=''>
      <svg className='absolute left-0 top-0 h-full' viewBox="0 0 511 2617" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='work_l_svg' d="M247 155.782C299.4 4.58163 65.5 -7.99744 1.71661e-05 3.00256L0 2616.28C82.3333 2533.95 247 2347.08 247 2258.28C247 2147.28 55.5 2154.78 40 2101.78C24.5 2048.78 184 1781.78 113.5 1711.28C43 1640.78 290 1282.78 471.5 1174.28C653 1065.78 132.5 966.503 205.5 908.503C278.5 850.503 74.3096 695.572 41 575.503C19.5 498.003 181.5 344.782 247 155.782Z" fill="url(#paint0_linear_430_2)"/>
        <defs>
          <linearGradient id="paint0_linear_430_2" x1="-269.5" y1="3393.5" x2="-219" y2="-160.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.332442" stop-color="#852F42"/>
          <stop offset="1" stop-color="#FB764D"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default WorkLeftSVG
