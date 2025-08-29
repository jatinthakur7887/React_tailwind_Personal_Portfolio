import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern ReactJS Portfolio",
    description: `Built and deployed a modern, fully responsive developer portfolio using React.js, TailwindCSS, and JavaScript.  
    Inspired by a space-themed UI, the site features an interactive theme toggle, animated hero and skills sections,  
    and a responsive project showcase along with a functional contact form.`,
    image: "/projects/Project1.jpeg",
    tags: ["React.js, TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Flappy Bird Clone",
    description: `Developed a Flappy Bird game clone using Phaser.js, HTML, and JavaScript.
    Simulated the mechanics of the original game, focusing on smooth player controls, obstacle generation,
    collision detection, and an engaging scoring system.`,
    image: "projects/Project2.jpg",
    tags: ["Javascript, Phaser.js"],
    demoUrl: "#",
    githubUrl: "#", 
  },

  {
    id: 3,
    title: "Weather Web Application",
    description: `Built a weather web application using HTML, CSS, JavaScript, and React.js.
    Integrated with the OpenWeather API to fetch and display real-time weather data.
    Implemented asynchronous data fetching, dynamic content rendering, and an organized layout using CSS
    to deliver an interactive user experience. `,
    image: "projects/Project3.jpeg",
    tags: ["Javascript, React.js, HTML, CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          🚀 Here are some of my recent projects. each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-65 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {
                  <div className="flex flex-wrap justify-center gap-3 mb-1">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm font-semibold border rounded-full bg-primary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                }
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jatinthakur7887"
          >
             Check out my GitHub <ArrowRight  size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};
