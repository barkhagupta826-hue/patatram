
// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronUp } from 'lucide-react'
// import { guidelines, faqs } from '../data'
// import * as Icons from 'lucide-react'

// /* ── Theme (matching Contact) ── */
// const T = {
//   dark: '#2d1a0e',
//   mid: '#7a5c44',
//   accent: '#c47b3c',
//   accentHot: '#e8721c',
//   accentSub: '#b86830',
//   border: 'rgba(196,123,60,0.25)',
//   borderHover: 'rgba(196,123,60,0.5)',
// }

// /* ── Dot divider (Contact style) ── */
// function Divider() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 900, margin: '0 auto', padding: '4px 24px' }}>
//       <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
//       <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, opacity: 0.5 }} />
//       <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
//     </div>
//   )
// }

// /* ── Section header (Contact style) ── */
// function SectionHeader({ label, title, titleAccent, subtitle }) {
//   return (
//     <div style={{ textAlign: 'center', marginBottom: 52 }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
//         <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
//         <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: T.accent, margin: 0, fontWeight: 700 }}>
//           {label}
//         </p>
//         <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
//       </div>
//       <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(1.85rem, 4vw, 3rem)', fontWeight: 700, color: T.dark, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
//         {title}{' '}
//         {titleAccent && <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>{titleAccent}</span>}
//       </h2>
//       {subtitle && (
//         <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '500px', margin: '0 auto', color: T.mid }}>
//           {subtitle}
//         </p>
//       )}
//     </div>
//   )
// }

// /* ── FAQ Item ── */
// function FAQItem({ faq, index }) {
//   const [open, setOpen] = useState(false)
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.08 }}
//       style={{ borderBottom: `1px solid rgba(196,123,60,0.18)` }}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//           padding: '20px 0', textAlign: 'left', gap: 16,
//           background: 'none', border: 'none', cursor: 'pointer',
//         }}
//       >
//         <span style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '1.05rem', color: T.dark, fontWeight: 600, lineHeight: 1.4 }}>
//           {faq.q}
//         </span>
//         <span style={{ flexShrink: 0, color: T.accent }}>
//           {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </span>
//       </button>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             style={{ overflow: 'hidden' }}
//           >
//             <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: T.mid, fontSize: '0.92rem', lineHeight: 1.8, paddingBottom: 20 }}>
//               {faq.a}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// /* ══════════════════════════════════════════
//    Main Page Export
// ══════════════════════════════════════════ */
// // export default function PatientGuidelines() {
// //   return (
// //     <div style={{ minHeight: '100vh', fontFamily: "'Georgia', 'Times New Roman', serif" }}>

// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=DM+Mono:wght@400;500&display=swap');
// //         * { box-sizing: border-box; }

// //         .info-card { transition: border-color 0.2s, box-shadow 0.2s; }
// //         .info-card:hover { border-color: rgba(196,123,60,0.5) !important; box-shadow: 0 4px 18px rgba(196,123,60,0.08) !important; }

// //         .cta-btn-primary:hover { background: #0ea5e9 !important; transform: translateY(-1px) scale(1.03); box-shadow: 0 6px 22px rgba(56,189,248,0.38) !important; }
// //         .cta-btn-secondary:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; }

// //         @media (max-width: 768px) {
// //           .two-col-grid { grid-template-columns: 1fr !important; }
// //           .visiting-grid { grid-template-columns: 1fr !important; }
// //         }
// //       `}</style>

// //       {/* ══ HERO — matches Contact exactly ══ */}
// //       <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

// //         {/* Blurred background */}
// //         <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px)', transform: 'scale(1.1)' }} />

// //         {/* Dark overlay */}
// //         <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />

// //         {/* Content */}
// //         <div style={{ position: 'relative', zIndex: 10, padding: '88px 24px 80px', maxWidth: 800, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.1 }}
// //             style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 18, textAlign: 'center' }}
// //           >
// //             Everything You Need to Know Before You{' '}
// //             <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Arrive</em>
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 0.82 }}
// //             transition={{ delay: 0.3 }}
// //             style={{ color: '#fff', fontSize: 17, maxWidth: 500, lineHeight: 1.85, fontFamily: "'Georgia', 'Times New Roman', serif", marginBottom: 32, textAlign: 'center' }}
// //           >
// //             We want your experience to be as smooth and stress-free as possible.
// //             Here is all the information you need from admission to discharge.
// //           </motion.p>


