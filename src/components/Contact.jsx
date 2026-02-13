import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-(--color-redwine)"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4 text-lg"
        >
          <p>Email: riadislam9117@gmail.com</p>
          <p>Phone: +8801684560909</p>
          <p>Address: Adabor, Mohammadpur, Dhaka, Bangladesh</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
