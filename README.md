# UI Starter Package

Clean, reusable Next.js layout with header, left nav, mobile menu, and theme support.

## Quick Start

```bash
npx degit Wzelong/frontend-starter my-app && cd my-app && npm i && npm i next-themes sonner lucide-react clsx tailwind-merge && npx shadcn@latest init -y && npx shadcn@latest add button avatar dropdown-menu tooltip separator -y
```

## Structure

```
├── app/
│   ├── layout.tsx          # Root layout (providers)
│   ├── globals.css         # Theme + base styles
│   ├── (app)/              # Protected routes
│   │   ├── layout.tsx      # App layout (header + nav)
│   │   └── dashboard/
│   └── (public)/           # Public routes
│       ├── layout.tsx      # Simple header + footer
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── index.ts        # Barrel export
│   │   ├── nav-config.ts   # ← Edit this for nav items
│   │   ├── header.tsx
│   │   ├── left-nav.tsx
│   │   ├── mobile-menu.tsx
│   │   ├── main-content.tsx
│   │   ├── theme-toggle.tsx
│   │   └── user-menu.tsx
│   ├── theme-provider.tsx
│   └── toast-provider.tsx
├── lib/
│   └── utils.ts
└── components/ui/          # shadcn/ui components
```

## Customization

### Header

```tsx
<Header
  logo={<Image src="/logo.png" width={28} height={28} alt="Logo" />}
  logoHref="/"
/>
```

### User Menu

```tsx
<UserMenu
  avatarUrl={user?.avatar}
  avatarFallback={user?.name?.[0]}
  onLogout={async () => await supabase.auth.signOut()}
/>
```

### Toast

```tsx
import { useToast } from "@/components/toast-provider"

const toast = useToast()
toast.success("Saved!")
toast.error("Failed")
```

## Layout Breakpoints

- Mobile: `< md` (header + mobile menu)
- Desktop: `≥ md` (header + left nav)

## Route Groups

- `(app)` - Protected routes with full layout
- `(public)` - Public routes with simple layout
- Add `(auth)` for login/signup pages
