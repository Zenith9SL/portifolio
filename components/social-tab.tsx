import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"

interface SocialLink {
  label: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  username: string
}

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/seunome",
    icon: Github,
    username: "@seunome",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/seunome",
    icon: Linkedin,
    username: "/in/seunome",
  },
  {
    label: "Twitter / X",
    url: "https://twitter.com/seunome",
    icon: Twitter,
    username: "@seunome",
  },
  {
    label: "E-mail",
    url: "mailto:seunome@email.com",
    icon: Mail,
    username: "seunome@email.com",
  },
]

export default function SocialTab() {
  return (
    <div className="flex flex-col gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <link.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-card-foreground">{link.label}</h3>
            <p className="text-sm text-muted-foreground">{link.username}</p>
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>
      ))}
    </div>
  )
}
