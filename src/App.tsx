import { BrowserRouter, NavLink, Route, Routes, Link, useLocation, useNavigate, Navigate } from 'react-router-dom'
import hoyfLogo from './assets/hands-on-youth-logo.jpeg'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
]

const routerBaseName = import.meta.env.BASE_URL ?? '/'

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              value={location.pathname}
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