import React from 'react';
import { Clock, Stethoscope, Baby, Heart, Eye, Bone, Brain, Activity, Calendar, ArrowRight } from 'lucide-react';

const Services = () => {
  const emergencyServices = {
    title: 'Instalasi Gawat Darurat (IGD)',
    description: 'Pelayanan gawat darurat 24 jam dengan tim medis siaga dan peralatan lengkap',
    features: ['Pelayanan 24/7', 'Tim Dokter Spesialis', 'Ambulans Siaga', 'Ruang Resusitasi'],
    icon: Activity,
    color: 'red'
  };

  const mainServices = [
    {
      title: 'Rawat Jalan',
      description: 'Pelayanan konsultasi dan pemeriksaan medis tanpa menginap',
      icon: Stethoscope,
      color: 'blue',
      features: ['Poli Umum', 'Poli Spesialis', 'Konsultasi Gizi', 'Medical Check Up']
    },
    {
      title: 'Rawat Inap',
      description: 'Pelayanan rawat inap dengan fasilitas kamar yang nyaman',
      icon: Heart,
      color: 'green',
      features: ['Kamar VIP', 'Kamar Kelas I-III', 'ICU/ICCU', 'Ruang Isolasi']
    },
    {
      title: 'Laboratorium',
      description: 'Pemeriksaan laboratorium lengkap dengan hasil akurat',
      icon: Activity,
      color: 'purple',
      features: ['Hematologi', 'Kimia Klinik', 'Mikrobiologi', 'Patologi Anatomi']
    },
    {
      title: 'Radiologi',
      description: 'Pemeriksaan radiologi dengan teknologi digital terkini',
      icon: Eye,
      color: 'orange',
      features: ['X-Ray Digital', 'CT Scan', 'USG 4D', 'MRI']
    }
  ];

  const specialistServices = [
    { name: 'Penyakit Dalam', icon: Heart, doctor: ' dr. Alya Putri K, Sp.PD' },
    { name: 'Anak', icon: Baby, doctor: ' dr. Indah Ceria W, Sp. A' },
    { name: 'Kandungan', icon: Heart, doctor: ' dr. Fauzan, Sp.OG' },
    { name: 'Bedah', icon: Activity, doctor: ' dr. Gerhard Chistoffel Sp. B' },
    { name: 'Mata', icon: Eye, doctor: ' dr. Chalid Kurniawan, Sp.M' },
    { name: 'THT', icon: Stethoscope, doctor: ' dr. Sondang Berlian Rosalind Silalahi, Sp. THT-KL,MARS' },
    { name: 'Anaesthesi', icon: Bone, doctor: 'dr. Ayu Puji Lestari Sp.An' },
    { name: 'Gigi', icon: Brain, doctor: 'drg. Linda Lamora Hasibuan' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan layanan kesehatan komprehensif dengan standar internasional untuk memenuhi kebutuhan medis Anda
          </p>
        </div>

        {/* Emergency Service Highlight */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 mb-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Activity size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">{emergencyServices.title}</h3>
              </div>
              <p className="text-xl text-red-100 mb-6">{emergencyServices.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {emergencyServices.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Clock size={16} className="text-red-200" />
                    <span className="text-red-100">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2">
                <span>Hubungi IGD: (021) 123-4567</span>
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">24/7</div>
              <div className="text-xl text-red-200">Siap Melayani</div>
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600',
              green: 'from-green-500 to-green-600 bg-green-50 text-green-600',
              purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600',
              orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600'
            };
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color].split(' ')[0]} ${colorClasses[service.color].split(' ')[1]} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${colorClasses[service.color].split(' ')[2]} ${colorClasses[service.color].split(' ')[3]}`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Specialist Services */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Poli Spesialis</h3>
            <p className="text-gray-600">Tim dokter spesialis berpengalaman siap melayani dengan jadwal praktik yang fleksibel</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {specialistServices.map((specialist, index) => {
              const IconComponent = specialist.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-200 group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{specialist.name}</h4>
                  <p className="text-sm text-gray-600">{specialist.doctor}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('doctors')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
            >
              <Calendar size={20} />
              <span>Lihat Jadwal Dokter</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;