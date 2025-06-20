import React, { useState, useEffect } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Clock,
  Goal,
  Eye,
  Atom,
  HeartHandshake,
  ChevronDown,
  Menu,
  X,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  //Modal
  const [showModal, setShowModal] = useState();
  const [selectedPosition, setSelectedPosition] = useState("");

  // Form state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+63");
  const testimonials = [
    {
      image: "/assets/images/image.png",
      text: "Thanks to 8Con Academy, I went from a beginner to a confident trader with consistent profits!",
      author: "Maria, Graduate",
    },
    {
      image: "/assets/images/image.png",
      text: "The Enrollment to Employment program helped me get hired immediately after the course.",
      author: "Juan, Alumni",
    },
    {
      image: "/assets/images/image.png",
      text: "The comprehensive curriculum and hands-on training gave me the confidence to start my own trading business.",
      author: "Sarah, Entrepreneur",
    },
    {
      image: "/assets/images/image.png",
      text: "8Con Academy's mentorship program helped me develop not just trading skills but also financial discipline.",
      author: "Miguel, Professional Trader",
    },
    {
      image: "/assets/images/image.png",
      text: "The real-time market simulations prepared me for actual trading scenarios. Highly recommended!",
      author: "Ana, Day Trader",
    },
    {
      image: "/assets/images/image.png",
      text: "From zero knowledge to profitable trades in just 16 weeks. The instructors are world-className!",
      author: "Carlos, New Graduate",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // updates as soon as scroll starts
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto slide every 5 sec
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

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
    // 🆕 Additional FAQs:
    {
      question: "Can I take courses online?",
      answer:
        "Yes! Many of our programs are offered in hybrid or fully online formats to accommodate remote learners.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, GCash, credit/debit cards, and payment plans depending on the course.",
    },
    {
      question: "Is there a certificate after completing a course?",
      answer:
        "Yes, all participants receive an official certificate upon successful completion of their course.",
    },
    {
      question: "Can I schedule a consultation before enrolling?",
      answer:
        "Absolutely. We encourage prospective students to schedule a free consultation to better understand which course suits them.",
    },
    {
      question: "Do you offer group or corporate training?",
      answer:
        "Yes, we provide tailored training solutions for teams, schools, and corporate partners. Contact us for a custom quote.",
    },
  ];

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // First, let's debug your handleApplyClick function:
  const handleApplyClick = (position) => {
    console.log("napindot");
    console.log("Position:", position); // Add this to see what position is being passed
    setSelectedPosition(position);
    setShowModal(true);

    // Add these to debug the state changes
    console.log("showModal set to:", true);
    console.log("selectedPosition set to:", position);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form when closing
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setPhoneNumber("+63");
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted for position:", selectedPosition);
    // You can add your form submission logic here
    handleCloseModal();
  };
  // End of Modal

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
                <a href="#ca1reers" className="nav-link">
                  Careers ▾
                </a>
                <div className="dropdown-content">
                  <a href="#internship">Internship</a>
                  <a href="#careerpath">Career Paths</a>
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
              <div className="card-container">
                <a href="#about" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="/assets/images/image.png" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="/assets/images/image.png" alt="Photo" />
                      <span className="overlay-text">8Con Academy</span>
                    </div>
                  </div>
                </a>

                <a href="#sub-brands" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                      <span className="overlay-text">Sub-brands</span>
                    </div>
                  </div>
                </a>

                <a href="#core-testimonials" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                      <span className="overlay-text">Testimonials</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="core-brand" className="section section-c">
          <div className="section-container-narrow">
            <h2 className="section-title">
              Core Brand: Forex Derivative Trading Level II
            </h2>
            <p className="core-brand-description">
              An advanced course designed to equip students with comprehensive
              knowledge and hands-on skills in Forex trading to become
              profitable traders.
            </p>

            {/* ✅ Card container for the list and button */}
            <div className="core-brand-card">
              <ul className="core-brand-list">
                <li>
                  In-depth curriculum covering market analysis, strategies, and
                  risk management.
                </li>
                <li>Hands-on training with real-time market simulations.</li>
                <li>
                  Access to proprietary Forex tools and trading platforms.
                </li>
                <li>
                  Enrollment to Employment program ensuring job placement
                  assistance.
                </li>
              </ul>
              <div className="enroll-button-container">
                <a href="#careers" className="btn-enroll">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Testimonials Section */}
        <section id="core-testimonials" className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="testimonials-title">Success Stories</h2>
              <p className="testimonials-subtitle">
                Real transformations from our trading academy
              </p>
            </div>

            <div className="testimonials-carousel-wrapper">
              <div
                className="testimonials-carousel"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <button
                  className="carousel-button carousel-button-prev"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="testimonials-track">
                  <div
                    className="testimonials-slider"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="testimonial-slide">
                        <div className="testimonial-card">
                          <div className="testimonial-content">
                            <div className="quote-icon">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M3 21C3 17.9 4.9 15.2 8 14L9 16C7.9 16.5 7 17.4 7 19C7 20.1 7.9 21 9 21S11 20.1 11 19C11 18.4 10.8 17.8 10.4 17.3L9 14C12.1 15.2 14 17.9 14 21H3ZM16 21C16 17.9 17.9 15.2 21 14L22 16C20.9 16.5 20 17.4 20 19C20 20.1 20.9 21 22 21S24 20.1 24 19C24 18.4 23.8 17.8 23.4 17.3L22 14C25.1 15.2 27 17.9 27 21H16Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <p className="testimonial-text">
                              "{testimonial.text}"
                            </p>
                            <div className="testimonial-footer">
                              <div className="testimonial-avatar">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.author}
                                  onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${
                                      testimonial.author.split(",")[0]
                                    }&background=10b981&color=fff&size=64`;
                                  }}
                                />
                              </div>
                              <div className="testimonial-info">
                                <span className="testimonial-author">
                                  {testimonial.author}
                                </span>
                                <div className="testimonial-rating">
                                  {[...Array(5)].map((_, i) => (
                                    <svg
                                      key={i}
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="carousel-button carousel-button-next"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Brand */}

        {/* Sub-Brands */}
        <section id="sub-brands" className="sub-brands-section">
          <div className="section-container-sub">
            <h2 className="section-title">Sub-Brands</h2>
            <div className="brands-grid">
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
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
                {
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
              ].map((brand, index) => (
                <div key={index} className="card-sub" style={{ "--i": index }}>
                  <div
                    className="bg bg-hover"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  >
                    <div className="overlay"></div>
                    <div className="brand-info">
                      <h3 className="brand-title">{brand.name}</h3>
                      <p className="brand-desc">{brand.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className="section section-internship">
          <div className="internship-title">
            <h1>INTERNSHIP</h1>
            <p>Join our team and kickstart your career</p>
          </div>

          <div className="intcards-container">
            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">MARKETING</h3>
                <p className="intcard-description">
                  Dive into the world of digital marketing, social media
                  campaigns, and brand strategy. Learn to create compelling
                  content, analyze market trends, and develop innovative
                  marketing solutions that drive business growth.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("Marketing")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">IT</h3>
                <p className="intcard-description">
                  Explore cutting-edge technology, software development, and
                  system administration. Gain hands-on experience with
                  programming languages, database management, and cybersecurity
                  while working on real-world projects.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("IT")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">ACCOUNTING</h3>
                <p className="intcard-description">
                  Master financial analysis, bookkeeping, and tax preparation.
                  Learn industry-standard accounting software, financial
                  reporting, and budgeting while supporting our finance team
                  with day-to-day operations.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("Accounting")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {/* Application Modal */}
        {showModal && (
          <div className="modal-backdrop" id="applicationModal">
            <div className="modal-dialog">
              <h2>Apply for {selectedPosition} Team</h2>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                &times;
              </button>
              <div className="modal-body">
                <div className="application-form-wrapper">
                  <div className="application-form">
                    {/* First Name */}
                    <div className="form-field">
                      <label className="field-label">First Name</label>
                      <input
                        className="form-input"
                        placeholder="Your first name.."
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) =>
                          setFirstName(capitalizeFirstLetter(e.target.value))
                        }
                        required
                      />
                    </div>

                    {/* Middle Name */}
                    <div className="form-field">
                      <label className="field-label">Middle Name</label>
                      <input
                        className="form-input"
                        placeholder="Your middle name.."
                        type="text"
                        name="middleName"
                        value={middleName}
                        onChange={(e) =>
                          setMiddleName(capitalizeFirstLetter(e.target.value))
                        }
                      />
                    </div>

                    {/* Last Name */}
                    <div className="form-field">
                      <label className="field-label">Last Name</label>
                      <input
                        className="form-input"
                        placeholder="Your last name.."
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) =>
                          setLastName(capitalizeFirstLetter(e.target.value))
                        }
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-field">
                      <label className="field-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Your email.."
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="form-field">
                      <label className="field-label">Address</label>
                      <input
                        className="form-input"
                        type="text"
                        name="address"
                        placeholder="Your address.."
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="form-field">
                      <label className="field-label" htmlFor="phoneNumber">
                        Phone number (+63XXXXXXXXXX):
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                          const input = e.target.value;
                          if (input.startsWith("+63")) {
                            const digitsOnly = input
                              .slice(3)
                              .replace(/\D/g, "");
                            if (digitsOnly.length <= 10) {
                              setPhoneNumber(`+63${digitsOnly}`);
                            }
                          } else if (input === "") {
                            setPhoneNumber("");
                          }
                        }}
                        placeholder="+639XXXXXXXXX"
                        title="Enter a valid Philippine phone number (e.g. +639123456789). Only 10 digits after +63."
                        required
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="form-field">
                      <label className="field-label" htmlFor="resumeFile">
                        Resume (PDF only, max 10MB):
                      </label>
                      <input
                        className="file-input"
                        id="resumeFile"
                        name="resumeFile"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const isPDF = file.type === "application/pdf";
                            const isTooLarge = file.size > 10 * 1024 * 1024;
                            if (!isPDF) {
                              alert("Only PDF files are allowed.");
                              e.target.value = null;
                            } else if (isTooLarge) {
                              alert("File must be less than 10MB.");
                              e.target.value = null;
                            }
                          }
                        }}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      className="application-submit-btn"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="careerpath" className="section section-careerpath">
          <div className="careerpath-title">
            <h1>CAREER PATH</h1>
            <p>Join our team and kickstart your career</p>
          </div>

          <div className="intcards-container">
            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">FUNDED TRADER</h3>
                <p className="intcard-description">
                  Become a professionally funded trader by mastering advanced
                  strategies, risk management, and trading psychology. Unlock
                  the opportunity to trade real capital and grow your portfolio.
                </p>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">WORKSHOP SPEAKER</h3>
                <p className="intcard-description">
                  Share your expertise with aspiring traders through interactive
                  sessions. Inspire and educate by delivering impactful
                  workshops on forex, finance, and personal development.
                </p>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">FOREX COACH</h3>
                <p className="intcard-description">
                  Guide new learners through their trading journey. Provide
                  mentorship, personalized feedback, and help them develop
                  consistent strategies for long-term success in the forex
                  market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="about-csr-section">
          <div className="about-csr-container">
            {/* Header Section */}
            <div className="about-header">
              <h2 className="about-main-title">About Us</h2>
            </div>

            {/* Mission, Vision, Values Cards */}
            <div className="mvv-grid">
              <div className="mvv-card mission-card">
                <div className="mvv-icon">
                  <Goal color="white" size={70} />
                </div>
                <h3 className="mvv-title">Mission</h3>
                <p className="mvv-content">
                  Empower Filipinos with skills to thrive in Forex trading and
                  improve financial literacy.
                </p>
                <div className="mvv-accent"></div>
              </div>

              <div className="mvv-card vision-card">
                <div className="mvv-icon">
                  <Eye color="white" size={70} />
                </div>
                <h3 className="mvv-title">Vision</h3>
                <p className="mvv-content">
                  To create a profitable and financially empowered trader in
                  every Filipino family. Through accessible education, practical
                  tools, and community engagement, we are committed to fostering
                  a culture of financial literacy and independence in the
                  Philippines.
                </p>
                <div className="mvv-accent"></div>
              </div>

              <div className="mvv-card values-card">
                <div className="mvv-icon">
                  <Atom color="white" size={70} />
                </div>
                <h3 className="mvv-title">Core Values</h3>
                <p className="mvv-content">
                  Integrity, Growth, Innovation, Community, Empowerment
                </p>
                <div className="mvv-accent"></div>
              </div>

              <div className="mvv-card values-card">
                <div className="mvv-icon">
                  <HeartHandshake color="white" size={70} />
                </div>
                <h3 className="mvv-title">
                  Corporate Social Responsibility Initiatives
                </h3>
                <p className="mvv-content">
                  <ul className="ulCSR">
                    <li>
                      <strong>Education Access</strong> <br />
                      Scholarship programs for underprivileged students to
                      access quality Forex education.
                    </li>
                    <br />
                    <li>
                      <strong>Community Partnership </strong> <br />{" "}
                      Collaborating with LGUs and SMEs to support local
                      communities
                    </li>
                  </ul>
                </p>
                <div className="mvv-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2 className="section-title">Contact Us</h2>

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

              {/* Right Side: Map + Contact Info */}
              <div className="contact-right">
                <div className="map-section">
                  <p style={{ textAlign: "center", marginBottom: "16px" }}>
                    <strong>Office Location:</strong>
                  </p>
                  <div className="map-placeholder">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=..."
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
                    <strong>Office Hours:</strong> Mon–Fri 11:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section – Now Separate */}
        <section id="faq" className="faq-section">
          <div className="contact-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Partnership */}
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
            <div className="footer-container">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="footer-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="" className="footer-link">
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
