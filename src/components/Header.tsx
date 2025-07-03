import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>IGD: (022) 6620965</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>IGD 24 Jam</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Jl. Raya Gadobangkong No.173, Cimareme, Kec. Ngamprah, Kab. Bandung Barat, Jawa Barat 40552</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-32 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="/images/logo.png"
                  alt="Logo IMC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">RS Indra Medical Center</h1>
                <p className="text-sm text-gray-600">Pelayanan Kesehatan Terpercaya</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Beranda', id: 'home' },
                { name: 'Tentang', id: 'about' },
                { name: 'Layanan', id: 'services' },
                { name: 'Fasilitas', id: 'facilities' },
                { name: 'Dokter', id: 'doctors' },
                { name: 'Kontak', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Emergency & CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-200 flex items-center space-x-2 font-medium">
                <Phone size={16} />
                <span>IGD Darurat</span>
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                Daftar Online
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white">
              <nav className="p-4 space-y-4">
                {[
                  { name: 'Beranda', id: 'home' },
                  { name: 'Tentang', id: 'about' },
                  { name: 'Layanan', id: 'services' },
                  { name: 'Fasilitas', id: 'facilities' },
                  { name: 'Dokter', id: 'doctors' },
                  { name: 'Kontak', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <button className="bg-red-600 text-white px-4 py-3 rounded-full hover:bg-red-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium">
                    <Phone size={16} />
                    <span>IGD Darurat</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium"
                  >
                    Daftar Online
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;