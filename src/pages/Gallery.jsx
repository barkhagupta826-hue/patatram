

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
// import { galleryImages } from '../data'

// const categories = ['All', ...Array.from(new Set(galleryImages.map((i) => i.category)))]

// const T = {
//   dark: '#2d1a0e',
//   mid: '#7a5c44',
//   accent: '#c47b3c',
//   accentHot: '#e8721c',
//   accentSub: '#b86830',
//   border: 'rgba(196,123,60,0.25)',
// }

// /* ── Category badge colors ── */
// const categoryColors = {
//   Team: { bg: 'rgba(196,123,60,0.15)', color: '#b86830' },
//   Facility: { bg: 'rgba(16,185,129,0.15)', color: '#059669' },
//   Therapy: { bg: 'rgba(99,102,241,0.15)', color: '#6366f1' },
//   Technology: { bg: 'rgba(14,165,233,0.15)', color: '#0284c7' },
// }

// function getCatStyle(cat) {
//   return categoryColors[cat] || { bg: 'rgba(196,123,60,0.12)', color: T.accentSub }
// }

// /* ── Dot divider ── */
// function Divider() {
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 900, margin: '0 auto', padding: '4px 24px' }}>
//       <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
//       <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, opacity: 0.5 }} />
//       <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
//     </div>
//   )
// }

// /* ── Single gallery card ── */
// function GalleryCard({ item, onClick, index }) {
//   const cs = getCatStyle(item.category)

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 24 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.92 }}
//       transition={{ duration: 0.35, delay: index * 0.04 }}
//       onClick={() => onClick(item)}
//       style={{
//         position: 'relative',
//         cursor: 'pointer',
//         borderRadius: 10,
//         overflow: 'hidden',
//         border: `1.5px solid ${T.border}`,
//         aspectRatio: '1 / 1',
//         background: '#1a0f07',
//       }}
//       className="gallery-card"
//     >
//       {/* Actual image */}
//       <img
//         src={item.image}
//         alt={item.caption}
//         loading="lazy"
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           display: 'block',
//           transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
//         }}
//         className="gallery-img"
//       />

//       {/* Gradient overlay — always visible at bottom */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         background: 'linear-gradient(to top, rgba(20,10,4,0.82) 0%, rgba(20,10,4,0.2) 45%, transparent 75%)',
//         pointerEvents: 'none',
//       }} />

//       {/* Category pill */}
//       <div style={{
//         position: 'absolute',
//         top: 12,
//         left: 12,
//         padding: '4px 10px',
//         borderRadius: 999,
//         background: cs.bg,
//         backdropFilter: 'blur(6px)',
//         border: `1px solid ${cs.color}40`,
//         fontFamily: "'Courier New', Courier, monospace",
//         fontSize: '0.56rem',
//         letterSpacing: '0.22em',
//         textTransform: 'uppercase',
//         fontWeight: 700,
//         color: cs.color,
//       }}>
//         {item.category}
//       </div>

//       {/* Bottom info strip */}
//       <div style={{
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         padding: '14px 16px',
//       }}>
//         <p style={{
//           fontFamily: "'Georgia', 'Times New Roman', serif",
//           fontSize: '0.9rem',
//           fontWeight: 600,
//           color: '#f5e6d5',
//           margin: 0,
//           lineHeight: 1.35,
//         }}>
//           {item.caption}
//         </p>
//       </div>

//       {/* Hover overlay with zoom icon */}
//       <div className="gallery-hover" style={{
//         position: 'absolute',
//         inset: 0,
//         background: 'rgba(20,10,4,0.55)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         opacity: 0,
//         transition: 'opacity 0.3s',
//       }}>
//         <div style={{
//           width: 48,
//           height: 48,
//           borderRadius: '50%',
//           background: 'rgba(196,123,60,0.25)',
//           border: `1.5px solid rgba(196,123,60,0.6)`,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           backdropFilter: 'blur(4px)',
//         }}>
//           <ArrowUpRight color={T.accentHot} size={22} />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// /* ── Lightbox ── */
// function Lightbox({ item, items, onClose, onNav }) {
//   const cs = getCatStyle(item.category)
//   const idx = items.findIndex(i => i.id === item.id)

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === 'Escape') onClose()
//       if (e.key === 'ArrowRight') onNav(1)
//       if (e.key === 'ArrowLeft') onNav(-1)
//     }
//     window.addEventListener('keydown', handler)
//     return () => window.removeEventListener('keydown', handler)
//   }, [item])

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.22 }}
//       style={{
//         position: 'fixed',
//         inset: 0,
//         zIndex: 100,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '20px',
//         background: 'rgba(10,6,3,0.92)',
//         backdropFilter: 'blur(12px)',
//       }}
//       onClick={onClose}
//     >
//       <motion.div
//         key={item.id}
//         initial={{ opacity: 0, scale: 0.95, y: 12 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           width: '100%',
//           maxWidth: 860,
//           /* never taller than viewport minus padding */
//           maxHeight: 'calc(100vh - 40px)',
//           display: 'flex',
//           flexDirection: 'row',
//           borderRadius: 14,
//           overflow: 'hidden',
//           border: `1.5px solid rgba(196,123,60,0.3)`,
//           boxShadow: '0 32px 72px rgba(0,0,0,0.75)',
//           background: '#160d06',
//         }}
//       >

