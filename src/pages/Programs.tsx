import { ChatsCircle } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Programs() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <ChatsCircle size={40} className="text-primary" weight="duotone" />
          <h2 className="text-4xl font-semibold">Our Programs</h2>
        </div>

        <Card className="border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <ChatsCircle size={32} className="text-accent" weight="fill" />
              Let's Talk About It
            </CardTitle>
            <CardDescription className="text-base">
              A recurring mental health roundtable program
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Join us for open, supportive conversations about mental health topics that affect individuals
                and families across all life stages. Our roundtable sessions provide a safe space to discuss
                challenges, share experiences, and learn from one another.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Mental Health</Badge>
                <Badge variant="secondary">Family Support</Badge>
                <Badge variant="secondary">Community</Badge>
                <Badge variant="secondary">All Ages</Badge>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a
                  href="https://www.eventbrite.com/e/falling-into-place-panel-discussion-tickets-1810784859259?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAOL-4xleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafTZ4F162OyS93nj2v1uZ5GgFRE45RaVKnIFipuDi4oEXaLXpS6ebyW1ymjzA_aem_pmyn6eVntWy3W3jBkra9qw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on Eventbrite
                </a>
              </Button>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-semibold mb-6">Upcoming & Past Events</h3>
              <div className="grid gap-4">
                <div className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
                  <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-3 min-w-[80px]">
                    <span className="text-2xl font-bold">Nov</span>
                    <span className="text-3xl font-bold">1</span>
                    <span className="text-sm">2025</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">Falling into Place</h4>
                    <p className="text-muted-foreground text-sm">November 1st, 2025</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
                  <div className="flex flex-col items-center justify-center bg-secondary text-secondary-foreground rounded-lg p-3 min-w-[80px]">
                    <span className="text-2xl font-bold">Mar</span>
                    <span className="text-3xl font-bold">29</span>
                    <span className="text-sm">2025</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">High Functioning with Silent Stress</h4>
                    <p className="text-muted-foreground text-sm">March 29th, 2025</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex flex-col items-center justify-center bg-muted-foreground/20 text-foreground rounded-lg p-3 min-w-[80px]">
                    <span className="text-2xl font-bold">Nov</span>
                    <span className="text-3xl font-bold">16</span>
                    <span className="text-sm">2024</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">Locking Back In</h4>
                    <p className="text-muted-foreground text-sm">November 16th, 2024</p>
                    <Badge variant="outline" className="mt-2">Past Event</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
