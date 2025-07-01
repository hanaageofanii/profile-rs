import React, { useState } from 'react';
import { Calendar, Clock, Star, MapPin, Phone, Filter } from 'lucide-react';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Semua');

  const specialties = ['Semua', 'Penyakit Dalam', 'Anak', 'Kandungan', 'Bedah', 'Mata', 'THT', 'Orthopedi', 'Saraf'];

  const doctors = [
    {
      name: 'dr. Ahmad Santoso, Sp.PD',
      specialty: 'Penyakit Dalam',
      experience: '15 Tahun',
      education: 'FKUI, Spesialis Penyakit Dalam',
      schedule: [
        { day: 'Senin-Rabu', time: '08:00-12:00' },
        { day: 'Jumat-Sabtu', time: '16:00-20:00' }
      ],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      rating: 4.9,
      patients: 2500
    },
    {
      name: 'dr. Sari Dewi, Sp.A',
      specialty: 'Anak',
      experience: '12 Tahun',
      education: 'UNPAD, Spesialis Anak',
      schedule: [
        { day: 'Selasa-Kamis', time: '09:00-13:00' },
        { day: 'Sabtu', time: '08:00-12:00' }
      ],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
      rating: 4.8,
      patients: 1800
    },
    {
      name: 'dr. Maya Indira, Sp.OG',
      specialty: 'Kandungan',
      experience: '18 Tahun',
      education: 'UGM, Spesialis Obstetri Ginekologi',
      schedule: [
        { day: 'Senin-Kamis', time: '14:00-18:00' },
        { day: 'Sabtu', time: '09:00-13:00' }
      ],
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg',
      rating: 4.9,
      patients: 3200
    },
    {
      name: 'dr. Budi Prasetyo, Sp.B',
      specialty: 'Bedah',
      experience: '20 Tahun',
      education: 'UNAIR, Spesialis Bedah Umum',
      schedule: [
        { day: 'Rabu-Jumat', time: '07:00-11:00' },
        { day: 'Minggu', time: '08:00-12:00' }
      ],
      image: 'https://images.pexels.com/photos/5452207/pexels-photo-5452207.jpeg',
      rating: 4.7,
      patients: 2100
    },
    {
      name: 'dr. Lisa Hartono, Sp.M',
      specialty: 'Mata',
      experience: '10 Tahun',
      education: 'USU, Spesialis Mata',
      schedule: [
        { day: 'Senin-Rabu', time: '13:00-17:00' },
        { day: 'Jumat', time: '08:00-12:00' }
      ],
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg',
      rating: 4.8,
      patients: 1500
    },
    {
      name: 'dr. Rizki Amalia, Sp.THT',
      specialty: 'THT',
      experience: '8 Tahun',
      education: 'UNDIP, Spesialis THT-KL',
      schedule: [
        { day: 'Selasa-Kamis', time: '15:00-19:00' },
        { day: 'Sabtu', time: '10:00-14:00' }
      ],
      image: 'https://images.pexels.com/photos/5452285/pexels-photo-5452285.jpeg',
      rating: 4.6,
      patients: 1200
    }
  ];

  const filteredDoctors = selectedSpecialty === 'Semua' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Dokter Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokter spesialis berpengalaman dengan dedikasi tinggi untuk memberikan pelayanan kesehatan terbaik
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <Filter size={20} />
            <span className="font-medium">Filter Spesialisasi:</span>
          </div>
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedSpecialty === specialty
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                    {doctor.specialty}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{doctor.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{doctor.education}</p>
                <p className="text-gray-500 text-sm mb-4">Pengalaman {doctor.experience} • {doctor.patients}+ Pasien</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Jadwal Praktik:</h4>
                  {doctor.schedule.map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-900 font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  <Calendar size={16} />
                  <span>Buat Janji</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pendaftaran Mudah</h3>
              <p className="text-gray-600">Daftar online atau datang langsung ke rumah sakit</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jadwal Fleksibel</h3>
              <p className="text-gray-600">Jadwal praktik yang disesuaikan dengan kebutuhan Anda</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi Telepon</h3>
              <p className="text-gray-600">Layanan konsultasi melalui telepon untuk kasus tertentu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;