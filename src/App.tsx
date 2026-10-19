
import { useState } from "react";
import {
  Code2,
  ExternalLink,
  ArrowUpRight,
  Mail,
  GraduationCap,
  Database,
  Cloud,
  Globe,
  Menu,
  X,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import profileImage from "./assets/images/profile.jpeg";

const profile = {
  name: "Sinelizwi Gebeda",
  title: "Software Developer",
  location: "South Africa",
  email: "sinelizwigebeda@gmail.com",
  github: "https://github.com/Sinelizwi-gebeda1",
  linkedin: "https://www.linkedin.com/in/sinelizwi-gebeda-9668a2128/",
  portfolio: "https://sinelizwi-gebeda1.github.io/Portfolio/index.html",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, user-friendly interfaces.",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing applications, APIs and server-side functionality.",
    icon: Cloud,
    skills: ["Python", "Django", "Django REST Framework", "Java", "PHP", "C#"],
  },
  {
    title: "Databases",
    description: "Working with relational databases and application data.",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQLite", "SQL"],
  },
  {
    title: "Tools and Platforms",
    description: "Tools I use to build, manage and deploy projects.",
    icon: Globe,
    skills: [
      "Git",
      "GitHub",
      "WordPress",
      "WooCommerce",
      "Figma",
      "Microsoft Azure",
      "Jira",
      "Trello",
      "Elementor",
      "ChatGPT",
      "Claude",
      "WPBakery"
    ],
  },
];

const experience = [
  {
    role: "Junior App and Cloud System Developer",
    company: "DBI Intelligent Technology Group",
    period: "August 2024 – November 2025",
    description:
      "Worked on application development and cloud-related systems during a CAPACITI placement. Gained practical experience in software development, technical problem-solving and working with development tools.",
    points: [
      "Contributed to application development and system-related tasks.",
      "Worked with development technologies and software tools.",
      "Built practical experience in troubleshooting and collaborative development.",
    ],
  },
  {
    role: "Digital Intern",
    company: "Flicker Leap",
    period: "August 2022 – January 2024",
    description:
      "Worked on website development and digital projects, with a focus on WordPress, WooCommerce and improving website content and performance.",
    points: [
      "Built and updated websites using WordPress and WooCommerce.",
      "Worked with CSS, website content migration and SEO.",
      "Supported website analytics and performance improvements.",
    ],
  },
  {
    role: "Earlier Professional Experience",
    company: "Loomee Group",
    period: "February 2020 – July 2022",
    description:
      "Gained additional professional experience and developed communication, organisation and workplace skills.",
    points: [
      "Worked in a professional team environment.",
      "Developed transferable skills that support my work in technology.",
    ],
  },
];

