import { Heart, UsersThree, ChatsCircle, Envelope } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { toast } from 'sonner'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }
    toast.success('Message sent! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart weight="fill" className="text-primary" size={32} />
            <span className="font-semibold text-xl">HOYFDS</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Hands on Youth and Family</span>{' '}
            <span className="text-secondary">Development Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A 501(c)3 nonprofit organization dedicated to educating families and bridging gaps in children's social, emotional, and educational development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Involved
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <UsersThree size={40} className="text-primary" weight="duotone" />
            <h2 className="text-4xl font-semibold">About Us</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            At Hands On Youth & Family Development Services, we believe every child deserves the opportunity to thrive. 
            Our mission is to empower families with the knowledge, resources, and support they need to foster healthy 
            social, emotional, and educational development in children of all ages.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            As a dedicated 501(c)3 nonprofit organization, we work closely with families, educators, and community 
            members to create meaningful connections and lasting positive change.
          </p>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
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
            <CardContent>
              <p className="text-lg mb-6 leading-relaxed">
                Join us for open, supportive conversations about mental health topics that affect individuals 
                and families across all life stages. Our roundtable sessions provide a safe space to discuss 
                challenges, share experiences, and learn from one another.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Mental Health</Badge>
                <Badge variant="secondary">Family Support</Badge>
                <Badge variant="secondary">Community</Badge>
                <Badge variant="secondary">All Ages</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
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
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart weight="fill" className="text-primary" size={24} />
            <span className="font-semibold">Hands On Youth & Family Development Services</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A 501(c)3 nonprofit organization
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App