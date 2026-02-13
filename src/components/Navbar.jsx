const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-(--color-redwine) text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Md. Redwan Islam</h1>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-300">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
