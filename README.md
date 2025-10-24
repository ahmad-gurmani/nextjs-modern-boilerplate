# Next.js Modern Boilerplate 🚀

A comprehensive, production-ready Next.js boilerplate with modern tooling, authentication, state management, and UI components. Perfect for rapid development of full-stack applications.

## ✨ Features

- **⚡ Next.js 15** - Latest Next.js with App Router
- **🎨 Tailwind CSS** - Utility-first CSS framework with custom design system
- **🔐 Authentication** - Role-based auth system (Admin, Brand, Creator)
- **📦 State Management** - Zustand for global state management
- **🔄 Data Fetching** - TanStack Query for server state management
- **🎯 TypeScript** - Full TypeScript support with strict configuration
- **🎨 UI Components** - shadcn/ui components with Radix UI primitives
- **📱 Responsive Design** - Mobile-first responsive design
- **🔧 Developer Experience** - ESLint, Prettier, and modern tooling
- **📊 Form Handling** - React Hook Form with Zod validation
- **🌙 Dark Mode** - Built-in dark mode support
- **🚀 Performance** - Optimized for production with best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd colleby_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the values in `.env.local` with your configuration.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration page
│   │   └── forgot-password/ # Password reset
│   ├── (public)/          # Public route group
│   │   ├── brand/         # Brand landing page
│   │   └── creator/       # Creator landing page
│   ├── dashboard/         # Protected dashboard routes
│   │   ├── admin/         # Admin dashboard
│   │   ├── brand/         # Brand dashboard
│   │   └── creator/       # Creator dashboard
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── providers/         # Context providers
│   ├── shared/            # Shared components
│   └── ui/                # UI components (shadcn/ui)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── store/                 # Zustand stores
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### State Management
- **Zustand** - Global state management
- **TanStack Query** - Server state management

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### HTTP Client
- **Axios** - HTTP client

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000

# Database (if using)
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# External Services
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- CSS variables for theming
- Custom color palette
- Dark mode support
- Animation utilities

### TypeScript Configuration

Strict TypeScript configuration with:
- Path mapping (`@/` alias)
- Strict type checking
- Modern ES features

## 🎨 UI Components

This boilerplate includes a comprehensive set of UI components built with shadcn/ui:

- **Button** - Various button variants
- **Input** - Form inputs
- **Card** - Content containers
- **Modal** - Dialog components
- **Toast** - Notification system
- **Loading** - Loading states
- And many more...

## 🔐 Authentication

The boilerplate includes a role-based authentication system:

### User Roles
- **Admin** - Full system access
- **Brand** - Brand-specific features
- **Creator** - Creator-specific features

### Auth Flow
1. Login/Register pages
2. Role-based routing
3. Protected dashboard routes
4. Persistent authentication state

## 📱 Responsive Design

- Mobile-first approach
- Responsive breakpoints
- Touch-friendly interfaces
- Optimized for all devices

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Style

The project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Conventional commits for commit messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Happy coding! 🎉**
# nextjs-modern-boilerplate
