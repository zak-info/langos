import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App2.css";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/costum.css";
import { X } from "lucide-react";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import HeroSlider from "./components/HeroSlider";
import AboutUs from './components/AboutUs'
import SpaceStudents from './components/SpaceStudents'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import classNames from 'classnames';
import LoginForm from './components/LoginForm'
import { useNavigate } from "react-router-dom";
import ProfDashboard from './components/ProfDashboard'
const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className="py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 15 L75 50 L50 85 L25 50 Z" className="fill-green-500" />
                  <path d="M50 10 L70 45 L50 80 L30 45 Z" className="fill-blue-900" />
                  <rect x="40" y="5" width="20" height="10" className="fill-green-700" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-blue-900 tracking-wide">
                <span className="text-green-600">L</span>ANGOS
              </h1>
            </div>
            <div className="hidden md:flex items-center text-sm gap-2">
              <HiViewGrid size={20} />
              <span>Categories</span> 
              
            </div>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              {["Subjects", "Lesson Plans", "Games", "More Resources", "Roly Recommends"].map((item, index) => ( // Translated the items
                <li key={index}>
                  <a href="#" className="text-gray-700 hover:text-blue-500 no-underline">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <button><BiShoppingBag size={25} /></button>
            <button onClick={handleLogin} className="text-gray-700">
              Login
            </button>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={25} /> : <HiOutlineMenuAlt1 size={25} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div
            className={classNames("fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-md p-6 transition-transform duration-300", {
              "translate-x-0": open,
              "-translate-x-full": !open,
            })}
          >
            <ul className="space-y-6 text-lg mt-10">
              {["Subjects", "Lesson Plans", "Games", "More Resources", "Roly Recommends"].map((item, index) => ( // Translated the items
                <li key={index}>
                  <a href="#" className="text-gray-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
// Services Section
const services = [
  {
    image: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2Fs41928-020-00534-0/MediaObjects/41928_2020_534_Figa_HTML.png",
    title: "Online Courses",
    description: "Access a wide range of online courses, learn at your own pace with industry experts.",
    buttonText: "Explore Courses",
  },
  {
    image: "https://er.educause.edu/-/media/images/blogs/2020/9/er20_3402_706x394_blog.jpg?hash=52940C1FE3412224FF4D0347898A7D4448DB5DB3",
    title: "Tutoring Services",
    description: "Get personalized tutoring from experienced educators in various subjects.",
    buttonText: "Find a Tutor",
  },
  {
    image: "https://chronicle.brightspotcdn.com/dims4/default/ea16187/2147483647/strip/true/crop/973x730+163+0/resize/400x300!/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.us-east-1.amazonaws.com%2F7f%2Fa1%2Fecfc810f42e2b26dba7403f3d46e%2F050824-aipersonalizedlearning-plain.png",
    title: "Certification Programs",
    description: "Earn recognized certifications in various fields and boost your career opportunities.",
    buttonText: "Get Certified",
  },
  {
    image: "https://www.rathinamcollege.edu.in/wp-content/uploads/2020/09/Sanjeevimage1_20200518160106-2000x1000.jpg",
    title: "Educational Resources",
    description: "Access a wealth of educational resources like books, articles, and interactive tools.",
    buttonText: "Browse Resources",
  },
];

// Services Section
const Services = () => (
  <section className="py-16 bg-gray-50" id="services">
    <div className="container mx-auto px-6 text-center">
      <motion.h2 className="text-4xl font-extrabold text-blue-900 mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Our Education Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl transform hover:rotate-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-6 transition-all duration-300 transform hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 transition-all duration-300 hover:text-blue-600">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const Courses = () => {
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleExamSubmit = () => {
    console.log(`Starting exam for language: ${language}`);
  };

  return (
    <motion.section
      className="py-16 px-4 bg-white text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
          Explore Our Language Courses
        </h2>
        <div className="mb-6">
          <select
            className="px-6 py-3 text-lg rounded-lg bg-white text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="" disabled>Select Course Language</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
            <option value="arabic">Arabic</option>
            <option value="chinese">Chinese</option>
            <option value="turkish">Turkish</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* English Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "english" ? "border-4 border-blue-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://img.asmedia.epimg.net/resizer/v2/CHEO36LDSRCFFLKHDEUBVTMYSU.jpg?auth=05769f14df76602b843b5ce2dae8cb12a34a0d21353522f4de9ca32fbfe78ce5&width=1472&height=1104&smart=true"
              alt="English Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">English for Beginners</h3>
              <p className="text-gray-700">Master basic vocabulary and grammar in English.</p>
            </div>
          </motion.div>

          {/* French Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "french" ? "border-4 border-red-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://www.paris-pantheon.fr/var/cmn_inter/storage/images/_aliases/article_vignette_webp/3/7/9/0/120670973-1-fre-FR/2aa68017e5a5-Panorama.webp.webp"
              alt="French Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">French for Beginners</h3>
              <p className="text-gray-700">Start learning conversational French with ease.</p>
            </div>
          </motion.div>

          {/* Spanish Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "spanish" ? "border-4 border-yellow-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://static.wixstatic.com/media/5206df_4836da69bc6a4707a8b0649c37271997~mv2.png/v1/fill/w_640,h_582,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5206df_4836da69bc6a4707a8b0649c37271997~mv2.png"
              alt="Spanish Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Spanish for Beginners</h3>
              <p className="text-gray-700">Learn the basics of Spanish for travel and conversation.</p>
            </div>
          </motion.div>

          {/* Arabic Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "arabic" ? "border-4 border-green-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://pub-4fc6abf6ad7c45c78a8359ce90cde2eb.r2.dev/display_images/displayc4aa0d7576ed23f5080e9da0e0c43386.jpg"
              alt="Arabic Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Arabic for Beginners</h3>
              <p className="text-gray-700">Learn conversational Arabic with a focus on grammar.</p>
            </div>
          </motion.div>

          {/* Chinese Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "chinese" ? "border-4 border-orange-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://img-4.linternaute.com/EYMdZKaZjU2wI6_B3CtIazxohUk=/1500x/smart/c5753c569f47419bb47ff04adb742169/ccmcms-linternaute/30303236.jpg"
              alt="Chinese Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Chinese for Beginners</h3>
              <p className="text-gray-700">Get started with Mandarin Chinese and its basics.</p>
            </div>
          </motion.div>

          {/* Turkish Course */}
          <motion.div
            className={`bg-white text-blue-900 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ${language === "turkish" ? "border-4 border-purple-500" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1634744230605-5f60794100e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Turkish Course"
              className="w-full h-56 object-cover mb-4 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Turkish for Beginners</h3>
              <p className="text-gray-700">Learn the basics of the Turkish language and culture.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Contact Section
const ContactUs = () => (
  <section className="py-16 text-gray-600" id="contact-us">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <motion.div className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden mr-20" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <img src="https://www.cresus.dz/wp-content/uploads/2024/10/universite_alger_2.webp" alt="university" className="w-full h-full object-cover " />
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="full-name" className="text-lg text-gray-700 block">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg text-gray-700 block">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-lg text-gray-700 block">Message</label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaPaperPlane className="inline mr-2" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white py-12 mt-16 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-teal-400">
            LANGOS
          </h1>
          <p className="text-center lg:text-left mt-4 text-lg">Bringing quality education to your fingertips.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-white hover:text-yellow-500 no-underline">Home</a></li>
            <li><a href="#services" className=" text-white hover:text-yellow-500 no-underline">Services</a></li>
            <li><a href="#contact-us" className=" text-white hover:text-yellow-500 no-underline">Contact</a></li>
            <li><a href="#" className="text-white hover:text-yellow-500 no-underline">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p><FaPhoneAlt className="inline mr-2" />+1 (23) 567890</p>
          <p><FaEnvelope className="inline mr-2" />contact@langos.com</p>
        </div>
      </div>

      <div className="text-center text-sm mt-12 text-gray-400">
        &copy; {new Date().getFullYear()} HZ BRAND Développez par MERGHIT HADIL . All rights reserved.
      </div>
    </div>
  </footer>
);
 const Home=()=>{
  return(<>
   <Header />
    <HeroSlider />
    <Services />
    <AboutUs />
    <Courses />
    <ContactUs />
    <Footer />
  </>);
 }
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/studentspace" element={<SpaceStudents />} />
      <Route path="/spaceprof" element={<ProfDashboard />} />
    </Routes>
  </Router>
);


export default App;
