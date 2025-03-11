import { User, Globe, Folder, Mail, FileText, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import classNames from 'classnames';
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./style.css";

// Card Component
const Card = ({ children }) => (
  <div className="bg-white p-6 shadow-xl rounded-xl transition-all duration-500 hover:shadow-2xl border border-blue-300">
    {children}
  </div>
);

// Tabs Components
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

const TabsList = ({ children }) => <>{children}</>;

const TabsTrigger = ({ value, icon, children }) => (
  <div className="text-center">
    {children}
  </div>
);

const TabsContent = ({ value, children }) => (
  <div>
    {children}
  </div>
);

// Header Component
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
          <a href="#" className="hover:text-blue-400">Subjects</a>
          <a href="#" className="hover:text-blue-400">Lesson Plans</a>
          <a href="#" className="hover:text-blue-400">Games</a>
          <a href="#" className="hover:text-blue-400">More Resources</a>
          <a href="#" className="hover:text-blue-400">Roly Recommends</a>
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
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Subjects</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Lesson Plans</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Games</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>More Resources</a></li>
              <li><a href="#" className="text-blue-700 hover:text-blue-500 no-underline" onClick={() => setOpen(false)}>Roly Recommends</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component
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
        &copy; {new Date().getFullYear()} HZ BRAND Developed by MERGHIT HADIL. All rights reserved.
      </div>
    </div>
  </footer>
);