// //         </div>
// //       </section>

// //       {/* ══ GUIDELINES ══ */}
// //       <section id="guidelines" style={{ padding: '72px 24px' }}>
// //         <div style={{ maxWidth: 1100, margin: '0 auto' }}>

// //           <SectionHeader
// //             label="Patient Guidelines"
// //             title="Your Step-by-Step"
// //             titleAccent="Guide"
// //             subtitle="From your first call to your final discharge, here is what to expect at every stage."
// //           />

// //           <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
// //             {guidelines.map((g, i) => {
// //               const Icon = Icons[g.icon] || Icons.ClipboardList
// //               return (
// //                 <motion.div
// //                   key={i}
// //                   className="info-card"
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.1 }}
// //                   style={{ padding: '32px 36px', border: `1.5px solid ${T.border}`, borderRadius: 12 }}
// //                 >
// //                   {/* Icon + Title */}
// //                   <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
// //                     <div style={{ width: 44, height: 44, borderRadius: 8, border: `1.5px solid rgba(196,123,60,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// //                       <Icon size={18} color={T.accent} />
// //                     </div>
// //                     <h3 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: '1.25rem', fontWeight: 700, color: T.dark }}>
// //                       {g.category}
// //                     </h3>
// //                   </div>

// //                   {/* Steps */}
// //                   <ol style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', margin: 0, padding: 0 }}>
// //                     {g.steps.map((step, j) => (
// //                       <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
// //                         <span style={{
// //                           flexShrink: 0, width: 22, height: 22,
// //                           background: T.accent, color: '#fff',
// //                           fontSize: '0.65rem', fontFamily: "'Courier New', Courier, monospace",
// //                           fontWeight: 700,
// //                           display: 'flex', alignItems: 'center', justifyContent: 'center',
// //                           borderRadius: 4, marginTop: 2,
// //                         }}>
// //                           {j + 1}
// //                         </span>
// //                         <span style={{ color: T.mid, fontSize: '0.9rem', lineHeight: 1.7, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
// //                           {step}
// //                         </span>
// //                       </li>
// //                     ))}
// //                   </ol>
// //                 </motion.div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       <Divider />

// //       {/* ══ VISITING HOURS & PATIENT RIGHTS ══ */}
// //       <section style={{ padding: '72px 24px' }}>
// //         <div style={{ maxWidth: 1100, margin: '0 auto' }}>

// //           <SectionHeader
// //             label="Policies"
// //             title="Visiting Hours &"
// //             titleAccent="Patient Rights"
// //             subtitle="Everything you need to know about visiting policies and your rights as a patient."
// //           />

// //           <div className="visiting-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>

// //             {/* Visiting Hours */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 28 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.1 }}
// //               style={{ padding: '36px 40px', border: `1.5px solid ${T.border}`, borderRadius: 12 }}
// //             >
// //               {/* Mini label — same as Contact form card */}
// //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
// //                 <div style={{ width: 3, height: 26, borderRadius: 2, background: T.accent }} />
// //                 <p style={{ fontSize: '1.0rem', color: T.accentSub, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
// //                   Visiting Hours & Policies
// //                 </p>
// //               </div>

// //               <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
// //                 {[
// //                   { label: 'General Visiting Hours', value: '10:00 AM – 7:00 PM (Daily)' },

// //                   { label: 'Paediatric Ward', value: 'One parent may stay 24/7' },
// //                   { label: 'Maximum Visitors', value: '2 visitors at a time per patient' },
// //                   { label: 'Therapy Sessions', value: 'As per personalized schedule' },
// //                   { label: 'Parent Participation', value: 'For selected sessions' },
// //                   { label: 'Safety Monitoring', value: 'CCTV enabled in common areas' },
// //                   { label: 'Hygiene Protocol', value: 'Regular sanitization maintained' },
// //                   { label: 'Children Under 12', value: 'Not permitted in clinical areas' },
// //                   {
// //                     label: 'Admission & Discharge',
// //                     value: 'Based on assessment and progress evaluation'
// //                   }
// //                 ].map((item, i) => (
// //                   <motion.div
// //                     key={i}
// //                     initial={{ opacity: 0, x: -15 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: i * 0.07 }}
// //                     style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid rgba(196,123,60,0.18)`, padding: '14px 0' }}
// //                   >
// //                     <span style={{ color: T.mid, fontSize: '0.88rem', fontFamily: "'Georgia', 'Times New Roman', serif" }}>{item.label}</span>
// //                     <span style={{ color: T.dark, fontSize: '0.88rem', fontWeight: 600, textAlign: 'right', maxWidth: '55%', fontFamily: "'Georgia', 'Times New Roman', serif" }}>{item.value}</span>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Patient Rights & Responsibilities */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 28 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.15 }}
// //               style={{ padding: '36px 40px', border: `1.5px solid ${T.border}`, borderRadius: 12 }}
// //             >
// //               {/* Mini label */}
// //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
// //                 <div style={{ width: 3, height: 26, borderRadius: 2, background: T.accent }} />
// //                 <p style={{ fontSize: '1.0rem', color: T.accentSub, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
// //                   Patient Rights & Responsibilities
// //                 </p>
// //               </div>

