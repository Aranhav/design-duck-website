import { Target, Heart, Zap, Users, Award, Briefcase } from 'lucide-react'
import { cn } from '@/lib/utils'

const team = [
  {
    role: 'Product Manager',
    bio: 'Dynamic product manager with 6+ years of experience in developing customer-centric products across e-commerce and logistics. Expert in market research, roadmap creation, and cross-functional team leadership.',
    avatar: 'PM',
  },
  {
    role: 'Product Designer',
    bio: 'Product Designer with 5+ years specializing in creating engaging user experiences. Expertise in UX/UI design, product thinking, and leading design teams for enterprise solutions.',
    avatar: 'PD',
  },
  {
    role: 'Senior Frontend Engineer',
    bio: 'Frontend developer passionate about building scalable, user-centric products. Expert in React, modern web technologies, and translating complex requirements into intuitive interfaces.',
    avatar: 'FE',
  },
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We deliver work of the highest quality, meticulously crafted and rigorously tested.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Building trust through transparency, honesty, and ethical practices in every interaction.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.',
  },
]

const stats = [
  { label: 'Projects Delivered', value: '50+', icon: Briefcase, color: 'from-blue-500 to-indigo-600' },
  { label: 'Happy Clients', value: '30+', icon: Heart, color: 'from-purple-500 to-pink-600' },
  { label: 'Years of Experience', value: '5+', icon: Award, color: 'from-orange-500 to-red-600' },
  { label: 'Team Members', value: '3', icon: Users, color: 'from-green-500 to-teal-600' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-32 sm:py-40">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Design • Develop • Deliver
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in">
              About Design Duck
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 animate-slide-in">
              We are a collective of designers and developers united by a singular goal: to empower startups and growing tech businesses with exceptional digital solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex -space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold text-white">PM</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold text-white">PD</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 border-4 border-white flex items-center justify-center">
                  <span className="text-sm font-bold text-white">FE</span>
                </div>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">3 Experts</div>
                <div className="text-xs text-gray-600">One Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">The Beginning</h3>
                      <p className="text-gray-600">
                        Three professionals united by a shared vision: bridging the gap between beautiful design and flawless execution.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Our First Product</h3>
                      <p className="text-gray-600">
                        PocketFlow emerged from our own need for better financial management, proving our collaborative approach works.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Growing Impact</h3>
                      <p className="text-gray-600">
                        OfficeTools followed, addressing privacy concerns with local-first tools that respect user data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Today's Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Design Duck represents our vision for how digital products should be built. We bring together product strategy, thoughtful design, and solid engineering to help startups and businesses create products their users will love.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Whether it's revamping existing platforms or building new ones from scratch, we approach each project with the same passion that drove us to create our own products.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">3</div>
                      <div className="text-xs text-gray-600">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">∞</div>
                      <div className="text-xs text-gray-600">Passion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={cn(
                  'absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full opacity-10',
                  `bg-gradient-to-br ${stat.color}`
                )} />
                <div className={cn(
                  'mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl',
                  `bg-gradient-to-br ${stat.color}`
                )}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 sm:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The talented individuals behind Design Duck
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={member.role}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Avatar Section */}
                <div className={cn(
                  "relative h-64 flex items-center justify-center overflow-hidden",
                  index === 0 && "bg-gradient-to-br from-blue-400/40 to-indigo-500/40",
                  index === 1 && "bg-gradient-to-br from-purple-400/40 to-pink-500/40",
                  index === 2 && "bg-gradient-to-br from-orange-400/40 to-red-500/40"
                )}>
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
                  <div className="relative">
                    <div className={cn(
                      "w-32 h-32 rounded-full flex items-center justify-center shadow-xl",
                      index === 0 && "bg-gradient-to-br from-blue-500 to-indigo-600",
                      index === 1 && "bg-gradient-to-br from-purple-500 to-pink-600",
                      index === 2 && "bg-gradient-to-br from-orange-500 to-red-600"
                    )}>
                      <span className="text-5xl font-bold text-white">
                        {member.avatar}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  <div className="mt-6 flex gap-3">
                    <div className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium text-white",
                      index === 0 && "bg-blue-500",
                      index === 1 && "bg-purple-500",
                      index === 2 && "bg-orange-500"
                    )}>
                      {index === 0 ? 'Strategy' : index === 1 ? 'Design' : 'Engineering'}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                      {index === 0 ? '6+ Years' : '5+ Years'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 sm:py-40 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[1px] hover:scale-105 transition-all duration-300"
              >
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-10',
                  index === 0 ? 'from-blue-500 to-blue-600' :
                  index === 1 ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-pink-600'
                )} />
                <div className="relative bg-white rounded-2xl p-8 h-full">
                  <div className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-4",
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    'bg-gradient-to-br from-orange-500 to-pink-600'
                  )}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Ready to transform your ideas into reality? We'd love to hear about your project.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}