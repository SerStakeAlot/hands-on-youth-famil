import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Heart, 
  UsersThree, 
  ChatsCircle, 
  PaperPlaneTilt,
  House,
  List,
  X
} from '@phosphor-icons/react'
import { toast } from 'sonner'
import { useKV } from '@github/spark/hooks'

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  timestamp: number
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactMessages, setContactMessages] = useKV<ContactMessage[]>('contact-messages', [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      ...formData,
      timestamp: Date.now()
    }

    setContactMessages((current) => [...(current || []), newMessage])
    
    toast.success('Thank you for reaching out! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const roundtableTopics = [
    'Childhood Anxiety',
    'Building Resilience',
    'Social Skills',
    'Emotional Regulation',
    'Family Communication',
    'Self-Esteem'
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Heart weight="fill" className="text-primary" size={28} />
              <span className="font-semibold text-lg">HOYFDS</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>
      <main className="pt-16">
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-purple)]/5 via-[var(--brand-blue)]/5 to-[var(--brand-yellow)]/5" />
          
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />
          <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-[var(--brand-green)]/10 blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-[var(--brand-yellow)]/10 blur-2xl" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span style={{ color: 'var(--brand-purple)' }}>Hands On Youth & Family</span>
                <br />
                <span style={{ color: 'var(--brand-blue)' }}>
                  Development Services
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              >Educating families and bridging gaps with young children's social, emotional and educational development needs in and outside the classroom</motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('about')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105"
                >Learn More</Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >Get In Touch</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Us</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-yellow)] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 border-t-4 border-t-[var(--brand-purple)] hover:shadow-lg transition-shadow">
                  <House weight="duotone" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Educating families and bridging gaps with young children's social, emotional and educational development needs in and outside the classroom.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8 border-t-4 border-t-[var(--brand-blue)] hover:shadow-lg transition-shadow">
                  <UsersThree weight="duotone" size={48} className="text-secondary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Our Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As a 501(c)3 nonprofit organization, we are dedicated to serving families and children in our community, providing the resources and support needed for healthy development and growth.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Card className="p-8 border-t-4 border-t-[var(--brand-green)] hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Heart weight="duotone" size={48} className="text-[var(--brand-green)] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We work closely with families to identify and address developmental needs, offering guidance, education, and practical strategies to support children's growth in all areas of their lives.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through our programs and services, we create lasting positive change by empowering parents, educators, and caregivers with the knowledge and tools they need to help every child thrive.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="programs" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-yellow)]/5 to-[var(--brand-orange)]/5" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-purple)' }}>
                Our Programs
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-blue)] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 md:p-12 border-t-4 border-t-[var(--brand-orange)] hover:shadow-xl transition-all">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-[var(--brand-orange)]/10 flex items-center justify-center mb-6">
                    <ChatsCircle weight="duotone" size={48} className="text-[var(--brand-orange)]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Let's Talk About It</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Our signature roundtable series where we tackle various mental health topics and discuss how to deal with them at any point in our lives.
                  </p>
                </div>

                <Separator className="my-8" />

                <div>
                  <h4 className="text-xl font-semibold mb-6 text-center">Topics We Explore</h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {roundtableTopics.map((topic, index) => {
                      const colors = [
                        'var(--brand-purple)',
                        'var(--brand-blue)',
                        'var(--brand-orange)',
                        'var(--brand-yellow)',
                        'var(--brand-green)',
                        'var(--brand-purple)'
                      ]
                      return (
                        <motion.div
                          key={topic}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                            style={{ borderColor: colors[index], color: colors[index] }}
                          >
                            {topic}
                          </Badge>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-muted-foreground mb-6">
                    Join us for meaningful conversations that promote mental health awareness, emotional well-being, and practical coping strategies for individuals and families.
                  </p>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/90 text-white transition-all hover:scale-105"
                  >
                    Learn More About Our Roundtables
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-blue)' }}>
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-green)] mx-auto rounded-full mb-4" />
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Reach out to learn more about our services or get involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 border-t-4 border-t-[var(--brand-blue)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-medium mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white transition-all hover:scale-[1.02]"
                  >
                    <PaperPlaneTilt className="mr-2" size={20} weight="fill" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        <footer className="bg-foreground text-background py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span style={{ color: 'var(--brand-purple)' }}>Hands On Youth & Family</span>
                {' '}
                <span style={{ color: 'var(--brand-blue)' }}>Development Services</span>
              </h3>
              <p className="text-background/80">
                A 501(c)3 Nonprofit Organization
              </p>
            </div>
            <Separator className="my-6 bg-background/20" />
            <p className="text-background/70">
              © {new Date().getFullYear()} Hands On Youth & Family Development Services. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App