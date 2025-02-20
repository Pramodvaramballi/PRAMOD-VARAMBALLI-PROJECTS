"use client"

import { motion } from "framer-motion"
import { Camera, Mic, Palette, Video, PenTool, Film } from "lucide-react"

const skills = [
  { name: "Photography", icon: Camera, color: "text-primary" },
  { name: "Singing", icon: Mic, color: "text-secondary" },
  { name: "Painting", icon: Palette, color: "text-accent" },
  { name: "Video Editing", icon: Video, color: "text-primary" },
  { name: "Script Writing", icon: PenTool, color: "text-secondary" },
  { name: "Directing", icon: Film, color: "text-accent" },
]

export function Skills() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">My Artistic Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className={`bg-muted p-4 rounded-full mb-4 ${skill.color}`}>
                <skill.icon className="w-8 h-8" />
              </div>
              <p className="text-center font-medium text-card-foreground">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

