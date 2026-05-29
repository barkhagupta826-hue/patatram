import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageWrapper, Section, SectionHeader, Container } from '../components/ui/Section'
import ValuesSection from '../components/homec/ValuesSection'
import VisionMission from "../components/homec/VisionMission"
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { services, stats, testimonials, conditions } from '../data'
import * as Icons from 'lucide-react'


function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold leading-tight"
          >
            <span className="block text-white text-4xl md:text-6xl">
              Stronger Every Day,
            </span>
            <span className="block text-orange-400 text-5xl md:text-7xl mt-2">
              Together
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white text-lg md:text-xl"
          >
            Empowering recovery with expert support
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-white italic text-sm md:text-base"
          >
            Together in Your Journey to Wellness, Across the World
          </motion.p>

          {/* CTA Button */}

          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 px-8 py-4 bg-sky-400 text-white font-semibold rounded-full text-lg hover:bg-sky-500 transition transform hover:scale-105"
            >
              START YOUR RECOVERY
            </motion.button>
          </Link>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}





function ServicesPreview() {
  const [showAll, setShowAll] = useState(false)
  return (
    <section style={{ padding: '72px 24px', background: '#fdf6ee' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
            <p style={{ fontFamily: "'Courier New',monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c47b3c', margin: 0, fontWeight: 700 }}>
              What We Treat
            </p>
            <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
          </div>
          <h2 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: 'clamp(1.85rem,4vw,3rem)', fontWeight: 700, color: '#2d1a0e', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Comprehensive{' '}
            <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Rehabilitation</em>{' '}
            Services
          </h2>
          <p style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto', color: '#7a5c44' }}>
            Our multidisciplinary team provides evidence-based care across a wide spectrum of conditions and specialties.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: 'relative',
                borderRadius: 14,
                overflow: 'hidden',
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                border: '1.5px solid rgba(196,123,60,0.22)',
                cursor: 'pointer',
              }}
            >
              {/* Background image from data */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url('${service.image || "/hero.png"}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />

              {/* Dark gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(20,8,2,0.92) 40%, rgba(20,8,2,0.15) 100%)',
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontFamily: "'Georgia','Times New Roman',serif",
                  fontSize: '1.1rem', fontWeight: 700,
                  color: '#fff', marginBottom: 8,
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontFamily: "'Georgia','Times New Roman',serif",
                  color: 'rgba(255,255,255,0.68)',
                  fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 14,
                }}>
                  {service.shortDesc}
                </p>

                {/* Condition tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {service.conditions.slice(0, 3).map((c) => (
                    <span key={c} style={{
                      fontSize: '0.7rem',
                      background: 'rgba(196,123,60,0.18)',
                      color: '#e8b97a',
                      border: '1px solid rgba(196,123,60,0.35)',
                      padding: '3px 10px',
                      borderRadius: 4,
                      fontFamily: "'Courier New',monospace",
                    }}>
                      {c}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: '#c47b3c', fontSize: '0.78rem', fontWeight: 700,
                    fontFamily: "'Courier New',monospace",
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Learn more <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 30px',
                background: '#38bdf8', // sky blue
                color: '#fff',
                borderRadius: 999,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              View More <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}




function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(160deg, #fdf8f2 0%, #fef3e8 40%, #fff9f5 100%)",
      }}
    >
      {/* Decorative blobs — same as VisionMission */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(234,166,112,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-24 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,130,80,0.09) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, #470e26, #44073b)",
            border: "1.5px solid rgba(232,114,28,0.45)",
            borderRadius: "20px",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner glow top-right */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(49, 10, 73, 0.18) 0%, transparent 70%)" }}
          />
          {/* Inner glow bottom-left */}
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(54, 65, 66, 0.1) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left — text */}
            <div className="flex-1 min-w-[260px]">

              {/* Label pill */}
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-7 h-px" style={{ background: "#e8721c" }} />
                <p
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#e8721c",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  Get Started
                </p>
                <span className="block w-7 h-px" style={{ background: "#e8721c" }} />
              </div>

              <h2
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#f5f0ea",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.85rem",
                }}
              >
                Begin Your{" "}
                <span style={{ color: "#e8721c", fontStyle: "italic", fontWeight: 400 }}>
                  Recovery Journey
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "0.92rem",
                  color: "rgba(245,240,234,0.68)",
                  lineHeight: 1.75,
                  maxWidth: "420px",
                  margin: 0,
                }}
              >
                Schedule a comprehensive evaluation with our specialists. We'll
                design a personalized rehabilitation plan tailored to your goals.
              </p>
            </div>

            {/* Right — buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">

              {/* Primary — orange */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  background: "#e8721c",
                  color: "#fff",
                  border: "2px solid #e8721c",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Book Appointment
              </motion.a>

              {/* Secondary — teal outline */}
              <motion.a
                href="tel:+91-6389804084"
                whileHover={{ scale: 1.04, background: "rgba(61,184,200,0.12)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  borderRadius: "999px",
                  background: "transparent",
                  color: "#3db8c8",
                  border: "2px solid rgba(61,184,200,0.6)",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                Call Now
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <ValuesSection />


      <ServicesPreview />
      <VisionMission />


    </PageWrapper>
  )
}
