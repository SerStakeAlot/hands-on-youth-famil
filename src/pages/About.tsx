import { UsersThree } from '@phosphor-icons/react'
import hoyPhoto from '@/assets/programs/hoy.jpg'

const supportPillars = [
  'Trauma-informed coaching',
  'Caregiver learning labs',
  'Youth leadership cohorts',
  'Rapid resource navigation',
]

export function About() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-accent/20 blur-xl" aria-hidden="true" />
              <img
                src={hoyPhoto}
                alt="Hands On Youth & Family Project founder standing beside program banner"
                className="relative z-10 w-full rounded-3xl border border-border bg-card/80 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3 mb-6">
              <UsersThree size={40} className="text-primary" weight="duotone" />
              <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Built with families first</p>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90 mb-5">
              At Hands On Youth & Family Project Inc., we believe every child deserves the opportunity to thrive.
              Our mission is to empower families with the knowledge, resources, and support they need to foster healthy
              social, emotional, and educational development in children of all ages.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              As a dedicated 501(c)3 nonprofit organization, we work closely with families, educators, and community
              members to create meaningful connections and lasting positive change. We specialize in advocacy for
              children navigating mental health conditions such as autism, ADHD, and anxiety, ensuring they receive the
              wraparound support they deserve.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {supportPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-left text-sm font-semibold shadow-sm"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
