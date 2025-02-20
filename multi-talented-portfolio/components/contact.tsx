"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Connect With Me</h2>
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <motion.form
              className="space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Input type="text" placeholder="Your Name" className="bg-muted" />
              <Input type="email" placeholder="Your Email" className="bg-muted" />
              <Textarea placeholder="Your Message" className="bg-muted" />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-primary"
            >
              <p className="text-xl">Thank you for reaching out!</p>
              <p>I'll get back to you soon.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

