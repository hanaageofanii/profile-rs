import React from 'react';
import { Award, Target, Heart, Users, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pelayanan Prima',
      description: 'Mengutamakan kepuasan dan keselamatan pasien dalam setiap layanan yang diberikan'
    },
    {
      icon: Users,
      title: 'Profesionalisme',
      description: 'Tim medis berpengalaman dengan dedikasi tinggi untuk kesembuhan pasien'
    },
    {
      icon: Award,
      title: 'Integritas',
      description: 'Menjalankan praktik medis dengan standar etika dan moral yang tinggi'
    },
    {
      icon: Target,
      title: 'Inovasi',
      description: 'Terus mengembangkan teknologi dan metode terbaik dalam pelayanan kesehatan'
    }
  ];

  const achievements = [
    { year: '1998', title: 'Berdiri sebagai Rumah Sakit Swasta' },
    { year: '2005', title: 'Meraih Akreditasi KARS Tingkat Dasar' },
    { year: '2012', title: 'Akreditasi KARS Tingkat Lanjut' },
    { year: '2018', title: 'Sertifikat ISO 9001:2015' },
    { year: '2022', title: 'Akreditasi KARS Tingkat Paripurna' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RS Sehat Sejahtera telah melayani masyarakat Indonesia selama lebih dari 25 tahun dengan komitmen memberikan pelayanan kesehatan terbaik
          </p>
        </div>

        {/* History & Vision Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Sejarah Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Didirikan pada tahun 1998, RS Sehat Sejahtera dimulai sebagai klinik kecil dengan visi besar untuk memberikan pelayanan kesehatan yang terjangkau dan berkualitas. Seiring berjalannya waktu, kami terus berkembang menjadi rumah sakit modern dengan fasilitas lengkap.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kini, kami telah melayani lebih dari 500,000 pasien dengan tingkat kepuasan yang tinggi, didukung oleh tim medis profesional dan teknologi medis terdepan.
            </p>
            
            {/* Timeline */}
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">{item.year}</div>
                    <div className="text-gray-600">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Visi</h3>
              <p className="text-blue-800">
                Menjadi rumah sakit terpercaya dan terdepan dalam memberikan pelayanan kesehatan yang holistik, profesional, dan terjangkau untuk seluruh lapisan masyarakat Indonesia.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Memberikan pelayanan kesehatan yang berkualitas tinggi dengan teknologi modern</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mengembangkan SDM yang kompeten dan profesional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Menjalin kemitraan strategis untuk peningkatan mutu layanan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Berpartisipasi aktif dalam program kesehatan masyarakat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accreditation */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Akreditasi & Sertifikasi</h3>
            <p className="text-gray-600">Kami bangga telah meraih berbagai akreditasi dan sertifikasi sebagai bukti komitmen kami terhadap kualitas</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">KARS Paripurna</h4>
              <p className="text-gray-600">Akreditasi tertinggi dari Komisi Akreditasi Rumah Sakit Indonesia</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600">Sertifikat sistem manajemen mutu internasional</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">BPJS Kesehatan</h4>
              <p className="text-gray-600">Rumah sakit rujukan resmi BPJS Kesehatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;