# UI Starter Package

Clean Next.js layout with header, left nav, mobile menu, and theme support.

## Quick Start

```bash
npx degit Wzelong/frontend-starter my-app && cd my-app && npm i && npm i next-themes sonner lucide-react clsx tailwind-merge && npx shadcn@latest init -y && npx shadcn@latest add button avatar dropdown-menu tooltip separator -y
```

## Structure

```
├── app/
│   ├── layout.tsx       # Root layout (header + nav + providers)
│   ├── globals.css      # Theme + base styles
│   ├── page.tsx         # Home page
│   └── dashboard/       # Example route
├── components/
│   ├── layout/
│   │   ├── nav-config.ts   # ← Edit this for nav items
│   │   ├── header.tsx
│   │   ├── left-nav.tsx
│   │   ├── mobile-menu.tsx
│   │   └── ...
│   ├── theme-provider.tsx
│   └── toast-provider.tsx
└── lib/
    └── utils.ts
```

## Customization

### Nav Items

Edit `components/layout/nav-config.ts`:

```ts
export const navItems: NavItem[] = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
]
```

### Header

```tsx
<Header
  logo={<Image src="/logo.png" width={28} height={28} alt="Logo" />}
  logoHref="/"
/>
```

### Toast

```tsx
import { useToast } from "@/components/toast-provider"

const toast = useToast()
toast.success("Saved!")
```

## Layout

- Mobile: header + mobile menu dropdown
- Desktop: header + left nav sidebar
