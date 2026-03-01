import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Wifi, 
  Car, 
  Wind, 
  Users, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck
} from 'lucide-react';

// --- Types ---
interface Room {
  id: number;
  name: string;
  type: 'AC' | 'Non-AC';
  price: string;
  image: string;
  features: string[];
}

// --- Constants ---
const ROOMS: Room[] = [
  {
    id: 1,
    name: 'Executive AC Room',
    type: 'AC',
    price: '₹1,500',
    image: 'https://picsum.photos/seed/room1/800/600',
    features: ['Air Conditioning', 'King Size Bed', 'Free Wi-Fi', 'Flat Screen TV'],
  },
  {
    id: 2,
    name: 'Deluxe Non-AC Room',
    type: 'Non-AC',
    price: '₹1,000',
    image: 'https://picsum.photos/seed/room2/800/600',
    features: ['Ceiling Fan', 'Queen Size Bed', 'Free Wi-Fi', 'Work Desk'],
  },
  {
    id: 3,
    name: 'Family Suite',
    type: 'AC',
    price: '₹2,500',
    image: 'https://picsum.photos/seed/room3/800/600',
    features: ['2 Double Beds', 'Air Conditioning', 'Mini Fridge', 'Free Wi-Fi'],
  },
];

const FACILITIES = [
  { icon: <Wind className="w-6 h-6" />, title: 'AC & Non-AC Rooms', desc: 'Choose comfort that fits your budget.' },
  { icon: <Wifi className="w-6 h-6" />, title: 'Free High-Speed Wi-Fi', desc: 'Stay connected with our seamless internet.' },
  { icon: <Car className="w-6 h-6" />, title: 'Secure Parking', desc: 'Ample space for your vehicles.' },
  { icon: <Users className="w-6 h-6" />, title: 'Family Friendly', desc: 'Safe and welcoming environment for families.' },
  { icon: <Clock className="w-6 h-6" />, title: '24/7 Service', desc: 'Our staff is always here to help you.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Safe & Secure', desc: 'CCTV monitored premises for your safety.' },
];

