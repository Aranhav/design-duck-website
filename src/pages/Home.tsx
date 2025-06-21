import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Palette, Rocket, Sparkles, Server, Mail, Phone, MapPin } from 'lucide-react'
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
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable APIs, databases, and cloud infrastructure that power your apps.',
  },
]

const featuredWork = [
  {
    title: 'PocketFlow',
    category: 'Personal Finance App',
    description: 'Built from our own need for better financial management. Smart expense tracking, budgeting, and insights in one beautiful app.',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    iconColor: 'from-blue-500 to-indigo-600',
    linkColor: 'text-blue-600 hover:text-blue-700',
  },
  {
    title: 'OfficeTools Hub',
    category: 'Privacy-First Platform',
    description: 'No more data-hungry tools. PDF processing, QR generation, and more - all running locally in your browser.',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    iconColor: 'from-green-500 to-emerald-600',
    linkColor: 'text-green-600 hover:text-green-700',
  },
  {
    title: 'Enterprise Logistics',
    category: 'SaaS Platform',
    description: 'Complete platform transformation for an international logistics company. 74% increase in operational efficiency.',
    bgColor: 'bg-gradient-to-br from-orange-50 to-pink-50',
    iconColor: 'from-orange-500 to-pink-600',
    linkColor: 'text-orange-600 hover:text-orange-700',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20" />
        <div className="container relative mx-auto px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Where Design Meets
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <Link
                to="/work"
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors"
              >
                View Our Work <ArrowRight className="inline-block ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 sm:py-40 bg-gray-50">
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
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="relative group bg-white p-8 rounded-3xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl h-full"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                  <div className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300",
                    index === 0 && "bg-gradient-to-br from-blue-500 to-blue-600",
                    index === 1 && "bg-gradient-to-br from-purple-500 to-purple-600",
                    index === 2 && "bg-gradient-to-br from-orange-500 to-orange-600",
                    index === 3 && "bg-gradient-to-br from-green-500 to-green-600",
                    index === 4 && "bg-gradient-to-br from-pink-500 to-pink-600"
                  )}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className={cn(
                      "mt-4 inline-flex items-center text-sm font-medium transition-colors",
                      index === 0 && "text-blue-600 hover:text-blue-700",
                      index === 1 && "text-purple-600 hover:text-purple-700",
                      index === 2 && "text-orange-600 hover:text-orange-700",
                      index === 3 && "text-green-600 hover:text-green-700",
                      index === 4 && "text-pink-600 hover:text-pink-700"
                    )}
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
      <section className="py-32 sm:py-40 bg-gray-50">
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
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {featuredWork.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.15}>
                  <motion.div
                    className={cn(
                      'group relative h-full rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300',
                      project.bgColor
                    )}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-full p-10">
                      {/* Icon */}
                      <div className={cn(
                        'mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg',
                        project.iconColor
                      )}>
                        {index === 0 && <Sparkles className="h-7 w-7 text-white" />}
                        {index === 1 && <Code2 className="h-7 w-7 text-white" />}
                        {index === 2 && <Rocket className="h-7 w-7 text-white" />}
                      </div>
                      
                      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <Link
                        to="/work"
                        className={cn(
                          "mt-6 inline-flex items-center text-sm font-semibold transition-colors",
                          project.linkColor
                        )}
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 px-6 py-32 sm:py-40 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Let's discuss your project and see how we can help transform your vision into reality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold leading-6 text-white hover:text-white/80 transition-colors"
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

      {/* Contact Section */}
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <AnimatedSection delay={0.1}>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-foreground">Let's Start a Conversation</h3>
                  <p className="text-muted-foreground">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <a href="mailto:designduck4u@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">
                          designduck4u@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Location</h4>
                        <p className="text-muted-foreground">Remote First, Global Team</p>
                      </div>
                    </div>
                  </div>

                </div>
              </AnimatedSection>

              {/* Quick Contact Form */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}