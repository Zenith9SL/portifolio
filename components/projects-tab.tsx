import { ExternalLink, Github, Globe } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce completa com carrinho, pagamento e painel administrativo.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicativo de gerenciamento de tarefas com drag and drop e notificacoes em tempo real.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "API Gateway",
    description:
      "Gateway de API com rate limiting, cache e monitoramento de performance.",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    repoUrl: "#",
  },
  {
    title: "Design System",
    description:
      "Biblioteca de componentes reutilizaveis com documentacao interativa e testes visuais.",
    tags: ["React", "Storybook", "Tailwind CSS", "Jest"],
    liveUrl: "#",
    repoUrl: "#",
  },
]

export default function ProjectsTab() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
        >
          <div className="mb-2 flex items-start justify-between">
            <h3 className="font-semibold text-card-foreground">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Ver ${project.title} ao vivo`}
                >
                  <Globe className="h-4 w-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Repositorio de ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
