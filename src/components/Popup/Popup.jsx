import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Clear form data after submit
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setOrderPopup(false);  // Close the popup
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-white rounded-md duration-200 w-[400px]">
              {/* Header Section */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold dark:text-black">Contact Us</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer hover:text-gray-600 dark:text-black dark:hover:text-gray-300"
                    onClick={() => setOrderPopup(false)} // Close the popup when clicking the close button
                    aria-label="Close popup"
                  />
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-black"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-black resize-none"
                    required
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-r bg-black text-white from-primary to-secondary hover:scale-105 duration-200 text-black py-2 px-6 rounded-lg font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
