import { useState } from "react";
import { FolderKanban, GraduationCap, Share2 } from "lucide-react";
import ProjectsTab from "@/components/ProjectsTab";
import CoursesTab from "@/components/CoursesTab";
import SocialTab from "@/components/SocialTab";

const tabs = [
  { id: "projects", label: "Projetos", icon: FolderKanban },
  { id: "courses", label: "Cursos", icon: GraduationCap },
  { id: "social", label: "Redes Sociais", icon: Share2 },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");

  return (
    <div className="flex min-h-screen items-start justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-1 text-sm font-medium text-primary">Portfólio</div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seu Nome Aqui
          </h1>
          <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            incríveis e soluções escaláveis.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-lg border border-border bg-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={activeTab} className="animate-fade-in">
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "courses" && <CoursesTab />}
          {activeTab === "social" && <SocialTab />}
        </div>
      </div>
    </div>
  );
};

export default Index;