
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'


const T = {
  dark: '#2d1a0e',
  mid: '#7a5c44',
  accent: '#c47b3c',
  accentHot: '#e8721c',
  accentSub: '#b86830',
  border: 'rgba(196,123,60,0.25)',
  borderHover: 'rgba(196,123,60,0.5)',
  danger: '#C53030',
  dangerBg: 'transparent',
}

const EMAILJS_SERVICE_ID = 'service_5cnegpj'
const EMAILJS_TEMPLATE_ID = 'template_3bca9gi'
const EMAILJS_PUBLIC_KEY = 'D1i4hzYm8rUCwH6Hr'
const TO_EMAIL = 'idoneusdigitalgroup@gmail.com'

async function sendEmail(form) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: TO_EMAIL,
        from_name: form.name,
        from_email: form.email,
        phone: form.phone || 'Not provided',
        service: form.service || 'Not specified',
        message: form.message,
      },
    }),
  })
  if (!res.ok) throw new Error('EmailJS error')
}

/* ── Shared field styles (VisionMission palette, no bg) ── */
const labelSt = {
  display: 'block',
  // fontFamily: "'Georgia', 'Times New Roman', serif",
  // fontFamily: "'Courier New', Courier, monospace",
  fontSize: '0.9rem',
  // textTransform: 'uppercase',
  color: T.accent,
  marginBottom: '7px',
  fontWeight: 600,
}

const inputSt = {
  width: '100%',
  border: `1.5px solid ${T.border}`,
  background: 'transparent',
  padding: '11px 15px',
  color: T.dark,
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontSize: '16px',
  outline: 'none',
  borderRadius: '6px',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

/* ── Contact Form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      await sendEmail(form)
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 20px' }}
    >
      <div style={{
        width: 70, height: 70, borderRadius: '50%',
        border: `1.5px solid ${T.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22,
      }}>
        <CheckCircle color={T.accentHot} size={30} />
      </div>
      <h3 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 26, color: T.dark, marginBottom: 10, fontWeight: 700 }}>
        Thank You!
      </h3>
      <p style={{ color: T.mid, maxWidth: 320, lineHeight: 1.8, fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 15 }}>
        Your message has been received. A member of our team will contact
        you within 24 hours to schedule your appointment.
      </p>
    </motion.div>
  )

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
        <div>
          <label style={labelSt}>Full Name *</label>
          <input style={inputSt} type="text" name="name" required value={form.name} onChange={set} placeholder="Your full name" />
        </div>
        <div>
          <label style={labelSt}>Email Address *</label>
          <input style={inputSt} type="email" name="email" required value={form.email} onChange={set} placeholder="your@email.com" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
        <div>
          <label style={labelSt}>Phone Number</label>
          <input style={inputSt} type="tel" name="phone" value={form.phone} onChange={set} placeholder="+91 98765 43210" />
        </div>
        <div>
          <label style={labelSt}>Service Needed</label>
          <select style={inputSt} name="service" value={form.service} onChange={set}>
            <option value="">Select a service</option>

            <option>Special Education</option>
            <option>Sports & Physical Activities</option>
            <option>Language Development</option>
            <option>School-Like Classes</option>
            <option>ABA Therapy</option>
            <option>Speech Therapy</option>
            <option>Occupational Therapy</option>
            <option>Development Assessment</option>
            <option>Parent & Child Counselling</option>
            <option>Daily Living Skills Training</option>
            <option>Psychological Counselling</option>

            <option>General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelSt}>Your Message *</label>
        <textarea style={{ ...inputSt, resize: 'none' }} name="message" required value={form.message} onChange={set} rows={5}
          placeholder="Please briefly describe the patient's condition and what kind of help you are looking for..." />
      </div>

      {error && (
        <p style={{ color: T.danger, fontFamily: "'Georgia', serif", fontSize: 13, padding: '10px 14px', borderRadius: 6, border: `1px solid ${T.accentSub}` }}>
          {error}
        </p>
      )}

      {/* Hero-style pill button */}
      <button type="submit" disabled={loading}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: loading ? '#7abfcc' : '#38bdf8',   /* sky-400 from HeroSection */
          color: '#fff',
          border: 'none',
          padding: '13px 32px',
          fontSize: '0.9rem',
          fontWeight: 700,
          borderRadius: '999px',                           /* rounded-full like hero btn */
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
          boxShadow: loading ? 'none' : '0 4px 18px rgba(56,189,248,0.35)',
          alignSelf: 'flex-start',
        }}
      >
        {loading ? 'Sending…' : <><Send size={13} /> Send Message</>}
      </button>

    </form>
  )
}

