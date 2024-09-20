import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CounterCard from "/src/components/CounterCard.jsx"; // Import the CounterCard component

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <div
        className={`relative min-h-screen flex flex-col items-center justify-center ${
          theme.palette.mode === "dark" ? "bg-[#0d0d0d]" : "bg-gray-100"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg"
          style={{
            backgroundImage: `url('/src/assets/bg-image.jpeg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional dark overlay */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Your Website
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover amazing content and join our community.
          </p>
          <Link
            to="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </motion.div>
        <div className="relative z-10 flex flex-wrap justify-center">
          <CounterCard title="Number of Events" count={150} />
          <CounterCard title="Number of Volunteers" count={300} />
          <CounterCard title="Years Serving Society" count={10} />
        </div>
      </div>
    </div>
  );
};

export default Home;

