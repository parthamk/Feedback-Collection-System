import { Link } from "react-router-dom"

const Menu = () => {
  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
  <Link
    to="#"
    className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
  >
    Home
  </Link>
  <a
    href="#about-us"
    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
  >
    About
  </a>
  <a
    href="#contact-us"
    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
  >
    Contact
  </a>
  <Link
    to="/login"
    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
  >
    Login
  </Link>
</div>
}

export default Menu