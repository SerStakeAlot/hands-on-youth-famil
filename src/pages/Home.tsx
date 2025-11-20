import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <div className="text-primary whitespace-nowrap font-hero-script">Hands On Youth & Family</div>
          <div className="text-secondary whitespace-nowrap font-hero-script">Project Inc.</div>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A 501(c)3 nonprofit organization dedicated to educating families and bridging gaps in children's social,
          emotional, and educational development.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/contact">Get Involved</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/programs">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
