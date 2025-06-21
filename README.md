# Design Duck 🦆

> Where Design Meets Engineering Excellence

Design Duck is a digital studio specializing in UI/UX design, frontend development, product development, and branding for startups and tech businesses.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Fast loading with Vite
- **Type Safe**: Full TypeScript support
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- React 18.3.1
- TypeScript 5.7.2
- Tailwind CSS 3.5.7
- Framer Motion 11.18.0
- Vite 6.0.6
- React Router DOM 6.28.2
- EmailJS for contact form

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/designduck/website.git

# Navigate to project directory
cd design-duck

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Update .env with your EmailJS credentials

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
design-duck/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main app component
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎨 Design System

- **Colors**: Modern palette with primary, secondary, and accent colors
- **Typography**: Inter font with responsive sizing
- **Spacing**: 8px grid system
- **Components**: Reusable, accessible components

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the browser. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{project_type}}` - Project type
   - `{{budget}}` - Budget range
   - `{{timeline}}` - Timeline
   - `{{message}}` - Message content
4. Add your credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Vercel Deployment

For Vercel deployment, add the EmailJS environment variables in the Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add all three EmailJS variables

## 👥 Team

- Product Manager & Co-Founder
- Product Designer & Co-Founder  
- Senior Frontend Engineer & Co-Founder

## 📄 License

This project is proprietary and confidential. All rights reserved by Design Duck.

## 📞 Contact

- **Email**: designduck4u@gmail.com
- **Website**: [designduck.com](https://designduck.com)

---

Built with ❤️ by Design Duck Team