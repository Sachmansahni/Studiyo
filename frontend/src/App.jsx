import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between p-5 shadow-lg items-center">
        
        <div>
          <h1 className="text-2xl font-bold">Studiyo</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Help</a></li>
          </ul>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Signup</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="space-y-4 text-center">
            <li><a href="#" className="block hover:text-blue-500">Home</a></li>
            <li><a href="#" className="block hover:text-blue-500">About</a></li>
            <li><a href="#" className="block hover:text-blue-500">Services</a></li>
            <li><a href="#" className="block hover:text-blue-500">Help</a></li>
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full">Login</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md w-full">Signup</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
