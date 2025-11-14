# Portfolio Website

A modern, minimal personal engineering portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a clean lavender color scheme, smooth animations, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with lavender accent colors
- **Smooth Animations**: Subtle fade-ins and slide-ins using Framer Motion
- **Responsive**: Looks great on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- **Easy to Customize**: Well-commented code and modular component structure

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar and Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── projects/          # Projects pages
│   │   ├── page.tsx       # Projects listing page
│   │   └── [id]/          # Dynamic project detail pages
│   └── about/             # About page
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   └── ProjectCard.tsx   # Project card component
├── data/                 # Data files
│   └── projects.ts       # Project data (easy to edit)
├── public/               # Static assets
│   └── images/           # Project images (optional)
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## ✏️ Customization Guide

### 1. Update Your Personal Information

#### Home Page (`app/page.tsx`)
- Replace "Your Name" with your actual name
- Update the title (e.g., "Software Engineer")
- Modify the intro sentence

#### About Page (`app/about/page.tsx`)
- Replace the bio text with your own
- Update the LinkedIn URL
- Update the email address
- Add your resume PDF to the `public` folder and ensure the link points to it

#### Footer (`components/Footer.tsx`)
- Update your name
- Update your email address

#### Navbar (`components/Navbar.tsx`)
- Optionally change the "Portfolio" brand text

### 2. Add Your Projects

Edit the `data/projects.ts` file to add, remove, or modify projects:

```typescript
{
  id: 'unique-project-id',        // Used in URL (e.g., /projects/unique-project-id)
  title: 'Project Title',
  description: 'Short description shown on cards',
  image: '/images/projects/my-image.jpg',  // Optional: path to image
  tags: ['React', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/yourusername/project',  // Optional
  liveUrl: 'https://your-demo.vercel.app',                // Optional
  reportUrl: 'https://your-report-link.com',              // Optional
  details: 'Full project description for the detail page...'  // Optional
}
```

**To add project images:**
1. Create a folder: `public/images/projects/`
2. Add your images to this folder
3. Reference them in the project data as: `/images/projects/your-image.jpg`

### 3. Customize Colors

The lavender color scheme is defined in `tailwind.config.js`. You can modify the lavender color palette or add new colors:

```javascript
colors: {
  lavender: {
    // Adjust these hex values to your preference
    500: '#8b5cf6',  // Main lavender color
    600: '#7c3aed',  // Darker lavender for hover states
    // ... etc
  },
}
```

### 4. Change Fonts

Fonts are imported in `app/globals.css`. Currently using:
- **Inter** for body text
- **Poppins** for headings

To change fonts, update the Google Fonts import in `globals.css` and the font families in `tailwind.config.js`.

## 📦 Deployment to Vercel

Vercel is the recommended hosting platform for Next.js applications. It's free and integrates seamlessly.

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Confirm settings
   - Wait for deployment

### Option 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

### Environment Variables

If you need environment variables (e.g., API keys), add them in:
- **Local development**: Create a `.env.local` file
- **Vercel**: Project Settings → Environment Variables

## 🎨 Design Notes

- **Color Scheme**: Lavender (#8b5cf6) as accent, white/light gray backgrounds, dark gray text
- **Typography**: Inter for body, Poppins for headings
- **Spacing**: Generous whitespace for a clean, modern look
- **Animations**: Subtle fade-ins and hover effects using Framer Motion
- **Responsive Breakpoints**: Mobile-first design with Tailwind's responsive utilities

## 📝 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.).

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check that Node.js version is 18 or higher
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Images Not Showing
- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/images/projects/image.jpg`)
- Check file names match exactly (case-sensitive)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📄 License

This project is open source and available for personal use.

---

**Happy coding! 🚀**

If you have questions or need help, feel free to open an issue or reach out.

