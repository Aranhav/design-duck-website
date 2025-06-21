import { Link } from 'react-router-dom'
import { 
  Palette, 
  Code2, 
  Rocket, 
  Sparkles,
  Server,
  ArrowRight,
  Lightbulb,
  Users,
  Zap,
  Shield,
  Layers,
  Smartphone,
  Database,
  Cloud,
  Lock,
  BarChart,
  Target,
  Brush,
  Globe
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
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:gap-20">
            {services.map((service, index) => {
              const gradients = [
                'from-blue-400/40 to-cyan-500/40',
                'from-purple-400/40 to-pink-500/40',
                'from-orange-400/40 to-red-500/40',
                'from-green-400/40 to-teal-500/40',
                'from-pink-400/40 to-purple-500/40'
              ];
              
              const iconColors = [
                'text-blue-600',
                'text-purple-600',
                'text-orange-600',
                'text-green-600',
                'text-pink-600'
              ];
              
              const featureIcons = [
                [Layers, Smartphone, Brush, Target, Globe, BarChart],
                [Code2, Smartphone, Zap, Globe, Database, Rocket],
                [Target, Cloud, Lock, BarChart, Rocket, Users],
                [Brush, Target, Palette, Globe, Lightbulb, BarChart],
                [Database, Cloud, Lock, Code2, Shield, Zap]
              ];
              
              return (
                <div
                  key={service.title}
                  className={cn(
                    'group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300',
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                    'flex flex-col lg:flex'
                  )}
                >
                  {/* Visual Section with Gradient */}
                  <div className="relative lg:w-1/2">
                    <div className={cn(
                      'absolute inset-0 bg-gradient-to-br',
                      gradients[index]
                    )} />
                    <div className="relative h-full min-h-[500px] flex flex-col justify-between p-10 lg:p-12">
                      <div>
                        <div className="mb-8">
                          <div className="h-16 w-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg mb-6">
                            <service.icon className={cn('h-8 w-8', iconColors[index])} />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 text-lg">
                            Transform your ideas into reality
                          </p>
                        </div>
                        
                        {/* Process Steps Visual */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                          <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Our Process</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {service.process.map((step, stepIndex) => (
                              <div key={step.step} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-1">
                                  <div className={cn(
                                    'h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold text-white',
                                    index === 0 ? 'bg-blue-500' :
                                    index === 1 ? 'bg-purple-500' :
                                    index === 2 ? 'bg-orange-500' :
                                    index === 3 ? 'bg-green-500' :
                                    'bg-pink-500'
                                  )}>
                                    {stepIndex + 1}
                                  </div>
                                  <h5 className="text-sm font-semibold text-gray-800">{step.step}</h5>
                                </div>
                                <p className="text-xs text-gray-600">{step.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-10 lg:p-16">
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold text-foreground mb-6">What We Deliver</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => {
                          const FeatureIcon = featureIcons[index][featureIndex];
                          return (
                            <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <FeatureIcon className={cn('h-5 w-5 mt-0.5 flex-shrink-0', iconColors[index])} />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={cn(
                        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200',
                        'bg-gradient-to-r text-white',
                        index === 0 ? 'from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' :
                        index === 1 ? 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' :
                        index === 2 ? 'from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700' :
                        index === 3 ? 'from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700' :
                        'from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
                      )}
                    >
                      Get Started with {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 sm:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine strategic thinking with meticulous execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approach.map((item, index) => {
              const gradients = [
                'from-blue-400/20 to-cyan-500/20',
                'from-purple-400/20 to-pink-500/20',
                'from-orange-400/20 to-red-500/20',
                'from-green-400/20 to-teal-500/20'
              ];
              
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-50',
                    gradients[index]
                  )} />
                  <div className="relative p-10">
                    <div className={cn(
                      "h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg",
                      index === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                      index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                      index === 2 ? 'bg-gradient-to-br from-orange-500 to-red-600' :
                      'bg-gradient-to-br from-green-500 to-teal-600'
                    )}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 px-6 py-32 sm:py-40 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4" />
            Let's Build Together
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Transform Your Ideas?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Choose the service that fits your needs, and let's create something extraordinary together. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}