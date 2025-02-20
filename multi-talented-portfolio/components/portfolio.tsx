"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const categories = ["All", "Photography", "Paintings", "Videos", "Scripts"]

const portfolioItems = [
  { id: 1, category: "Photography", title: "Taj Mahal at Sunset", image: "/placeholder.svg" },
  { id: 2, category: "Paintings", title: "Madhubani Art", image: "/placeholder.svg" },
  { id: 3, category: "Videos", title: "Bollywood Dance Sequence", image: "/placeholder.svg" },
  { id: 4, category: "Scripts", title: "Mumbai Noir", image: "/placeholder.svg" },
  { id: 5, category: "Photography", title: "Holi Festival", image: "/placeholder.svg" },
  { id: 6, category: "Paintings", title: "Modern Warli", image: "/placeholder.svg" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 bg-background peacock-feather">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">My Creative Journey</h2>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 mx-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-primary">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

