import { User, BookOpen, GraduationCap, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { X } from "lucide-react";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";
import "./style.css";
const languages = {
  English: ["Grammar Basics", "Speaking Skills", "Reading Comprehension", "Advanced Writing"],
  French: ["Basic Grammar", "Speaking Skills", "Reading Comprehension", "Advanced Writing"],
  Spanish: ["Grammar Fundamentals", "Conversation Skills", "Reading Comprehension", "Advanced Writing"],
  German: ["Grammar Basics", "Speaking Skills", "Reading Comprehension", "Advanced Writing"],
  Chinese: ["Grammar Basics", "Speaking Skills", "Reading Comprehension", "Advanced Writing"],
  Arabic: ["Grammar Basics", "Conversation Skills", "Reading Comprehension", "Advanced Writing"],
  Turkish: ["Grammar Fundamentals", "Speaking Skills", "Reading Comprehension", "Advanced Writing"],
};


const Card = ({ children }) => (
  <div className="bg-white p-6 shadow-xl rounded-xl transition-all duration-500 hover:shadow-2xl border border-blue-300">
    {children}
  </div>
);

// Tabs Component
const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const tabItems = children.filter(child => child.type === TabsList)[0]?.props.children;
  const tabContents = children.filter(child => child.type === TabsContent);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-4">
        {tabItems.map((tab) => (
          <motion.button
            key={tab.props.value}
            onClick={() => setActiveTab(tab.props.value)}
            className={classNames(
              "flex items-center gap-3 p-3 transition-all duration-300 font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 hover:bg-blue-100 text-blue-700",
              { "text-blue-500 border-b-2 border-blue-500": activeTab === tab.props.value, "text-gray-700": activeTab !== tab.props.value }
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.props.icon className="w-6 h-6" /> {tab.props.children}
          </motion.button>
        ))}
      </div>
      {tabContents.map((content) =>
        content.props.value === activeTab ? <div key={content.props.value}>{content.props.children}</div> : null
      )}
    </div>
  );
};

// TabsList Component
const TabsList = ({ children }) => <>{children}</>;

// TabsTrigger Component
const TabsTrigger = ({ value, icon, children }) => (
  <div value={value} icon={icon}>
    {children}
  </div>
);

// TabsContent Component
const TabsContent = ({ value, children }) => (
  <div value={value}>
    {children}
  </div>
);

// Header
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
    <header className="py-4 text-white sticky z-50 shadow-md top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-900">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 15 L75 50 L50 85 L25 50 Z" className="fill-blue-400" />
                <path d="M50 10 L70 45 L50 80 L30 45 Z" className="fill-blue-700" />
                <rect x="40" y="5" width="20" height="10" className="fill-blue-600" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-wide text-white">
              <span className="text-blue-300">L</span>ANGOS
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-white">
          <a href="#" className="hover:text-blue-400">Matières</a>
          <a href="#" className="hover:text-blue-400">Plans de leçons</a>
          <a href="#" className="hover:text-blue-400">Jeux</a>
          <a href="#" className="hover:text-blue-400">Plus de ressources</a>
          <a href="#" className="hover:text-blue-400">Roly recommande</a>
        </nav>

        <div className="flex items-center gap-5">
          <button><BiShoppingBag size={25} className="text-white" /></button>
          <button onClick={handleLogin} className="text-white hover:text-blue-400">
            Logout
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={25} className="text-white" /> : <HiOutlineMenuAlt1 size={25} className="text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-md p-6 transition-transform duration-300 transform translate-x-0">
            <ul className="space-y-6 text-lg mt-10">
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Matières</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Plans de leçons</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Jeux</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Plus de ressources</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Roly recommande</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12 mt-16 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            LANGOS
          </h1>
          <p className="text-center lg:text-left mt-4 text-lg">Bringing quality education to your fingertips.</p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p><FaPhoneAlt className="inline mr-2" />055399389</p>
          <p><FaEnvelope className="inline mr-2" />contact@langos.com</p>
        </div>
      </div>

      <div className="text-center text-sm mt-12 text-gray-400">
        &copy; {new Date().getFullYear()} HZ BRAND Développé par MERGHIT HADIL. All rights reserved.
      </div>
    </div>
  </footer>
);

