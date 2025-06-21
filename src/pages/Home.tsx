import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Palette, Rocket, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user experiences that convert.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Bringing designs to life with robust, scalable, and performant code.',
  },
  {
    icon: Rocket,
    title: 'Product Development',
    description: 'End-to-end creation, from MVP to full-scale product launch.',
  },
  {
    icon: Sparkles,
    title: 'Branding & Presence',
    description: 'Building strong identities and impactful online footprints.',
  },
]

const featuredWork = [
  {
    title: 'PocketFlow',
    category: 'Personal Finance App',
    description: 'Built from our own need for better financial management. Smart expense tracking, budgeting, and insights in one beautiful app.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'OfficeTools Hub',
    category: 'Privacy-First Platform',
    description: 'No more data-hungry tools. PDF processing, QR generation, and more - all running locally in your browser.',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'ShipGlobal',
    category: 'Client Success Story',
    description: 'Platform redesign serving 20,000+ vendors. 74% increase in repeat orders through thoughtful UX improvements.',
    color: 'from-orange-500 to-red-600',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Where Design Meets
              <motion.span 
                className="block text-primary"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Engineering Excellence
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Three minds, one vision: Product strategy meets thoughtful design meets solid engineering. We build digital products that users love and businesses rely on.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="/contact"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
              >
                Start Your Project
              </Link>
              <Link
                to="/work"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                View Our Work <ArrowRight className="inline-block ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital services designed to transform your vision into reality
            </p>
          </AnimatedSection>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="relative group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Recent projects showcasing our expertise in design and development
            </p>
          </AnimatedSection>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {featuredWork.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.15}>
                  <motion.div
                    className={cn(
                      'group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] h-full',
                      project.color
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                  <div className="relative h-full rounded-2xl bg-background p-8 transition-transform duration-300 group-hover:scale-[0.98]">
                    <div className="mb-4 text-sm font-medium text-muted-foreground">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      {project.description}
                    </p>
                    <Link
                      to="/work"
                      className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View case study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
            Let's discuss your project and see how we can help transform your vision into reality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold leading-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimatedSection>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-white to-primary-foreground opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </div>
  )
}