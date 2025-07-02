"use client"

import clsx from "clsx"
import { Navigation } from "../components/Navigation"

const items = ["Overview", "Integrations", "Activity", "Domains", "Usage", "Monitoring"]

function navigate() {
  // the callback is fired once the animation is completed
  // to allow smooth transition
}

export default function Navbar2() {
  return (
    <div className="flex h-16 w-full items-center px-8 fixed top-0 left-0 z-50 bg-black backdrop-blur-md">
      <Navigation as="nav" fluid duration={350} className="relative mx-auto rounded-2xl px-4">
        {({ ready, size, position, duration }) => (
          <div className="relative py-1">
            <div
              style={{
                "--size": size,
                "--position": position,
                "--duration": duration,
              }}
              className={clsx(
                { hidden: !ready },
                "absolute bottom-0 left-0 h-1 w-[--size] translate-x-[--position] rounded-full bg-black transition-[width,transform] duration-[--duration]",
              )}
            />

            <Navigation.List as="ul" className="relative flex flex-wrap md:flex-nowrap items-stretch gap-3">
              {items.map((item, index) => (
                <Navigation.Item key={index} as="li" onActivated={navigate}>
                  {({ setActive, isActive }) => (
                    <a
                      onClick={setActive}
                      href="#"
                      className={clsx(
                        isActive ? "text-white" : "text-white/60 hover:text-white",
                        "inline-block p-4 text-sm transition",
                      )}>
                      {item}
                    </a>
                  )}
                </Navigation.Item>
              ))}
            </Navigation.List>
          </div>
        )}
      </Navigation>
    </div>
  )
}
