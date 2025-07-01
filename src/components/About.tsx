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
    { year: '2016', title: 'Berdiri sebagai Rumah Sakit Swasta' },
    { year: '2018', title: 'Meraih Akreditasi KARS Tingkat Dasar' },
    { year: '2020', title: 'Akreditasi KARS Tingkat Lanjut' },
    { year: '2022', title: 'Sertifikat ISO 9001:2015' },
    { year: '2024', title: 'Akreditasi KARS Tingkat Paripurna' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RS IMC telah melayani masyarakat Indonesia selama lebih dari 10 tahun dengan komitmen memberikan pelayanan kesehatan terbaik
          </p>
        </div>

        {/* History & Vision Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Sejarah Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Rumah Sakit Indra Medical Centre (IMC) berawal dari Klinik IMC, yang didirikan pada tahun
 2008 untuk memberikan layanan kesehatan bagi masyarakat. Seiring dengan meningkatnya
 kebutuhan akan pelayanan medis yang lebih lengkap dan berkualitas, manajemen Klinik IMC
 mengambil langkah strategis untuk meningkatkan statusnya menjadi rumah sakit
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pada 4 Januari 2016, Rumah Sakit Indra Medical Centre (IMC) resmi beroperasi sebagai
 rumah sakit swasta mandiri yang berkomitmen memberikan pelayanan kesehatan terbaik
 bagi masyarakat. Dengan kapasitas 64 tempat tidur, RS IMC menghadirkan fasilitas modern,
 tenaga medis profesional, serta dokter spesialis dari berbagai disiplin ilmu.
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
                Meningkatkan taraf kesehatan masyarakat. Memberikan pelayanan yang prima, berkualitas, kesehatan berkesinambungan dan dapat dijangkau masyarakat Menjadi rumah sakit yang mengedepankan sisi pelayanan yang humanis
              </p>
            </div>

            {/* Mission */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Menyelenggarakan pelayanan kesehatan yang humanis, prima, informatif, dan efektif dengan tetap memperhatikan aspek sosial.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span> Membangun SDM yang profesional, dan berorientasi pada konsumen serta berintegrasi tinggi dalam memberikan pelayanan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mewujudkan sistem manajemen rumah sakit yang menjamin kepastian
 hukum secara efektif, efisien, transparan, akuntabel dan responsif
 menjawab tuntutan masyarakat. </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Meningkatkan kesejahteraan seluruh staf dan karyawan </span>
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