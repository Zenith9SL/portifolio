import { Award, Calendar } from "lucide-react"

interface Course {
  title: string
  institution: string
  completedAt: string
  category: string
}

const courses: Course[] = [
  {
    title: "React Avancado",
    institution: "Rocketseat",
    completedAt: "2024",
    category: "Frontend",
  },
  {
    title: "Node.js e APIs RESTful",
    institution: "Udemy",
    completedAt: "2024",
    category: "Backend",
  },
  {
    title: "Docker e Kubernetes",
    institution: "Alura",
    completedAt: "2023",
    category: "DevOps",
  },
  {
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    completedAt: "2023",
    category: "Cloud",
  },
  {
    title: "Banco de Dados PostgreSQL",
    institution: "DIO",
    completedAt: "2023",
    category: "Backend",
  },
]

export default function CoursesTab() {
  return (
    <div className="flex flex-col gap-4">
      {courses.map((course) => (
        <div
          key={course.title}
          className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="font-semibold text-card-foreground">
                {course.title}
              </h3>
              <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                {course.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {course.institution}
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>Concluido em {course.completedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
