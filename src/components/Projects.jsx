import { motion } from "framer-motion";

const dummyProjects = [
  {
    name: "Booknest",
    description: "This is a sample project description.",
    tools: ["React", "NodeJS", "MongoDB", "TailwindCSS"],
    live: "https://booknest-virid.vercel.app/",
    git: "https://github.com/GoodBoy-420/bookNest",
    pdf: "",
  },
  {
    name: "Job Sphere",
    description: "This is a sample project description.",
    tools: ["React", "NodeJS", "MongoDB", "Shadcn"],
    live: "https://job-spherefrontend.vercel.app/",
    git: "https://github.com/GoodBoy-420/jobportal",
    pdf: "",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-(--color-redwine)"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {dummyProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all"
            >
              <div className="h-48 bg-gray-300">
                <img src="https://placehold.co/600x400" alt="booknest" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-(--color-redwine)">
                  {project.name}
                </h3>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-(--color-redwine) text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 text-sm font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-(--color-redwine) transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    className="hover:text-(--color-redwine) transition"
                  >
                    Git
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-(--color-redwine) transition pointer-events-none"
                  >
                    PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future backend integration:
           projectsData.map(project => <ProjectCard key={project._id} />)
        */}
      </div>
    </section>
  );
};

export default Projects;
