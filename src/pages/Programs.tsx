import { ChatsCircle } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const eventCards = [
  {
    month: 'Nov',
    day: '1',
    year: '2025',
    title: 'Falling into Place',
    detail: 'November 1st, 2025',
    accent: 'primary',
    isPast: false,
  },
  {
    month: 'Mar',
    day: '29',
    year: '2025',
    title: 'High Functioning with Silent Stress',
    detail: 'March 29th, 2025',
    accent: 'secondary',
    isPast: false,
  },
  {
    month: 'Nov',
    day: '16',
    year: '2024',
    title: 'Locking Back In',
    detail: 'November 16th, 2024',
    accent: 'muted',
    isPast: true,
  },
]

type EventCard = (typeof eventCards)[number]

function EventDateBadge({ event }: { event: EventCard }) {
  const baseStyle =
    event.accent === 'primary'
      ? 'bg-primary text-primary-foreground'
      : event.accent === 'secondary'
        ? 'bg-secondary text-secondary-foreground'
        : 'bg-muted/70 text-foreground'

  return (
    <div className={`flex items-center justify-between sm:flex-col sm:items-center sm:justify-center rounded-xl p-3 min-w-[90px] text-center ${baseStyle}`}>
      <div className="text-base font-semibold">{event.month}</div>
      <div className="text-3xl font-bold leading-none">{event.day}</div>
      <div className="text-xs uppercase tracking-wide">{event.year}</div>
    </div>
  )
}

export function Programs() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-12">
          <ChatsCircle size={40} className="text-primary" weight="duotone" />
          <h2 className="text-3xl sm:text-4xl font-bold">Our Programs</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Bite-sized, on-phone friendly</p>
        </div>

        <Card className="border-t-4 border-t-accent">
          <CardHeader className="text-center sm:text-left">
            <CardTitle className="text-3xl flex flex-col sm:flex-row sm:items-center gap-3">
              <ChatsCircle size={32} className="text-accent" weight="fill" />
              <span>Let's Talk About It</span>
            </CardTitle>
            <CardDescription className="text-base">
              A recurring mental health roundtable designed so families can drop in from the carpool lane or couch.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Join supportive conversations about mental health topics affecting youth and caregivers of all ages.
                Sessions are intentionally paced for phones—short reflections, guided prompts, and a clear take-home win.
              </p>
              <div className="grid grid-cols-2 sm:auto-cols-fr sm:grid-flow-col gap-2 mb-6">
                <Badge variant="secondary" className="justify-center py-2">Mental Health</Badge>
                <Badge variant="secondary" className="justify-center py-2">Family Support</Badge>
                <Badge variant="secondary" className="justify-center py-2">Community</Badge>
                <Badge variant="secondary" className="justify-center py-2">All Ages</Badge>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
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
              <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">Upcoming & Past Events</h3>
              <div className="grid gap-4">
                {eventCards.map((event) => (
                  <div
                    key={event.title}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-border bg-card/80 hover:bg-accent/5 transition-colors"
                  >
                    <EventDateBadge event={event} />
                    <div className="flex-1 text-left">
                      <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
                      <p className="text-muted-foreground text-sm">{event.detail}</p>
                      {event.isPast && (
                        <Badge variant="outline" className="mt-3">Past Event</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