//         {/* ── LEFT: image pane ── */}
//         <div style={{
//           position: 'relative',
//           flex: '0 0 52%',
//           background: '#0a0603',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           overflow: 'hidden',
//           minHeight: 0,
//         }}>
//           <img
//             src={item.image}
//             alt={item.caption}
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               objectPosition: 'center',
//               display: 'block',
//             }}
//           />

//           {/* Subtle left-edge gradient bleeding into info panel */}
//           <div style={{
//             position: 'absolute', top: 0, right: 0, bottom: 0, width: 48,
//             background: 'linear-gradient(to right, transparent, #160d06)',
//             pointerEvents: 'none',
//           }} />

//           {/* Category pill — top-left */}
//           <div style={{
//             position: 'absolute', top: 14, left: 14,
//             padding: '4px 11px', borderRadius: 999,
//             background: cs.bg,
//             backdropFilter: 'blur(6px)',
//             border: `1px solid ${cs.color}50`,
//             fontFamily: "'Courier New', Courier, monospace",
//             fontSize: '0.55rem', letterSpacing: '0.22em',
//             textTransform: 'uppercase', fontWeight: 700,
//             color: cs.color,
//           }}>
//             {item.category}
//           </div>

//           {/* Nav arrow — prev */}
//           {idx > 0 && (
//             <button
//               onClick={(e) => { e.stopPropagation(); onNav(-1) }}
//               style={{
//                 position: 'absolute', left: 12, bottom: 14,
//                 width: 36, height: 36, borderRadius: '50%',
//                 background: 'rgba(20,10,4,0.7)',
//                 border: `1px solid rgba(196,123,60,0.35)`,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 cursor: 'pointer', color: 'rgba(245,230,213,0.8)',
//                 transition: 'all 0.18s',
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
//               onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,10,4,0.7)'; e.currentTarget.style.color = 'rgba(245,230,213,0.8)' }}
//             >
//               <ChevronLeft size={17} />
//             </button>
//           )}

//           {/* Nav arrow — next */}
//           {idx < items.length - 1 && (
//             <button
//               onClick={(e) => { e.stopPropagation(); onNav(1) }}
//               style={{
//                 position: 'absolute', right: 14, bottom: 14,
//                 width: 36, height: 36, borderRadius: '50%',
//                 background: 'rgba(20,10,4,0.7)',
//                 border: `1px solid rgba(196,123,60,0.35)`,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 cursor: 'pointer', color: 'rgba(245,230,213,0.8)',
//                 transition: 'all 0.18s',
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
//               onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,10,4,0.7)'; e.currentTarget.style.color = 'rgba(245,230,213,0.8)' }}
//             >
//               <ChevronRight size={17} />
//             </button>
//           )}

//           {/* Counter — bottom centre */}
//           <div style={{
//             position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
//             fontFamily: "'Courier New', Courier, monospace",
//             fontSize: '0.58rem', letterSpacing: '0.18em',
//             color: 'rgba(245,230,213,0.55)',
//             background: 'rgba(20,10,4,0.6)',
//             padding: '3px 10px', borderRadius: 999,
//             backdropFilter: 'blur(4px)',
//             whiteSpace: 'nowrap',
//           }}>
//             {idx + 1} / {items.length}
//           </div>
//         </div>

