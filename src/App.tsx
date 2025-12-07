import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, Link, useLocation, useNavigate, Navigate } from 'react-router-dom'
import hoyfLogo from './assets/hands-on-youth-logo.jpeg'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import noticeOne from './assets/programs/gallery/notice 1.jpeg'
import noticeTwo from './assets/programs/gallery/notice.jpeg'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
]

const detectBaseName = () => {
  if (typeof window === 'undefined') {
    return import.meta.env.PROD ? '/hands-on-youth-famil' : '/'
  }
  const path = window.location.pathname
  return path.startsWith('/hands-on-youth-famil') ? '/hands-on-youth-famil' : '/'
}

const routerBaseName = detectBaseName()

const getRelativePath = (pathname: string) => {
  if (routerBaseName === '/') return pathname
  if (pathname.startsWith(routerBaseName)) {
    const relative = pathname.slice(routerBaseName.length) || '/'
    return relative.startsWith('/') ? relative : `/${relative}`
  }
  return pathname
}

function AppShell() {
  const [showNotices, setShowNotices] = useState(false)
  const [noticeStep, setNoticeStep] = useState<0 | 1>(0)
  const location = useLocation()
  const navigate = useNavigate()
  const mobileValue = getRelativePath(location.pathname) || '/'

  useEffect(() => {
    const absoluteLogoUrl = new URL(hoyfLogo, window.location.origin).href
    const ensureMeta = (attributes: { property?: string; name?: string }, content: string) => {
      const key = attributes.property ? 'property' : 'name'
      const value = (attributes.property ?? attributes.name) as string
      let meta = document.head.querySelector(`meta[${key}="${value}"]`) as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(key, value)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    const siteTitle = 'Hands On Youth & Family Project Inc.'
    const siteDescription =
      'Educating families and bridging gaps with culturally rooted programs for children across Atlanta.'
    const siteUrl = 'https://handsonyouth.org'

    ensureMeta({ property: 'og:title' }, siteTitle)
    ensureMeta({ property: 'og:description' }, siteDescription)
    ensureMeta({ property: 'og:url' }, siteUrl)
    ensureMeta({ property: 'og:image' }, absoluteLogoUrl)
    ensureMeta({ property: 'og:type' }, 'website')
    ensureMeta({ name: 'twitter:card' }, 'summary_large_image')
    ensureMeta({ name: 'twitter:title' }, siteTitle)
    ensureMeta({ name: 'twitter:description' }, siteDescription)
    ensureMeta({ name: 'twitter:image' }, absoluteLogoUrl)
  }, [])

  useEffect(() => {
    try {
      const key = 'hoyf_notice_sequence_2025_dismissed'
      const dismissed = localStorage.getItem(key)
      if (!dismissed) {
        setShowNotices(true)
      }
    } catch {}
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Dialog open={showNotices} onOpenChange={(open) => {
        if (!open) {
          try { localStorage.setItem('hoyf_notice_sequence_2025_dismissed', 'true') } catch {}
          setShowNotices(false)
          setNoticeStep(0)
        }
      }}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{noticeStep === 0 ? 'Happy Holidays & Thank You!' : 'Coat & Blankets Drive'}</DialogTitle>
            <DialogDescription>
              {noticeStep === 0
                ? 'We appreciate your support throughout the year.'
                : 'December 5–19: Help keep families warm by donating coats and blankets.'}
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-xl overflow-hidden border border-border bg-muted/40">
            <img src={noticeStep === 0 ? noticeOne : noticeTwo} alt={noticeStep === 0 ? 'Holiday thank you notice' : 'Coat & blankets drive notice'} className="w-full h-auto object-cover" />
          </div>
          <DialogFooter className="mt-4">
            {noticeStep === 0 ? (
              <Button onClick={() => setNoticeStep(1)} className="w-full sm:w-auto">Continue</Button>
            ) : (
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="secondary" onClick={() => setNoticeStep(0)} className="flex-1 sm:flex-none">Back</Button>
                <Button onClick={() => setShowNotices(false)} className="flex-1 sm:flex-none">Close</Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={hoyfLogo}
              alt="Hands On Youth & Family Project Inc. logo"
              className="h-12 w-12 rounded-md object-cover border border-border shadow-sm"
            />
            <span className="font-semibold text-xl">Hands On Youth & Family Project Inc.</span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-primary ${isActive ? 'text-primary font-semibold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <select
              className="bg-transparent border border-border rounded-md px-3 py-2 text-sm"
              aria-label="Navigate to page"
              onChange={(event) => navigate(event.target.value)}
              value={mobileValue}
            >
              {navItems.map((item) => (
                <option key={item.to} value={item.to}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src={hoyfLogo}
              alt="Hands On Youth & Family Project Inc. logo"
              className="h-10 w-10 rounded-md object-cover border border-border shadow-sm"
            />
            <span className="font-semibold">Hands On Youth & Family Project Inc.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A 501(c)3 nonprofit organization
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <AppShell />
    </BrowserRouter>
  )
}

export default App