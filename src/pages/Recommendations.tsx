import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Quotes, FileArrowDown, ArrowLeft, CaretDown, CaretUp } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { recommendations, Recommendation } from '@/data/recommendations'

function RecommendationCard({ rec }: { rec: Recommendation }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card
      className={
        rec.featured
          ? 'bg-card shadow-md hover:shadow-lg transition-shadow ring-2 ring-primary/40 overflow-hidden'
          : 'bg-card/90 shadow-sm hover:shadow-md transition-shadow'
      }
    >
      {rec.featured && rec.organization && (
        <div className="bg-gradient-to-r from-primary to-accent px-6 py-3 sm:px-8 sm:py-4 text-primary-foreground flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-white/20 hover:bg-white/25 text-primary-foreground border-white/30 uppercase tracking-wide text-[10px]">
              Featured Partner
            </Badge>
            <span className="font-semibold text-base sm:text-lg">{rec.organization}</span>
          </div>
          <span className="text-xs sm:text-sm opacity-90">Verification of Services</span>
        </div>
      )}
      <CardContent className="p-6 sm:p-8">
        {rec.organization && !rec.featured && (
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15 border-primary/20">
            From {rec.organization}
          </Badge>
        )}
        <Quotes size={28} className="text-accent mb-3" weight="fill" />
        <blockquote className="text-base sm:text-lg leading-relaxed text-foreground/90 mb-5 italic">
          “{rec.excerpt}”
        </blockquote>

        {rec.fullText && expanded && (
          <div className="mb-5 rounded-2xl border border-border/60 bg-background/60 p-5 text-sm sm:text-base leading-relaxed whitespace-pre-wrap text-foreground/90">
            {rec.fullText}
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-lg leading-tight">{rec.name}</p>
            <p className="text-sm text-muted-foreground">{rec.role}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {rec.source && <Badge variant="outline" className="text-xs">{rec.source}</Badge>}
              {rec.date && <Badge variant="outline" className="text-xs">{rec.date}</Badge>}
              {rec.email && (
                <a
                  href={`mailto:${rec.email}`}
                  className="text-xs text-primary hover:underline"
                >
                  {rec.email}
                </a>
              )}
              {rec.phone && (
                <a
                  href={`tel:${rec.phone.replace(/[^\d+]/g, '')}`}
                  className="text-xs text-primary hover:underline"
                >
                  {rec.phone}
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {rec.fullText && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? (
                  <>
                    <CaretUp className="mr-2" size={16} />
                    Show less
                  </>
                ) : (
                  <>
                    <CaretDown className="mr-2" size={16} />
                    Read full letter
                  </>
                )}
              </Button>
            )}
            {rec.file && (
              <Button variant="outline" size="sm" asChild>
                <a href={rec.file} target="_blank" rel="noopener noreferrer">
                  <FileArrowDown className="mr-2" size={16} />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Recommendations() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <Quotes size={40} className="text-primary" weight="duotone" />
          <h2 className="text-3xl sm:text-4xl font-bold">Letters of Recommendation</h2>
          <p className="text-muted-foreground max-w-2xl">
            Kind words from educators, families, and community partners we've had the privilege to serve.
          </p>
        </div>

        {recommendations.length === 0 ? (
          <Card className="border-2 border-dashed">
            <CardContent className="p-10 text-center text-sm text-muted-foreground">
              <p className="font-semibold mb-2">No recommendations added yet</p>
              <p>
                Add entries in <code className="rounded bg-background/80 px-1.5 py-0.5">src/data/recommendations.ts</code>.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {recommendations.map((rec, idx) => (
              <RecommendationCard key={idx} rec={rec} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/about">
              <ArrowLeft className="mr-2" size={16} />
              Back to About
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
