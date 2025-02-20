"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const phrases = ["Photographer", "Singer", "Painter", "Video Editor", "Script Writer", "Director"]

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden peacock-feather">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Indian art collage"
          layout="fill"
          objectFit="cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background opacity-75" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-primary">Your Name</h1>
        <motion.p
          key={currentPhrase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl mb-8 text-secondary"
        >
          {phrases[currentPhrase]}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

