import React from 'react';
import { ArrowRight, Calendar, Phone, MapPin, Clock, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield size={16} />
                <span>Terakreditasi KARS & ISO 9001:2015</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Pelayanan Kesehatan
                <span className="text-blue-600 block">Terpercaya</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                RS Indra Medical Center memberikan pelayanan kesehatan terbaik dengan teknologi modern dan tim medis berpengalaman untuk keluarga Indonesia.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Dokter Spesialis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Layanan IGD</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group font-medium"
              >
                <Calendar size={20} />
                <span>Daftar Online</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Lihat Layanan</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-8 border-t">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-red-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">IGD 24 Jam</div>
                  <div className="font-semibold">(022) 6620965</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Alamat</div>
                  <div className="font-semibold">Jl. Raya Gadobangkong No.173, Cimareme, Kec. Ngamprah, Kab. Bandung Barat, Jawa Barat 40552</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100">
              <img 
                src="/images/RS.jpg" 
                alt="RS IMC"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">IGD 24 Jam</div>
                  <div className="text-sm text-gray-600">Siap Melayani</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Terakreditasi</div>
                  <div className="text-sm text-gray-600">KARS & ISO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;