const projects = [
  {
    title: "Elephant Learning",
    category: ["React", "Backend"],
    type: "Full-Stack Platform",
    description:
      "An education recruitment and placement platform designed to connect schools with educators. The project includes a React and TypeScript frontend with a Django backend.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Django", "MySQL", "Python"],
    link: "https://elephant-learningsa.github.io/elephant-learning/",
    linkLabel: "View project",
    status: "In development",
  },
  {
    title: "AfricaTech Academy",
    category: "Web",
    type: "Website",
    description:
      "A website supporting technology education, innovation and entrepreneurship initiatives, including programme information and opportunities for young people.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://africatechacademy.co.za/",
    linkLabel: "Visit website",
  },
  {
    title: "YTIP Programme",
    category: "Web",
    type: "Programme Website",
    description:
      "A programme page for the Youth Technology Innovation Programme, sharing information about the initiative and its opportunities for students at participating institutions.",
    tech: ["React", "Web Development", "Responsive Design"],
    link: "https://africatechacademy.co.za/ytip",
    linkLabel: "Visit programme",
  },
  {
    title: "IT Helpdesk Ticketing System",
    category: "Backend",
    type: "Web Application",
    description:
      "A ticketing application built with Django to support the reporting and management of IT support requests.",
    tech: ["Python", "Django", "HTML", "Tailwind CSS", "PostgreSQL"],
    link: "https://ticketing-system-yiez.onrender.com/",
    linkLabel: "View project",
  },
  {
    title: "House of Ubuntu Global Voices",
    category: "React",
    type: "Website",
    description:
      "A responsive website built to present an organisation and its work through a clear, accessible user interface.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://hougv.co.za/",
    linkLabel: "Visit website",
  },
  {
    title: "Vegie Delight",
    category: "Web",
    type: "Website",
    description:
      "A web project focused on presenting products and information through a straightforward, responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://sinelizwi-gebeda1.github.io/Project/index.html",
    linkLabel: "View project",
  },
  {
    title: "Funxiono",
    category: "WordPress",
    type: "WordPress Website",
    description:
      "A WordPress website project involving website content, page layouts and presentation.",
    tech: ["WordPress", "Elementor", "CSS"],
    link: "https://www.funxiono.co.za/",
    linkLabel: "Visit website",
  },
  {
    title: "Skincolab",
    category: "WordPress",
    type: "WooCommerce Website",
    description:
      "An e-commerce website project using WooCommerce to present products and support an online shopping experience.",
    tech: ["WordPress", "WooCommerce", "CSS"],
    link: "https://www.skincolab.co.za/",
    linkLabel: "Visit website",
  },
  {
    title: "BLU by Adcorp",
    category: "WordPress",
    type: "Website",
    description:
      "A business website project focused on presenting services and information in a professional online format.",
    tech: ["WordPress", "Web Development", "CSS"],
    link: "https://www.blubyadcorp.com/",
    linkLabel: "Visit website",
  },
  {
    title: "King Brands",
    category: "WordPress",
    type: "Website",
    description:
      "A website project supporting brand presentation and online visibility.",
    tech: ["WordPress", "CSS", "Web Design"],
    link: "https://www.kingbrands.co.za/",
    linkLabel: "Visit website",
  },
  
{
  title: "The Gentleman's Cut",
  category: "React",
  type: "Full-Stack Web Application",
  description:
    "A responsive barbershop website featuring a premium black, cream and gold design. Built with React and TypeScript, the project includes service listings, barber profiles, appointment booking, customer details, booking confirmations and Supabase integration.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "React Router",
    "Lucide React",
  ],
  link: "https://the-gentlemans-cut.netlify.app/",
  linkLabel: "Visit website",
},
];

const certifications = [
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    detail: "Microsoft",
  },
  {
    name: "Java Programming Certificate",
    detail: "Java Development",
  },
  {
    name: "Data Science Certificate",
    detail: "Data Analysis and Science",
  },
  {
    name: "Cisco DevNet Certificate",
    detail: "Software Development and Networking Technologies",
  },
];

