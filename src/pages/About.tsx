import { Linkedin, Github, Mail, Target, Heart, Zap, Globe } from 'lucide-react'

const team = [
  {
    name: 'Aranhav Singh',
    role: 'Product Manager & Co-Founder',
    bio: 'Dynamic product manager with 6+ years of experience in developing customer-centric products across e-commerce and logistics. Expert in market research, roadmap creation, and cross-functional team leadership.',
    image: '/team/aranhav.jpg',
    linkedin: 'https://www.linkedin.com/in/aranhav/',
    portfolio: 'https://aranhav.com',
    email: 'aranhav@designduck.com',
  },
  {
    name: 'Harikesh Chaturvedi',
    role: 'Product Designer & Co-Founder',
    bio: 'Product Designer with 5+ years specializing in creating engaging user experiences. Currently Founding Designer at ShipGlobal, with expertise in UX/UI design, product thinking, and leading design teams.',
    image: '/team/harikesh.jpg',
    linkedin: 'https://www.linkedin.com/in/harikeshiiit/',
    portfolio: 'https://www.harikeshchaturvedi.com/',
    email: 'harikesh@designduck.com',
  },
  {
    name: 'Shubham Jha',
    role: 'Senior Frontend Engineer & Co-Founder',
    bio: 'Frontend developer passionate about building scalable, user-centric products. Expert in React, modern web technologies, and translating complex requirements into intuitive interfaces.',
    image: '/team/shubham.jpg',
    linkedin: 'https://www.linkedin.com/in/agilevisiondev/',
    github: 'https://github.com/agilevisiondev',
    email: 'shubham@designduck.com',
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
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Years of Experience', value: '5+' },
  { label: 'Team Members', value: '3' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in">
              About Design Duck
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-slide-in">
              We are a collective of designers and developers united by a singular goal: to empower startups and growing tech businesses with exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Design Duck was born from a simple belief: great products emerge when design and engineering work in perfect harmony. We are three like-minded professionals who met while working together on various projects, where we consistently saw the gap between beautiful designs and flawless execution.
              </p>
              <p className="mt-6">
                Our journey began with PocketFlow – a personal finance app we built in our spare time because we couldn't find the perfect solution for managing our own finances. This project became our proof of concept: when a product manager, a designer, and an engineer collaborate from day one, magic happens. The success of PocketFlow showed us that our complementary skills could create products that are both beautiful and functional.
              </p>
              <p className="mt-6">
                Next came OfficeTools – born from our daily frustration with privacy concerns and clunky office utilities. We built a suite of tools that we wanted to use ourselves: fast, private, and beautifully designed. No data collection, no subscriptions, just tools that work exactly as they should.
              </p>
              <p className="mt-6">
                Today, Design Duck represents our vision for how digital products should be built. We bring together product strategy, thoughtful design, and solid engineering to help startups and businesses create products their users will love. Whether it's revamping existing platforms or building new ones from scratch, we approach each project with the same passion that drove us to create our own products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The talented individuals behind Design Duck
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                {/* Placeholder for image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mt-1">{member.role}</p>
                  <p className="mt-4 text-muted-foreground">{member.bio}</p>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    {(member as any).portfolio && (
                      <a
                        href={(member as any).portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Portfolio`}
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {(member as any).github && (
                      <a
                        href={(member as any).github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
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
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center group"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {value.description}
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
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
            Ready to transform your ideas into reality? We'd love to hear about your project.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}