// ProfDashboard Component
// ProfDashboard Component
const ProfDashboard = () => {
  const [exams, setExams] = useState([
    { title: "Exam 1 - English_classe3.pdf", url: "https://tracktest.eu/wp-content/uploads/2022/12/A2-English-test-with-answers.pdf" },
    { title: "Exam 2 - English_classe2.pdf", url: "https://www.univ-orleans.fr/upload/public/2021-10/L2%20LEA%20-%20Grammaire%20anglaise.pdf" },
    { title: "Exam 3 - English_classe0.pdf", url: "https://www.williambertrand.fr/pdf/Exercises_Tests_Beginner_1.pdf" }
  ]);

  const [credentials, setCredentials] = useState({
    title: "",
    description: ""
  });
  const [message, setMessage] = useState("");
  const [teachingRequest, setTeachingRequest] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Anglais");
  const [courses, setCourses] = useState([]);
  
  // Courses data for different languages
  const courseData = {
    Anglais: [
      { name: 'English Grammar 101 📚', description: 'Learn basic English grammar.', url: 'https://www.univ-chlef.dz/fsnv/wp-content/uploads/%D8%AC%D9%85%D9%8A%D8%B9%D9%82%D9%88%D8%A7%D8%B9%D8%AF%D8%A7%D9%84%D9%84%D8%BA%D8%A9%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9.pdf' },
      { name: 'Advanced English Literature 📖', description: 'Study advanced English texts.', url: 'https://bayanebartar.org/file-dl/library/IELTS10/Advanced-Everyday-English-Advanced-Vocabulary/Advanced-Everyday-English.pdf' },
      { name: 'Business English 💼', description: 'Improve your English skills for the workplace.', url: 'http://kims.net.pk/LM%20ShortCours/English/BookGuffey.pdf' },
      { name: 'IELTS Preparation Guide ✍️', description: 'Get ready for the IELTS exam with this comprehensive guide.', url: 'https://cms.qut.edu.au/__data/assets/pdf_file/0005/926717/ielts-preparation-guide.pdf' },
      { name: 'English Pronunciation Mastery 🎙️', description: 'Enhance your pronunciation with detailed exercises.', url: 'https://englishteststore.net/index.php?option=com_content&view=article&id=199:english-pronunciation-exercises-pdf&catid=14&Itemid=131' },
      { name: 'Common English Phrases & Expressions 💬', description: 'Learn everyday English expressions and idioms.', url: 'https://www.ef.com/wwen/blog/wp-content/uploads/2018/11/Useful-English-Phrases.pdf' },
      { name: 'Academic Writing in English ✒️', description: 'Master English writing for essays and research papers.', url: 'https://www.birmingham.ac.uk/Documents/college-artslaw/cels/essays/academicwritinginenglish.pdf' },
    ],
    Français: [
      { name: 'Grammaire Française 🇫🇷', description: 'Apprenez la grammaire française.' },
      { name: 'Littérature Française 📜', description: 'Étudiez les textes français.' },
    ],
    // Add more languages and courses here
  };

  useEffect(() => {
    setCourses(courseData[selectedLanguage]);
  }, [selectedLanguage]);

  // Create Course functionality
  const CreateCourses = () => {
    if (credentials.title && credentials.description) {
      setCourses(prevCourses => [
        ...prevCourses,
        { name: credentials.title, description: credentials.description, url: 'https://example.com' }
      ]);
    }
  };

  // Create Exam functionality
  const CreateExam = () => {
    if (credentials.title && credentials.description) {
      setExams(prevExams => [
        ...prevExams,
        { title: credentials.title, description: credentials.description, url: "https://tracktest.eu/wp-content/uploads/2022/12/A2-English-test-with-answers.pdf" }
      ]);
    }
  };

  const handleSendMessage = () => {
    alert(`Message sent: ${message}`);
    setMessage("");
  };

  const handleTeachingRequest = () => {
    alert(`Teaching Request: ${teachingRequest}`);
    setTeachingRequest("");
  };

  const handleUploadExam = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setExams([...exams, { name: uploadedFile.name, url: URL.createObjectURL(uploadedFile) }]);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full px-6 py-8">
        <Tabs defaultValue="profil">
          <TabsList>
            <TabsTrigger value="profil" icon={User}>Profil</TabsTrigger>
            <TabsTrigger value="languages" icon={Globe}>Courses</TabsTrigger>
            <TabsTrigger value="lessons" icon={Folder}>Exams</TabsTrigger>
            <TabsTrigger value="messages" icon={Mail}>Messages</TabsTrigger>
            <TabsTrigger value="teaching" icon={FileText}>Requests</TabsTrigger>
          </TabsList>

          {/* Profile Section */}
          <TabsContent value="profil">
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://img.freepik.com/vecteurs-premium/profil-plat-bleu-simple-icone-long-shadowxa_159242-10066.jpg?w=360"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p><strong>Name:</strong> Zakarya Bensilete</p>
                  <p><strong>Email:</strong> bensiletezakarya@gmail.com</p>
                  <p><strong>Preferred Language:</strong> {selectedLanguage}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
                    onClick={() => alert("Redirecting to modify information...")}
                  >
                    Modify Information
                  </button>
                </div>
              </div>
            </Card>
          </TabsContent>

{/* Courses Section */}
<TabsContent value="languages">
  <Card>
    <h2 className="text-2xl font-semibold mb-4">Choose Language ({selectedLanguage})</h2>
    <div className="flex gap-4 flex-wrap">
      {["Anglais", "Français", "Espagnol", "Allemand", "Italien", "Portugais", "Chinois", "Arabe"].map((language) => (
        <button
          key={language}
          className={classNames("px-4 py-2 bg-green-200 hover:bg-green-400 rounded-full transition-all", { "bg-green-500": selectedLanguage === language })}
          onClick={() => setSelectedLanguage(language)}
        >
          {language}
        </button>
      ))}
    </div>
    <div className="border-t border-gray-300 my-6"></div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Courses</h3>
      {courses.length > 0 ? (
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold">
                <a href={course.url} target="_blank" className="text-blue-500 no-underline">{course.name}</a>
              </h4>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses available for this language yet</p>
      )}
    </div>
    <div className="border-t border-gray-300 my-6"></div>
    <h3 className="text-xl font-semibold mb-4">Add Course
    </h3>
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col mt-2 text-sm">
        <label htmlFor="title" className="text-md font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter course title"
          onChange={(e) => setCredentials({ ...credentials, title: e.target.value })}
          className="w-full h-12 mt-1 px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="w-full flex flex-col mt-2 text-sm">
        <label htmlFor="description" className="text-md font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter description"
          onChange={(e) => setCredentials({ ...credentials, description: e.target.value })}
          className="w-full h-32 mt-1 px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <input type="file" className="mt-4" />
      <button
        type="button"
        className="px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-200 transform hover:scale-105"
        onClick={CreateCourses}
      >
        Add Courses
      </button>
    </div>
  </Card>
</TabsContent>

          {/* Exams Section */}
          <TabsContent value="lessons">
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Manage Exams ({selectedLanguage})</h2>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col mt-2 text-sm">
                  <label htmlFor="title" className="text-md font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter exam title"
                    onChange={(e) => setCredentials({ ...credentials, title: e.target.value })}
                    className="w-full h-12 mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="w-full flex flex-col mt-2 text-sm">
                  <label htmlFor="description" className="text-md font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    onChange={(e) => setCredentials({ ...credentials, description: e.target.value })}
                    className="w-full h-32 mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <input type="file" className="mt-4" />
                <button
                  type="button"
                  className="px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-200 transform hover:scale-105"
                  onClick={CreateExam}
                >
                  Add Exam
                </button>
              </div>

              <h3 className="text-lg font-semibold mb-2 mt-8">Previously Uploaded Exams</h3>
              <div className="space-y-4">
                {exams.map((exam, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border">
                    <span>{exam.title}</span>
                    <span>{exam.description}</span>
                    <a href={exam.url} target="_blank" className="text-blue-500 underline">View</a>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Messages Section */}
          <TabsContent value="messages">
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Send a Message to Management</h2>
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded mb-4"
              />
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </Card>
          </TabsContent>

          {/* Teaching Requests Section */}
          <TabsContent value="teaching">
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Make a Request to Teach</h2>
              <textarea
                placeholder="Explain your request..."
                value={teachingRequest}
                onChange={(e) => setTeachingRequest(e.target.value)}
                className="w-full p-3 border rounded mb-4"
              />
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg"
                onClick={handleTeachingRequest}
              >
                Submit Request
              </button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </>
  );
};


export default ProfDashboard;
