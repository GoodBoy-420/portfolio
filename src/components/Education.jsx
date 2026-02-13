import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Science (BSc)",
    department: "Computer Science and Engineering",
    institute: "BRAC University",
    cgpa: 3.42,
    year: 2026,
  },
  {
    title: "Higher Secondary Certificate",
    department: "Science",
    institute: "Govt. M.M. College",
    cgpa: 5.0,
    year: 2020,
  },
  {
    title: "Secondary School Certificate",
    department: "Science",
    institute: "Jashore Zilla School",
    cgpa: 5.0,
    year: 2018,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center text-(--color-redwine)"
        >
          Education
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md text-center space-y-2"
            >
              <h3 className="text-xl font-bold text-(--color-redwine)">
                {edu.title}
              </h3>
              <p>{edu.department}</p>
              <p> {edu.institute}</p>
              <p>CGPA: {edu.cgpa}</p>
              <p>Passing Year: {edu.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
