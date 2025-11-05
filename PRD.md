# Planning Guide

A professional, vibrant website for Hands On Youth & Family Development Services, a 501(c)3 nonprofit organization dedicated to educating families and bridging gaps in children's social, emotional, and educational development.

**Experience Qualities**:
1. **Welcoming** - The site should feel approachable and warm, inviting families to connect and engage with the organization's mission.
2. **Professional** - Despite the playful colors, the design must convey credibility and trustworthiness as a legitimate nonprofit.
3. **Uplifting** - The bright color palette and positive messaging should inspire hope and communicate the transformative impact of the organization's work.

**Complexity Level**: Content Showcase (information-focused)
  - This is primarily an informational website to establish professional presence with core sections for About, Programs, and Contact without complex state management or user accounts.

## Essential Features

### Organization Header/Hero
- **Functionality**: Display the organization name with distinctive two-tone coloring (purple for "Hands on Youth and Family", baby blue for "Development Services") and mission statement
- **Purpose**: Immediately establish brand identity and communicate the organization's purpose
- **Trigger**: User lands on the homepage
- **Progression**: Page loads → Hero section displays with organization name → Tagline appears → CTA buttons invite exploration
- **Success criteria**: Name is prominently displayed with correct color scheme, mission is clearly visible, users understand the organization's purpose within 5 seconds

### About Section
- **Functionality**: Present the organization's bio and mission statement in an engaging, readable format
- **Purpose**: Build trust and credibility by explaining who they are and what they do
- **Trigger**: User scrolls to About section or clicks About navigation link
- **Progression**: User navigates to section → Bio text displays → Visual elements support the message → User understands organization's mission
- **Success criteria**: Bio text is clearly visible, easy to read, and communicates the organization's commitment to children and families

### "Let's Talk About It" Roundtable Showcase
- **Functionality**: Feature section highlighting the recurring mental health roundtable program
- **Purpose**: Showcase this signature program and encourage participation
- **Trigger**: User scrolls to program section or clicks program navigation
- **Progression**: User views section → Program name and description appear → Topics/themes are displayed → User feels invited to participate
- **Success criteria**: Roundtable program is prominently featured, purpose is clear, users understand it addresses mental health topics across all life stages

### Contact Section
- **Functionality**: Provide contact information and/or contact form for inquiries
- **Purpose**: Enable families and community members to reach out for services or information
- **Trigger**: User scrolls to Contact section or clicks Contact navigation
- **Progression**: User navigates to section → Contact form/info displays → User can submit inquiry or find contact details → Confirmation of submission
- **Success criteria**: Contact method is clear, form is easy to use, users feel confident their message will be received

### Navigation System
- **Functionality**: Fixed/sticky navigation bar with links to all major sections
- **Purpose**: Enable easy movement between sections and maintain orientation
- **Trigger**: User loads page, navigation is always accessible
- **Progression**: User clicks nav link → Smooth scroll to section → Section highlights
- **Success criteria**: Navigation is always accessible, links work smoothly, current section is indicated

## Edge Case Handling
- **Empty form submission**: Validate contact form and display friendly error messages for required fields
- **Long content overflow**: Ensure text sections remain readable on all screen sizes with proper wrapping and spacing
- **Missing content**: Design accommodates future expansion of roundtable topics and program descriptions
- **Mobile navigation**: Hamburger menu for smaller screens with full-screen overlay for easy touch targets

## Design Direction
The design should feel vibrant, hopeful, and child-friendly while maintaining professional credibility for a nonprofit organization. The bright multi-color palette (purple, orange, yellow, green, blue) should feel energetic and uplifting rather than chaotic, with purple and baby blue serving as primary brand colors. The interface should be clean and uncluttered, focusing attention on the mission and programs with generous white space and clear visual hierarchy.

## Color Selection
Custom palette - A vibrant, energetic color scheme that reflects working with children and families while maintaining professional appeal.

