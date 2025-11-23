import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const highlightCards = [
  { label: 'Families Reached', value: '300+', detail: 'since founding' },
  { label: 'Monthly Touchpoints', value: '6', detail: 'support spaces' },
  { label: 'Community Partners', value: '12', detail: 'active collaborators' },
  { label: 'Volunteer Network', value: '80+', detail: 'care champions' },
]

export function Home() {
  return (
    <section className="py-14 sm:py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 mb-4">Mobile-first experience</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-primary block font-hero-script">Hands On Youth & Family</span>
          <span className="text-secondary block font-hero-script">Project Inc.</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
          A 501(c)3 nonprofit uplifting families with culturally rooted programming, mental health support,
          and accessible education spaces designed to fit right into busy, on-the-go lives.
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90" asChild>
            <Link to="/contact">Get Involved</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link to="/programs">Learn More</Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          {highlightCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-border/60 bg-card/70 p-4 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">{card.value}</p>
              <p className="text-sm font-semibold text-foreground">{card.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
