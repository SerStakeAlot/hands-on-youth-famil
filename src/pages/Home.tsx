import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ownerPortraitFiles = import.meta.glob('../assets/owner/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const ownerPortraitUrl = Object.values(ownerPortraitFiles)[0]

export function Home() {
  return (
    <section className="py-14 sm:py-20 px-4">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border/60 bg-background shadow-2xl">
        {ownerPortraitUrl && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url(${ownerPortraitUrl})`, backgroundPosition: '55% 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
          </div>
        )}
        <div className="relative z-10 px-6 py-12 text-center sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-primary block font-hero-script">Hands On Youth & Family</span>
            <span className="text-secondary block font-hero-script">Project Inc.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            Educating families and bridging gaps with young children&apos;s social, emotional, and educational development
            needs in and outside the classroom.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/programs">Learn More</Link>
            </Button>
          </div>
        </div>
        {!ownerPortraitUrl && (
          <div className="relative z-10 border-t border-border/60 bg-card/70 px-6 py-6 text-center text-sm text-muted-foreground">
            Drop a transparent cut-out into
            <code className="mx-1 rounded bg-background/80 px-1 py-0.5 text-xs">src/assets/owner</code>
            to see it bloom in the background of this hero section.
          </div>
        )}
      </div>
    </section>
  )
}