- **Primary Color**: Purple (oklch(0.55 0.2 300)) - Used for "Hands on Youth and Family" text, primary buttons, and key brand elements; communicates creativity, compassion, and wisdom
- **Secondary Colors**: 
  - Baby Blue (oklch(0.75 0.1 230)) - Used for "Development Services" text and supporting elements; conveys trust and calm
  - Orange (oklch(0.7 0.17 50)) - Energy and enthusiasm for supporting families
  - Yellow (oklch(0.85 0.15 90)) - Optimism and hope for children's futures
  - Green (oklch(0.65 0.15 150)) - Growth and development
- **Accent Color**: Orange (oklch(0.7 0.17 50)) - Highlight color for CTAs and important interactive elements; draws attention with warmth and approachability
- **Foreground/Background Pairings**: 
  - Background (White oklch(0.99 0 0)): Dark Purple text (oklch(0.3 0.15 300)) - Ratio 10.5:1 ✓
  - Card (Soft Cream oklch(0.97 0.01 90)): Dark text (oklch(0.25 0 0)) - Ratio 13.2:1 ✓
  - Primary (Purple oklch(0.55 0.2 300)): White text (oklch(0.99 0 0)) - Ratio 6.8:1 ✓
  - Secondary (Baby Blue oklch(0.75 0.1 230)): Dark text (oklch(0.25 0 0)) - Ratio 9.4:1 ✓
  - Accent (Orange oklch(0.7 0.17 50)): White text (oklch(0.99 0 0)) - Ratio 5.2:1 ✓
  - Muted (Light Gray oklch(0.93 0 0)): Medium Gray text (oklch(0.5 0 0)) - Ratio 5.1:1 ✓

## Font Selection
Typography should feel friendly and modern while maintaining excellent readability for families and professionals alike, with a sans-serif approach that feels contemporary and accessible.

- **Typographic Hierarchy**: 
  - H1 (Organization Name): Poppins Bold/48px/tight tracking - Split styling with purple and baby blue
  - H2 (Section Headers): Poppins SemiBold/36px/normal tracking
  - H3 (Subsections): Poppins Medium/24px/normal tracking
  - Body Text: Inter Regular/16px/1.6 line-height - Comfortable reading for mission statements and descriptions
  - Button Text: Poppins Medium/16px/wide tracking - Clear call-to-action text

## Animations
Animations should feel playful and energetic without being distracting, reinforcing the youthful, hopeful mission of the organization while maintaining professional polish.

- **Purposeful Meaning**: Subtle bounce and fade effects communicate the energy and positivity of working with children; smooth transitions convey professionalism
- **Hierarchy of Movement**: 
  - Hero elements (fade-in on load) - Establish brand presence
  - Section reveals (scroll-triggered fade-up) - Guide attention through content
  - Button hovers (gentle scale and color shift) - Encourage interaction
  - Navigation transitions (smooth scroll) - Create cohesive experience

## Component Selection
- **Components**: 
  - Card (Program/roundtable showcase with hover effects)
  - Button (Primary CTAs in accent orange, secondary in purple)
  - Input, Textarea, Label (Contact form fields)
  - Separator (Visual breaks between sections)
  - Badge (Topic tags for roundtable themes)
  - Tabs (Potential future use for multiple programs)
- **Customizations**: 
  - Custom hero section with split-color organization name
  - Gradient backgrounds using the vibrant color palette
  - Custom card designs with colored top borders matching the color scheme
  - Multi-color decorative elements (circles, shapes) in section backgrounds
- **States**: 
  - Buttons: Hover scales slightly with color darkening, active state presses slightly
  - Form inputs: Focus ring in purple, valid state with subtle green tint, error state with warm red
  - Cards: Hover lifts with shadow increase, border color shifts to accent
- **Icon Selection**: 
  - Heart for mission/values (emotional connection)
  - Users/UsersThree for community/families
  - Chats/ChatsCircle for "Let's Talk About It" program
  - Envelope/PaperPlane for contact
  - House for home/family focus
- **Spacing**: Base spacing scale of 4px, sections separated by 80-96px (space-20/24), cards with p-6, generous margins (mt-4, mb-8) for breathing room
- **Mobile**: Mobile-first with single-column layout, hamburger navigation, stacked hero text, full-width cards, bottom-fixed CTA on mobile, progressive enhancement to multi-column grid on tablets (768px+) and desktop (1024px+)
