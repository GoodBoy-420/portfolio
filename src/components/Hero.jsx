import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import profile from "../assets/profile.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Assalamualaikum 👋
          </h2>

          <h3 className="text-2xl font-semibold text-(--color-redwine)">
            Md. Redwan Islam
          </h3>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Undergraduate CSE Student Passionate about building impactful
            projects with the MERN stack. Always open to collaboration and
            learning.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            {/* Add links later */}
            <a target="_blank" href="https://www.facebook.com/redwan.riad.75/">
              <FaFacebook />
            </a>
            <a target="_blank" href="https://wa.me/+8801684560909">
              <FaWhatsapp />
            </a>
            <a target="_blank" href="tel:+8801684560909">
              <FaPhone />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-redwan-islam/"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/GoodBoy-420">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-72 rounded-2xl shadow-xl border-4 border-(--color-redwine)"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