// //               <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
// //                 {/* Rights */}
// //                 <div>
// //                   <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accent, marginBottom: 14, fontWeight: 700 }}>
// //                     Your Rights
// //                   </p>
// //                   <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', margin: 0, padding: 0 }}>
// //                     {[
// //                       'To be treated with dignity and respect',
// //                       'To receive complete information about your diagnosis and treatment',
// //                       'To participate in decisions about your care',
// //                       'To privacy and confidentiality of your medical records',
// //                       'To refuse treatment and understand the consequences',
// //                     ].map((r, i) => (
// //                       <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
// //                         <span style={{ color: T.accent, marginTop: 2, flexShrink: 0 }}>→</span>
// //                         <span style={{ color: T.mid, fontSize: '0.88rem', lineHeight: 1.65, fontFamily: "'Georgia', 'Times New Roman', serif" }}>{r}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 {/* Responsibilities */}
// //                 <div>
// //                   <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accent, marginBottom: 14, fontWeight: 700 }}>
// //                     Your Responsibilities
// //                   </p>
// //                   <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', margin: 0, padding: 0 }}>
// //                     {[
// //                       'Provide accurate and complete health information',
// //                       'Follow the agreed treatment plan and attend all sessions',
// //                       'Treat staff and fellow patients with respect',
// //                       'Notify staff immediately if your condition changes',
// //                       'Settle financial obligations in a timely manner',
// //                     ].map((r, i) => (
// //                       <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
// //                         <span style={{ color: T.accent, marginTop: 2, flexShrink: 0 }}>→</span>
// //                         <span style={{ color: T.mid, fontSize: '0.88rem', lineHeight: 1.65, fontFamily: "'Georgia', 'Times New Roman', serif" }}>{r}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>

// //       <Divider />

// //       {/* ══ FAQ ══ */}
// //       <section style={{ padding: '72px 24px' }}>
// //         <div style={{ maxWidth: 1100, margin: '0 auto' }}>

// //           <SectionHeader
// //             label="FAQ"
// //             title="Frequently Asked"
// //             titleAccent="Questions"
// //             subtitle="Answers to the questions we hear most often from patients and families."
// //           />

// //           <div style={{ maxWidth: 760, margin: '0 auto' }}>
// //             {faqs.map((faq, i) => (
// //               <FAQItem key={i} faq={faq} index={i} />
// //             ))}
// //           </div>

// //           {/* CTA — matches Contact "Book Appointment" button style */}
// //           <div style={{ textAlign: 'center', marginTop: 52 }}>
// //             <p style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: T.mid, marginBottom: 20, fontSize: '0.95rem' }}>
// //               Still have questions? We're here to help.
// //             </p>
// //             <motion.a
// //               href="/contact"
// //               whileHover={{ scale: 1.04 }}
// //               whileTap={{ scale: 0.97 }}
// //               transition={{ type: 'spring', stiffness: 300 }}
// //               className="cta-btn-primary"
// //               style={{
// //                 display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
// //                 padding: '13px 36px',
// //                 background: '#38bdf8',
// //                 color: '#fff',
// //                 fontFamily: "'Courier New', Courier, monospace",
// //                 fontSize: '0.7rem', fontWeight: 700,
// //                 letterSpacing: '0.18em', textTransform: 'uppercase',
// //                 borderRadius: '999px',
// //                 textDecoration: 'none',
// //                 border: '2px solid #38bdf8',
// //                 boxShadow: '0 4px 18px rgba(56,189,248,0.32)',
// //                 transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
// //               }}
// //             >
// //               Contact Our Team
// //             </motion.a>
// //           </div>

// //         </div>
// //       </section>

// //     </div>
// //   )
// // }