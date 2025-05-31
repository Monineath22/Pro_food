import React from "react";
import bgImg from "../../assets/Img/bgHomepage.jpg";
export function Banner() {
    // { onSearch }
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent form submission refresh
//     onSearch(searchTerm); // Pass the search term to parent component
//   };

  return (
    <section
      className="relative h-[400px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Search Bar */}
      {/* onSubmit={handleSearch} */}
      <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] flex">
        <input
          type="text"
        //   value={searchTerm}
        //   onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
          className="flex-grow p-3 rounded-l-md text-black placeholder-gray-500 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-white p-3 rounded-r-md flex items-center justify-center hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-800 hover:text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Banner;
