import { Link } from 'react-router-dom'
import { 
  Palette, 
  Code2, 
  Rocket, 
  Sparkles,
  Server,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Users,
  Zap,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'

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
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust, scalable server-side solutions that power your applications. From APIs to databases, we ensure your backend infrastructure is secure, efficient, and future-ready.',
    features: [
      'RESTful & GraphQL API Development',
      'Database Design & Optimization',
      'Cloud Infrastructure (AWS, GCP, Azure)',
      'Microservices Architecture',
      'Authentication & Security',
      'Performance Optimization & Caching',
    ],
    process: [
      { step: 'Architecture', desc: 'Designing scalable system architecture' },
      { step: 'Development', desc: 'Building secure and efficient APIs' },
      { step: 'Integration', desc: 'Seamless frontend-backend connection' },
      { step: 'Deployment', desc: 'Cloud deployment with monitoring' },
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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-32 sm:py-40">
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
      <section className="py-32 sm:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      index === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      index === 3 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      'bg-gradient-to-br from-pink-500 to-pink-600'
                    }`}>
                      <service.icon className="h-6 w-6 text-white" />
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
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 lg:p-12 border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step, stepIndex) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold text-white ${
                            index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                            index === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                            index === 3 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            'bg-gradient-to-br from-pink-500 to-pink-600'
                          }`}>
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
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine strategic thinking with meticulous execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="p-8">
                  <div className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-4",
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    index === 2 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                    'bg-gradient-to-br from-green-500 to-green-600'
                  )}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600 px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
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