const filters = ["All", "React", "Backend", "WordPress", "Web"];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  
const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes(activeFilter)
          : project.category === activeFilter
      );


  return (
    <div className="min-h-screen overflow-hidden bg-[#081321] text-slate-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081321]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Sinelizwi Gebeda homepage"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400 font-bold text-[#081321]">
              SG
            </span>
            <span className="font-semibold text-white">
              Sinelizwi<span className="text-sky-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-sky-400 px-5 py-2.5 text-sm font-bold text-[#081321] transition hover:bg-sky-300 md:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm text-slate-300 transition hover:text-sky-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative scroll-mt-24 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12"
        >
          <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-sm text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Software Developer · Open to opportunities
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Hi, I&apos;m Sinelizwi.
                <span className="mt-2 block text-sky-400">
                  I build for the web.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m a software developer who enjoys building useful
                applications, responsive websites and digital experiences.
                I work across frontend and backend development, turning ideas
                into practical solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-bold text-[#081321] transition hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  Explore my work
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-sky-400/50 hover:bg-white/5"
                >
                  Contact me
                  <Mail size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-sky-400" />
                  {profile.location}
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-400"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-sky-400"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] border border-sky-400/10" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#122b45] to-[#0b1727] p-7 shadow-2xl shadow-black/20 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Developer profile
                  </span>
                  <Code2 size={21} className="text-sky-400" />
                </div>

              
                
              <div className="my-9 flex justify-center">
                <div className="h-40 w-40 overflow-hidden rounded-full border border-sky-300/30 bg-sky-400/10 shadow-lg shadow-sky-500/10 sm:h-48 sm:w-48">
                  <img
                    src={profileImage}
                    alt="Sinelizwi Gebeda"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-sky-300">{profile.title}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Frontend · Backend · Web Applications
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  <div>
                    <p className="text-lg font-bold text-white">React</p>
                    <p className="mt-1 text-xs text-slate-500">Frontend</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Python</p>
                    <p className="mt-1 text-xs text-slate-500">Backend</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">SQL</p>
                    <p className="mt-1 text-xs text-slate-500">Databases</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#102136] p-4 shadow-xl sm:flex">
                <span className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                  <CheckCircle2 size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Always learning
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Building and improving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-y border-white/5 bg-[#0c1929] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="A little about me"
                title="Good software starts with understanding the problem."
              />
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <GraduationCap size={21} className="text-sky-400" />
                Information Technology background
              </div>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I&apos;m Sinelizwi, a South African developer with a background
                in Information Technology and hands-on experience in website
                development, application development and digital projects.
              </p>
              <p>
                I enjoy working on both the parts users see and the systems
                that make applications work. My experience includes building
                React interfaces, developing with Python and Django, working
                with databases, and creating and maintaining WordPress
                websites.
              </p>
              <p>
                I like learning new technologies, solving problems and
                improving my work through practical projects. I&apos;m looking
                for opportunities where I can contribute, keep learning and
                grow as a developer.
              </p>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:text-sky-300"
              >
                Find me on GitHub
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What I work with"
              title="Skills and technologies"
              description="The technologies and tools I have used across web development, application development and digital projects."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-sky-400/30 hover:bg-white/[0.04] sm:p-8"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-sky-400/10 p-3 text-sky-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-[#0b1727] px-3 py-2 text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-y border-white/5 bg-[#0c1929] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="My journey"
              title="Experience"
              description="A look at my professional experience and the work that has helped me grow."
            />

            <div className="relative ml-2 space-y-10 border-l border-sky-400/20 pl-7 sm:ml-4 sm:pl-10">
              {experience.map((job) => (
                <article key={job.role} className="relative">
                  <span className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-[#0c1929] bg-sky-400 sm:-left-[2.85rem]" />

                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-2 font-medium text-sky-300">
                          {job.company}
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-5 leading-7 text-slate-400">
                      {job.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-sky-400"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects I've worked on"
              description="A selection of websites and applications that reflect my experience across frontend development, backend development and content management systems."
            />

            <div className="mb-9 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-sky-400 text-[#081321]"
                      : "border border-white/10 bg-white/[0.025] text-slate-300 hover:border-sky-400/40 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="rounded-xl border border-sky-400/15 bg-sky-400/10 p-3 text-sky-300">
                      <Code2 size={24} />
                    </div>

                    {"status" in project && project.status && (
                      <span className="rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-200">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-400">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-sky-300">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 border-b border-sky-400/30 pb-1 text-sm font-semibold text-sky-300 transition hover:border-sky-300 hover:text-sky-200"
                  >
                    {project.linkLabel}
                    <ExternalLink size={15} />
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-sky-400/40 hover:bg-white/5"
              >
                More projects on GitHub
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-y border-white/5 bg-[#0c1929] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Learning and development"
              title="Certifications"
              description="Training and certifications that complement my practical development experience."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification) => (
                <div
                  key={certification.name}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="mt-0.5 rounded-lg bg-sky-400/10 p-2 text-sky-300">
                    <GraduationCap size={21} />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-6 text-white">
                      {certification.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {certification.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-sky-500/[0.06] to-transparent" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
              Let&apos;s connect
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Have a project or opportunity in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              I&apos;m open to discussing software development opportunities,
              interesting projects and ways I can contribute to a team. Feel
              free to get in touch.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 font-bold text-[#081321] transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                <Mail size={18} />
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-sky-400/40 hover:bg-white/5"
              >
                LinkedIn profile
                <ArrowUpRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">{profile.email}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="font-semibold text-white">
            Sinelizwi<span className="text-sky-400">.</span>
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sinelizwi Gebeda. Built with React and
            Tailwind CSS.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;