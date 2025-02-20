import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground indian-pattern">
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}

