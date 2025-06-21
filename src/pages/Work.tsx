import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'PocketFlow',
    category: 'Personal Finance App',
    description: 'A comprehensive personal finance management app we built because we needed a better way to manage our finances. Features expense tracking, budget management, and financial insights - all in a beautiful, intuitive interface.',
    image: '/projects/pocketflow.jpg',
    gradient: 'from-blue-500 to-purple-600',
    tags: ['React Native', 'TypeScript', 'Firebase', 'UI/UX Design'],
    highlights: [
      'Intuitive expense tracking with smart categorization',
      'Real-time budget monitoring and alerts',
      'Financial goal tracking with visual progress',
      'Bank-level security with biometric authentication',
      'Currently in beta testing',
    ],
    links: {
      demo: 'https://finpal-dev.web.app/login',
    },
    type: 'own',
  },
  {
    title: 'OfficeTools Hub',
    category: 'Productivity Platform',
    description: 'Born from our frustration with bloated, data-hungry office tools. A privacy-first platform offering PDF tools, QR generators, and more - all processing happens locally in your browser. No uploads, no tracking, just tools that work.',
    image: '/projects/officetools.jpg',
    gradient: 'from-green-500 to-teal-600',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'WebAssembly'],
    highlights: [
      '100% privacy-first - no data leaves your device',
      'Lightning fast with no server dependencies',
      'Advanced PDF processing with password protection',
      'Beautiful, responsive design',
      'Free forever, no ads or tracking',
    ],
    links: {
      live: 'https://officetools-4uym23kfv-aranhavs-projects.vercel.app',
    },
    type: 'own',
  },
  {
    title: 'Enterprise Logistics Platform',
    category: 'SaaS Solution',
    description: 'Developed a comprehensive SaaS platform for an international logistics company, including vendor management, tracking systems, and analytics dashboard. Transformed their operations serving thousands of vendors globally.',
    image: '/projects/logistics.jpg',
    gradient: 'from-orange-500 to-red-600',
    tags: ['React', 'Node.js', 'UI/UX Design', 'System Architecture'],
    highlights: [
      '74% increase in operational efficiency',
      '60% reduction in support tickets',
      'Mobile-first design for field operations',
      'Real-time tracking and analytics',
      'Scalable architecture supporting 20k+ daily users',
    ],
    status: 'Enterprise Client',
    type: 'client',
  },
  {
    title: 'Your Next Project',
    category: 'Let\'s Build Together',
    description: 'We\'re always excited to work on new challenges. Whether you need a complete product build, a platform redesign, or strategic product consulting, we bring the same passion and expertise that we put into our own products.',
    image: '/projects/next.jpg',
    gradient: 'from-gray-600 to-gray-800',
    tags: ['Your Vision', 'Our Expertise', 'Let\'s Talk'],
    highlights: [
      'End-to-end product development',
      'UI/UX design and research',
      'Platform modernization',
      'Strategic product consulting',
    ],
    cta: true,
    type: 'cta',
  },
]

export default function Work() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 py-32 sm:py-40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Our Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-slide-in">
              From our own products born out of personal need to transformative client projects, each represents our belief that great products emerge when design and engineering work in harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Our Products Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-muted-foreground">Products we built to solve our own problems, now helping thousands of users.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:gap-16 mb-24">
            {projects.filter(p => p.type === 'own').map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300',
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
                      {(project.links as any).demo && (
                        <a
                          href={(project.links as any).demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Try Beta
                        </a>
                      )}
                      {(project.links as any).github && (
                        <a
                          href={(project.links as any).github}
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
          
          {/* Client Work Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Client Work</h2>
            <p className="text-muted-foreground">Transforming businesses through strategic design and development.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {projects.filter(p => p.type === 'client' || p.type === 'cta').map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  'group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300',
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