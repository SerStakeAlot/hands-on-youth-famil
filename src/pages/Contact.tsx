import { Envelope, InstagramLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Contact() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-12">
          <Envelope size={40} className="text-primary" weight="duotone" />
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Direct support within 48 hrs</p>
        </div>

        <Card className="border border-border/80 shadow-xl">
          <CardHeader className="text-center sm:text-left space-y-3">
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Have questions or want to learn more? Send us an email or DM and we will respond personally.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-center sm:text-left">
              <p className="text-base text-muted-foreground">
                Email is the fastest way to reach our volunteer team. Share your question, collaboration idea, or
                support need and we will follow up with next steps.
              </p>
              <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                <a href="mailto:Handsonyouthcorp@gmail.com">Email Handsonyouthcorp@gmail.com</a>
              </Button>
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <Button asChild variant="outline" size="icon" className="hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <a
                      href="https://www.instagram.com/p/DQrnLsbEYti/?img_index=11&igsh=MTRxanNnNTdjNnhvZA%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <InstagramLogo size={24} weight="fill" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Featured Instagram Post</h4>
              <p className="text-sm text-muted-foreground">
                Catch a glimpse of our latest community highlight directly from Instagram.
              </p>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <iframe
                  title="Hands On Youth & Family Project Inc. Instagram preview"
                  src="https://www.instagram.com/p/DQrnLsbEYti/embed"
                  className="w-full h-[360px] sm:h-[520px] bg-background"
                  loading="lazy"
                  allow="encrypted-media"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
