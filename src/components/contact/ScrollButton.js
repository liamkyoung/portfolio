import React from 'react'
import router, { useRouter } from 'next/router'

const smoothScroll = (path, element) => {
  if (path !== '/' && path !== '/about') {
    window.location.href = '/about'
    return
  }
  let elmntToView = document.getElementById(element)
  if (!elmntToView) return
  elmntToView.scrollIntoView({ behavior: 'smooth' })
}

function ScrollButton({ text, element }) {
  const router = useRouter()
  return (
    <h1
      className="button"
      onClick={() => smoothScroll(router.pathname, element)}
    >
      {text}
    </h1>
  )
}

export default ScrollButton