/* ── Sidebar info data ── */
const contactInfo = [
  { icon: MapPin, label: 'Address', lines: ['Near Gwari Railway Crossing,', 'Gomti Nagar Ext Phase-II,', 'Lucknow, UP – 226010'] },
  { icon: Phone, label: 'Phone', lines: ['+91-6389804084', '+91-9889156355'] },
  { icon: Mail, label: 'Email', lines: ['patatramrehab.1@gmail.com'] },
  { icon: Clock, label: 'Hours', lines: ['Mon – Fri: 10:00 AM – 6:00 PM', 'Sat: 10:00 AM – 2:00 PM'] },
]

/* ── Dot divider (VisionMission style) ── */
function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 900, margin: '0 auto', padding: '4px 24px' }}>
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, opacity: 0.5 }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
    </div>
  )
}

/* ══════════════════════════════════════════
   Main Page Export
══════════════════════════════════════════ */
export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        input:focus, select:focus, textarea:focus {
          border-color: rgba(232,114,28,0.7) !important;
          box-shadow: 0 0 0 3px rgba(196,123,60,0.12) !important;
        }

        input::placeholder, textarea::placeholder { color: rgba(122,92,68,0.45); }

        .send-btn:hover:not(:disabled) {
          background: #0ea5e9 !important;
          transform: translateY(-1px) scale(1.04);
          box-shadow: 0 6px 22px rgba(56,189,248,0.4) !important;
        }

        .info-card { transition: border-color 0.2s, box-shadow 0.2s; }
        .info-card:hover { border-color: rgba(196,123,60,0.5) !important; }

        .maps-btn:hover {
          background: #0ea5e9 !important;
          box-shadow: 0 6px 20px rgba(56,189,248,0.38) !important;
        }

        @media (max-width: 640px) {
          .form-row  { grid-template-columns: 1fr !important; }
          .main-grid { grid-template-columns: 1fr !important; }
          .hero-h1   { font-size: 2rem !important; }
        }
        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══ HERO (same structure as HeroSection) ══ */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // 👈 move content to left
          overflow: "hidden",

        }}
      >
        {/* Background image with blur */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)", // 👈 blur added
            transform: "scale(1.1)", // 👈 prevent edges cut after blur
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.60)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "88px 24px 80px",
            maxWidth: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 18,
              textAlign: 'center'
            }}
          >
            Begin Your Path to{" "}
            <em
              style={{
                color: "#e8721c",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Recovery Today
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.82 }}
            transition={{ delay: 0.3 }}
            style={{
              color: "#fff",
              fontSize: 17,
              maxWidth: 500,
              lineHeight: 1.85,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              marginBottom: 32,
            }}
          >
            Reach out to our team to book an appointment, ask a question, or
            find out how we can help. We typically respond within 24 hours.
          </motion.p>


        </div>
      </section>

      {/* ══ CONTACT BODY ══ */}
      <section id="contact-form" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section header — VisionMission style */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="inline-flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
              <p style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.62rem', letterSpacing: '0.28em',
                textTransform: 'uppercase', color: '#c47b3c',
                margin: 0, fontWeight: 700,
              }}>
                Contact Us
              </p>
              <span style={{ display: 'block', width: 32, height: '1px', background: '#c47b3c' }} />
            </div>
            <h2 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(1.85rem, 4vw, 3rem)', fontWeight: 700,
              color: '#2d1a0e', lineHeight: 1.2,
              letterSpacing: '-0.02em', marginBottom: '1rem',
            }}>
              Book an{' '}
              <span style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Appointment</span>
            </h2>
            <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto', color: '#7a5c44' }}>
              Driven by compassion and excellence, we aim to create meaningful
              impact in every life we touch.
            </p>
          </div>

          {/* Form + Sidebar grid */}
          <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 36 }}>

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                padding: '44px 40px',
                border: `1.5px solid rgba(196,123,60,0.25)`,
                borderRadius: 12,
              }}
            >
              {/* Mini label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <div style={{ width: 3, height: 26, borderRadius: 2, background: '#c47b3c' }} />
                <p style={{ fontSize: '1.0rem', color: '#b86830' }}>
                  Fill in the form and we'll be in touch shortly.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="info-card"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    padding: '18px 22px',
                    border: `1.5px solid rgba(196,123,60,0.25)`,
                    borderRadius: 10,
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    border: `1.5px solid rgba(196,123,60,0.3)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <info.icon size={16} color="#c47b3c" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#b86830', marginBottom: 5 }}>
                      {info.label}
                    </div>
                    {info.lines.map((line, j) => (
                      <div key={j} style={{ color: '#2d1a0e', fontSize: 13.5, lineHeight: 1.65, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Emergency block — dark warm tone from VisionMission, no bg fill override */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.36 }}
                style={{
                  padding: '24px',
                  borderRadius: 10,
                  border: `1.5px solid rgba(196,123,60,0.35)`,
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#b86830', marginBottom: 8 }}>
                  24 / 7 Emergency
                </div>
                <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 22, color: '#2d1a0e', fontWeight: 700, marginBottom: 6 }}>
                  +91-6389804084
                </div>
                <p style={{ color: '#7a5c44', fontSize: 12.5, fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.65 }}>
                  For urgent rehabilitation needs or post-discharge concerns.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>



      {/* ══ MAP ══ */}
      <section>

        {/* Map label bar */}
        <div style={{ padding: '28px 24px', textAlign: 'center', borderTop: `1px solid rgba(196,123,60,0.18)`, borderBottom: `1px solid rgba(196,123,60,0.18)` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, border: `1.5px solid rgba(196,123,60,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin color="#c47b3c" size={16} />
            </div>
            <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 20, fontWeight: 700, color: '#2d1a0e' }}>
              Patatram Autism center
            </p>
          </div>
          <p style={{ color: '#7a5c44', fontSize: 13.5, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Near Gwari Railway Crossing, Gomti Nagar Ext Phase-II,
            Lucknow, Uttar Pradesh 226010
          </p>
        </div>

        {/* Google Map embed */}
        <iframe
          title="G.S.M Public School Location"
          src="https://maps.google.com/maps?q=G.S.M+Public+School+Gwari+Railway+Crossing+Gomti+Nagar+Extension+Lucknow+Uttar+Pradesh+226010&output=embed&z=16"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Open Maps CTA — hero-style sky pill button */}
        <div style={{ textAlign: 'center', padding: '22px', borderTop: `1px solid rgba(196,123,60,0.18)` }}>
          <a
            className="maps-btn"
            href="https://maps.google.com/?q=G.S.M+Public+School,+Near+Gwari+Railway+Crossing,+Gomti+Nagar+Extension+Phase+II,+Lucknow,+Uttar+Pradesh+226010"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#38bdf8',             /* sky-400 — HeroSection */
              color: '#fff',
              padding: '12px 28px', borderRadius: '999px',  /* rounded-full */
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(56,189,248,0.28)',
              transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s'
            }}
          >
            <MapPin size={13} /> Open in Google Maps
          </a>
        </div>

      </section>
    </div>
  )
}