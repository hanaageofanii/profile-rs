import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    gender: '',
    address: '',
    specialty: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    complaints: '',
    insurance: '',
    isNewPatient: true
  });

  const specialties = [
    'Penyakit Dalam',
    'Anak',
    'Kandungan',
    'Bedah',
    'Mata',
    'THT',
    'Orthopedi',
    'Saraf'
  ];

  const doctorsBySpecialty = {
    'Penyakit Dalam': ['dr. Ahmad Santoso, Sp.PD'],
    'Anak': ['dr. Sari Dewi, Sp.A'],
    'Kandungan': ['dr. Maya Indira, Sp.OG'],
    'Bedah': ['dr. Budi Prasetyo, Sp.B'],
    'Mata': ['dr. Lisa Hartono, Sp.M'],
    'THT': ['dr. Rizki Amalia, Sp.THT'],
    'Orthopedi': ['dr. Dedi Kurniawan, Sp.OT'],
    'Saraf': ['dr. Nina Safitri, Sp.S']
  };

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const insuranceTypes = [
    'BPJS Kesehatan',
    'Asuransi Mandiri Inhealth',
    'Asuransi Prudential',
    'Asuransi Allianz',
    'Asuransi BNI Life',
    'Umum (Bayar Sendiri)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const {
    name,
    phone,
    email,
    birthDate,
    gender,
    address,
    specialty,
    doctor,
    appointmentDate,
    appointmentTime,
    complaints,
    insurance,
    isNewPatient
  } = formData;

  const message = `
📝 *Pendaftaran Konsultasi Online*

👤 *Status Pasien:* ${isNewPatient ? 'Baru' : 'Lama'}
📛 *Nama:* ${name}
📞 *Telepon:* ${phone}
📧 *Email:* ${email || '-'}
🎂 *Tanggal Lahir:* ${birthDate}
🚻 *Jenis Kelamin:* ${gender}
🏠 *Alamat:* ${address}
🏥 *Spesialisasi:* ${specialty}
👨‍⚕️ *Dokter:* ${doctor}
📅 *Tanggal:* ${appointmentDate}
⏰ *Waktu:* ${appointmentTime} WIB
📋 *Keluhan:* ${complaints || '-'}
💳 *Asuransi:* ${insurance}
`;

  const encodedMessage = encodeURIComponent(message.trim());

  const whatsappNumber = '6282128294624';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  setFormData({
    name: '',
    phone: '',
    email: '',
    birthDate: '',
    gender: '',
    address: '',
    specialty: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    complaints: '',
    insurance: '',
    isNewPatient: true
  })
};

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pendaftaran Online</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daftar online untuk konsultasi dengan dokter spesialis kami. Proses cepat dan mudah!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Registration Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Pendaftaran</h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pendaftaran Gratis</h4>
                      <p className="text-gray-600 text-sm">Tidak ada biaya untuk mendaftar online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Konfirmasi Cepat</h4>
                      <p className="text-gray-600 text-sm">Konfirmasi dalam 1-2 jam kerja</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={16} className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dukungan 24/7</h4>
                      <p className="text-gray-600 text-sm">Tim customer service siap membantu</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Metode Pendaftaran Lain:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-blue-600" />
                      <span className="text-sm text-gray-600">Telepon: (022) 6620965</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-green-600" />
                      <span className="text-sm text-gray-600">WhatsApp: 0857-2105-5325</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span>08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu</span>
                      <span>08:00 - 12:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
              <div className="space-y-8">
                {/* Patient Type */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Status Pasien</h3>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="true"
                        checked={formData.isNewPatient}
                        onChange={(e) => setFormData(prev => ({ ...prev, isNewPatient: e.target.value === 'true' }))}
                        className="text-blue-600"
                      />
                      <span>Pasien Baru</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isNewPatient"
                        value="false"
                        checked={!formData.isNewPatient}
                        onChange={(e) => setFormData(prev => ({ ...prev, isNewPatient: e.target.value === 'true' }))}
                        className="text-blue-600"
                      />
                      <span>Pasien Lama</span>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Data Pribadi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="08XX-XXXX-XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Lahir</label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Asuransi</label>
                      <select
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih Jenis Asuransi</option>
                        {insuranceTypes.map((insurance) => (
                          <option key={insurance} value={insurance}>{insurance}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan alamat lengkap"
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Detail Konsultasi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Spesialisasi</label>
                      <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih Spesialisasi</option>
                        {specialties.map((specialty) => (
                          <option key={specialty} value={specialty}>{specialty}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dokter</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={!formData.specialty}
                      >
                        <option value="">Pilih Dokter</option>
                        {formData.specialty && doctorsBySpecialty[formData.specialty]?.map((doctor) => (
                          <option key={doctor} value={doctor}>{doctor}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Konsultasi</label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Waktu Konsultasi</label>
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pilih Waktu</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time} WIB</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Keluhan / Gejala</label>
                    <textarea
                      name="complaints"
                      value={formData.complaints}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jelaskan keluhan atau gejala yang Anda alami"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium text-lg"
                >
                  <Calendar size={20} />
                  <span>Daftar Sekarang</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;