import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Tentang Kami', id: 'about' },
    { name: 'Layanan', id: 'services' },
    { name: 'Fasilitas', id: 'facilities' },
    { name: 'Tim Dokter', id: 'doctors' },
    { name: 'Kontak', id: 'contact' }
  ];

  const services = [
    'IGD 24 Jam',
    'Rawat Jalan',
    'Rawat Inap',
    'Laboratorium',
    'Radiologi',
    'Medical Check Up'
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/pages/Rs.IMC%20Cimareme/466541770075097/#' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/rsu_imc/' },
    { icon: Youtube, name: 'YouTube', url: 'https://www.tiktok.com/@rumahsakitimc' },
    { icon: Twitter, name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Hospital Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RS Indra Medical Center</h3>
                <p className="text-gray-400 text-sm">Pelayanan Kesehatan Terpercaya</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Melayani masyarakat Indonesia dengan pelayanan kesehatan berkualitas tinggi selama lebih dari 25 tahun dengan komitmen dan dedikasi penuh.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Akreditasi & Sertifikasi:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-xs px-3 py-1 rounded-full">KARS Paripurna</span>
                <span className="bg-green-600 text-xs px-3 py-1 rounded-full">ISO 9001:2015</span>
                <span className="bg-orange-600 text-xs px-3 py-1 rounded-full">BPJS Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center space-x-2">
                  <Heart size={14} className="text-red-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Jl. Raya Gadobangkong No.173, Cimareme, Kec. Ngamprah, Kab. Bandung Barat</p>
                  <p className="text-gray-300">Jawa Barat 40552</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-400" />
                <div>
                  <p className="text-gray-300">IGD: (022) 6620965</p>
                  <p className="text-gray-300">Info: (022) 6620965</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-400" />
                <div>
                  <p className="text-gray-300">www.rsuimcpadalarang.co.id</p>
                  <p className="text-gray-300">WhatsApp: 0857-2105-5325</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>IGD: 24 Jam</p>
                  <p>Rawat Jalan: 08:00-20:00</p>
                  <p>Apotek: 06:00-22:00</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 RS Indra Medical Center. Seluruh hak cipta dilindungi undang-undang.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Nomor Izin: 445/SIK-RS/DPMPTSP/2023 | KARS Paripurna
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert */}
      <div className="bg-red-600 text-center py-2">
        <p className="text-white text-sm font-medium">
          🚨 DARURAT? Hubungi IGD 24 Jam: (022) 6620965 🚨
        </p>
      </div>
    </footer>
  );
};

export default Footer;