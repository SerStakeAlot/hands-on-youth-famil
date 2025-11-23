import { useState } from 'react'
import { toast } from 'sonner'
import { Envelope, InstagramLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }
    toast.success("Message sent! We'll be in touch soon.")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-12">
          <Envelope size={40} className="text-primary" weight="duotone" />
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Response-friendly within 48 hrs</p>
        </div>

        <Card className="border border-border/80 shadow-xl">
          <CardHeader className="text-center sm:text-left space-y-3">
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Have questions or want to learn more? Drop a quick note—mobile-friendly form, fast follow-up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </form>

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-center sm:text-left">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                  <p className="text-base font-semibold">hello@handsonyouth.org</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-center sm:text-left">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Office Hours</p>
                  <p className="text-base font-semibold">Mon-Thu · 10a - 4p</p>
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