//         {/* ── RIGHT: info pane ── */}
//         <div style={{
//           flex: '1 1 0',
//           display: 'flex',
//           flexDirection: 'column',
//           minHeight: 0,
//           minWidth: 0,
//         }}>
//           {/* Header bar with close button */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '14px 20px 12px',
//             borderBottom: `1px solid rgba(196,123,60,0.15)`,
//             flexShrink: 0,
//           }}>
//             <span style={{
//               fontFamily: "'Courier New', Courier, monospace",
//               fontSize: '0.55rem', letterSpacing: '0.24em',
//               textTransform: 'uppercase', color: T.accentSub, fontWeight: 700,
//             }}>
//               Details
//             </span>
//             <button
//               onClick={onClose}
//               style={{
//                 width: 30, height: 30, borderRadius: '50%',
//                 background: 'rgba(196,123,60,0.1)',
//                 border: `1px solid rgba(196,123,60,0.3)`,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 cursor: 'pointer', color: 'rgba(245,230,213,0.6)',
//                 transition: 'all 0.18s', flexShrink: 0,
//               }}
//               onMouseEnter={e => { e.currentTarget.style.background = T.accentHot; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = T.accentHot }}
//               onMouseLeave={e => { e.currentTarget.style.background = 'rgba(196,123,60,0.1)'; e.currentTarget.style.color = 'rgba(245,230,213,0.6)'; e.currentTarget.style.borderColor = 'rgba(196,123,60,0.3)' }}
//             >
//               <X size={14} />
//             </button>
//           </div>

//           {/* Scrollable body */}
//           <div style={{
//             flex: '1 1 0',
//             overflowY: 'auto',
//             padding: '22px 22px 24px',
//             minHeight: 0,
//             /* custom scrollbar */
//             scrollbarWidth: 'thin',
//             scrollbarColor: 'rgba(196,123,60,0.3) transparent',
//           }}>
//             {/* Caption / title */}
//             <h3 style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: '1.1rem', fontWeight: 700,
//               color: '#f5e6d5', margin: '0 0 14px',
//               lineHeight: 1.35,
//             }}>
//               {item.caption}
//             </h3>

//             {/* Thin rule */}
//             <div style={{ height: '1px', background: 'rgba(196,123,60,0.18)', marginBottom: 14 }} />

//             {/* Summary text */}
//             <p style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: '0.84rem',
//               color: 'rgba(245,230,213,0.68)',
//               lineHeight: 1.85,
//               margin: 0,
//             }}>
//               {item.summary}
//             </p>
//           </div>

//           {/* Footer nav row */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             padding: '10px 22px 14px',
//             borderTop: `1px solid rgba(196,123,60,0.13)`,
//             flexShrink: 0,
//           }}>
//             <button
//               disabled={idx === 0}
//               onClick={(e) => { e.stopPropagation(); onNav(-1) }}
//               style={{
//                 display: 'flex', alignItems: 'center', gap: 6,
//                 fontFamily: "'Courier New', Courier, monospace",
//                 fontSize: '0.58rem', letterSpacing: '0.14em',
//                 textTransform: 'uppercase', fontWeight: 700,
//                 color: idx === 0 ? 'rgba(196,123,60,0.25)' : T.accentSub,
//                 background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer',
//                 padding: 0, transition: 'color 0.18s',
//               }}
//               onMouseEnter={e => { if (idx > 0) e.currentTarget.style.color = T.accentHot }}
//               onMouseLeave={e => { e.currentTarget.style.color = idx === 0 ? 'rgba(196,123,60,0.25)' : T.accentSub }}
//             >
//               <ChevronLeft size={13} /> Prev
//             </button>

//             <span style={{
//               fontFamily: "'Courier New', Courier, monospace",
//               fontSize: '0.56rem', letterSpacing: '0.16em',
//               color: 'rgba(196,123,60,0.4)',
//             }}>
//               {idx + 1} of {items.length}
//             </span>

//             <button
//               disabled={idx === items.length - 1}
//               onClick={(e) => { e.stopPropagation(); onNav(1) }}
//               style={{
//                 display: 'flex', alignItems: 'center', gap: 6,
//                 fontFamily: "'Courier New', Courier, monospace",
//                 fontSize: '0.58rem', letterSpacing: '0.14em',
//                 textTransform: 'uppercase', fontWeight: 700,
//                 color: idx === items.length - 1 ? 'rgba(196,123,60,0.25)' : T.accentSub,
//                 background: 'none', border: 'none', cursor: idx === items.length - 1 ? 'default' : 'pointer',
//                 padding: 0, transition: 'color 0.18s',
//               }}
//               onMouseEnter={e => { if (idx < items.length - 1) e.currentTarget.style.color = T.accentHot }}
//               onMouseLeave={e => { e.currentTarget.style.color = idx === items.length - 1 ? 'rgba(196,123,60,0.25)' : T.accentSub }}
//             >
//               Next <ChevronRight size={13} />
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// /* ── Main page ── */
// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [lightbox, setLightbox] = useState(null)

