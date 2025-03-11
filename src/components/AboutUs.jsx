import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-white text-white" id="about-us">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Section Texte "About Us" */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <strong>LANGOS</strong> is a platform designed to provide high-quality educational resources and tools to learners and educators alike. We aim to help people learn, grow, and thrive with a diverse range of services, including online courses, tutoring, certifications, and more.
          </motion.p>

          <motion.div
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With LANGOS, you gain access to a seamless learning experience. Our platform is built to support learners from all walks of life, helping them achieve their academic and professional goals.
          </motion.div>
        </div>

        {/* Section Image Animée */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="relative w-full h-72 sm:h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="https://atelier.viaaduc.com/assets/img/elearning.png"
              alt="About Us"
              className="w-full h-full object-cover animate__animated animate__fadeIn animate__delay-2s"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
