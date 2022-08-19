import React from "react"
import Gator from "../../../public/cartoon_gator.png"
import anime from "animejs"
import Image from "next/image"
import SpeechBubble from "./SpeechBubble"

function HomeAbout() {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: "#home_about_div",
      translateY: ["-10px", "10px"],
      easing: "easeInOutSine",
      duration: 6000,
      direction: "alternate",
      loop: true,
    })
  }, [])

  return (
    <div className='relative z-100 mt-96 md:mt-96 lg:mt-48'>
      <div className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full flex justify-center'>
        <div className='max-w-3/4 flex lg:flex-row flex-col-reverse h-52 items-center animate-fade-in-down'>
          <div className='lg:inline-flex m-12 flex-shrink-0'>
            <Image src={Gator} objectFit='fixed' alt='gator' priority />
          </div>
          <SpeechBubble />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