//   const filtered = activeCategory === 'All'
//     ? galleryImages
//     : galleryImages.filter((img) => img.category === activeCategory)

//   function openLightbox(item) {
//     setLightbox(item)
//   }

//   function navigateLightbox(dir) {
//     const currentFiltered = activeCategory === 'All'
//       ? galleryImages
//       : galleryImages.filter((img) => img.category === activeCategory)
//     const idx = currentFiltered.findIndex(i => i.id === lightbox.id)
//     const next = currentFiltered[idx + dir]
//     if (next) setLightbox(next)
//   }

//   const currentFilteredForNav = activeCategory === 'All'
//     ? galleryImages
//     : galleryImages.filter((img) => img.category === activeCategory)

//   return (
//     <div style={{ minHeight: '100vh', fontFamily: "'Georgia', 'Times New Roman', serif" }}>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=DM+Mono:wght@400;500&display=swap');
//         * { box-sizing: border-box; }

//         .gallery-card:hover .gallery-img { transform: scale(1.07); }
//         .gallery-card:hover .gallery-hover { opacity: 1 !important; }

//         .filter-btn { transition: all 0.2s; }
//         .filter-btn:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; }
//         .filter-btn.active { background: #c47b3c !important; color: #fff !important; border-color: #c47b3c !important; }

//         .tour-btn-primary { transition: background 0.2s, box-shadow 0.2s, transform 0.15s; }
//         .tour-btn-primary:hover { background: #0ea5e9 !important; transform: translateY(-1px) scale(1.03); box-shadow: 0 6px 22px rgba(56,189,248,0.38) !important; }
//         .tour-btn-secondary { transition: border-color 0.2s, color 0.2s, transform 0.15s; }
//         .tour-btn-secondary:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; transform: translateY(-1px) scale(1.03); }

//         .masonry-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 16px;
//         }
//         @media (max-width: 768px) {
//           .masonry-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
//         }
//         @media (max-width: 480px) {
//           .masonry-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       {/* ══ HERO ══ */}
//       <section style={{
//         position: 'relative',
//         minHeight: '50vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//       }}>
//         <div style={{
//           position: 'absolute', inset: 0,
//           backgroundImage: "url('/hero.png')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'blur(8px)',
//           transform: 'scale(1.1)',
//         }} />
//         <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />

//         <div style={{
//           position: 'relative', zIndex: 10,
//           padding: '88px 24px 80px',
//           maxWidth: 1000,
//           display: 'flex', flexDirection: 'column',
//           alignItems: 'center',
//         }}>
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
//             }}
//           >
//             <span style={{ display: 'block', width: 28, height: '1px', background: 'rgba(196,123,60,0.6)' }} />
//             <p style={{
//               fontFamily: "'Courier New', Courier, monospace",
//               fontSize: '0.62rem', letterSpacing: '0.28em',
//               textTransform: 'uppercase', color: '#c47b3c',
//               margin: 0, fontWeight: 700,
//             }}>
//               Our Gallery
//             </p>
//             <span style={{ display: 'block', width: 28, height: '1px', background: 'rgba(196,123,60,0.6)' }} />
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: 'clamp(2rem, 5vw, 3.6rem)',
//               fontWeight: 700, color: '#fff',
//               lineHeight: 1.2, marginBottom: 18,
//               textAlign: 'center',
//             }}
//           >
//             A Glimpse Into{' '}
//             <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Our World</em>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.82 }}
//             transition={{ delay: 0.3 }}
//             style={{
//               color: '#fff', fontSize: 17,
//               maxWidth: 500, lineHeight: 1.85,
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               marginBottom: 0, textAlign: 'center',
//             }}
//           >
//             Tour our facility, meet our team, and see the technology and spaces
//             where healing happens every day.
//           </motion.p>
//         </div>
//       </section>

//       {/* ══ GALLERY GRID ══ */}
//       <section style={{ padding: '72px 24px' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>

//           {/* Section heading */}
//           <div style={{ textAlign: 'center', marginBottom: 52 }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
//               <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
//               <p style={{
//                 fontFamily: "'Courier New', Courier, monospace",
//                 fontSize: '0.62rem', letterSpacing: '0.28em',
//                 textTransform: 'uppercase', color: T.accent,
//                 margin: 0, fontWeight: 700,
//               }}>
//                 Our Facility
//               </p>
//               <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
//             </div>
//             <h2 style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: 'clamp(1.85rem, 4vw, 3rem)',
//               fontWeight: 700, color: T.dark,
//               lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
//             }}>
//               Spaces Built for{' '}
//               <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>Healing</span>
//             </h2>
//             <p style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: '0.95rem', lineHeight: 1.75,
//               maxWidth: '460px', margin: '0 auto', color: T.mid,
//             }}>
//               Every corner of our centre is designed with care, comfort, and recovery in mind.
//             </p>
//           </div>

