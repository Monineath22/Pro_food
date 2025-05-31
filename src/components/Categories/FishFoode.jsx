import React from "react";

const MenuFish = [
  {
    id: 1,
    name: "សម្លខគោ",
    image: "/src/assets/Img/សាច់ជ្រូកលីងបីជាន់.jpg",
  },
  {
    id: 2,
    name: "សាច់គោបំពងស្រួយ",
    image: "/src/assets/Img/ឡាបសាច់ជ្រូក.jpg",
  },
  {
    id: 3,
    name: "សម្លម្ចូរខ្ទិះ",
    image: "/src/assets/Img/ខជើងជ្រូក.jpg",
  },
  {
    id: 4,
    name: "ភ្លាវសាច់គោ",
    image: "/src/assets/Img/របៀបស្ងោរ_ស្ពៃ_ក្តោប_ស្នូល_សាច់_ជ្រូក_ចិញ្ច្រាំ-370x297.jpg",
  },
  {
    id: 5,
    name: "ឆាខ្ញីសាច់គោ",
    image: "/src/assets/Img/សាច់ជ្រូក3ជាន់ឆាម្រះព្រៅ-370x297.jpg",
  },
];

const FishFoode = () => {
  return (
    <section
      className="w-[90%] h-[300px] mx-auto mt-[80px]" // Added `overflow-hidden`
      id="Fish"
    >
      <div className="flex gap-4 items-center mt-5">
        <h2 className="text-[24px] text-[#ff6600] ">សាច់ជ្រូក</h2>
        <svg
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path fill="#e08123" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
        </svg>
      </div>

      <div
        className="w-full h-full flex gap-10 mt-2.5 rounded-lg cursor-pointer"
      >
        {MenuFish.map((item) => (
          <div
            key={item.id}
            className="w-[24%] rounded-lg h-full shadow-[0_0_5px_0_rgba(0,0,0,0.1),_0_0_1px_0_rgba(0,0,0,0.1)] hover:-translate-y-[5px] transition-transform"
          >
            <div className="w-full h-[70%]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-[30%] leading-8">
              <h3 className="mt-2.5 text-[15px] font-bold text-orange-500">
                {item.name}
              </h3>
              <button className="w-[120px] h-[35px] bg-green-600 text-white text-[15px] rounded-[13px] -mt-2.5 ml-[50px] hover:bg-green-300 transition-colors">
                រក្សាទុក
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FishFoode;
