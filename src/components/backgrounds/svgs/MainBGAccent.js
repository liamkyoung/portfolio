import React from 'react'
import anime from 'animejs'

function MainBGAccent () {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#accent',
      d: [
        { value: 'M124.211 146.525C89 172.329 43.5 176 28.5 164.5C-18 128.85 45 152 5 42.9998C-22.5995 -32.2089 97.3751 8.00017 104.5 37.9998C114 78.0001 48.4877 99.7599 104.5 104C149.31 107.392 143.766 132.195 124.211 146.525Z' },
        { value: 'M139 149.001C54.9999 168.66 120.839 137.858 67.9999 114.501C10.9999 89.3038 -34 89.3037 37.5 27.5003C99.168 -25.8045 119.875 12.0004 127 42C136.5 82.0003 78 91 134.5 100.5C178.774 107.944 186 138.001 139 149.001Z' },
        { value: 'M113.58 159.164C29.5802 178.824 56.8265 180.684 42.5802 124.664C25.5 57.5001 -20.5 65.8254 12.0803 37.6637C73.7484 -15.6409 72 -9.99971 72 48.0003C72 89.2081 63.5 91.5003 120 101C164.274 108.445 180 143.619 113.58 159.164Z' }
      ],
      easing: 'linear',
      duration: 50000,
      direction: 'alternate',
      loop: true
    })
  }, [])

  return (
    <div className='mainAccentContainer'>
      <svg className='absolute left-2/4 top-60' viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='accent' d="M124.211 148.525C114.482 143.235 90.4481 136.233 72.1443 150.553C41.4871 165.505 -14.9967 163.634 4.32552 36.5292C16.2165 -43.0888 50.1397 34.5553 50.6917 38.6391C51.2437 42.7229 70.8504 97.0545 126.863 101.294C171.672 104.686 143.766 134.195 124.211 148.525Z" fill="url(#paint0_linear_63_29)"/>
        <defs>
          <linearGradient id="paint0_linear_63_29" x1="-9.65474" y1="76.8182" x2="152.566" y2="86.0159" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB764D"/>
            <stop offset="1" stopColor="#852F42"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default MainBGAccent
