"use client"

import React, { useState, useEffect, useRef, createContext, useContext } from "react"
import clsx from "clsx"

// Context untuk aktif item
const NavigationContext = createContext()

export function Navigation({ children, fluid = false, duration = 300, className, ...props }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sizes, setSizes] = useState([])
  const navRef = useRef(null)

  const ready = sizes.length > 0

  useEffect(() => {
    if (!navRef.current) return

    const navItems = navRef.current.querySelectorAll("li")
    const newSizes = Array.from(navItems).map((item) => ({
      width: item.offsetWidth,
      left: item.offsetLeft,
    }))
    setSizes(newSizes)
  }, [])

  const size = ready ? `${sizes[activeIndex]?.width}px` : "0px"
  const position = ready ? `${sizes[activeIndex]?.left}px` : "0px"

  return (
    <NavigationContext.Provider value={{ activeIndex, setActiveIndex }}>
      <nav ref={navRef} className={clsx("relative", { "w-full": fluid }, className)} {...props}>
        {typeof children === "function"
          ? children({ ready, size, position, duration: `${duration}ms` })
          : children}
      </nav>
    </NavigationContext.Provider>
  )
}

Navigation.List = function NavigationList({ as: Component = "ul", className, children }) {
  return <Component className={className}>{children}</Component>
}

Navigation.Item = function NavigationItem({ as: Component = "li", onActivated, children }) {
  const { setActiveIndex, activeIndex } = useContext(NavigationContext)
  const itemRef = useRef(null)
  const indexRef = useRef(null)

  useEffect(() => {
    indexRef.current = Array.from(itemRef.current.parentNode.children).indexOf(itemRef.current)
  }, [])

  const handleClick = () => {
    setActiveIndex(indexRef.current)
    onActivated?.()
  }

  const isActive = indexRef.current === activeIndex

  return (
    <Component ref={itemRef}>
      {typeof children === "function"
        ? children({ setActive: handleClick, isActive })
        : children}
    </Component>
  )
}
