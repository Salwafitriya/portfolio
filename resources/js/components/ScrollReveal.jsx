"use client"

import React, { useRef, useState, useEffect } from 'react'

export const ScrollReveal = ({ children, mode = "middle", className = "" }) => {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      {
        threshold: mode === "middle" ? 0.5 : 0.1, // bisa atur mode sesuai kebutuhan
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [mode])

  return (
    <div ref={ref} className={className}>
      {typeof children === "function" ? children(isActive) : children}
    </div>
  )
}
