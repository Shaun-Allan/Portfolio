
const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">Shaun Allan</h3>
            <p className="text-sm text-gray-400 mt-1">Web & Mobile Developer | AI Specialist</p>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shaun Allan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
