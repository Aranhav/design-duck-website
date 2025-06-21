import { ExternalLink, Github, CreditCard, TrendingUp, PieChart, Lock, FileText, QrCode, Package, Truck, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'PocketFlow',
    category: 'Personal Finance App',
    description: 'A comprehensive personal finance management app we built because we needed a better way to manage our finances. Features expense tracking, budget management, and financial insights - all in a beautiful, intuitive interface.',
    image: '/projects/pocketflow.jpg',
    gradient: 'from-blue-400/40 to-purple-500/40',
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
    gradient: 'from-green-400/40 to-teal-500/40',
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
    gradient: 'from-orange-400/40 to-red-500/40',
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
    gradient: 'from-gray-400/40 to-gray-600/40',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-32 sm:py-40">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Portfolio & Case Studies
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in">
              Our Work
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 animate-slide-in">
              From our own products born out of personal need to transformative client projects, each represents our belief that great products emerge when design and engineering work in harmony.
            </p>
            <div className="mt-10 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Products</div>
                  <div className="text-gray-600">Launched</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">50+</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Projects</div>
                  <div className="text-gray-600">Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Our Products Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Products</h2>
            <p className="text-lg text-muted-foreground">Products we built to solve our own problems, now helping thousands of users.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-16 lg:gap-20 mb-32">
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
                    'absolute inset-0 bg-gradient-to-br',
                    project.gradient
                  )} />
                  <div className="relative h-64 lg:h-full min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                    <div className="relative text-center p-8 w-full z-10">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm uppercase tracking-wide font-medium">
                        {project.category}
                      </p>
                      
                      {/* PocketFlow Mini UI */}
                      {project.title === 'PocketFlow' && (
                        <div className="mt-8 mx-auto max-w-sm">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 space-y-3 shadow-xl">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                                <CreditCard className="h-5 w-5 text-blue-600 mb-1" />
                                <div className="text-xs text-gray-600">Balance</div>
                                <div className="text-lg font-bold text-gray-900">₹82,476</div>
                              </div>
                              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                                <TrendingUp className="h-5 w-5 text-green-600 mb-1" />
                                <div className="text-xs text-gray-600">Income</div>
                                <div className="text-lg font-bold text-gray-900">+11.1%</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                              <PieChart className="h-5 w-5 text-purple-600 mb-1" />
                              <div className="text-xs text-gray-600">Budget Overview</div>
                              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* OfficeTools Mini UI */}
                      {project.title === 'OfficeTools Hub' && (
                        <div className="mt-8 mx-auto max-w-sm">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                                <Lock className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                                <div className="text-xs text-gray-600">Password</div>
                              </div>
                              <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                                <QrCode className="h-6 w-6 text-green-600 mx-auto mb-1" />
                                <div className="text-xs text-gray-600">QR Code</div>
                              </div>
                              <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                                <FileText className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                                <div className="text-xs text-gray-600">PDF Tools</div>
                              </div>
                            </div>
                            <div className="mt-3 text-center">
                              <div className="text-xs text-gray-600">100% Privacy-First</div>
                              <div className="text-sm font-semibold text-gray-900">No Data Leaves Your Device</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Enterprise Logistics Mini UI */}
                      {project.title === 'Enterprise Logistics Platform' && (
                        <div className="mt-8 mx-auto max-w-sm">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-3">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-white/20 rounded-lg p-4 text-center">
                                <Package className="h-6 w-6 text-white/80 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-white">20K+</div>
                                <div className="text-xs text-white/70">Vendors</div>
                              </div>
                              <div className="bg-white/20 rounded-lg p-4 text-center">
                                <Truck className="h-6 w-6 text-white/80 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-white">74%</div>
                                <div className="text-xs text-white/70">Efficiency</div>
                              </div>
                              <div className="bg-white/20 rounded-lg p-4 text-center">
                                <BarChart3 className="h-6 w-6 text-white/80 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-white">60%</div>
                                <div className="text-xs text-white/70">Less Tickets</div>
                              </div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-3 text-center">
                              <div className="text-sm font-semibold text-white">Real-time Tracking & Analytics</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-10 lg:p-16">
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
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-6">Client Work</h2>
            <p className="text-lg text-muted-foreground">Transforming businesses through strategic design and development.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-16 lg:gap-20">
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
                    'absolute inset-0 bg-gradient-to-br',
                    project.gradient
                  )} />
                  <div className="relative h-64 lg:h-full min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                    <div className="relative text-center p-8 w-full z-10">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm uppercase tracking-wide font-medium">
                        {project.category}
                      </p>
                      
                      {/* Enterprise Logistics Mini UI */}
                      {project.title === 'Enterprise Logistics Platform' && (
                        <div className="mt-8 mx-auto max-w-sm">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 space-y-3 shadow-xl">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                                <Package className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-gray-900">20K+</div>
                                <div className="text-xs text-gray-600">Vendors</div>
                              </div>
                              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                                <Truck className="h-6 w-6 text-red-600 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-gray-900">74%</div>
                                <div className="text-xs text-gray-600">Efficiency</div>
                              </div>
                              <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                                <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                                <div className="text-2xl font-bold text-gray-900">60%</div>
                                <div className="text-xs text-gray-600">Less Tickets</div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                              <div className="text-sm font-semibold text-gray-900">Real-time Tracking & Analytics</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-10 lg:p-16">
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