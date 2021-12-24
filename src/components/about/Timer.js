import React, { useEffect, useState } from 'react'

const calculateTime = () => {
    let difference = +new Date(`05/01/2023`) - +new Date()

    let timeLeft = {}
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    return timeLeft
}

function Timer () {
    const [timeLeft, setTimeLeft] = useState(calculateTime())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTime())
        }, 1000)

        return () => clearTimeout(timer)
    })

    const clock = []

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval])
            return

        clock.push(
            <span className='font-paytone'>
                {timeLeft[interval]} {interval} {" "}
            </span>
        )
    })


    return (
        <div className='text-center'>
          <h1 className='font-notable'>Countdown Until Graduation</h1>
          <h1>{clock}</h1>  
        </div>
    )
}

export default Timer
