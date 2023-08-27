import "./heading.scss";

export default function Heading() {
  return (
    // Add a nice wavey curve beneath the header using tailwind
    <header
      className="h-20 bg-blue-600 mb-10
    "
    >
      {/* Eventual logo will go here */}
      <nav className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-white">
            <span>JonahDevs</span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="/about"
            className="text-base font-medium text-white hover:text-gray-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="ml-8 text-base font-medium text-white hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="h-10 bg-blue-600 heading-curve" />
    </header>
  );
}
