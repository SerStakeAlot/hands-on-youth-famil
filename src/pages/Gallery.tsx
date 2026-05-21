import { Link } from 'react-router-dom'
import { Images, ArrowLeft } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const galleryFiles = import.meta.glob('../assets/afterschool-gallery/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryEntries = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? 'Afterschool program photo',
  }))

export function Gallery() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <Images size={40} className="text-primary" weight="duotone" />
          <h2 className="text-3xl sm:text-4xl font-bold">Afterschool Enrichment Gallery</h2>
          <p className="text-muted-foreground max-w-2xl">
            Moments from our afterschool enrichment program — tutoring sessions, healthy meals, family engagement nights, and more.
          </p>
        </div>

        {galleryEntries.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {galleryEntries.map(({ src, alt }, idx) => (
              <a
                key={idx}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border-2 border-dashed border-border bg-card/50 px-6 py-16 text-center">
            <Images size={48} className="text-muted-foreground mx-auto mb-4" weight="duotone" />
            <p className="text-lg font-semibold mb-2">Gallery is empty</p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Drop photos into{' '}
              <code className="rounded bg-background/80 px-1.5 py-0.5 text-xs">src/assets/afterschool-gallery</code>{' '}
              and they'll appear here automatically.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/programs">
              <ArrowLeft className="mr-2" size={16} />
              Back to Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
