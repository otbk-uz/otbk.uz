import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Globe,
  Brain,
  Server,
  Shield,
  Database,
  Cloud,
  Layers,
  Terminal,
  Cpu,
  Rocket,
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Award,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'experience', 'stack', 'contact']
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
      title: 'Yoshlar Front Ofisi',
      description: 'Maxsus bot va mobil ilovalar ekotizimi. Web platforma (front-ofis.uz) Render kabi bulutli platformalarda to\'liq domen va server sozlamalari bilan ishga tushirilgan. Real-time analytics va user management tizimi.',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Telegram Bot API', 'Render'],
      image: '🏢',
      link: 'https://front-ofis.uz',
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
    {
      company: 'Sardor & Media',
      role: 'Matbuot va media yo\'nalishi yetakchisi',
      period: 'Dekabr 2025',
      description: '"Sardor" darajasiga ko\'tarilgan, Matbuot va media yo\'nalishi bo\'yicha yetakchi sifatida faoliyat. Media strategiya, brend rivojlanishi va jamoatchilik aloqalarini boshqarish.',
      achievements: ['Media strategiya', 'Brend rivojlanishi', 'Jamoatchilik aloqalari', 'Sardor darajasi']
    },
  ]

  const techStack = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Flutter', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Python', 'FastAPI', 'Django', 'Node.js', 'Express', 'GraphQL'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Render', 'CI/CD'],
    'AI/ML': ['Gemini API', 'LangChain', 'TensorFlow', 'PyTorch', 'OpenAI'],
    'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'Linux', 'Nginx'],
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
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
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Terminal size={28} />
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
            <motion.div
              className="status-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="pulse-dot" />
              Loyihalar uchun ochiq
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="greeting">Salom, men</span>
              <span className="name">Otabek <span className="accent">Ravshanov</span></span>
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Dasturiy Ta'minot Arxitektori | Poliglot Dasturchi | IT Loyihalar Boshqaruvchisi
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
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
              <a href="#projects" className="btn-primary">
                <Rocket size={20} />
                Loyihalarni ko'rish
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={20} />
                Bog'lanish
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="stat">
                <Star size={24} />
                <span>5+</span>
                <small>Yillik tajriba</small>
              </div>
              <div className="stat">
                <Award size={24} />
                <span>20+</span>
                <small>Loyihalar</small>
              </div>
              <div className="stat">
                <Users size={24} />
                <span>10+</span>
                <small>Mijozlar</small>
              </div>
              <div className="stat">
                <Zap size={24} />
                <span>15+</span>
                <small>Texnologiyalar</small>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="red" />
                  <span className="yellow" />
                  <span className="green" />
                </div>
                <span className="window-title">developer.py</span>
              </div>
              <pre className="code-content">
                <code>
                  {`class OtabekRavshanov:
    def __init__(self):
        self.age = 18
        self.location = "Toshkent"
        self.role = "Software Architect"
        self.status = "Available"
    
    def skills(self):
        return {
            "languages": ["Python", "Dart", "JS"],
            "focus": ["AI", "Web", "Mobile"],
            "mindset": "Beast Mode"
        }
    
    def build_future(self):
        while True:
            self.learn()
            self.create()
            self.innovate()
            # Hech qachon to'xtama`}
                </code>
              </pre>
            </div>
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
                Web va mobil ilovalarni noldan loyihalashtirish, murakkab tizimlarni yaratish va istalgan dasturlash tiliga tezkor moslasha olish qobiliyatiga ega.
              </p>
              <p>
                Mening professional diapazonim faqatgina kod yozish bilan cheklanmaydi — men yirik biznes-loyihalar ekotizimini yaratish, jamoalarni boshqarish
                va sun'iy intellekt texnologiyalarini reallikka tadbiq etish salohiyatiga egaman. Poliglot dasturchi sifatida har qandan murakkablikdagi loyihalarni
                bir nechta dasturlash tillarida amalga oshira olaman.
              </p>
              <p>
                Qat'iy intizom, qorong'i va metall ranglar ustunlik qiluvchi <strong>"brutal"</strong> hamda yuqori texnologik estetika tarafdoriman.
                Asosiy ish jarayonlarini, jumladan kod yozish va arxitektura chizishni tungi vaqtlarda, chuqur konsentratsiya holatida amalga oshirishni afzal ko'raman.
              </p>
              <p>
                Mening yondashuvim shunchaki vizual chiroyli dastur tuzish emas, balki <strong className="accent">"beast mode"</strong> darajasida qat'iy mantiq
                va mukammal texnik dizayn asosida ishlovchi xatosiz mexanizmlarni yaratishdir. Har bir loyiha — bu san'at asari kabi mukammal bo'lishi kerak.
              </p>
            </motion.div>

            <motion.div className="about-cards" variants={staggerContainer}>
              <motion.div className="info-card" variants={fadeInUp}>
                <MapPin size={32} />
                <h3>Joylashuv</h3>
                <p>Toshkent shahri, O'zbekiston</p>
              </motion.div>

              <motion.div className="info-card" variants={fadeInUp}>
                <Award size={32} />
                <h3>Lavozim</h3>
                <p>Dasturiy Ta'minot Arxitektori</p>
              </motion.div>

              <motion.div className="info-card" variants={fadeInUp}>
                <Cpu size={32} />
                <h3>Yosh</h3>
                <p>18 yosh</p>
              </motion.div>

              <motion.div className="info-card" variants={fadeInUp}>
                <Zap size={32} />
                <h3>Ish Uslubi</h3>
                <p>Beast Mode & Night Owl</p>
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

          <motion.div className="services-grid" variants={staggerContainer}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': service.color }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <ArrowRight size={14} />
                      {feature}
                    </li>
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

          <motion.div className="projects-grid" variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <span className="project-emoji">{project.image}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Batafsil <ExternalLink size={14} />
                </a>
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

          <motion.div className="timeline" variants={staggerContainer}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                variants={fadeInUp}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.company}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-role">{exp.role}</p>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                </div>
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

          <motion.div className="stack-grid" variants={staggerContainer}>
            {Object.entries(techStack).map(([category, techs]) => (
              <motion.div
                key={category}
                className="stack-category"
                variants={fadeInUp}
              >
                <div className="stack-category-header">
                  <Layers size={24} />
                  <h3>{category}</h3>
                </div>
                <div className="stack-items">
                  {techs.map((tech) => (
                    <motion.span
                      key={tech}
                      className="stack-item"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
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

          <motion.div className="contact-grid" variants={staggerContainer}>
            <motion.div className="contact-info" variants={staggerContainer}>
              <motion.a href="mailto:contact@otbk.uz" className="contact-item" variants={fadeInUp}>
                <Mail size={28} />
                <div>
                  <h4>Email</h4>
                  <p>contact@otbk.uz</p>
                </div>
              </motion.a>

              <motion.a href="tel:+998901234567" className="contact-item" variants={fadeInUp}>
                <Phone size={28} />
                <div>
                  <h4>Telefon</h4>
                  <p>+998 90 123 45 67</p>
                </div>
              </motion.a>

              <motion.div className="contact-item" variants={fadeInUp}>
                <MapPin size={28} />
                <div>
                  <h4>Manzil</h4>
                  <p>Toshkent shahri, O'zbekiston</p>
                </div>
              </motion.div>

              <div className="social-links">
                <motion.a href="https://github.com/otbkuz" target="_blank" rel="noopener noreferrer" variants={fadeInUp}>
                  <Github size={24} />
                </motion.a>
                <motion.a href="https://linkedin.com/in/otbkuz" target="_blank" rel="noopener noreferrer" variants={fadeInUp}>
                  <Linkedin size={24} />
                </motion.a>
                <motion.a href="mailto:contact@otbk.uz" variants={fadeInUp}>
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>

            <motion.form className="contact-form" variants={staggerContainer}>
              <input type="text" placeholder="Ismingiz" required />
              <input type="email" placeholder="Email manzilingiz" required />
              <input type="text" placeholder="Mavzu" />
              <textarea placeholder="Xabaringiz..." rows="6" required />
              <button type="submit" className="btn-primary">
                <Rocket size={20} />
                Xabar yuborish
              </button>
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
