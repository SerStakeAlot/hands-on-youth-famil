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
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center gap-3 mb-12">
          <Envelope size={40} className="text-primary" weight="duotone" />
          <h2 className="text-4xl font-semibold">Get in Touch</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Have questions or want to learn more? We'd love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-3 justify-center">
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
            <div className="mt-8 text-left">
              <h4 className="text-lg font-semibold mb-2">Featured Instagram Post</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Catch a glimpse of our latest community highlight directly from Instagram.
              </p>
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <iframe
                  title="Hands On Youth & Family Project Inc. Instagram preview"
                  src="https://www.instagram.com/p/DQrnLsbEYti/embed"
                  className="w-full h-[540px] bg-background"
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
