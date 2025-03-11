import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.aimprosoft.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Online-Education-Trends-eLearning-Predictions-for-2021_2022-Cover-scaled.jpg.webp')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Develop Your Skills Online
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6">
                Learn, Progress, and Succeed
              </h2>
              <ul className="list-disc list-inside text-md sm:text-lg space-y-2 mb-6">
                <li>Access a wide range of specialized courses</li>
                <li>Learn at your own pace with experts</li>
                <li>Track your progress with interactive tools</li>
                <li>Earn recognized certifications</li>
              </ul>
              <button
                aria-label="Start learning"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Start Learning
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 right-0 p-6 flex items-center space-x-6"
            >
              <div className="text-3xl sm:text-4xl animate-bounce">💬</div>
              <div className="text-3xl sm:text-4xl animate-bounce">💻</div>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://asset.gecdesigns.com/img/background-templates/isometric-e-learning-background-template-1612282245987-cover.webp')",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Learn Anytime, Anywhere
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6">
                Enjoy Unlimited Access
              </h2>
              <ul className="list-disc list-inside text-md sm:text-lg space-y-2 mb-6">
                <li>Compatible with mobile and tablet</li>
                <li>100% interactive learning</li>
                <li>Thousands of resources available</li>
                <li>Certified and recognized training</li>
              </ul>
              <button
                aria-label="View Courses"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                View Courses
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 right-0 p-6 flex items-center space-x-6"
            >
              <div className="text-3xl sm:text-4xl animate-bounce">📱</div>
              <div className="text-3xl sm:text-4xl animate-bounce">📚</div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

