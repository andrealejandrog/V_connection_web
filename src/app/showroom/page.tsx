// app/showroom/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const showroomImages = [
  {
    src: '/showroom/1.jpg',
    alt: 'Vista panorámica del showroom',
    description: 'Nuestro showroom con la colección completa'
  },
  {
    src: '/showroom/2.jpg',
    alt: 'Área de exhibición principal',
    description: 'Productos destacados de esta temporada'
  },
  {
    src: '/showroom/3.jpg',
    alt: 'Detalle de productos',
    description: 'Acércate y descubre la calidad de nuestros materiales'
  },
  {
    src: '/showroom/4.jpg',
    alt: 'Zona de atención al cliente',
    description: 'Nuestro equipo listo para atenderte'
  },
];

export default function ShowroomPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Animaciones con Intersection Observer
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Auto-rotación
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showroomImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, showroomImages.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + showroomImages.length) % showroomImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % showroomImages.length);
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <main className="showroom-main">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`hero ${heroInView ? 'in-view' : ''}`}
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <div className="heroContent">
          <div className="heroText">
            <h1 className="heroTitle">
              <span className="titleGradient">SHOWROOM VIRTUAL</span>
            </h1>
            <p className="heroSubtitle">
              Conoce nuestro espacio exclusivo desde cualquier dispositivo y descubre la excelencia de nuestros productos
            </p>
            <div className="buttonGroup">
              <button className="ctaButton">
                Ver productos
                <span className="buttonArrow">→</span>
              </button>
              <button className="secondaryButton">
                Contactar asesor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        ref={galleryRef}
        className={`gallery-section ${galleryInView ? 'in-view' : ''}`}
      >
        <div className="sectionHeader">
          <span className="sectionBadge">EXPERIENCIA INMERSIVA</span>
          <h2 className="sectionTitle">Explora Nuestro Showroom</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Desliza para descubrir los diferentes espacios y productos que tenemos para ofrecerte
          </p>
        </div>

        <div className="gallery-container" ref={sliderRef}>
          <button className="nav-button prev" onClick={goToPrev} aria-label="Imagen anterior">
            &lt;
          </button>
          
          <div className="gallery-slider">
            {showroomImages.map((image, index) => (
              <div 
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-image"
                  priority={index < 2}
                />
                {image.description && (
                  <div className="image-caption">
                    <p>{image.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button className="nav-button next" onClick={goToNext} aria-label="Siguiente imagen">
            &gt;
          </button>
        </div>
        
        <div className="gallery-indicators">
          {showroomImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section 
        ref={infoRef}
        className={`info-section ${infoInView ? 'in-view' : ''}`}
        style={{ background: '#f8fafc' }}
      >
        <div className="sectionHeader">
          <span className="sectionBadge">VISÍTANOS</span>
          <h2 className="sectionTitle">Vive la Experiencia Completa</h2>
        </div>

        <div className="info-cards">
          <div className="featureItem">
            <div className="featureIcon">📍</div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Visita Presencial</h4>
              <p style={{ color: '#64748b' }}>
                Agenda una cita para conocer nuestros productos en persona y recibir asesoría personalizada
              </p>
              <button className="ctaButton" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
                Agendar visita
              </button>
            </div>
          </div>

          {/* <div className="featureItem">
            <div className="featureIcon">📱</div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Tour Virtual 360°</h4>
              <p style={{ color: '#64748b' }}>
                Explora nuestro showroom con una experiencia inmersiva de realidad virtual
              </p>
              <button className="secondaryButton" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
                Iniciar tour
              </button>
            </div>
          </div> */}
{/* 
          <div className="featureItem">
            <div className="featureIcon">📦</div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Entrega a Domicilio</h4>
              <p style={{ color: '#64748b' }}>
                Pide muestras de productos para verlos en tu espacio antes de tomar una decisión
              </p>
              <button className="ctaButton" style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
                Solicitar muestras
              </button>
            </div>
          </div> */}
        </div>
      </section>

      <style jsx>{`
        .showroom-main {
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          background: #ffffff;
          overflow-x: hidden;
        }
        
        /* Animaciones */
        .hero, .gallery-section, .info-section {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .hero.in-view {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .gallery-section.in-view {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
        
        .info-section.in-view {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hero Section */
        .hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: 6rem 2rem;
          position: relative;
        }
        
        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        
        .heroText {
          max-width: 600px;
        }
        
        .heroTitle {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 2rem;
        }
        
        .titleGradient {
          background: linear-gradient(90deg, #818cf8 0%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .heroSubtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .buttonGroup {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        
        .ctaButton {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
        
        .ctaButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        
        .buttonArrow {
          transition: transform 0.3s ease;
        }
        
        .ctaButton:hover .buttonArrow {
          transform: translateX(4px);
        }
        
        .secondaryButton {
          background: transparent;
          color: #818cf8;
          border: 2px solid #818cf8;
          padding: 1rem 2rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .secondaryButton:hover {
          background: rgba(129, 140, 248, 0.1);
        }
        
        /* Gallery Section */
        .gallery-section {
          padding: 6rem 2rem;
          background: #ffffff;
        }
        
        .sectionHeader {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .sectionBadge {
          display: inline-block;
          background: #e0e7ff;
          color: #6366f1;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .sectionTitle {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
        }
        
        .gallery-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto 3rem;
          display: flex;
          align-items: center;
        }
        
        .gallery-slider {
          width: 100%;
          height: 600px;
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.1);
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .slide.active {
          opacity: 1;
        }
        
        .gallery-image {
          object-fit: cover;
        }
        
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.7);
          color: white;
          padding: 1.5rem;
          text-align: center;
        }
        
        .nav-button {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #0f172a;
        }
        
        .nav-button:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }
        
        .prev {
          left: -30px;
        }
        
        .next {
          right: -30px;
        }
        
        .gallery-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 2rem;
        }
        
        .indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: #6366f1;
          transform: scale(1.2);
        }
        
        /* Info Section */
        .info-section {
          padding: 6rem 2rem;
        }
        
        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .featureItem {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.03);
          transition: transform 0.3s ease;
        }
        
        .featureItem:hover {
          transform: translateY(-5px);
        }
        
        .featureIcon {
          font-size: 1.75rem;
          color: #6366f1;
          background: #e0e7ff;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .heroTitle {
            font-size: 2.8rem;
          }
          
          .gallery-slider {
            height: 500px;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 50vh;
            padding: 4rem 1.5rem;
          }
          
          .heroTitle {
            font-size: 2.2rem;
          }
          
          .heroSubtitle {
            font-size: 1.1rem;
          }
          
          .buttonGroup {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .gallery-slider {
            height: 400px;
          }
          
          .nav-button {
            width: 50px;
            height: 50px;
          }
          
          .prev {
            left: -15px;
          }
          
          .next {
            right: -15px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-slider {
            height: 300px;
          }
          
          .sectionTitle {
            font-size: 2rem;
          }
          
          .info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}