const GALLERY_IMAGES = [
  'room1.MP4',
  'room2.MP4',
  'room3.MP4',
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-saffron-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-saffron-light rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Shri Balaji</h1>
              <p className="text-xs text-saffron-dark font-medium uppercase tracking-wider">Guest House</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-saffron-dark font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-saffron-light hover:bg-saffron-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-saffron-dark p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-saffron-dark hover:bg-saffron-pale rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-saffron-light text-white px-6 py-3 rounded-md font-semibold"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="atalnagar.png"
          alt="Naya Raipur Modern Infrastructure - Aerial View"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-saffron-light/90 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Welcome to Naya Raipur
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Comfortable Stay in the <span className="text-saffron-light">Heart</span> of Naya Raipur
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Experience premium hospitality with modern amenities at Shri Balaji Guest House. 
            Perfect for business travelers and families alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#rooms"
              className="bg-saffron-light hover:bg-saffron-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center group"
            >
              Explore Rooms
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Quick Enquiry
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="new Raipur3.jpeg"
              alt="Interior"
              className="rounded-2xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-saffron-pale rounded-2xl -z-0 hidden lg:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-saffron-light/20 rounded-2xl translate-x-4 translate-y-4 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">About Us</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Home Away From Home in Naya Raipur
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Shri Balaji Guest House is dedicated to providing a serene and comfortable environment for all our guests. 
              Located strategically in Naya Raipur, we offer easy access to major landmarks while ensuring a peaceful stay.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <div className="bg-saffron-pale p-3 rounded-lg mr-4">
                  <Star className="w-6 h-6 text-saffron-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premium Quality</h4>
                  <p className="text-sm text-gray-500">Best in class service</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-saffron-pale p-3 rounded-lg mr-4">
                  <ShieldCheck className="w-6 h-6 text-saffron-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Safe Stay</h4>
                  <p className="text-sm text-gray-500">24/7 Security</p>
                </div>
              </div>
            </div>
            <a
              href="#facilities"
              className="inline-flex items-center text-saffron-dark font-bold hover:underline"
            >
              Learn more about our facilities
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RoomCard: React.FC<{ room: Room }> = ({ room }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            room.type === 'AC' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
          }`}>
            {room.type}
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
          <div className="text-right">
            <p className="text-saffron-dark font-bold text-xl">{room.price}</p>
            <p className="text-gray-400 text-xs uppercase">per night</p>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {room.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600 text-sm">
              <div className="w-1.5 h-1.5 bg-saffron-light rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="block w-full text-center py-3 rounded-xl border-2 border-saffron-light text-saffron-dark font-bold hover:bg-saffron-light hover:text-white transition-all"
        >
          Book This Room
        </a>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">Our Accommodation</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Perfect Room</h2>
          <p className="text-gray-600">
            We offer a variety of rooms to suit your needs, from executive AC rooms to affordable non-AC options.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">Amenities</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for Your Comfort</h2>
          <p className="text-gray-600">
            Everything you need for a hassle-free and enjoyable stay at Shri Balaji Guest House.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-saffron-pale/30 border border-saffron-light/10 hover:border-saffron-light/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-saffron-dark mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">Gallery</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">A Glimpse of Our Guest House</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((src, idx) => {
            const isVideo = src.toLowerCase().endsWith('.mp4');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer relative"
              >
                {isVideo ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    rooms: '1',
    checkIn: '',
    checkOut: '',
    requirements: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Enquiry for Shri Balaji Guest House*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Rooms:* ${formData.rooms}\n` +
      `*Check-in:* ${formData.checkIn}\n` +
      `*Check-out:* ${formData.checkOut}\n` +
      `*Requirements:* ${formData.requirements}`;

    const whatsappUrl = `https://wa.me/919685039979?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        rooms: '1',
        checkIn: '',
        checkOut: '',
        requirements: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us for Bookings</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-saffron-pale p-4 rounded-xl mr-6 text-saffron-dark">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Our Address</h4>
                  <p className="text-gray-600">JR.MIG-2/97, SECTOR 29, NAYA RAIPUR ATAL NAGAR CG-492015</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-saffron-pale p-4 rounded-xl mr-6 text-saffron-dark">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">+91 96857 39979</p>
                  <p className="text-gray-600">+91 93990 93220</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-saffron-pale p-4 rounded-xl mr-6 text-saffron-dark">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">info@shribalajiguesthouse.com</p>
                  <p className="text-gray-600">bookings@shribalajiguesthouse.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-saffron-light hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-saffron-light hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919685039979" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-saffron-light hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Enquiry Form</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent!</h4>
                  <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                      placeholder="+91 96857 39979"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">No. of Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                      >
                        {[1, 2, 3, 4, 5, '6+'].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Rooms Required</label>
                      <select
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date</label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Other Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron-light focus:ring-2 focus:ring-saffron-light/20 outline-none transition-all resize-none"
                      placeholder="Any special requests..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-saffron-light hover:bg-saffron-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Enquiry
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-saffron-dark font-bold uppercase tracking-widest text-sm mb-4">Location</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us in Naya Raipur</h2>
          <p className="text-gray-600">
            Conveniently located near the main administrative hub and transportation centers.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] relative border-8 border-white mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.23456789!2d81.7752852!3d21.1342794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c46765755555%3A0x5555555555555555!2sShri+balaji+guest+house!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/EEQRGJTmB4H6tRh76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <MapPin className="w-5 h-5 mr-2 text-saffron-dark" />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-saffron-light rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">Shri Balaji</h1>
                <p className="text-xs text-saffron-light font-medium uppercase tracking-wider">Guest House</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing premium hospitality and comfortable living spaces in the heart of Naya Raipur. 
              Your satisfaction is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-saffron-light transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-saffron-light transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://wa.me/919685039979" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-saffron-light transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-saffron-light transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-saffron-light transition-colors">Our Rooms</a></li>
              <li><a href="#facilities" className="hover:text-saffron-light transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="hover:text-saffron-light transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-saffron-light transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Check-in:</span>
                <span className="text-white">12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Check-out:</span>
                <span className="text-white">11:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Reception:</span>
                <span className="text-white">24 Hours</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-saffron-light shrink-0" />
                <span>JR.MIG-2/97, SECTOR 29, NAYA RAIPUR ATAL NAGAR CG-492015</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-saffron-light shrink-0" />
                <span>+91 96857 39979, 93990 93220</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-saffron-light shrink-0" />
                <span>info@shribalajiguesthouse.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shri Balaji Guest House. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919685739979"
        className="w-14 h-14 bg-saffron-light text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-saffron-dark transition-all"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919685039979"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all"
        title="WhatsApp Inquiry"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-saffron-light/30">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
