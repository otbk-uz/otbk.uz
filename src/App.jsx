import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Smartphone, Globe, Brain, Server, Shield, Database, Cloud, Layers, Terminal, Cpu, Rocket, ChevronDown, Menu, X, Mail, Phone, MapPin, ExternalLink, Star, Award, Users, Zap, ArrowRight } from 'lucide-react'
import photoMain from './assets/photo_main.jpg'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'experience', 'gallery', 'stack', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Bosh sahifa' },
    { id: 'about', label: 'Men haqimda' },
    { id: 'services', label: 'Xizmatlar' },
    { id: 'projects', label: 'Loyihalar' },
    { id: 'experience', label: 'Tajriba' },
    { id: 'gallery', label: 'Galereya' },
    { id: 'stack', label: 'Texnologiyalar' },
    { id: 'contact', label: 'Aloqa' },
  ]

  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Web Sayt Yaratish',
      description: 'Zamonaviy, tez va xavfsiz web saytlar. Landing page, korporativ saytlar, e-commerce platformalar, SaaS ilovalar va murakkab web tizimlar noldan loyihalanadi.',
      features: ['React, Next.js, Vue.js', 'SEO optimizatsiya', 'Responsive dizayn', 'CMS integratsiya', 'Performance optimization', 'PWA yechimlar'],
      color: '#00f5ff'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobil Ilovalar',
      description: 'iOS va Android uchun yuqori sifatli cross-platform mobil ilovalar. Murakkab animatsiyalar, offline rejim va mukammal UX/UI dizayn bilan.',
      features: ['Flutter development', 'Native performance', 'Push notifications', 'Offline mode', 'App Store & Play Market', 'State management'],
      color: '#a855f7'
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Yechimlar',
      description: 'Sun\'iy intellekt asosida avtomatlashtirilgan tizimlar. Chatbotlar, tahliliy tizimlar, machine learning modellar va AI agentlar yaratish.',
      features: ['Gemini API integratsiya', 'NLP yechimlar', 'Computer vision', 'AI agentlar', 'Custom ML modellar', 'Data analytics'],
      color: '#22d3ee'
    },
    {
      icon: <Server size={40} />,
      title: 'Backend & API',
      description: 'Kuchli va ishonchli backend arxitektura. REST API, GraphQL, mikroservislar va yuqori yuklanishga bardoshli tizimlar loyihalash.',
      features: ['Python, FastAPI, Django', 'PostgreSQL, MongoDB', 'Redis caching', 'API documentation', 'Authentication & Auth', 'Rate limiting'],
      color: '#f472b6'
    },
    {
      icon: <Cloud size={40} />,
      title: 'DevOps & Cloud',
      description: 'Bulutli infratuzilma, CI/CD pipeline, monitoring va avtomatik deploy. Docker, Kubernetes, AWS/GCP va boshqa platformalar.',
      features: ['Docker & Kubernetes', 'CI/CD pipelines', 'Cloud deployment', 'Monitoring & Logging', 'Auto-scaling', 'Backup & Recovery'],
      color: '#fb923c'
    },
    {
      icon: <Shield size={40} />,
      title: 'Xavfsizlik & Audit',
      description: 'Kiberxavfsizlik auditlari, penetratsion testlar va ma\'lumotlar xavfsizligini ta\'minlash. SSL, shifrlash va access control.',
      features: ['Security audit', 'Penetration testing', 'SSL & encryption', 'Data protection', 'OWASP standards', 'Vulnerability assessment'],
      color: '#34d399'
    },
    {
      icon: <Database size={40} />,
      title: 'Ma\'lumotlar Bazasi',
      description: 'Murakkab ma\'lumotlar bazasi arxitekturasi, optimizatsiya va migratsiya. Relatsion va NoSQL bazalar bilan ishlash.',
      features: ['PostgreSQL, MySQL', 'MongoDB, Firebase', 'Redis, Memcached', 'Query optimization', 'Data modeling', 'Backup strategies'],
      color: '#fbbf24'
    },
    {
      icon: <Layers size={40} />,
      title: 'UI/UX Dizayn',
      description: 'Foydalanuvchi tajribasini tahlil qilish va zamonaviy dizayn yaratish. Wireframe, prototype va final dizayn tayyorlash.',
      features: ['Figma dizayn', 'User research', 'Wireframing', 'Prototyping', 'Design system', 'Accessibility (a11y)'],
      color: '#f87171'
    },
    {
      icon: <Code2 size={40} />,
      title: 'Telegram Botlar',
      description: 'Murakkab funksional Telegram botlar. Payment integratsiya, admin panel, analytics va avtomatlashtirish.',
      features: ['Telegram Bot API', 'Webhook & polling', 'Inline keyboard', 'Payment integration', 'Admin dashboard', 'Analytics'],
      color: '#38bdf8'
    },
    {
      icon: <Rocket size={40} />,
      title: 'ERP & CRM Tizimlar',
      description: 'Biznes jarayonlarini avtomatlashtirish uchun ERP va CRM tizimlar yaratish. Inventory, HR, accounting va reporting.',
      features: ['Custom ERP/CRM', 'Inventory management', 'HR & Payroll', 'Financial reporting', 'Workflow automation', 'Role-based access'],
      color: '#c084fc'
    },
    {
      icon: <Terminal size={40} />,
      title: 'Konsalting & Training',
      description: 'Texnik konsalting, jamoalarni o\'qitish va code review. Dasturlash asoslari, best practices va arxitektura bo\'yicha mentorlik.',
      features: ['Code review', 'Architecture consulting', 'Team training', 'Best practices', 'Tech stack selection', 'Performance audit'],
      color: '#4ade80'
    },
    {
      icon: <Cpu size={40} />,
      title: 'IoT & Avtomatizatsiya',
      description: 'Internet of Things yechimlari, smart home/system integratsiya va hardware-dastur aloqasini ta\'minlash.',
      features: ['IoT protocols', 'Sensor integration', 'Smart home', 'Real-time monitoring', 'Edge computing', 'Automation scripts'],
      color: '#818cf8'
    },
  ]

  const projects = [
    {
      title: 'Rare Flowers Agro-turizm',
      description: '5 gektar maydonni egallagan premium klassdagi agro-turizm kompleksi. Lyuks brending, zamonaviy oyna konstruksiyalari, quyosh energiyasi integratsiyasi va yuqori darajadagi peyzaj dizayni. Loyihaning to\'liq arxitekturasi va vizualizatsiyasiga boshchilik qilgan.',
      tech: ['React', 'Three.js', 'Python', 'PostgreSQL', 'Figma'],
      image: '🌺',
      link: '#',
      status: 'Faol'
    },
    {
      title: 'Ravshanov AI (RAI)',
      description: 'Sun\'iy intellekt va raqamli innovatsiyalarga yo\'naltirilgan AI-ekotizim. Gemini API va boshqa ilg\'or neyrotarmoqlarni amaliy dasturlarga integratsiya. Mustaqil tahlil va avtomatlashtirish qobiliyatiga ega.',
      tech: ['Python', 'Gemini API', 'FastAPI', 'React', 'LangChain'],
      image: '🤖',
      link: '#',
      status: 'Rivojlanmoqda'
    },
    {
      title: 'Turon Beton Raqamlashtirish',
      description: 'Kompaniyaning raqamli infratuzilmasi, ma\'lumotlar xavfsizligi va raqamli avtomatlashtirish jarayonlarini to\'liq boshqarish. ERP tizim, inventory management, HR va accounting modullari.',
      tech: ['ERP tizim', 'Python', 'Docker', 'PostgreSQL', 'Redis'],
      image: '🏗️',
      link: '#',
      status: 'Faol'
    },
    {
      title: 'InteliSoft Yechimlar',
      description: 'Dasturiy yechimlar bo\'yicha bosh maslahatchi va texnik tayanch sifatida murakkab biznes tizimlarini ishlab chiqish. Mikroservis arxitektura, CI/CD pipeline va cloud deployment.',
      tech: ['Full-stack', 'Cloud', 'AI', 'Microservices', 'Kubernetes'],
      image: '💼',
      link: '#',
      status: 'Davom etmoqda'
    },
    {
      title: 'AI Agent Tizimlari',
      description: 'Mustaqil tahlil qila oladigan avtomatlashtirilgan tizimlar. Nafaqat xabarlarni qayta ishlaydigan, balki mustaqil qaror qabul qiluvchi AI agentlar. Vector database va RAG arxitektura.',
      tech: ['LangChain', 'Gemini', 'Python', 'Vector DB', 'RAG'],
      image: '🧠',
      link: '#',
      status: 'Beta'
    },
    {
      title: 'Sinergiya Platformasi',
      description: 'Sun\'iy intellekt va raqamli innovatsiyalarga yo\'naltirilgan qo\'shma loyiha. Biznes avtomatlashtirish, AI-powered analytics va real-time monitoring tizimi.',
      tech: ['React', 'Python', 'AI/ML', 'WebSocket', 'D3.js'],
      image: '🔄',
      link: '#',
      status: 'Rejalashtirilgan'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Ko\'p funksiyali onlayn do\'kon platformasi. Payment gateway integratsiya, inventory management, order tracking va analytics dashboard. Mobile-first yondashuv bilan yaratilgan.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind', 'Redis'],
      image: '🛒',
      link: '#',
      status: 'Faol'
    },
    {
      title: 'Smart Home Dashboard',
      description: 'IoT qurilmalarini boshqarish uchun real-time dashboard. Sensor ma\'lumotlarini monitoring, automation rules va energy analytics. WebSocket orqali real-time yangilanish.',
      tech: ['Flutter', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana'],
      image: '🏠',
      link: '#',
      status: 'Beta'
    },
  ]

  const experiences = [
    {
      company: 'Qo\'qon Innavations',
      role: 'Dasturlash kursi talabasi',
      period: '2018 - 2019',
      description: 'Professional dasturlash kursida o\'qishni boshlaganim bilan dasturchilik yo\'liga qadam qo\'ydim. Zamonaviy dasturlash asoslarini chuqur o\'rgandim va amaliy loyihalar ustida ishlash orqali tajriba orttirdim.',
      achievements: ['Dasturlash asoslari', 'Amaliy loyihalar', 'Jamoa ishlari', 'Problem solving']
    },
    {
      company: 'Takvandoga',
      role: 'Talaba',
      period: '2017',
      description: 'O\'z bilimlarimni rivojlantirish va yangi ko\'nikmalarni o\'rganish maqsadida Takvandoga bordim. Bu tajriba menga mustaqil o\'rganish va moslashuvchanlik qobiliyatlarini rivojlantirishga yordam berdi.',
      achievements: ['Mustaqil o\'rganish', 'Moslashuvchanlik', 'Yangi tajriba', 'Motivatsiya']
    },
    {
      company: 'Turon Beton MChJ',
      role: 'Dasturiy ta\'minotni ishlab chiqish bo\'limi boshlig\'i',
      period: 'Hozirgi',
      description: 'Kompaniyaning raqamli infratuzilmasi, ma\'lumotlar xavfsizligi va raqamli avtomatlashtirish jarayonlarini to\'liq boshqaradi. ERP tizimini joriy qilish, inventory management, HR va accounting modullarini ishlab chiqish.',
      achievements: ['ERP tizimini joriy qilish', 'Raqamli transformatsiya', 'Xavfsizlik protokollari', 'Jamoa boshqaruvi']
    },
    {
      company: 'Ravshanov AI (RAI)',
      role: 'Asoschi & Bosh Arxitektor',
      period: 'Hozirgi',
      description: 'Sun\'iy intellekt va raqamli innovatsiyalarga yo\'naltirilgan loyihalar asoschisi. RAI brendi ostida AI-ekotizimlarni rivojlantirish. Gemini API va boshqa ilg\'or neyrotarmoqlarni amaliy dasturlarga integratsiya.',
      achievements: ['AI-ekotizim yaratish', 'Gemini API integratsiya', 'Innovatsion yechimlar', 'AI agentlar']
    },
    {
      company: 'InteliSoft',
      role: 'Strategik a\'zosi & Bosh maslahatchi',
      period: 'Hozirgi',
      description: 'Dasturiy yechimlar bo\'yicha bosh maslahatchi va texnik tayanchi. Murakkab biznes tizimlarini loyihalash, mikroservis arxitektura va cloud deployment bo\'yicha ekspertiza.',
      achievements: ['Murakkab tizimlar', 'Jamoa boshqaruvi', 'Texnik strategiya', 'Code review']
    },
    {
      company: 'Sinergiya',
      role: 'Hammuassis & Texnik Direktor',
      period: 'Hozirgi',
      description: 'Sun\'iy intellekt va raqamli innovatsiyalarga yo\'naltirilgan qo\'shma loyihalar. Biznes avtomatlashtirish, AI-powered analytics va real-time monitoring tizimlarini rivojlantirish.',
      achievements: ['Hamkorlik loyihalari', 'AI yechimlar', 'Biznes rivojlanish', 'Platform arxitektura']
    },
  ]

  const techStack = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Flutter', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SASS'],
    'Backend': ['Python', 'FastAPI', 'Django', 'Node.js', 'Express', 'GraphQL', 'Flask', 'Dart'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'MySQL', 'InfluxDB'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Render', 'CI/CD', 'Nginx', 'Linux'],
    'AI/ML': ['Gemini API', 'LangChain', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'RAG'],
    'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'JetBrains IDE', 'Docker Compose'],
    'Mobile': ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Bloc', 'Firebase', 'App Store Connect'],
    'Testing': ['Jest', 'Pytest', 'Cypress', 'Postman', 'Selenium', 'Unit Testing'],
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInDown = {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  const rotateIn = {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const slideIn = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  const bounceIn = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const staggerContainerSlow = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const glowPulse = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(212, 175, 55, 0.2)",
        "0 0 40px rgba(212, 175, 55, 0.4)",
        "0 0 20px rgba(212, 175, 55, 0.2)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="navbar">
        <motion.a
          href="#hero"
          className="logo"
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Terminal size={28} />
          </motion.div>
          <span>OTBK<span className="accent">.UZ</span></span>
        </motion.a>

        <div className="nav-links desktop-nav">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="greeting"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Salom, men
              </motion.span>
              <motion.span 
                className="name"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Otabek <span className="accent">Ravshanov</span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Dasturiy Ta'minot Arxitektori | Poliglot Dasturchi | IT Loyihalar Boshqaruvchisi
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              18 yosh. Toshkent. Murakkab tizimlarni noldan yaratish, AI-ekotizimlar rivojlantirish va
              yuqori darajadagi raqamli yechimlar taqdim etish — mening kundalik faoliyatim.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a 
                href="#projects" 
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                {...glowPulse}
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket size={20} />
                </motion.div>
                Loyihalarni ko'rish
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Bog'lanish
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-stats"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {[
                { icon: <Star size={24} />, value: '5+', label: 'Yillik tajriba' },
                { icon: <Award size={24} />, value: '20+', label: 'Loyihalar' },
                { icon: <Users size={24} />, value: '10+', label: 'Mijozlar' },
                { icon: <Zap size={24} />, value: '15+', label: 'Texnologiyalar' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat"
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <small>{stat.label}</small>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotate: 2 }}
          >
            <motion.div 
              className="profile-window"
              whileHover={{ boxShadow: "0 0 60px rgba(212, 175, 55, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="window-header">
                <div className="window-dots">
                  <motion.span 
                    className="red"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.span 
                    className="yellow"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.span 
                    className="green"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
              </div>
              <div className="window-content">
                <motion.img 
                  src={photoMain} 
                  alt="Otabek Ravshanov" 
                  className="profile-photo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Men <span className="accent">Haqimda</span>
          </motion.h2>

          <motion.div className="about-grid" variants={staggerContainer}>
            <motion.div className="about-text" variants={fadeInUp}>
              <p>
                <strong>Otabek Ravshanov Avazbekovich</strong> — Toshkent shahrida faoliyat yurituvchi, 18 yoshli yuqori malakali dasturiy ta'minot arxitektori.
                22-fevralda tug'ilganman. Web va mobil ilovalarni noldan loyihalashtirish, murakkab tizimlarni yaratish va istalgan dasturlash tiliga tezkor moslasha olish qobiliyatiga ega.
                Yoshligimdan kompyuter texnologiyalari va dasturlashga qiziqib kelganman, bu qiziqish menga professional yo'lni tanlashimda asos bo'ldi.
              </p>
              <p>
                Mening dasturlashga bo'lgan sayohatim 2017-yilda Takvandoga borib, u yerda o'z bilimlarimni rivojlantirishni boshlaganimdan boshlangan.
                Bu yerda men o'z-o'zimni sinab ko'rish va mustaqil o'rganish ko'nikmalarini rivojlantirish imkoniyatiga ega bo'ldim.
                2018-yilda Qo'qon Innavations dasturlash kursida o'qishni boshlaganim bilan professional dasturchilik yo'liga qadam qo'ydim.
                Bu kurslarda zamonaviy dasturlash asoslarini chuqur o'rgandim va amaliy loyihalar ustida ishlash orqali tajriba orttirdim.
              </p>
              <p>
                Bugungi kunda men bir nechta muhim lavozimlarda ishlamoqda: Turon Beton MChJ da dasturiy ta'minotni ishlab chiqish bo'limi boshlig'i, 
                Ravshanov AI (RAI) asoschisi va bosh arxitektori, InteliSoft strategik a'zosi va bosh maslahatchi, 
                shuningdek Sinergiya hamkorlik loyihalarida hammuassis va texnik direktor sifatida faoliyat yuritaman.
              </p>
              <p>
                Mening professional diapazonim faqatgina kod yozish bilan cheklanmaydi — men yirik biznes-loyihalar ekotizimini yaratish, jamoalarni boshqarish
                va sun'iy intellekt texnologiyalarini reallikka tadbiq etish salohiyatiga egaman. Poliglot dasturchi sifatida har qandan murakkablikdagi loyihalarni
                bir nechta dasturlash tillarida amalga oshira olaman. React, Vue, Flutter, Python, JavaScript, TypeScript kabi texnologiyalarda chuqur tajribaga egaman.
              </p>
              <p>
                Qat'iy intizom, qorong'i va metall ranglar ustunlik qiluvchi <strong>"brutal"</strong> hamda yuqori texnologik estetika tarafdoriman.
                Asosiy ish jarayonlarini, jumladan kod yozish va arxitektura chizishni tungi vaqtlarda, chuqur konsentratsiya holatida amalga oshirishni afzal ko'raman.
                Bu yondashuv menga eng murakkab muammolarni ham hal qilish imkonini beradi. Tungi ish rejimi menga eng chuqur fikrlash va eng yaxshi yechimlarni topish imkonini beradi.
              </p>
              <p>
                Mening yondashuvim shunchaki vizual chiroyli dastur tuzish emas, balki <strong className="accent">"beast mode"</strong> darajasida qat'iy mantiq
                va mukammal texnik dizayn asosida ishlovchi xatosiz mexanizmlarni yaratishdir. Har bir loyiha — bu san'at asari kabi mukammal bo'lishi kerak.
                Doimiy o'z-o'zimni rivojlantirishga e'tibor beraman, yangi texnologiyalarni o'rganish va eng yaxshi amaliyotlarni qo'llash — mening asosiy tamoyilim.
                Har kuni yangi narsalarni o'rganaman, har loyihada o'zimni yaxshilashga harakat qilaman.
              </p>
              <p>
                Men kelajakda global miqyosdagi loyihalarda ishlash, o'z startaplarini yaratish va O'zbekiston IT sektorida inqilob qilishni maqsad qilganman.
                Sun'iy intellekt, blockchain va IoT kabi rivojlanayotgan texnologiyalarga katta e'tibor beraman.
                Jamoalar bilan ishlashni, bilimlarni baham ko'rishni va yosh dasturchilarga yo'l ko'rsatishni yaxshi ko'raman.
              </p>
            </motion.div>

            <motion.div className="about-cards" variants={staggerContainerSlow}>
              <motion.div 
                className="info-card" 
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin size={32} />
                </motion.div>
                <h3>Joylashuv</h3>
                <p>Toshkent shahri, O'zbekiston</p>
              </motion.div>

              <motion.div 
                className="info-card" 
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -8, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award size={32} />
                </motion.div>
                <h3>Lavozim</h3>
                <p>Dasturiy Ta'minot Arxitektori</p>
              </motion.div>

              <motion.div 
                className="info-card" 
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cpu size={32} />
                </motion.div>
                <h3>Tug'ilgan sana</h3>
                <p>22-fevral</p>
              </motion.div>

              <motion.div 
                className="info-card" 
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -8, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap size={32} />
                </motion.div>
                <h3>Ish Uslubi</h3>
                <p>Beast Mode & Night Owl</p>
              </motion.div>

              <motion.div 
                className="info-card" 
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Layers size={32} />
                </motion.div>
                <h3>Ta'lim</h3>
                <p>Qo'qon Innavations (2018)</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Mening <span className="accent">Xizmatlarim</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Sizning g'oyangizni raqamli reallikka aylantiraman
          </motion.p>

          <motion.div className="services-grid" variants={staggerContainerSlow}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={scaleIn}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03, 
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ '--accent-color': service.color }}
              >
                <motion.div 
                  className="service-icon"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                  whileHover={{ rotate: 15, scale: 1.2 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Asosiy <span className="accent">Loyihalar</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Murakkab muammolarni sodda va samarali yechimlar
          </motion.p>

          <motion.div className="projects-grid" variants={staggerContainerSlow}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={slideIn}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateZ: 1,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="project-header"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.span 
                    className="project-emoji"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    whileHover={{ scale: 1.3, rotate: 20 }}
                  >
                    {project.image}
                  </motion.span>
                  <motion.span 
                    className="project-status"
                    animate={{ 
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.status}
                  </motion.span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-tech"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.tech.map((t, i) => (
                    <motion.span 
                      key={i} 
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "var(--accent-gold)",
                        color: "var(--bg-primary)"
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a 
                  href={project.link} 
                  className="project-link"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Batafsil 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ExternalLink size={14} />
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Ish <span className="accent">Tajribasi</span>
          </motion.h2>

          <motion.div className="timeline" variants={staggerContainerSlow}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                variants={fadeInLeft}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="timeline-marker"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 rgba(212, 175, 55, 0)",
                      "0 0 20px rgba(212, 175, 55, 0.5)",
                      "0 0 0 rgba(212, 175, 55, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="timeline-header">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.span 
                      className="timeline-period"
                      animate={{ 
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <motion.p 
                    className="timeline-role"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.role}
                  </motion.p>
                  <motion.p 
                    className="timeline-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.div 
                    className="timeline-achievements"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.span 
                        key={i} 
                        className="achievement-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "var(--accent-gold)",
                          color: "var(--bg-primary)"
                        }}
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Foto <span className="accent">Galereya</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Professional va ijodiy lahzalar
          </motion.p>

          <motion.div className="gallery-grid" variants={staggerContainerSlow}>
            {[photoMain, photo1, photo2, photo3].map((photo, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0 30px 60px rgba(212, 175, 55, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.img 
                  src={photo} 
                  alt={`Otabek Ravshanov - Photo ${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="stack-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Texnologik <span className="accent">Stek</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Zamonaviy va ishonchli texnologiyalar
          </motion.p>

          <motion.div className="stack-grid" variants={staggerContainerSlow}>
            {Object.entries(techStack).map(([category, techs], catIndex) => (
              <motion.div
                key={category}
                className="stack-category"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 40px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="stack-category-header"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: catIndex * 0.5 }}
                  >
                    <Layers size={24} />
                  </motion.div>
                  <h3>{category}</h3>
                </motion.div>
                <motion.div className="stack-items">
                  {techs.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="stack-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ 
                        scale: 1.15,
                        rotateZ: 5,
                        backgroundColor: "var(--accent-gold)",
                        color: "var(--bg-primary)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div
          className="container"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Men bilan <span className="accent">Bog'laning</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Loyihangiz uchun professional yondashuv kerakmi? Keling, gaplashamiz!
          </motion.p>

          <motion.div className="contact-grid" variants={staggerContainerSlow}>
            <motion.div className="contact-info" variants={staggerContainer}>
              <motion.a 
                href="mailto:otabekxoff@gmail.com" 
                className="contact-item" 
                variants={fadeInLeft}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Mail size={28} />
                </motion.div>
                <div>
                  <h4>Email</h4>
                  <p>otabekxoff@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+998880016777" 
                className="contact-item" 
                variants={fadeInLeft}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone size={28} />
                </motion.div>
                <div>
                  <h4>Telefon</h4>
                  <p>+998 88 001 67 77</p>
                </div>
              </motion.a>

              <motion.div 
                className="contact-item" 
                variants={fadeInLeft}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin size={28} />
                </motion.div>
                <div>
                  <h4>Manzil</h4>
                  <p>Toshkent shahri, O'zbekiston</p>
                </div>
              </motion.div>

              <div className="social-links">
                <motion.a 
                  href="https://instagram.com/otbk.uz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://t.me/otabek_avazbekovich" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: -10,
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  title="Telegram"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://github.com/otabekxoff-creator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.form className="contact-form" variants={staggerContainerSlow}>
              <motion.input 
                type="text" 
                placeholder="Ismingiz" 
                required 
                variants={fadeInRight}
                whileFocus={{ scale: 1.02, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <motion.input 
                type="email" 
                placeholder="Email manzilingiz" 
                required 
                variants={fadeInRight}
                whileFocus={{ scale: 1.02, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <motion.input 
                type="text" 
                placeholder="Mavzu" 
                variants={fadeInRight}
                whileFocus={{ scale: 1.02, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <motion.textarea 
                placeholder="Xabaringiz..." 
                rows="6" 
                required 
                variants={fadeInRight}
                whileFocus={{ scale: 1.02, borderColor: "var(--accent-gold)" }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <motion.button 
                type="submit" 
                className="btn-primary"
                variants={bounceIn}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                {...glowPulse}
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket size={20} />
                </motion.div>
                Xabar yuborish
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Terminal size={24} />
              <span>OTBK<span className="accent">.UZ</span></span>
            </div>
            <p className="footer-text">
              © 2026 Otabek Ravshanov. Barcha huquqlar himoyalangan.
            </p>
            <p className="footer-tagline">
              "Beast Mode" da ishlab chiqilgan 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
