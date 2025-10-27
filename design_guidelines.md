# UrbanEase Design Guidelines

## Design Approach: UrbanCompany-Inspired Service Marketplace

**Reference**: UrbanCompany (India's leading home services platform)
**Design Philosophy**: Clean, trust-focused, service-first interface with strong visual hierarchy and clear call-to-actions

---

## Typography System

**Primary Font**: Inter or DM Sans via Google Fonts
- Headings (H1): 2.5rem (40px), font-weight 700
- Headings (H2): 2rem (32px), font-weight 600  
- Headings (H3): 1.5rem (24px), font-weight 600
- Body Large: 1.125rem (18px), font-weight 400
- Body Regular: 1rem (16px), font-weight 400
- Small Text/Labels: 0.875rem (14px), font-weight 500

---

## Layout & Spacing System

**Tailwind Units**: Use 2, 4, 6, 8, 12, 16, 20 for consistent spacing
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-20
- Card gaps: gap-4 to gap-6
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Layouts**:
- Service categories: 3-4 columns desktop (grid-cols-3 lg:grid-cols-4), 2 columns tablet, 1 column mobile
- Professional cards: 2-3 columns desktop (grid-cols-2 lg:grid-cols-3), 1 column mobile

---

## Core Components

### 1. Header (Sticky)
- Indigo/blue background with white text
- Left: Logo + Location dropdown (with pin icon + "Dadar, Mumbai")
- Right: Search icon, Favorites icon, Profile icon
- Height: 16 units (h-16)
- Shadow on scroll: shadow-md

### 2. Location Bar
- Prominent display below header or integrated into header
- Pin icon + address text + "Change" link
- Indigo background (lighter shade), padding p-4

### 3. Service Category Cards
- Rounded cards (rounded-lg) with subtle shadows
- Each card: Icon/illustration + category name
- Hover: Slight lift effect (shadow-lg transition)
- Size: Square aspect ratio, min 120px height

### 4. Professional Listing Cards
- White cards with rounded-xl corners
- Top section: Profile image (circular, 64px) + Name + Rating stars
- Middle: Service description, specialization badges
- Bottom: Price (₹ prominent) + Distance indicator + "Book Now" button
- Border: subtle gray border
- Spacing: p-6 internal padding

### 5. "Book Now" Primary Buttons
- Indigo background, white text
- Rounded-lg, font-weight 600
- Padding: px-6 py-3
- Hover: Darker indigo shade
- Full width on mobile, inline on desktop

### 6. Scheduling Interface
- Calendar grid: 7-column layout for days
- Time slot buttons: Grid of 15-30 minute intervals
- Selected state: Indigo fill with white text
- Unselected: Light gray background with dark text
- Spacing: gap-2 between slots

### 7. Chat/Messages Interface
- Two-column layout (desktop): 
  - Left sidebar (1/3 width): Conversation list with avatars + last message preview
  - Right panel (2/3 width): Active chat with message bubbles
- Message bubbles: 
  - User messages: Indigo background, white text, aligned right
  - Professional messages: Light gray background, dark text, aligned left
- Rounded-2xl bubbles with p-4 padding

### 8. Profile Page Form
- Clean form layout with labeled inputs
- Input fields: border-2, rounded-lg, p-3
- Focus state: Indigo border
- Labels: font-weight 600, mb-2
- Save button: Full width indigo button at bottom

---

## Color Palette (Per Requirements)

**Primary**: Indigo/Blue shades (#4F46E5, #6366F1, #818CF8)
**Accent**: Yellow/Orange for AI features (#F59E0B, #FBBF24)
**Neutrals**: Gray scale from 100 to 900
**Success**: Emerald green for ratings/confirmations
**Text**: Gray-900 for primary, Gray-600 for secondary

---

## Interactive States

**Buttons**:
- Hover: Background darkens by 10%, slight scale (scale-105)
- Active: Scale down (scale-95)
- Transition: transition-all duration-200

**Cards**:
- Hover: shadow-lg, transform translateY(-2px)
- Cursor: cursor-pointer for clickable cards

**Inputs**:
- Focus: Ring (ring-2 ring-indigo-500), border color change
- Error: Red border with error text below

---

## Images

### Hero Section Image
**Placement**: Top of home page, full-width banner
**Description**: Professional home service worker (plumber/electrician) in uniform, smiling, with tools, in a modern Indian home setting. Warm, trustworthy aesthetic.
**Dimensions**: 1920x600px, with gradient overlay (indigo to transparent left-to-right)
**Buttons on Hero**: Use backdrop-blur-md and bg-white/20 for glass-morphism effect on CTA buttons

### Professional Profile Images
**Description**: Circular headshots of service professionals in uniform/work attire
**Dimensions**: 128x128px minimum, displayed at 64px

### Service Category Icons
Use Heroicons or similar icon library via CDN - prefer solid style icons for categories

---

## Mobile Responsiveness

- Hamburger menu for navigation on mobile (< md breakpoint)
- Stack all multi-column layouts to single column
- Full-width cards and buttons on mobile
- Bottom navigation bar for mobile (Home, Search, Favorites, Chat, Profile)
- Reduce padding: p-4 becomes p-3, py-12 becomes py-8 on mobile

---

## Trust Elements

- Display ratings as star icons (solid yellow stars) with numerical score (4.8/5)
- "Verified Professional" badge with checkmark icon (emerald green)
- Review count: "1,234 reviews" in smaller gray text
- Distance indicator with location pin icon
- Professional tenure: "Member since 2020" on profile cards

---

## Accessibility

- All interactive elements have min 44px touch targets
- Form inputs have associated labels
- Sufficient color contrast (WCAG AA minimum)
- Focus indicators visible on all focusable elements
- Semantic HTML structure throughout