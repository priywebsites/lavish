import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import galleryImage1 from "@assets/Screen Shot 2025-07-24 at 2.35.23 PM_1753385949008.png";
import galleryImage2 from "@assets/Screen Shot 2025-07-24 at 2.34.53 PM_1753385949008.png";
import galleryImage3 from "@assets/Screen Shot 2025-07-24 at 2.34.38 PM_1753385949009.png";
import galleryImage4 from "@assets/Screen Shot 2025-07-24 at 2.34.18 PM_1753385950416.png";
import lavishLogo from "@assets/Lavish_Barbershop_Logo_Design-removebg-preview_1753399758916.png";
import barbershopPhoto from "@assets/Screen Shot 2025-07-24 at 2.52.27 PM_1753386825029.png";

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
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down, .fade-in, .scale-in, .rotate-in');
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
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4
  ];

  const reviews = [
    {
      name: "Mike Johnson",
      text: "Best barbershop in Sacramento! The attention to detail is incredible and the atmosphere is perfect. Been coming here for 2 years now.",
      role: "Regular Customer"
    },
    {
      name: "David Martinez", 
      text: "Professional service every time. The barbers really know their craft and always deliver exactly what I'm looking for. Highly recommend!",
      role: "Business Professional"
    },
    {
      name: "Carlos Rodriguez",
      text: "Lavish Barbershop is the real deal. Clean, professional, and they take their time to make sure everything is perfect. Worth every penny!",
      role: "Local Resident"
    }
  ];

  const callNow = () => {
    window.location.href = "tel:+19169490376";
  };

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-lg z-50 slide-in-down particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img 
                src={lavishLogo} 
                alt="Lavish Barbershop Logo" 
                className="h-8 w-auto mr-3 elastic-bounce"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <span className="text-xl font-bold text-black dark:text-white glitch">Lavish Barbershop</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-black dark:text-white hover:text-blue-600 transition-all duration-300 hover:scale-110 neon-glow text-lg font-semibold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.15,
                    textShadow: "0 0 8px rgba(0, 102, 255, 0.8)"
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.button 
              onClick={callNow}
              className="btn-call bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-all pulse-custom"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <i className="fas fa-phone mr-2 wave"></i>Call Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="animated-bg min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden particles">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Enhanced Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 text-blue-400"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <i className="fas fa-cut text-5xl opacity-40 neon-glow elastic-bounce"></i>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-20 text-red-400"
          animate={{ 
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, -20, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <i className="fas fa-scissors text-4xl opacity-40 glitch zoom-pulse"></i>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-20 text-black"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 720],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <i className="fas fa-razor text-3xl opacity-50 morphing-bg"></i>
        </motion.div>
        
        <motion.div 
          className="absolute top-32 right-32 text-red-400"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <i className="fas fa-spa text-2xl"></i>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-32 text-blue-400"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <i className="fas fa-user-tie text-3xl opacity-25"></i>
        </motion.div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-40 h-40 mx-auto mb-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center neon-glow morphing-bg"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
          >
            <motion.img 
              src={lavishLogo} 
              alt="Lavish Barbershop Logo" 
              className="w-32 h-auto zoom-pulse"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 200 }}
            />
          </motion.div>
          

          
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-medium opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Premium Cuts & Styling in Sacramento, California
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button 
              onClick={callNow}
              className="btn-call bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl elastic-bounce neon-glow"
              initial={{ opacity: 0, y: 100, scale: 0.2, rotate: -45 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.1,
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.25, 
                y: -20,
                rotate: 5,
                boxShadow: "0 30px 60px rgba(239, 68, 68, 0.7)"
              }}
              whileTap={{ scale: 0.85 }}
            >
              <motion.i 
                className="fas fa-phone mr-3"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity
                }}
              ></motion.i>
              Call Now - +1 (916) 949-0376
            </motion.button>
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
      <section id="about" className="py-20 bg-white particles">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 text-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              About Lavish Barbershop
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Where tradition meets modern style. Our master barbers deliver premium cuts and grooming services in the heart of Sacramento, California.
            </motion.p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="slide-in-right">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "fas fa-cut", title: "Expert Cuts", desc: "Precision styling by master barbers", bg: "bg-blue-50", color: "text-blue-600", delay: 0 },
                  { icon: "fas fa-star", title: "Premium Service", desc: "Luxury experience every visit", bg: "bg-red-50", color: "text-red-500", delay: 0.1 },
                  { icon: "fas fa-clock", title: "Convenient Hours", desc: "Open 6 days a week", bg: "bg-black/10", color: "text-black", delay: 0.2 },
                  { icon: "fas fa-map-marker-alt", title: "Prime Location", desc: "Heart of Sacramento, CA", bg: "bg-blue-50", color: "text-blue-500", delay: 0.3 }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`text-center service-card ${item.bg} p-6 rounded-xl`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      rotate: 2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.i 
                      className={`${item.icon} text-4xl ${item.color} mb-4`}
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    ></motion.i>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <motion.button 
                  onClick={callNow}
                  className="btn-call bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl neon-glow"
                initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10,
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}

              >
                <motion.i 
                  className="fas fa-phone mr-3"
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                ></motion.i>
                Book Your Appointment
              </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="matrix-rain"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
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
                className="service-card bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center neon-glow morphing-bg"
                initial={{ opacity: 0, y: 100, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.i 
                  className={`${service.icon} text-5xl mb-6`}
                  style={{ 
                    color: index % 2 === 0 ? '#0066ff' : '#ef4444',
                    animationDelay: `${-index * 0.3}s` 
                  }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, -10, 0],
                    y: [0, -15, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: 15,
                    transition: { duration: 0.2 }
                  }}
                ></motion.i>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-80 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.button 
              onClick={callNow}
              className="btn-call bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl zoom-pulse neon-glow"
              initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                y: -15,
                rotate: 3,
                boxShadow: "0 25px 50px rgba(239, 68, 68, 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.i 
                className="fas fa-phone mr-3"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              ></motion.i>
              Call to Book - +1 (916) 949-0376
            </motion.button>
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
                className="gallery-item rounded-xl overflow-hidden shadow-lg cursor-pointer neon-glow"
                initial={{ 
                  opacity: 0, 
                  scale: 0.3, 
                  rotate: -30,
                  y: 100
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                  y: -20,
                  boxShadow: "0 25px 50px rgba(0, 102, 255, 0.4)",
                  transition: { duration: 0.3 }
                }}

              >
                <motion.img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-64 object-cover" 
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
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
                className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 neon-glow flip-in"
                initial={{ opacity: 0, y: 80, scale: 0.5, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}

              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 elastic-bounce"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <i className="fas fa-user text-white"></i>
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="font-bold text-lg glitch"
                      animate={{
                        textShadow: [
                          "0 0 0 rgba(239, 68, 68, 0)",
                          "1px 1px 0 rgba(239, 68, 68, 0.5)",
                          "0 0 0 rgba(239, 68, 68, 0)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {review.name}
                    </motion.h4>
                    <div className="flex text-red-500">
                      {[...Array(5)].map((_, i) => (
                        <motion.i 
                          key={i} 
                          className="fas fa-star"
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 10, 0]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        ></motion.i>
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
              Conveniently located in the heart of Sacramento, California
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.4!2d-121.4750079!3d38.6289322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad7a75a47527b:0x72f34e06ca73220d!2s3408%20Northgate%20Blvd%20%235%2C%20Sacramento%2C%20CA%2095834!5e0!3m2!1sen!2sus!4v1642567890123!5m2!1sen!2sus"
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
                  <motion.div 
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 neon-glow"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                      boxShadow: [
                        "0 0 10px rgba(0, 102, 255, 0.5)",
                        "0 0 30px rgba(0, 102, 255, 0.8)",
                        "0 0 10px rgba(0, 102, 255, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="opacity-80">3408 Northgate Blvd #5, Sacramento, CA 95834, United States</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mr-6 zoom-pulse"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 15, -15, 0],
                      boxShadow: [
                        "0 0 10px rgba(239, 68, 68, 0.5)",
                        "0 0 30px rgba(239, 68, 68, 0.8)",
                        "0 0 10px rgba(239, 68, 68, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    <i className="fas fa-phone text-2xl"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="opacity-80">+1 (916) 949-0376</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6 bounce-in"
                    animate={{ 
                      scale: [1, 1.25, 1],
                      rotate: [0, 20, -20, 0],
                      boxShadow: [
                        "0 0 10px rgba(0, 0, 0, 0.5)",
                        "0 0 30px rgba(0, 0, 0, 0.8)",
                        "0 0 10px rgba(0, 0, 0, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <i className="fas fa-clock text-2xl text-white"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hours</h3>
                    <div className="opacity-80 space-y-1">
                      <p>Tuesday–Friday: 8 a.m.–7 p.m.</p>
                      <p>Saturday: 8 a.m.–7 p.m.</p>
                      <p>Sunday–Monday: Closed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="slide-in-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Google Maps */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.4!2d-121.4750079!3d38.6289322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad7a75a47527b:0x72f34e06ca73220d!2s3408%20Northgate%20Blvd%20%235%2C%20Sacramento%2C%20CA%2095834!5e0!3m2!1sen!2sus!4v1642567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lavish Barbershop Location - 3408 Northgate Blvd #5, Sacramento, CA"
                  ></iframe>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                  className="bg-blue-600/20 backdrop-blur-sm p-8 rounded-xl border border-blue-600/30 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.img 
                    src={lavishLogo}
                    alt="Lavish Barbershop Logo"
                    className="w-24 h-auto mx-auto mb-4 block"
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                  <h3 className="text-2xl font-bold mb-4">Ready for the Lavish Treatment?</h3>
                  <p className="text-lg opacity-90 mb-6">Experience the difference at Lavish Barbershop!</p>
                  
                  <motion.button 
                    onClick={callNow}
                    className="btn-call bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl inline-block mb-4 pulse-custom"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-phone mr-3 wave"></i>Call Now - +1 (916) 949-0376
                  </motion.button>
                  
                  <div className="mt-6 flex justify-center space-x-4">
                    {[
                      { icon: "fab fa-facebook-f", delay: 0 },
                      { icon: "fab fa-instagram", delay: 0.1 },
                      { icon: "fas fa-star", delay: 0.2 }
                    ].map((social, index) => (
                      <motion.div 
                        key={index}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer service-card"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: social.delay,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <img src={lavishLogo} alt="Lavish Barbershop Logo" className="h-16 w-auto mr-3" />
            <span className="text-2xl font-bold">Lavish Barbershop</span>
          </div>
          <p className="opacity-70 mb-6">Premium Cuts & Styling in Sacramento, California</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="opacity-50">&copy; 2024 Lavish Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
