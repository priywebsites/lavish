# Replit.md

## Overview

This is a full-stack web application built with React and Express.js, featuring a modern barbershop website theme called "Kings Barbershop". The application uses a monorepo structure with separate client and server directories, utilizing TypeScript throughout for type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives wrapped in shadcn/ui components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
/
├── client/           # React frontend application
├── server/           # Express.js backend API
├── shared/           # Shared types and schemas
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with Zod validation schemas
- **Migrations**: Managed through Drizzle Kit
- **Current Schema**: Users table with id, username, and password fields

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class for in-memory storage (development)
- **Methods**: getUser, getUserByUsername, createUser

### Frontend Components
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, cards, etc.
- **Theme**: Custom Kings Barbershop color scheme with CSS variables
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Animations**: Framer Motion for page transitions and interactions

### API Structure
- **Base Path**: All API routes prefixed with `/api`
- **Request Logging**: Automatic logging of API requests with duration tracking
- **Error Handling**: Centralized error handling middleware
- **Data Format**: JSON request/response format

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: IStorage interface abstracts database operations
4. **Database**: PostgreSQL via Drizzle ORM for data persistence
5. **Response**: JSON responses back through the API to React components

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Validation**: Zod with Drizzle Zod integration
- **Animations**: Framer Motion, Embla Carousel
- **Utilities**: date-fns, cmdk, lucide-react icons

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Server**: Hot reload support via Vite

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Environment variable configuration for DATABASE_URL
- **Concurrent**: Both frontend and backend run simultaneously in development

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production
- **Database**: Production PostgreSQL connection via environment variables

### Environment Configuration
- **NODE_ENV**: Controls development vs production behavior
- **DATABASE_URL**: PostgreSQL connection string (required)
- **Build Scripts**: Separate build processes for client and server
- **Start Script**: Production server startup from bundled code

The application is designed as a modern, type-safe full-stack solution with a focus on developer experience through hot reloading, TypeScript support, and a clean separation of concerns between frontend, backend, and database layers.