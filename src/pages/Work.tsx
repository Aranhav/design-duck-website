import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'PocketFlow',
    category: 'Mobile App Development',
    description: 'A comprehensive personal finance management app built with React Native. Features include expense tracking, budget management, financial goal setting, and insightful analytics.',
    image: '/projects/pocketflow.jpg',
    gradient: 'from-blue-500 to-purple-600',
    tags: ['React Native', 'TypeScript', 'Firebase', 'UI/UX Design'],
    highlights: [
      'Intuitive expense tracking with categorization',
      'Smart budget alerts and notifications',
      'Financial goal tracking and insights',
      'Secure data encryption',
    ],
    links: {
      github: 'https://github.com/agilevisiondev/pocketflow',
    },
  },
  {
    title: 'OfficeTools Hub',
    category: 'Web Application',
    description: 'A privacy-first productivity platform offering various tools including PDF merger, QR code generator, password generator, and more. All processing happens locally in the browser.',
    image: '/projects/officetools.jpg',
    gradient: 'from-green-500 to-teal-600',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: [
      'Privacy-first architecture',
      'No server dependencies',
      'Advanced PDF processing',
      'Modern, responsive design',
    ],
    links: {
      live: 'https://officetools-4uym23kfv-aranhavs-projects.vercel.app',
    },
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Development',
    description: 'A modern e-commerce solution with seamless shopping experience, inventory management, and secure payment processing.',
    image: '/projects/ecommerce.jpg',
    gradient: 'from-orange-500 to-red-600',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlights: [
      'Scalable microservices architecture',
      'Real-time inventory tracking',
      'Secure payment integration',
      'Admin dashboard with analytics',
    ],
    status: 'Client Project',
  },
  {
    title: 'HealthTech Dashboard',
    category: 'SaaS Platform',
    description: 'A comprehensive healthcare management platform for clinics and hospitals to manage patient records, appointments, and billing.',
    image: '/projects/healthtech.jpg',
    gradient: 'from-pink-500 to-rose-600',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    highlights: [
      'HIPAA compliant infrastructure',
      'Real-time appointment scheduling',
      'Integrated billing system',
      'Patient portal access',
    ],
    status: 'Client Project',
  },
  {
    title: 'EdTech Learning Platform',
    category: 'Educational Technology',
    description: 'An interactive learning management system with video courses, quizzes, and progress tracking for educational institutions.',
    image: '/projects/edtech.jpg',
    gradient: 'from-indigo-500 to-purple-600',
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    highlights: [
      'Live video streaming capabilities',
      'Interactive quiz system',
      'Progress tracking and analytics',
      'Multi-tenant architecture',
    ],
    status: 'Client Project',
  },
  {
    title: 'Your Next Project',
    category: 'Coming Soon',
    description: 'We are ready to bring your vision to life. Whether it\'s a mobile app, web platform, or complete digital transformation, we have the expertise to deliver.',
    image: '/projects/next.jpg',
    gradient: 'from-gray-600 to-gray-800',
    tags: ['Your Stack', 'Your Vision', 'Our Expertise'],
    highlights: [
      'Custom tailored solutions',
      'Modern tech stack',
      'Scalable architecture',
      'Ongoing support',
    ],
    cta: true,
  },
]

export default function Work() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Our Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-slide-in">
              Explore our portfolio of digital products and solutions. Each project represents our commitment to excellence in design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group relative overflow-hidden rounded-3xl bg-card',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                  'flex flex-col lg:flex'
                )}
              >
                {/* Image Section */}
                <div className="relative lg:w-1/2">
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-90',
                    project.gradient
                  )} />
                  <div className="relative h-64 lg:h-full min-h-[400px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm uppercase tracking-wide">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12">
                  <p className="text-lg text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  )}

                  {project.status && (
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      {project.status}
                    </p>
                  )}

                  {project.cta && (
                    <a
                      href="/contact"
                      className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
                    >
                      Start Your Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}