//           {/* Filter tabs */}
//           <div style={{
//             display: 'flex', flexWrap: 'wrap', gap: 8,
//             justifyContent: 'center', marginBottom: 48,
//           }}>
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
//                 style={{
//                   padding: '8px 20px',
//                   fontFamily: "'Courier New', Courier, monospace",
//                   fontSize: '0.65rem', letterSpacing: '0.15em',
//                   textTransform: 'uppercase', fontWeight: 700,
//                   border: `1.5px solid rgba(196,123,60,0.28)`,
//                   borderRadius: '999px',
//                   background: 'transparent',
//                   color: activeCategory === cat ? '#fff' : T.accentSub,
//                   cursor: 'pointer',
//                 }}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Image grid */}
//           <motion.div layout className="masonry-grid">
//             <AnimatePresence mode="popLayout">
//               {filtered.map((item, index) => (
//                 <GalleryCard
//                   key={item.id}
//                   item={item}
//                   index={index}
//                   onClick={openLightbox}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {filtered.length === 0 && (
//             <p style={{
//               textAlign: 'center', color: T.mid,
//               padding: '80px 0',
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//             }}>
//               No images in this category.
//             </p>
//           )}
//         </div>
//       </section>

//       <Divider />

//       {/* ══ CTA ══ */}
//       <section style={{ padding: '60px 24px' }}>
//         <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>

//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
//             <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
//             <p style={{
//               fontFamily: "'Courier New', Courier, monospace",
//               fontSize: '0.62rem', letterSpacing: '0.28em',
//               textTransform: 'uppercase', color: T.accent,
//               margin: 0, fontWeight: 700,
//             }}>
//               Visit Us
//             </p>
//             <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
//           </div>

//           <h2 style={{
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
//             fontWeight: 700, color: T.dark,
//             lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.85rem',
//           }}>
//             Want to{' '}
//             <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>See More?</span>
//           </h2>

//           <p style={{
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             fontSize: '0.95rem', color: T.mid,
//             lineHeight: 1.75, maxWidth: '460px',
//             margin: '0 auto 2rem',
//           }}>
//             Schedule a facility tour and meet our team in person. We'd love to
//             show you around and answer all your questions.
//           </p>

//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//               className="tour-btn-primary"
//               style={{
//                 fontFamily: "'Courier New', Courier, monospace",
//                 fontSize: '0.7rem', fontWeight: 700,
//                 letterSpacing: '0.18em', textTransform: 'uppercase',
//                 textDecoration: 'none',
//                 padding: '13px 32px', borderRadius: '999px',
//                 background: '#38bdf8', color: '#fff',
//                 border: '2px solid #38bdf8',
//                 display: 'inline-block', whiteSpace: 'nowrap',
//                 boxShadow: '0 4px 18px rgba(56,189,248,0.32)',
//               }}
//             >
//               Request a Facility Tour
//             </motion.a>

//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//               className="tour-btn-secondary"
//               style={{
//                 fontFamily: "'Courier New', Courier, monospace",
//                 fontSize: '0.7rem', fontWeight: 700,
//                 letterSpacing: '0.18em', textTransform: 'uppercase',
//                 textDecoration: 'none',
//                 padding: '13px 32px', borderRadius: '999px',
//                 background: 'transparent', color: T.accentSub,
//                 border: `2px solid rgba(196,123,60,0.45)`,
//                 display: 'inline-block', whiteSpace: 'nowrap',
//               }}
//             >
//               Watch Video Tour
//             </motion.a>
//           </div>
//         </div>
//       </section>

//       {/* ══ LIGHTBOX ══ */}
//       <AnimatePresence>
//         {lightbox && (
//           <Lightbox
//             item={lightbox}
//             items={currentFilteredForNav}
//             onClose={() => setLightbox(null)}
//             onNav={navigateLightbox}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '../data'

const categories = ['All', ...Array.from(new Set(galleryImages.map((i) => i.category)))]

const T = {
  dark: '#2d1a0e',
  mid: '#7a5c44',
  accent: '#c47b3c',
  accentHot: '#e8721c',
  accentSub: '#b86830',
  border: 'rgba(196,123,60,0.25)',
}

