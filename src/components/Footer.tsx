import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail } from 'lucide-react'

const team = [
  {
    name: 'Aranhav Singh',
    role: 'Product Manager',
    linkedin: 'https://www.linkedin.com/in/aranhav/',
  },
  {
    name: 'Harikesh Chaturvedi',
    role: 'Product Designer',
    linkedin: 'https://www.linkedin.com/in/harikeshiiit/',
  },
  {
    name: 'Shubham Jha',
    role: 'Frontend Engineer',
    linkedin: 'https://www.linkedin.com/in/agilevisiondev/',
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Design Duck</h3>
            <p className="text-sm opacity-90 mb-4">
              Where Design Meets Engineering. Product strategy, thoughtful design, and solid code - working together to create products users love.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:designduck4u@gmail.com"
                className="hover:opacity-80 transition-opacity"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/designduck"
                className="hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/work" className="hover:opacity-80 transition-opacity">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:opacity-80 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Team</h4>
            <ul className="space-y-2 text-sm">
              {team.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>{member.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Design Duck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}