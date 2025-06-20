import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import "./App.css";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-summary" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown className="faq-icon" />
      </div>
      <div
        className="faq-answer-wrapper"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        'You can enroll by clicking on the "Enroll Now" button in the Core Brand section or contact us directly through the form.',
    },
    {
      question: "Do you offer scholarships?",
      answer:
        "Yes, 8ConLift provides scholarship programs for deserving students. Contact us for eligibility requirements.",
    },
    {
      question: "What is the duration of the Forex course?",
      answer:
        "The Forex Derivative Trading Level II course typically runs for 12–16 weeks with both theoretical and practical training components.",
    },
    {
      question: "Are there any prerequisites for enrollment?",
      answer:
        "Basic computer literacy and a high school diploma are required. No prior trading experience is necessary as we start from fundamentals.",
    },
    {
      question: "What support is available after graduation?",
      answer:
        "We offer lifetime access to our alumni network, job placement assistance through our Enrollment to Employment program, and ongoing mentorship opportunities.",
    },
  ];

  return (
    <div className="app-container">
      <main className="main-content">
        {/* Header */}
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="header-container">
            {/* Logo */}
            <a href="#home" className="logo">
              <img
                src="/assets/logo/8con Academy Logo.png"
                alt="8Con Academy Logo"
                className="logo-img"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <a href="#home" className="nav-link">
                Home
              </a>

              <div className="dropdown">
                <a href="#core-brands" className="nav-link">
                  Brands ▾
                </a>
                <div className="dropdown-content">
                  <a href="#core-brand">Core Brands</a>
                  <a href="#sub-brands">Sub-brands</a>
                </div>
              </div>

              <a href="#news" className="nav-link">
                Newsletters
              </a>

              <div className="dropdown">
                <a href="#careers" className="nav-link">
                  Careers ▾
                </a>
                <div className="dropdown-content">
                  <a href="#internship">Internship</a>
                  <a href="#careerpaths">Career Paths</a>
                </div>
              </div>

              <a href="#about" className="nav-link">
                About Us
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="mobile-nav">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>

              {/* Brands Dropdown */}
              <a
                href="#core-brand"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Core Brands
              </a>
              <a
                href="#sub-brands"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sub-brands
              </a>

              <a
                href="#news"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Newsletters
              </a>

              {/* Careers Dropdown */}
              <a
                href="#internship"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Internship
              </a>
              <a
                href="#careerpaths"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career Paths
              </a>

              <a
                href="#about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-image-container">
              <img
                src="/assets/logo/8conwhite.png"
                alt="8Con Academy Logo"
                className="hero-image"
              />
            </div>

            <div className="hero-content">
              <h1 className="hero-title">
                Empowering Every Filipino Household with a Skilled and
                Profitable Forex Trader
              </h1>

              <div className="hero-buttons">
                <a href="#core-brand" className="btn-primary">
                  Learn Forex Today
                </a>
                <a href="#contact" className="btn-secondary">
                  Connect With Us
                </a>
              </div>

              {/* 🟩 Move the card container here */}
              <div class="card-container">
                <a href="#about" class="card-link">
                  <div class="card">
                    <div class="first-content">
                      <img src="/assets/images/image.png" alt="Photo" />
                    </div>
                    <div class="second-content">
                      <img src="/assets/images/image.png" alt="Photo" />
                      <span class="overlay-text">8Con Academy</span>
                    </div>
                  </div>
                </a>

                <a href="#sub-brands" class="card-link">
                  <div class="card">
                    <div class="first-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                    </div>
                    <div class="second-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                      <span class="overlay-text">Sub-brands</span>
                    </div>
                  </div>
                </a>

                <a href="#news" class="card-link">
                  <div class="card">
                    <div class="first-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                    </div>
                    <div class="second-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                      <span class="overlay-text">Testimonials</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="core-brand" className="section section-gray">
          <div className="section-container-narrow">
            <h2 className="section-title">
              Core Brand: Forex Derivative Trading Level II
            </h2>
            <p className="core-brand-description">
              An advanced course designed to equip students with comprehensive
              knowledge and hands-on skills in Forex trading to become
              profitable traders.
            </p>
            <ul className="core-brand-list">
              <li>
                In-depth curriculum covering market analysis, strategies, and
                risk management.
              </li>
              <li>Hands-on training with real-time market simulations.</li>
              <li>Access to proprietary Forex tools and trading platforms.</li>
              <li>
                Enrollment to Employment program ensuring job placement
                assistance.
              </li>
            </ul>
            <div className="enroll-button-container">
              <a href="#careers" className="btn-primary">
                Enroll Now
              </a>
            </div>
            <h3 className="success-stories-title">Success Stories</h3>
            <div className="grid-auto-fit">
              <div className="testimonial-card">
                <p>
                  "Thanks to 8Con Academy, I went from a beginner to a confident
                  trader with consistent profits!"
                </p>
                <p className="testimonial-author">- Maria, Graduate</p>
              </div>
              <div className="testimonial-card">
                <p>
                  "The Enrollment to Employment program helped me get hired
                  immediately after the course."
                </p>
                <p className="testimonial-author">- Juan, Alumni</p>
              </div>
            </div>
          </div>
        </section>

        <section id="core-brand" className="section section-gray">
          <div className="card-container">
            <div className="card">
              <h3>Marketing</h3>
              <p>Handles promotion, branding, and customer engagement.</p>
              <button className="card-button">Apply Now</button>
            </div>
            <div className="card">
              <h3>IT</h3>
              <p>Manages technical infrastructure, software, and support.</p>
              <button className="card-button">Apply Now</button>
            </div>
            <div className="card">
              <h3>Accounting</h3>
              <p>Keeps track of financial records, budgeting, and reporting.</p>
              <button className="card-button">Apply Now</button>
            </div>
          </div>
        </section>

        <section id="careerpaths" className="section section-gray"></section>

        {/* About Us */}
        <section id="about" className="section section-white">
          <div className="section-container-narrow">
            <h2 className="section-title">About Us</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="bg">
                  <h3 className="card-title">Mission</h3>
                  <p>
                    Empower Filipinos with skills to thrive in Forex trading and
                    improve financial literacy.
                  </p>
                </div>
                <div className="blob"></div>
              </div>
              <div className="about-card">
                <div className="bg">
                  <h3 className="card-title">Vision</h3>
                  <p>
                    To create a profitable and financially empowered trader in
                    every Filipino family. Through accessible education,
                    practical tools, and community engagement, we are committed
                    to fostering a culture of financial literacy and
                    independence in the Philippines.
                  </p>
                </div>
                <div className="blob"></div>
              </div>
              <div className="about-card">
                <div className="bg">
                  <h3 className="card-title">Core Values</h3>
                  <p>
                    Integrity, Growth, Innovation, and Community Empowerment.
                  </p>
                </div>
                <div className="blob"></div>
              </div>
            </div>

            <div className="problem-solution-card">
              <h3 className="section-subtitle">Problem & Solution</h3>
              <p style={{ marginBottom: "16px" }}>
                Challenges like poverty and financial illiteracy affect many
                Filipino households. 8Con Academy addresses these by providing
                accessible education in Forex trading and practical skills for
                economic upliftment.
              </p>
              <div className="infographic-placeholder">
                <span>Problem & Solution Infographic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Brand */}

        {/* Sub-Brands */}
        <section id="sub-brands" className="section section-white">
          <div className="section-container">
            <h2 className="section-title">Sub-Brands</h2>
            <div className="grid-auto-fit">
              {[
                {
                  name: "8ConStruct",
                  desc: "Research and statistical consultancy to empower decision-making.",
                },
                {
                  name: "8ConQuest",
                  desc: "Thesis and career coaching for students and professionals.",
                },
                {
                  name: "8ConVerse",
                  desc: "Language certification courses to broaden opportunities.",
                },
                {
                  name: "8ConLift",
                  desc: "Scholarship and training programs for deserving students.",
                },
                {
                  name: "8ConNect",
                  desc: "Entrepreneur networking hub to grow business relationships.",
                },
                {
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
                {
                  name: "8ConCise",
                  desc: "",
                },
                {
                  name: "8ConPact",
                  desc: "",
                },
              ].map((brand, index) => (
                <div
                  key={index}
                  className="card-white"
                  style={{ textAlign: "center" }}
                >
                  <h3 className="card-title">{brand.name}</h3>
                  <p style={{ marginBottom: "16px" }}>{brand.desc}</p>
                  <a href="#contact" className="card-link">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2 className="section-title">Contact Us</h2>

            {/* Top Section: Form + Map/Contact */}
            <div className="contact-top">
              {/* Contact Form (Left) */}
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>

              {/* Right Side: Map + Contact Details */}
              <div className="contact-right">
                <div className="map-section">
                  <p style={{ textAlign: "center", marginBottom: "16px" }}>
                    <strong>Office Location:</strong>
                  </p>
                  <div className="map-placeholder">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6237544762503!2d120.95867997495196!3d14.733851385768508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b386f399c96b%3A0x485afd33f61c132c!2s8Con%20Academy%20-%20Forex%20Trading%20%26%20Financial%20Literacy%20School!5e0!3m2!1sen!2sus!4v1749812539703!5m2!1sen!2sus"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="8Con Academy Google Map"
                    ></iframe>
                  </div>
                </div>

                <div className="contact-info-card">
                  <p>
                    <strong>Phone:</strong> +63 912 345 6789
                  </p>
                  <p>
                    <strong>Email:</strong> contact@8conacademy.ph
                  </p>
                  <p>
                    <strong>Office Hours:</strong> Mon-Fri 11:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section: FAQ */}
            <section className="faq-section">
              <h3 className="faq-title">Frequently Asked Questions</h3>
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h4 className="footer-title">Partnership</h4>
              <ul className="footer-list">
                <div className="footer-logo">
                  <img
                    src="/assets/logo/tickmill.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                  <img
                    src="/assets/logo/dupoin.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                </div>
              </ul>
            </div>

            {/* Quick Links */}
            <div classname="footer-container">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brands" className="footer-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="#internship" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-link">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div classname="footer-container">
              <h4 className="footer-title">Programs</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="footer-link">
                    Core brands
                  </a>
                </li>
                <li>
                  <a href="#sub-brands" className="footer-link">
                    Sub-brands
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div classname="footer-container">
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact-info">
                <p>
                  <Phone
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  +63 954 196 8322
                </p>
                <p>
                  <Mail
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  8ConAcademy@gmail.com
                </p>
                <p style={{ marginBottom: "16px" }}>
                  <Clock
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  Mon–Fri 11:00 AM – 8:00 PM
                </p>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/8ConAcademy"
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/8conacademy/"
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://ph.linkedin.com/company/8con-academy"
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} style={{ marginRight: "8px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>
                &copy; 2025 <strong>8Con Academy</strong>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
