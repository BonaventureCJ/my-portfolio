This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## FOLDER STRUCTURE
my-portfolio/
├── .next/                    # Next.js build output (automatically generated)
├── public/                     # Static assets (images, fonts, favicons, etc.)
│   ├── images/
│   │   ├── me.jpg              # Your profile picture
│   │   ├── project-1.png       # Project screenshots
│   │   └── ...
│   └── icons/
│       ├── favicon.ico
│       └── ...
├── src/                        # Main source code directory
│   ├── app/                    # Next.js App Router (pages and layouts)
│   │   ├── about/
│   │   │   └── page.tsx        # /about route
│   │   ├── contact/
│   │   │   └── page.tsx        # /contact route
│   │   ├── projects/
│   │   │   └── page.tsx        # /projects route
│   │   ├── skills/
│   │   │   └── page.tsx        # /skills route
│   │   ├── globals.css         # Global Tailwind and base styles
│   │   ├── layout.tsx          # Root layout (for Navbar, Footer)
│   │   └── page.tsx            # / (Home) route
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   └── Navigation.module.css
│   │   ├── ui/          # Generic, presentational components (colocated)
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.module.css
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── context/                # React Context providers
│   │   └── ThemeContext.tsx    # For theme management (e.g., dark/light mode)
│   │
│   ├── lib/                    # Utility functions and data
│   │   ├── data/
│   │   │   ├── projects.ts     # Data for projects page
│   │   │   ├── skills.ts       # Data for skills page
│   │   │   └── about.ts        # Data for about page
│   │   ├── hooks/
│   │   │   ├── useTheme.ts     # Custom hook for theme context
│   │   │   └── ...
│   │   └── utils.ts            # General utility functions
│   │
│   ├── styles/                 # Shared CSS Modules (non-colocated)
│   │   ├── variables.module.css  # CSS variables for colors, fonts, etc.
│   │   ├── mixins.module.css     # Reusable CSS mixins
│   │   └── typography.module.css # Reusable text styles
│   │
│   └── types/                  # TypeScript type definitions
│       ├── components.d.ts     # Component-specific types
│       ├── data.d.ts           # Data object types (e.g., Project, Skill)
│       └── globals.d.ts        # Global types
│
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore file
├── next.config.mjs             # Next.js configuration
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json


ORDER OF IMPORTS
// 1. Third-party standard imports
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// 2. Third-party type imports
import type { AxiosResponse } from 'axios';

// 3. Project module standard imports
import Button from '@/components/ui/Button';
import { useAuth } from '@/lib/hooks/useAuth';

// 4. Project module type imports
import type { AuthState } from '@/types/auth';
import type { UserProfile } from '@/interfaces/UserProfile';

// 5. Local module standard imports
import { getErrorMessage } from './utils';

// 6. Local module type imports
import type { ErrorData } from './types';

// 7. Stylesheets
import styles from './MyComponent.module.css';

// Your component code below