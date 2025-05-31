import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import Popup from "../Popup/Popup";
import Login from '../Contact/Login'

export const Header = () => {
  const [contactPopup, setContactPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "About Us", link: "/about" },
    {
      name: "Contact Us",
      link: "#",
      onClick: () => setContactPopup(true),
    },
    {
      name: "Login",
      link: "#",
      icon: BiLogIn,
      onClick: () => setLoginPopup(true),
    },
  ];

  return (
    <>
      <header className="w-full bg-white shadow-md py-2.5">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl text-orange-500 font-bold">CookShow</h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              {menu.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={item.link}
                    className="text-gray-700 hover:text-orange-500 py-2.5 px-2.5 flex items-center"
                    onClick={item.onClick} // Attach onClick for Contact Us and Login
                  >
                    {item.icon && <item.icon className="mr-2" />}
                    {item.name}
                  </a>
                  {item.name === "Menu" && (
                    <div className="hidden group-hover:block absolute left-0 top-full w-48 bg-white shadow-lg z-10">
                      <a
                        href="#សាច់ជ្រូក"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        សាច់ជ្រូក
                      </a>
                      <a
                        href="#សាច់គោ"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        សាច់គោ
                      </a>
                      <a
                        href="#សាច់ត្រី"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        សាច់ត្រី
                      </a>
                      <a
                        href="#សាច់មាន់"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        សាច់មាន់
                      </a>
                      <a
                        href="#សាច់ទា"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        សាច់ទា
                      </a>
                      <a
                        href="#គ្រឿងសមុទ្រ"
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-500 hover:text-white"
                      >
                        គ្រឿងសមុទ្រ
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Popup orderPopup={contactPopup} setOrderPopup={setContactPopup} />
      <Login loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </>
  );
};

export default Header;
