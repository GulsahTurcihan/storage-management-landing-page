const Footer = () => {
  return (
    <footer className="text-light-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row space-y-2 justify-between items-center">
        <p className="text-sm  hover:text-brand-100 transition-all">
          &copy; 2025 GulsahTurcihan
        </p>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>
              <a
                href="/privacy"
                className="hover:underline hover:text-brand-100"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/aboutUs"
                className="hover:underline  hover:text-brand-100"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline  hover:text-brand-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
