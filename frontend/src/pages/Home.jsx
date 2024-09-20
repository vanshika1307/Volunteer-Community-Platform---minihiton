import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CounterCard from "/src/components/CounterCard.jsx"; // Import the CounterCard component

const Home = () => {
  const theme = useTheme();

  // Array of image URLs and hover texts
  const images = [
    { url: "/src/assets/image1.jpg", text: "Event 1" },
    { url: "/src/assets/image2.jpg", text: "Event 2" },
    { url: "/src/assets/image3.jpg", text: "Event 3" },
  ];

  // Array of testimonials
  const testimonials = [
    {
      name: "John Doe",
      text: "This organization has changed my life. The events are well-organized and impactful.",
      image: "/src/assets/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      text: "Volunteering here has been a rewarding experience. I've met so many wonderful people.",
      image: "/src/assets/testimonial2.jpg",
    },
    {
      name: "Sam Wilson",
      text: "I've been a part of this community for years, and it just keeps getting better.",
      image: "/src/assets/testimonial3.jpg",
    },
  ];

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
        <div className="relative z-10 flex flex-wrap justify-center mb-8">
          <CounterCard title="Number of Events" count={150} />
          <CounterCard title="Number of Volunteers" count={300} />
          <CounterCard title="Years Serving Society" count={10} />
        </div>
      </div>
      <div className="relative z-10 container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">About Our Community</h2>
          <p
            className={`text-lg ${
              theme.palette.mode === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Our community is dedicated to making a positive impact in the world.
            We organize events, volunteer activities, and provide support to
            those in need. Join us in our mission to create a better future for
            everyone.
          </p>
        </motion.div>
      </div>
      <div className="relative z-10 container mx-auto py-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg">{image.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto py-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg ${
                theme.palette.mode === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
