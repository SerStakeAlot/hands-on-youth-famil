import { UsersThree } from '@phosphor-icons/react'
import hoyfLogo from '@/assets/hands-on-youth-logo.jpeg'

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <UsersThree size={40} className="text-primary" weight="duotone" />
              <h2 className="text-4xl font-semibold">About Us</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              At Hands On Youth & Family Project Inc., we believe every child deserves the opportunity to thrive.
              Our mission is to empower families with the knowledge, resources, and support they need to foster healthy
              social, emotional, and educational development in children of all ages.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              As a dedicated 501(c)3 nonprofit organization, we work closely with families, educators, and community
              members to create meaningful connections and lasting positive change.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={hoyfLogo}
              alt="Hands On Youth & Family Project Inc. logo"
              className="max-w-xs rounded-2xl border border-border shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
