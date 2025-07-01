import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Car, Wifi, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: [
        { label: 'IGD 24 Jam', value: '(021) 123-4567', urgent: true },
        { label: 'Informasi Umum', value: '(021) 456-7890' },
        { label: 'Pendaftaran', value: '(021) 789-0123' }
      ]
    },
    {
      icon: Mail,
      title: 'Email & Digital',
      details: [
        { label: 'Email Umum', value: 'info@rssehat.co.id' },
        { label: 'WhatsApp', value: '0812-3456-7890' },
        { label: 'Website', value: 'www.rssehat.co.id' }
      ]
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: [
        { label: 'Jl. Kesehatan No. 123', value: 'Jakarta Selatan 12345' },
        { label: 'Dekat MRT Blok M', value: 'Akses mudah transportasi umum' }
      ]
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        { label: 'IGD', value: '24 Jam', urgent: true },
        { label: 'Rawat Jalan', value: 'Senin-Sabtu 08:00-20:00' },
        { label: 'Apotek', value: 'Senin-Minggu 06:00-22:00' }
      ]
    }
  ];

  const subjects = [
    'Informasi Umum',
    'Pendaftaran Pasien',
    'Keluhan Pelayanan',
    'Kerjasama',
    'Karir',
    'Lainnya'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap melayani dan menjawab pertanyaan Anda. Hubungi kami melalui berbagai cara yang tersedia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <IconComponent size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-sm text-gray-600">{detail.label}</div>
                        <div className={`font-medium ${detail.urgent ? 'text-red-600' : 'text-gray-900'}`}>
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Darurat?</h3>
              <p className="text-red-100 mb-4">Untuk keadaan darurat, segera hubungi IGD atau datang langsung ke rumah sakit</p>
              <button className="w-full bg-white text-red-600 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone size={16} />
                <span>IGD: (021) 123-4567</span>
              </button>
            </div>

            {/* Social Media & Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fasilitas Tambahan</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Car size={16} className="text-blue-600" />
                  <span className="text-gray-700">Parkir luas & gratis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi size={16} className="text-green-600" />
                  <span className="text-gray-700">WiFi gratis di seluruh area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={16} className="text-orange-600" />
                  <span className="text-gray-700">Pendaftaran online 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Kirim Pesan</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="08XX-XXXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih Subjek</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                >
                  <Send size={20} />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Lokasi Kami</h3>
                <p className="text-gray-600">RS Sehat Sejahtera - Jakarta Selatan</p>
              </div>
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Google Maps</h4>
                  <p className="text-gray-500">Jl. Kesehatan No. 123, Jakarta Selatan</p>
                  <p className="text-sm text-gray-400 mt-2">Dekat MRT Blok M & TransJakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;