// Main Component
export default function LangosDashboard() {
  const [selectedLanguage, setSelectedLanguage] = useState(null); 

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language === selectedLanguage ? null : language); };

  return (
    <>
      <Header />
      <div className="">
        <div className="p-6 md:p-12 w-full max-w-6xl mx-auto">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile" icon={User}>Profile</TabsTrigger>
              <TabsTrigger value="lessons" icon={BookOpen}>Lessons</TabsTrigger>
              <TabsTrigger value="exams" icon={GraduationCap}>Exams</TabsTrigger>
              <TabsTrigger value="payments" icon={CreditCard}>Payments</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://img.freepik.com/vecteurs-premium/profil-plat-bleu-simple-icone-long-shadowxa_159242-10066.jpg?w=360" 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <p><strong>Name:</strong> Merghit Hadil</p>
                    <p><strong>Email:</strong> merghithadil05@gmail.com</p>
                    <p><strong>Level:</strong> Intermediate</p>
                    <p><strong>Score:</strong> <span className="text-blue-500 font-bold">85%</span></p>
                  </div>
                </div>

                {/* Modify Button */}
                <button 
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
                  onClick={() => alert("Redirecting to modify information...")}
                >
                  Modify Information
                </button>
              </Card>
            </TabsContent>
            <TabsContent value="lessons">
  <Card className="p-4">
    <h2 className="text-xl font-bold text-gray-700 font-semibold mb-6">Available Lessons</h2>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 space-y-4">
        {Object.keys(languages).map((language) => (
          <div
            key={language}
            onClick={() => handleLanguageClick(language)}
            className={`cursor-pointer text-lg font-semibold flex items-center gap-3 p-2 rounded-xl shadow-md transition-all duration-300 border ${
              selectedLanguage === language
                ? "bg-green-400 text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-green-50 hover:text-green-600"
            }`}
          >
            <span className="text-green-400 text-xl">📚</span> {language}
          </div>
        ))}
      </div>

      <div className="md:w-2/3">
        {selectedLanguage ? (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Lessons for <span className="text-green-500">{selectedLanguage}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languages[selectedLanguage].map((lesson, index) => (
                <div
                  key={index}
                  className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-200"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-l font-semibold text-gray-700">{lesson}</span>
                    <button
                      className="px-4 py-1 text-white bg-green-400 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
                      onClick={() => alert(`Starting lesson: ${lesson}`)}
                    >
                      Start 
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  </Card>
</TabsContent>


<TabsContent value="exams">
  <Card className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Language Exams</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[
        { lang: "French", img: "https://i2.wp.com/www.amjsolutions.com/wp-content/uploads/2019/05/cropped-Parlez-vous-francais-1.jpg?w=3840&ssl=1" },
        { lang: "Spanish", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_4kYvfhk6iSLe4L37YMJeXV04Niudp-Cs3XBjCbmwd7sFlCY9" },
        { lang: "English", img: "https://t4.ftcdn.net/jpg/01/17/26/51/360_F_117265196_6SQLAp2iXy1fsxJ7wP9bZDPREOAuJiiG.jpg" },
        { lang: "German", img: "https://factuel.univ-lorraine.fr/sites/factuel.univ-lorraine.fr/files/field/image/2019/01/formation_allemand_universite_lorraine.jpg" },
        { lang: "Arabic", img: "https://hoc.ae/images/al-blog/arabic-101-for-media.jpg" },
        { lang: "Chinese", img: "https://t4.ftcdn.net/jpg/01/01/99/51/360_F_101995135_16BHXi5Exua5o6iV4Has3SPT1ZgrzrHr.jpg" },
        { lang: "Turkish", img: "https://cdn.generationvoyage.fr/2021/07/lire-turc.jpg" }
      ].map((exam, index) => (
        <motion.div 
          key={index} 
          className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img src={exam.img} alt={exam.lang} className="w-full h-40 object-cover rounded-xl" />
          <p className="text-center text-lg font-bold text-gray-700 mt-3">{exam.lang} Exam</p>

          <div className="text-center mt-4">
            <button
              className="px-5 py-2 bg-green-400 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
              onClick={() => alert(`Starting ${exam.lang} exam...`)} 
            >
              Start Exam
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </Card>
</TabsContent>


            <TabsContent value="payments">
              <Card>
                <h2 className="text-xl font-semibold mb-3">Subscription & Payments</h2>
                <p>Subscription Status: <span className="text-blue-500 font-bold">Active</span></p>
                <p>Next Payment: <strong>March 15, 2025</strong></p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Manage Subscription</button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}

