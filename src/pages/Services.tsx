import { Link } from 'react-router-dom'
import { 
  Palette, 
  Code2, 
  Rocket, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  Zap,
  Shield
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'We believe exceptional design is the cornerstone of great products. Our UI/UX process is human-centered, data-driven, and focused on creating intuitive, delightful, and highly effective user experiences.',
    features: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Information Architecture',
      'Interaction Design & Usability Testing',
      'Visual Design Systems & Style Guides',
      'Responsive Design Implementation',
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your users and business goals' },
      { step: 'Ideation', desc: 'Exploring creative solutions and concepts' },
      { step: 'Design', desc: 'Creating beautiful, functional interfaces' },
      { step: 'Testing', desc: 'Validating designs with real users' },
    ],
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Bringing designs to life with robust, scalable, and performant code. Our frontend development ensures cross-browser compatibility, responsiveness, and seamless user interfaces built with modern frameworks.',
    features: [
      'React, Vue, Angular Development',
      'Responsive Web Development',
      'Performance Optimization',
      'API Integration & Data Visualization',
      'Progressive Web Apps (PWA)',
      'Interactive Web Experiences',
    ],
    process: [
      { step: 'Architecture', desc: 'Planning scalable component structures' },
      { step: 'Development', desc: 'Writing clean, maintainable code' },
      { step: 'Testing', desc: 'Ensuring quality across all devices' },
      { step: 'Optimization', desc: 'Maximizing performance and SEO' },
    ],
  },
  {
    icon: Rocket,
    title: 'Product Development',
    description: 'From initial concept to full-scale launch, we provide end-to-end product development. We partner with you to define, build, and iterate, focusing on agile methodologies.',
    features: [
      'MVP Definition & Development',
      'Full Stack Development',
      'Cloud Infrastructure Setup',
      'Scalability & Security Architecture',
      'CI/CD Pipeline Implementation',
      'Post-Launch Support & Iteration',
    ],
    process: [
      { step: 'Strategy', desc: 'Defining product vision and roadmap' },
      { step: 'Build', desc: 'Agile development with regular releases' },
      { step: 'Launch', desc: 'Deployment and go-to-market support' },
      { step: 'Grow', desc: 'Continuous improvement and scaling' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Branding & Online Presence',
    description: 'Build a powerful and memorable brand that resonates with your audience. We craft comprehensive brand strategies and visual identities for cohesive digital presence.',
    features: [
      'Brand Strategy & Positioning',
      'Logo Design & Visual Identity',
      'Brand Guidelines & Assets',
      'Website Design & Development',
      'Content Strategy',
      'Digital Marketing Consultation',
    ],
    process: [
      { step: 'Research', desc: 'Market analysis and competitor research' },
      { step: 'Strategy', desc: 'Defining brand personality and values' },
      { step: 'Design', desc: 'Creating visual identity and assets' },
      { step: 'Implement', desc: 'Applying brand across all touchpoints' },
    ],
  },
]

const approach = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of trends and leverage cutting-edge technologies to give you a competitive edge.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Your success is our success. We work as an extension of your team, not just vendors.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Fast iterations, regular updates, and flexible approach to changing requirements.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control at every stage of the development process.',
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-slide-in">
              Comprehensive digital solutions designed to transform your vision into impactful reality. From concept to launch, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Process */}
                <div className="flex-1 bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step, stepIndex) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                            {stepIndex + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {step.step}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine strategic thinking with meticulous execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div
                key={item.title}
                className="text-center group"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}