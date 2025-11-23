import { ChatsCircle } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const letsTalkVideoFiles = import.meta.glob('../assets/programs/*.{mp4,MP4,webm,WEBM,mov,MOV}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const letsTalkVideoUrl = Object.values(letsTalkVideoFiles)[0]

const letsTalkPhotoFiles = import.meta.glob('../assets/programs/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const letsTalkPhotoUrl = Object.values(letsTalkPhotoFiles)[0]

const galleryFiles = import.meta.glob('../assets/programs/gallery/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryImages = Object.values(galleryFiles)

const eventCards = [
  {
    month: 'Nov',
    day: '1',
    year: '2025',
    title: 'Falling into Place',
    detail: 'November 1st, 2025',
    accent: 'primary',
    isPast: true,
  },
  {
    month: 'Mar',
    day: '29',
    year: '2025',
    title: 'High Functioning with Silent Stress',
    detail: 'March 29th, 2025',
    accent: 'secondary',
    isPast: true,
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
        </div>

        <Card className="border-t-4 border-t-accent">
          <CardHeader className="text-center sm:text-left">
            <CardTitle className="text-3xl flex flex-col sm:flex-row sm:items-center gap-3">
              <ChatsCircle size={32} className="text-accent" weight="fill" />
              <span>Let's Talk About It</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.8fr)] lg:items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge variant="outline" className="uppercase tracking-[0.3em] text-xs px-4 py-1 rounded-full">
                    community-rooted dialog
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    60-minute drop-ins • guided prompts • tangible wins
                  </p>
                </div>
                <p className="text-base sm:text-lg leading-relaxed">
                  Join supportive conversations about mental health topics affecting youth and caregivers of all ages.
                </p>
                <div className="grid grid-cols-2 sm:auto-cols-fr sm:grid-flow-col gap-2">
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
              <figure className="order-first lg:order-last">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-border/70 bg-muted/40 shadow-2xl">
                  {letsTalkVideoUrl ? (
                    <>
                      <video
                        src={letsTalkVideoUrl}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        playsInline
                        controls
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" aria-hidden="true" />
                    </>
                  ) : letsTalkPhotoUrl ? (
                    <>
                      <img
                        src={letsTalkPhotoUrl}
                        alt="Hands On Youth & Family Project owner beside Let's Talk About It banner"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" aria-hidden="true" />
                    </>
                  ) : (
                    <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 px-6 text-center text-sm text-muted-foreground">
                      <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs uppercase tracking-[0.3em]">
                        media placeholder
                      </span>
                      <p className="leading-relaxed">
                        Drop a banner video (MP4/WEBM) or photo inside
                        <code className="mx-1 rounded bg-background/80 px-1 py-0.5 text-xs">src/assets/programs</code>
                        to showcase it beside this program description.
                      </p>
                    </div>
                  )}
                </div>
              </figure>
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

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4 text-center">Program Moments</h3>
          <div
            className="gallery-marquee-wrapper rounded-3xl border border-border bg-card/70 backdrop-blur px-2 py-4"
            aria-label="Scrolling gallery of program photos"
          >
            {galleryImages.length > 0 ? (
              <div className="gallery-marquee-track">
                {[...galleryImages, ...galleryImages].map((src, idx) => (
                  <div
                    key={idx}
                    className="gallery-marquee-item mx-2 h-32 w-48 overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-sm"
                  >
                    <img
                      src={src}
                      alt="Hands On Youth & Family Project program moment"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex w-full items-center justify-center gap-4 px-6 py-10 text-sm text-muted-foreground">
                <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs uppercase tracking-[0.3em]">
                  gallery empty
                </span>
                <p className="max-w-md leading-relaxed">
                  Drag up to 15 photos into
                  <code className="mx-1 rounded bg-background/80 px-1 py-0.5 text-xs">src/assets/programs/gallery</code>
                  and refresh to see a looping conveyor belt of program highlights.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
