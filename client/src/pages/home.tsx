import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .fade-in');
    animatedElements.forEach(el => observerRef.current?.observe(el));

    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      observerRef.current?.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const services = [
    { icon: "fas fa-cut", title: "Classic Haircut", description: "Timeless cuts with modern precision and attention to detail" },
    { icon: "fas fa-scissors", title: "Beard Trim & Styling", description: "Expert beard shaping and grooming for the perfect look" },
    { icon: "fas fa-razor", title: "Hot Towel Shave", description: "Traditional straight razor shave with hot towel treatment" },
    { icon: "fas fa-spa", title: "Face Treatment", description: "Refreshing facial treatments and skincare services" },
    { icon: "fas fa-user-tie", title: "Special Occasion Styling", description: "Perfect grooming for weddings, events, and special moments" },
    { icon: "fas fa-child", title: "Kids Cuts", description: "Fun and comfortable haircuts for our youngest clients" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1622286346003-c3caed9f2cb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  ];

  const reviews = [
    {
      name: "Mike Johnson",
      text: "Best barbershop in Woodland! The attention to detail is incredible and the atmosphere is perfect. Been coming here for 2 years now.",
      role: "Regular Customer"
    },
    {
      name: "David Martinez", 
      text: "Professional service every time. The barbers really know their craft and always deliver exactly what I'm looking for. Highly recommend!",
      role: "Business Professional"
    },
    {
      name: "Carlos Rodriguez",
      text: "Kings Barbershop is the real deal. Clean, professional, and they take their time to make sure everything is perfect. Worth every penny!",
      role: "Local Resident"
    }
  ];

  const callNow = () => {
    window.location.href = "tel:+15306653684";
  };

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-lg z-50 slide-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <i className="fas fa-crown text-yellow-500 text-2xl mr-2"></i>
              <span className="text-xl font-bold">Kings Barbershop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button 
              onClick={callNow}
              className="btn-call bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-all"
            >
              <i className="fas fa-phone mr-2"></i>Call Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="animated-bg min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-yellow-500 floating">
          <i className="fas fa-cut text-4xl opacity-20"></i>
        </div>
        <div className="absolute bottom-32 right-20 text-yellow-500 floating" style={{ animationDelay: '-2s' }}>
          <i className="fas fa-scissors text-3xl opacity-20"></i>
        </div>
        <div className="absolute top-1/2 left-20 text-yellow-500 floating" style={{ animationDelay: '-4s' }}>
          <i className="fas fa-razor text-2xl opacity-20"></i>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="rotating-border w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center">
            <i className="fas fa-crown text-yellow-500 text-4xl"></i>
          </div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block">KINGS</span>
            <span className="block text-yellow-500">BARBERSHOP</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-medium opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Premium Cuts & Styling in Woodland, California
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button 
              onClick={callNow}
              className="btn-call bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl"
            >
              <i className="fas fa-phone mr-3"></i>Call Now - (530) 665-3684
            </button>
            <a href="#services" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 transition-all">
              View Services
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">About Kings Barbershop</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where tradition meets modern style. Our master barbers deliver premium cuts and grooming services in the heart of Woodland, California.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern barbershop interior" 
                className="rounded-xl shadow-2xl w-full h-auto pulse-custom" 
              />
            </div>
            
            <div className="slide-in-right">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center service-card bg-blue-50 p-6 rounded-xl">
                  <i className="fas fa-cut text-4xl text-blue-600 mb-4 icon-bounce"></i>
                  <h3 className="font-bold text-slate-900 mb-2">Expert Cuts</h3>
                  <p className="text-gray-600 text-sm">Precision styling by master barbers</p>
                </div>
                <div className="text-center service-card bg-red-50 p-6 rounded-xl">
                  <i className="fas fa-star text-4xl text-red-500 mb-4 icon-bounce" style={{ animationDelay: '-0.5s' }}></i>
                  <h3 className="font-bold text-slate-900 mb-2">Premium Service</h3>
                  <p className="text-gray-600 text-sm">Luxury experience every visit</p>
                </div>
                <div className="text-center service-card bg-yellow-50 p-6 rounded-xl">
                  <i className="fas fa-clock text-4xl text-yellow-500 mb-4 icon-bounce" style={{ animationDelay: '-1s' }}></i>
                  <h3 className="font-bold text-slate-900 mb-2">Convenient Hours</h3>
                  <p className="text-gray-600 text-sm">Open 6 days a week</p>
                </div>
                <div className="text-center service-card bg-blue-50 p-6 rounded-xl">
                  <i className="fas fa-map-marker-alt text-4xl text-blue-500 mb-4 icon-bounce" style={{ animationDelay: '-1.5s' }}></i>
                  <h3 className="font-bold text-slate-900 mb-2">Prime Location</h3>
                  <p className="text-gray-600 text-sm">Heart of Woodland, CA</p>
                </div>
              </div>
              
              <button 
                onClick={callNow}
                className="btn-call bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl"
              >
                <i className="fas fa-phone mr-3"></i>Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Services</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professional grooming services tailored to your style and personality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <i className={`${service.icon} text-5xl text-yellow-500 mb-6 icon-bounce`} style={{ animationDelay: `${-index * 0.3}s` }}></i>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-80 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={callNow}
              className="btn-call bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl"
            >
              <i className="fas fa-phone mr-3"></i>Call to Book - (530) 665-3684
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the artistry and precision in every cut, style, and grooming service we provide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                className="gallery-item rounded-xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">What Our Clients Say</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic mb-4 leading-relaxed">"{review.text}"</p>
                <div className="text-sm opacity-80">{review.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Visit Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of Woodland, California
            </p>
          </div>
          
          <motion.div 
            className="slide-in-up"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5234!2d-121.7889391!3d38.6780595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808529f4b2ee85e9%3A0x8b47c5c9d7e8a123!2s368%20California%20St%2C%20Woodland%2C%20CA%2095695!5e0!3m2!1sen!2sus!4v1623456789!5m2!1sen!2sus"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Get In Touch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready for your next great cut? Contact us today to schedule your appointment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="space-y-8">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 pulse-custom">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="opacity-80">368 California St, Woodland, CA 95695, United States</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mr-6 pulse-custom">
                    <i className="fas fa-phone text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="opacity-80">+1 (530) 665-3684</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-6 pulse-custom">
                    <i className="fas fa-clock text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hours</h3>
                    <div className="opacity-80 space-y-1">
                      <p>Mon–Wed, Fri: 9 a.m.–6 p.m.</p>
                      <p>Thurs: 9 a.m.–6 p.m.</p>
                      <p>Sat: 8 a.m.–4 p.m.</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="slide-in-right text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600/20 backdrop-blur-sm p-12 rounded-xl border border-blue-600/30">
                <i className="fas fa-crown text-6xl text-yellow-500 mb-6 floating"></i>
                <h3 className="text-3xl font-bold mb-6">Ready for the Royal Treatment?</h3>
                <p className="text-lg opacity-90 mb-8">Experience the difference at Kings Barbershop. Call now to book your appointment!</p>
                
                <button 
                  onClick={callNow}
                  className="btn-call bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl inline-block mb-4"
                >
                  <i className="fas fa-phone mr-3"></i>Call Now - (530) 665-3684
                </button>
                
                <div className="mt-6 flex justify-center space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                    <i className="fab fa-google text-xl"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <i className="fas fa-crown text-yellow-500 text-3xl mr-3"></i>
            <span className="text-2xl font-bold">Kings Barbershop</span>
          </div>
          <p className="opacity-70 mb-6">Premium Cuts & Styling in Woodland, California</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="opacity-50">&copy; 2024 Kings Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