const categoryColors = {
  Team: { bg: 'rgba(196,123,60,0.15)', color: '#b86830' },
  Facility: { bg: 'rgba(16,185,129,0.15)', color: '#059669' },
  Therapy: { bg: 'rgba(99,102,241,0.15)', color: '#6366f1' },
  Technology: { bg: 'rgba(14,165,233,0.15)', color: '#0284c7' },
}

function getCatStyle(cat) {
  return categoryColors[cat] || { bg: 'rgba(196,123,60,0.12)', color: T.accentSub }
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 900, margin: '0 auto', padding: '4px 24px' }}>
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.accent, opacity: 0.5 }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(196,123,60,0.18)' }} />
    </div>
  )
}

function GalleryCard({ item, onClick, index }) {
  const cs = getCatStyle(item.category)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={() => onClick(item)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 10,
        overflow: 'hidden',
        border: `1.5px solid ${T.border}`,
        aspectRatio: '1 / 1',
        background: '#1a0f07',
      }}
      className="gallery-card"
    >
      <img
        src={item.image}
        alt={item.caption}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        className="gallery-img"
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(20,10,4,0.82) 0%, rgba(20,10,4,0.2) 45%, transparent 75%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: 12,
        left: 12,
        padding: '4px 10px',
        borderRadius: 999,
        background: cs.bg,
        backdropFilter: 'blur(6px)',
        border: `1px solid ${cs.color}40`,
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '0.56rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: cs.color,
      }}>
        {item.category}
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '14px 16px',
      }}>
        <p style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#f5e6d5',
          margin: 0,
          lineHeight: 1.35,
        }}>
          {item.caption}
        </p>
      </div>

      <div className="gallery-hover" style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(20,10,4,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s',
      }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(196,123,60,0.25)',
          border: `1.5px solid rgba(196,123,60,0.6)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }}>
          <ArrowUpRight color={T.accentHot} size={22} />
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ item, items, onClose, onNav }) {
  const cs = getCatStyle(item.category)
  const idx = items.findIndex(i => i.id === item.id)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [item])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(10,6,3,0.92)',
        backdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="lightbox-inner"
        style={{
          width: '100%',
          maxWidth: 860,
          maxHeight: 'calc(100vh - 40px)',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: 14,
          overflow: 'hidden',
          border: `1.5px solid rgba(196,123,60,0.3)`,
          boxShadow: '0 32px 72px rgba(0,0,0,0.75)',
          background: '#160d06',
        }}
      >

        {/* LEFT: image pane */}
        <div
          className="lightbox-img-pane"
          style={{
            position: 'relative',
            flex: '0 0 52%',
            background: '#0a0603',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            minHeight: 0,
          }}
        >
          <img
            src={item.image}
            alt={item.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />

          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: 48,
            background: 'linear-gradient(to right, transparent, #160d06)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'absolute', top: 14, left: 14,
            padding: '4px 11px', borderRadius: 999,
            background: cs.bg,
            backdropFilter: 'blur(6px)',
            border: `1px solid ${cs.color}50`,
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '0.55rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', fontWeight: 700,
            color: cs.color,
          }}>
            {item.category}
          </div>

          {idx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNav(-1) }}
              style={{
                position: 'absolute', left: 12, bottom: 14,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(20,10,4,0.7)',
                border: `1px solid rgba(196,123,60,0.35)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(245,230,213,0.8)',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,10,4,0.7)'; e.currentTarget.style.color = 'rgba(245,230,213,0.8)' }}
            >
              <ChevronLeft size={17} />
            </button>
          )}

          {idx < items.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNav(1) }}
              style={{
                position: 'absolute', right: 14, bottom: 14,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(20,10,4,0.7)',
                border: `1px solid rgba(196,123,60,0.35)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(245,230,213,0.8)',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accent; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,10,4,0.7)'; e.currentTarget.style.color = 'rgba(245,230,213,0.8)' }}
            >
              <ChevronRight size={17} />
            </button>
          )}

          <div style={{
            position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: '0.58rem', letterSpacing: '0.18em',
            color: 'rgba(245,230,213,0.55)',
            background: 'rgba(20,10,4,0.6)',
            padding: '3px 10px', borderRadius: 999,
            backdropFilter: 'blur(4px)',
            whiteSpace: 'nowrap',
          }}>
            {idx + 1} / {items.length}
          </div>
        </div>

        {/* RIGHT: info pane */}
        <div
          className="lightbox-info-pane"
          style={{
            flex: '1 1 0',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            minWidth: 0,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px 12px',
            borderBottom: `1px solid rgba(196,123,60,0.15)`,
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '0.55rem', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: T.accentSub, fontWeight: 700,
            }}>
              Details
            </span>
            <button
              onClick={onClose}
              style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'rgba(196,123,60,0.1)',
                border: `1px solid rgba(196,123,60,0.3)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(245,230,213,0.6)',
                transition: 'all 0.18s', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.accentHot; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = T.accentHot }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(196,123,60,0.1)'; e.currentTarget.style.color = 'rgba(245,230,213,0.6)'; e.currentTarget.style.borderColor = 'rgba(196,123,60,0.3)' }}
            >
              <X size={14} />
            </button>
          </div>

          <div style={{
            flex: '1 1 0',
            overflowY: 'auto',
            padding: '22px 22px 24px',
            minHeight: 0,
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(196,123,60,0.3) transparent',
          }}>
            <h3 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: '1.1rem', fontWeight: 700,
              color: '#f5e6d5', margin: '0 0 14px',
              lineHeight: 1.35,
            }}>
              {item.caption}
            </h3>

            <div style={{ height: '1px', background: 'rgba(196,123,60,0.18)', marginBottom: 14 }} />

            <p style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: '0.84rem',
              color: 'rgba(245,230,213,0.68)',
              lineHeight: 1.85,
              margin: 0,
            }}>
              {item.summary}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 22px 14px',
            borderTop: `1px solid rgba(196,123,60,0.13)`,
            flexShrink: 0,
          }}>
            <button
              disabled={idx === 0}
              onClick={(e) => { e.stopPropagation(); onNav(-1) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.58rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontWeight: 700,
                color: idx === 0 ? 'rgba(196,123,60,0.25)' : T.accentSub,
                background: 'none', border: 'none', cursor: idx === 0 ? 'default' : 'pointer',
                padding: 0, transition: 'color 0.18s',
              }}
              onMouseEnter={e => { if (idx > 0) e.currentTarget.style.color = T.accentHot }}
              onMouseLeave={e => { e.currentTarget.style.color = idx === 0 ? 'rgba(196,123,60,0.25)' : T.accentSub }}
            >
              <ChevronLeft size={13} /> Prev
            </button>

            <span style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '0.56rem', letterSpacing: '0.16em',
              color: 'rgba(196,123,60,0.4)',
            }}>
              {idx + 1} of {items.length}
            </span>

            <button
              disabled={idx === items.length - 1}
              onClick={(e) => { e.stopPropagation(); onNav(1) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.58rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontWeight: 700,
                color: idx === items.length - 1 ? 'rgba(196,123,60,0.25)' : T.accentSub,
                background: 'none', border: 'none', cursor: idx === items.length - 1 ? 'default' : 'pointer',
                padding: 0, transition: 'color 0.18s',
              }}
              onMouseEnter={e => { if (idx < items.length - 1) e.currentTarget.style.color = T.accentHot }}
              onMouseLeave={e => { e.currentTarget.style.color = idx === items.length - 1 ? 'rgba(196,123,60,0.25)' : T.accentSub }}
            >
              Next <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  function openLightbox(item) {
    setLightbox(item)
  }

  function navigateLightbox(dir) {
    const currentFiltered = activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)
    const idx = currentFiltered.findIndex(i => i.id === lightbox.id)
    const next = currentFiltered[idx + dir]
    if (next) setLightbox(next)
  }

  const currentFilteredForNav = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        .gallery-card:hover .gallery-img { transform: scale(1.07); }
        .gallery-card:hover .gallery-hover { opacity: 1 !important; }

        .filter-btn { transition: all 0.2s; }
        .filter-btn:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; }
        .filter-btn.active { background: #c47b3c !important; color: #fff !important; border-color: #c47b3c !important; }

        .tour-btn-primary { transition: background 0.2s, box-shadow 0.2s, transform 0.15s; }
        .tour-btn-primary:hover { background: #0ea5e9 !important; transform: translateY(-1px) scale(1.03); box-shadow: 0 6px 22px rgba(56,189,248,0.38) !important; }
        .tour-btn-secondary { transition: border-color 0.2s, color 0.2s, transform 0.15s; }
        .tour-btn-secondary:hover { border-color: rgba(196,123,60,0.55) !important; color: #c47b3c !important; transform: translateY(-1px) scale(1.03); }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .masonry-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
        @media (max-width: 480px) {
          .masonry-grid { grid-template-columns: 1fr; }
        }

        /* ── Lightbox mobile: stack image top, content bottom ── */
        @media (max-width: 640px) {
          .lightbox-inner {
            flex-direction: column !important;
            max-width: 100% !important;
            max-height: calc(100vh - 40px) !important;
            overflow-y: auto !important;
            border-radius: 12px !important;
          }
          .lightbox-img-pane {
            flex: 0 0 auto !important;
            width: 100% !important;
            height: 50vh !important;
            min-height: 50vh !important;
          }
          .lightbox-info-pane {
            flex: 1 1 auto !important;
            min-height: 280px !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.60)' }} />

        <div style={{
          position: 'relative', zIndex: 10,
          padding: '88px 24px 80px',
          maxWidth: 1000,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
            }}
          >
            <span style={{ display: 'block', width: 28, height: '1px', background: 'rgba(196,123,60,0.6)' }} />
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '0.62rem', letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#c47b3c',
              margin: 0, fontWeight: 700,
            }}>
              Our Gallery
            </p>
            <span style={{ display: 'block', width: 28, height: '1px', background: 'rgba(196,123,60,0.6)' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(2rem, 5vw, 3.6rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.2, marginBottom: 18,
              textAlign: 'center',
            }}
          >
            A Glimpse Into{' '}
            <em style={{ color: '#e8721c', fontStyle: 'italic', fontWeight: 400 }}>Our World</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.82 }}
            transition={{ delay: 0.3 }}
            style={{
              color: '#fff', fontSize: 17,
              maxWidth: 500, lineHeight: 1.85,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              marginBottom: 0, textAlign: 'center',
            }}
          >
            Tour our facility, meet our team, and see the technology and spaces
            where healing happens every day.
          </motion.p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
              <p style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.62rem', letterSpacing: '0.28em',
                textTransform: 'uppercase', color: T.accent,
                margin: 0, fontWeight: 700,
              }}>
                Our Facility
              </p>
              <span style={{ display: 'block', width: 32, height: '1px', background: T.accent }} />
            </div>
            <h2 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(1.85rem, 4vw, 3rem)',
              fontWeight: 700, color: T.dark,
              lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
            }}>
              Spaces Built for{' '}
              <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>Healing</span>
            </h2>
            <p style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: '0.95rem', lineHeight: 1.75,
              maxWidth: '460px', margin: '0 auto', color: T.mid,
            }}>
              Every corner of our centre is designed with care, comfort, and recovery in mind.
            </p>
          </div>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8,
            justifyContent: 'center', marginBottom: 48,
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                style={{
                  padding: '8px 20px',
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '0.65rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 700,
                  border: `1.5px solid rgba(196,123,60,0.28)`,
                  borderRadius: '999px',
                  background: 'transparent',
                  color: activeCategory === cat ? '#fff' : T.accentSub,
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={openLightbox}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p style={{
              textAlign: 'center', color: T.mid,
              padding: '80px 0',
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}>
              No images in this category.
            </p>
          )}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
            <p style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '0.62rem', letterSpacing: '0.28em',
              textTransform: 'uppercase', color: T.accent,
              margin: 0, fontWeight: 700,
            }}>
              Visit Us
            </p>
            <span style={{ display: 'block', width: 28, height: '1px', background: T.accent }} />
          </div>

          <h2 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700, color: T.dark,
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.85rem',
          }}>
            Want to{' '}
            <span style={{ color: T.accentHot, fontStyle: 'italic', fontWeight: 400 }}>See More?</span>
          </h2>

          <p style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: '0.95rem', color: T.mid,
            lineHeight: 1.75, maxWidth: '460px',
            margin: '0 auto 2rem',
          }}>
            Schedule a facility tour and meet our team in person. We'd love to
            show you around and answer all your questions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="tour-btn-primary"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '13px 32px', borderRadius: '999px',
                background: '#38bdf8', color: '#fff',
                border: '2px solid #38bdf8',
                display: 'inline-block', whiteSpace: 'nowrap',
                boxShadow: '0 4px 18px rgba(56,189,248,0.32)',
              }}
            >
              Request a Facility Tour
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="tour-btn-secondary"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '13px 32px', borderRadius: '999px',
                background: 'transparent', color: T.accentSub,
                border: `2px solid rgba(196,123,60,0.45)`,
                display: 'inline-block', whiteSpace: 'nowrap',
              }}
            >
              Watch Video Tour
            </motion.a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            item={lightbox}
            items={currentFilteredForNav}
            onClose={() => setLightbox(null)}
            onNav={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  )
}