import React from 'react';
import { Monitor, Bed, Stethoscope, Shield, Wifi, Car, Utensils, Baby } from 'lucide-react';

const Facilities = () => {
  const medicalFacilities = [
    {
      title: 'Ruang Operasi Modern',
      description: 'Ruang operasi dengan teknologi terkini dan sistem sterilisasi canggih',
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg',
      features: ['Sistem Ventilasi HEPA', 'Lampu Operasi LED', 'Monitor Vital Sign', 'Peralatan Anestesi Modern']
    },
    {
      title: 'ICU & ICCU',
      description: 'Unit perawatan intensif dengan monitoring 24 jam',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg',
      features: ['Ventilator Canggih', 'Monitor Multiparameter', 'Defibrillator', 'Perawat Khusus ICU']
    },
    {
      title: 'Ruang Bersalin',
      description: 'Ruang bersalin yang nyaman dan aman untuk ibu dan bayi',
      image: 'https://images.pexels.com/photos/8376299/pexels-photo-8376299.jpeg',
      features: ['VK Emergency', 'Inkubator Bayi', 'Ruang Rooming In', 'Tim Dokter Spesialis']
    },
    {
      title: 'Laboratorium',
      description: 'Laboratorium lengkap dengan peralatan analisa terkini',
      image: 'https://images.pexels.com/photos/3786159/pexels-photo-3786159.jpeg',
      features: ['Auto Analyzer', 'PCR Machine', 'Mikroskop Digital', 'Sistem Informasi Lab']
    }
  ];

  const supportFacilities = [
    { icon: Wifi, title: 'WiFi Gratis', description: 'Internet gratis di seluruh area rumah sakit' },
    { icon: Car, title: 'Parkir Luas', description: 'Area parkir yang luas dan aman untuk kendaraan' },
    { icon: Utensils, title: 'Kantin & Cafeteria', description: 'Kantin dengan menu sehat dan bergizi' },
    { icon: Shield, title: 'Keamanan 24 Jam', description: 'Sistem keamanan terpadu dan petugas jaga' },
    { icon: Baby, title: 'Ruang Bermain Anak', description: 'Area bermain yang aman untuk anak-anak' },
    { icon: Bed, title: 'Ruang Tunggu Nyaman', description: 'Ruang tunggu ber-AC dengan fasilitas lengkap' }
  ];

  const technologies = [
    {
      name: 'CT Scan 64 Slice',
      description: 'Pemeriksaan radiologi dengan resolusi tinggi',
      specs: ['Hasil Detail', 'Waktu Cepat', 'Radiasi Rendah']
    },
    {
      name: 'MRI 1.5 Tesla',
      description: 'Magnetic Resonance Imaging untuk diagnosis akurat',
      specs: ['Tanpa Radiasi', 'Gambar Jelas', 'Teknologi Terbaru']
    },
    {
      name: 'USG 4D',
      description: 'Ultrasonografi 4 dimensi untuk pemeriksaan kandungan',
      specs: ['Real Time', 'Gambar 3D/4D', 'Non Invasif']
    },
    {
      name: 'Mammografi Digital',
      description: 'Deteksi dini kanker payudara dengan teknologi digital',
      specs: ['Deteksi Dini', 'Hasil Akurat', 'Nyaman Digunakan']
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fasilitas Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dilengkapi dengan fasilitas medis modern dan teknologi terdepan untuk memberikan pelayanan kesehatan terbaik
          </p>
        </div>

        {/* Medical Facilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Fasilitas Medis</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {medicalFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h4>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Technologies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Teknologi Medis Unggulan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                  <Monitor size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Facilities */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Fasilitas Pendukung</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h4>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;