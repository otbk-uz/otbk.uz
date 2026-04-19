import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Smartphone, Globe, Brain, Server, Shield, Database, Cloud, Layers, Terminal, Cpu, Rocket, ChevronDown, Menu, X, Mail, Phone, MapPin, ExternalLink, Star, Award, Users, Zap, ArrowRight } from 'lucide-react'
import { SpeedInsights } from '@vercel/speed-insights/react'
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
      description: '5 gektar maydonni egallagan premium klassdagi agro-turizm kompleksi. Lyuks brending, zamonaviy oyna konstruksiyalari, quyosh energiyasi integratsiyasi va yuqori darajadagi peyzaj dizayni. Loyihaning to\'liq arxitekturasi va vizualizatsiyasini boshqarganman.',
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
      description: 'Dasturiy yechimlar bo\'yicha bosh maslahatchi va texnik tayanch sifatida murakkab biznes tizimlarini ishlab chiqdim. Mikroservis arxitektura, CI/CD pipeline va cloud deployment.',
      tech: ['Full-stack', 'Cloud', 'AI', 'Microservices', 'Kubernetes'],
      image: '💼',
      link: '#',
      status: 'Davom etmoqda'
    },
    {
      title: 'AI Agent Tizimlari',
      description: 'Mustaqil tahlil qila oladigan avtomatlashtirilgan tizimlar. Nafaqat xabarlarni qayta ishlaydi, balki mustaqil qaror qabul qiluvchi AI agentlar. Vector database va RAG arxitektura.',
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
      description: 'IoT qurilmalarini boshqarish uchun real-time dashboard. Sensor ma\'lumotlarini monitoring qilish, automation rules va energy analytics. WebSocket orqali real-time yangilanish.',
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
      company: 'Takvando sporti',
      role: 'Sportchi (to\'xtatilgan)',
      period: '2017 - 2018',
      description: 'Dasturlashga qiziqishim kuchaygani sababli takvando sportini to\'xtatdim. Bu davrda sport bilan shug\'ullanish menga intizom, jismoniy chidamlilik va maqsadga erishish uchun zarur bo\'lgan qat\'iyatni o\'rgatdi. Keyinchalik dasturlashga butunlay o\'tishga qaror qildim.',
      achievements: ['Jismoniy intizom', 'Maqsadga intilish', 'Sport tajribasi', 'Vaqt boshqaruvi']
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
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SASS/SCSS', 'Redux', 'Zustand', 'Framer Motion'],
    'Backend': ['Python', 'FastAPI', 'Django', 'Django REST', 'Node.js', 'Express', 'GraphQL', 'Flask', 'WebSocket'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase Firestore', 'MySQL', 'InfluxDB', 'Elasticsearch'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Render', 'Vercel', 'CI/CD', 'Nginx', 'Linux', 'GitHub Actions'],
    'AI/ML': ['Gemini API', 'LangChain', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'RAG', 'Vector DB', 'Computer Vision'],
    'Tools': ['Git', 'VS Code', 'Figma', 'Postman', 'JetBrains IDE', 'Docker Compose', 'Notion', 'Slack'],
    'Mobile': ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Bloc', 'Firebase', 'App Store Connect', 'Google Play Console'],
    'Testing': ['Jest', 'Pytest', 'Cypress', 'Playwright', 'Selenium', 'Unit Testing', 'E2E Testing'],
    'Other': ['WebRTC', 'MQTT', 'OAuth 2.0', 'JWT', 'REST API', 'WebSocket', 'Microservices', 'Clean Architecture']
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
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
          <div>
            <Terminal size={28} />
          </div>
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
                className="greeting electric-text"
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
                <span className="wire-gradient-text">Otabek</span> <span className="accent">Ravshanov</span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="subtitle electric-text"
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
              Full-stack arxitekt. 15+ dasturlash tilida ishlayman. Murakkab biznes tizimlari va
              korporativ ERP yechimlari bo'yicha ekspertman.
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
                              >
<Rocket size={20} />
                Loyihalarni ko'rish
              </motion.a>
              <a href="#contact" className="btn-secondary">
                <Mail size={20} />
                Bog'lanish
              </a>
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
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {stat.icon}
                  <span>{stat.value}</span>
                  <small>{stat.label}</small>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="profile-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="red" />
                  <span className="yellow" />
                  <span className="green" />
                </div>
              </div>
              <div className="window-content">
                <img 
                  src={photoMain} 
                  alt="Otabek Ravshanov" 
                  className="profile-photo"
                />
              </div>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
            Men <span className="accent">Haqimda</span>
          </motion.h2>

          <motion.div className="about-grid" variants={staggerContainer}>
            <motion.div className="about-text" variants={fadeInUp}>
              <p>
                <strong>Otabek Ravshanov Avazbekovich</strong> — Toshkent shahrida faoliyat yurituvchi, 18 yoshli yuqori malakali dasturiy ta'minot arxitektori.
                22-fevral kuni tug'ilganman. Web va mobil ilovalarni noldan loyihalashtirish, murakkab tizimlar yaratish va istalgan dasturlash tiliga tezkor moslashish qobiliyatiga egaman.
                Yoshligimdan kompyuter texnologiyalari va dasturlashga qiziqib kelganman. Bu qiziqish menga professional yo'lni tanlashimda asos bo'ldi.
              </p>
              <p>
                Dasturlashga bo'lgan sayohatim 2017-yilda boshlangan. Bir vaqtlar takvando sporti bilan shug'ullanganman, lekin keyinchalik uni to'xtatib, 
                dasturlashga qiziqishimga asosiy e'tibor qaratishga qaror qildim. 2018-yilda Qo'qon Innavations dasturlash kursida o'qishni boshlaganim bilan professional dasturchilik yo'liga qadam qo'ydim.
                Bu kurslarda zamonaviy dasturlash asoslarini chuqur o'rgandim: HTML, CSS, JavaScript dan boshlab, murakkab backend texnologiyalarigacha.
                Amaliy loyihalar ustida ishlash orqali tajriba to'pladim va real muammolarni yechish ko'nikmalarini rivojlantirdim.
              </p>
              <p>
                Bugungi kunda bir nechta muhim lavozimlarda ishlamoqda: Turon Beton MChJ da dasturiy ta'minotni ishlab chiqish bo'limi boshlig'i, 
                Ravshanov AI (RAI) asoschisi va bosh arxitektori, InteliSoft strategik a'zosi va bosh maslahatchi, 
                shuningdek Sinergiya hamkorlik loyihalarida hammuassis va texnik direktor sifatida faoliyat yuritaman.
                Ushbu lavozimlarda ERP tizimlari, AI-ekotizimlar, murakkab biznes tizimlari va platform arxitekturalarini loyihalash bilan shug'ullanaman.
              </p>
              <p>
                Professional faoliyatim faqatgina kod yozish bilan cheklanmaydi — yirik biznes-loyihalar ekotizimini yaratish, jamoalarni boshqarish
                va sun'iy intellekt texnologiyalarini reallikka tadbiq etish salohiyatiga egaman. Poliglot dasturchi sifatida har qanday murakkablikdagi loyihalarni
                bir nechta dasturlash tillarida amalga oshira olaman. React, Vue, Flutter, Python, JavaScript, TypeScript kabi texnologiyalarda chuqur tajribaga egaman.
                Frontenddan tortib backend, mobil ilovalar, AI/ML loyihalar va DevOps jarayonlarigacha bo'lgan to'liq stack ishlab chiqish qobiliyatiga egaman.
                Har bir loyihada eng yaxshi arxitektura patternlari, clean code tamoyillari va samarali algoritmlardan foydalanaman.
              </p>
              <p>
                Qat'iy intizom, qorong'i va metall ranglar ustunlik qiluvchi <strong>"brutal"</strong> hamda yuqori texnologik estetika tarafdoriman.
                Asosiy ish jarayonlarini, jumladan kod yozish va arxitektura chizishni tungi soatlarida, chuqur konsentratsiya holatida amalga oshirishni afzal ko'raman.
                Bu yondashuv menga eng murakkab muammolarni ham hal qilish imkonini beradi. Tungi ish rejimi chuqur fikrlash va eng yaxshi yechimlarni topish imkonini beradi.
              </p>
              <p>
                Yondashuvim shunchaki vizual chiroyli dastur tuzish emas, balki <strong className="accent">"beast mode"</strong> darajasida qat'iy mantiq
                va mukammal texnik dizayn asosida ishlaydigan xatosiz mexanizmlarni yaratishdir. Har bir loyiha san'at asari kabi mukammal bo'lishi kerak.
                Doimiy o'z-o'zimni rivojlantirishga e'tibor beraman. Yangi texnologiyalarni o'rganish va eng yaxshi amaliyotlarni qo'llash — mening asosiy tamoyilim.
                Har kuni yangi narsalar o'rganaman, har loyihada o'zimni takomillashtirishga harakat qilaman.
              </p>
              <p>
                Kelajakda global miqyosdagi loyihalarda ishlash, o'z startaplarini yaratish va O'zbekiston IT sektorida inqilob qilishni maqsad qilganman.
                Sun'iy intellekt, blockchain va IoT kabi rivojlanayotgan texnologiyalarga katta e'tibor beraman.
                Jamoalar bilan ishlashni, bilimlarni baham ko'rishni va yosh dasturchilarga yo'l ko'rsatishni yaxshi ko'raman.
              </p>
              <p>
                <strong>Asosiy erishilgan natijalarim:</strong> 5+ yillik professional tajriba, 20+ muvaffaqiyatli loyiha, 10+ doimiy mijoz 
                va 15+ o'zlashtirilgan texnologiya. ERP tizimlarini joriy etish, AI-ekotizimlarni yaratish va murakkab platformalar ishlab chiqish bo'yicha katta tajribaga egaman.
                Har bir loyiha yangi bilim va ko'nikmalar olib keladi, ularni keyingi loyihalarda qo'llayman.
              </p>
              <p>
                <strong>Shaxsiyat xususiyatlarim:</strong> chuqur o'ylash qobiliyati, muammolarni hal qilish mahorati, o'z-o'zini tashkil etish, 
                vazifalarni aniq bajarish, innovatsion yechimlar topish, yangi texnologiyalarga tezkor moslashish. 
                Har doim o'zimni takomillashtirishga intilaman va eng yuqori natijalarga erishishga harakat qilaman.
              </p>
            </motion.div>

            <div className="about-cards">
              <div className="info-card">
                <MapPin size={32} />
                <h3>Joylashuv</h3>
                <p>Toshkent shahri, O'zbekiston</p>
              </div>

              <div className="info-card">
                <Award size={32} />
                <h3>Lavozim</h3>
                <p>Dasturiy Ta'minot Arxitektori</p>
              </div>

              <div className="info-card">
                <Cpu size={32} />
                <h3>Tug'ilgan sana</h3>
                <p>22-fevral</p>
              </div>

              <div className="info-card">
                <Zap size={32} />
                <h3>Ish Uslubi</h3>
                <p>Beast Mode & Night Owl</p>
              </div>

              <div className="info-card">
                <Layers size={32} />
                <h3>Ta'lim</h3>
                <p>Qo'qon Innavations (2018)</p>
              </div>

              <div className="info-card">
                <Globe size={32} />
                <h3>Tillar</h3>
                <p>O'zbek, Rus, Ingliz, Koreys</p>
              </div>

              <div className="info-card">
                <Code2 size={32} />
                <h3>Tajriba</h3>
                <p>5+ yil professional</p>
              </div>

              <div className="info-card">
                <Rocket size={32} />
                <h3>Loyihalar</h3>
                <p>20+ tugallangan</p>
              </div>
            </div>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
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
                <div className="service-icon">
                  {service.icon}
                </div>
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
                    <li key={i}>
                      <span>
                        <ArrowRight size={14} />
                      </span>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
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
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateZ: 1,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="project-header">
                  <span className="project-emoji">
                    {project.image}
                  </span>
                  <span className="project-status">
                    {project.status}
                  </span>
                </div>
                <h3>
                  {project.title}
                </h3>
                <p>
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="tech-tag"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="project-link"
                >
                  Batafsil 
                  <span>
                    <ExternalLink size={14} />
                  </span>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
            Ish <span className="accent">Tajribasi</span>
          </motion.h2>

          <motion.div className="timeline" variants={staggerContainer}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                variants={fadeInLeft}
                whileHover={{ x: 10 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>
                      {exp.company}
                    </h3>
                    <span className="timeline-period">
                      {exp.period}
                    </span>
                  </div>
                  <p className="timeline-role">
                    {exp.role}
                  </p>
                  <p className="timeline-description">
                    {exp.description}
                  </p>
                  <div className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <span 
                        key={i} 
                        className="achievement-tag"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
            Foto <span className="accent">Galereya</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Professional va ijodiy lahzalar
          </motion.p>

          <motion.div className="gallery-grid" variants={staggerContainer}>
            {[photoMain, photo1, photo2, photo3].map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
              >
                <img 
                  src={photo} 
                  alt={`Otabek Ravshanov - Photo ${index + 1}`}
                />
              </div>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
            Texnologik <span className="accent">Stek</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Zamonaviy va ishonchli texnologiyalar
          </motion.p>

          <motion.div className="stack-grid" variants={staggerContainer}>
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
                <div className="stack-category-header">
                  <div>
                    <Layers size={24} />
                  </div>
                  <h3>{category}</h3>
                </div>
                <div className="stack-items">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="stack-item"
                    >
                      {tech}
                    </span>
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
          <motion.h2 variants={fadeInUp} className="section-title wire-gradient-text">
            Men bilan <span className="accent">Bog'laning</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Loyihangiz uchun professional yondashuv kerakmi? Keling, gaplashamiz!
          </motion.p>

          <div className="contact-grid">
            <div className="contact-info">
              <a 
                href="mailto:otabekxoff@gmail.com" 
                className="contact-item" 
              >
                <Mail size={28} />
                <div>
                  <h4>Email</h4>
                  <p>otabekxoff@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+998880016777" 
                className="contact-item" 
              >
                <Phone size={28} />
                <div>
                  <h4>Telefon</h4>
                  <p>+998 88 001 67 77</p>
                </div>
              </a>

              <div className="contact-item">
                <MapPin size={28} />
                <div>
                  <h4>Manzil</h4>
                  <p>Toshkent shahri, O'zbekiston</p>
                  <small>Ish vaqti: 24/7 (Tungi rejim afzal)</small>
                </div>
              </div>

              <div className="social-links">
                <a 
                  href="https://instagram.com/otbk.uz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://t.me/otabek_avazbekovich" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Telegram"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/otabekxoff-creator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Ismingiz" required />
              <input type="email" placeholder="Email manzilingiz" required />
              <input type="text" placeholder="Mavzu" />
              <textarea placeholder="Xabaringiz..." rows="6" required />
              <button 
                type="submit" 
                className="btn-primary"
              >
                <Rocket size={20} />
                Xabar yuborish
              </button>
            </form>
          </div>
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
      <SpeedInsights />
    </div>
  )
}

export default App
