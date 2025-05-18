// components/ShowroomGallery.tsx
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ShowroomGalleryProps {
  images: {
    src: string;
    alt: string;
    description?: string;
  }[];
}

export default function ShowroomGallery({ images }: ShowroomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`showroom-gallery ${isFullscreen ? 'fullscreen' : ''}`}>
      <h2>SHOWROOM VIRTUAL</h2>
      <p>Conoce nuestro showroom sin salir de la comodidad de tu hogar</p>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={goToPrev} aria-label="Anterior">
          &lt;
        </button>
        
        <div className="carousel">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {img.description && (
                <div className="image-description">
                  <p>{img.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={goToNext} aria-label="Siguiente">
          &gt;
        </button>
      </div>
      
      <div className="controls">
        <button onClick={toggleFullscreen} className="fullscreen-button">
          {isFullscreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
        </button>
        <div className="indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <h4>Experiencia Visual</h4>
      <p>Recuerda que puedes ver las imágenes en pantalla completa para una mejor experiencia.</p>
      
      <style jsx>{`
        .showroom-gallery {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          position: relative;
        }
        
        .showroom-gallery.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          z-index: 1000;
          overflow: auto;
          padding: 2rem;
        }
        
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        
        p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
        }
        
        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;
        }
        
        .carousel {
          width: 100%;
          height: 500px;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
        
        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
          transform: translateX(${(currentIndex) => -100 * currentIndex}%);
        }
        
        .carousel-item.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .nav-button {
          position: absolute;
          background: rgba(255, 255, 255, 0.7);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .nav-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.1);
        }
        
        .prev {
          left: 20px;
        }
        
        .next {
          right: 20px;
        }
        
        .image-description {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          text-align: center;
        }
        
        .controls {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .fullscreen-button {
          background: #333;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .fullscreen-button:hover {
          background: #555;
          transform: translateY(-2px);
        }
        
        .indicators {
          display: flex;
          gap: 0.5rem;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ccc;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: #333;
          transform: scale(1.2);
        }
        
        h4 {
          font-size: 1.8rem;
          margin: 2rem 0 1rem;
          color: #333;
        }
        
        @media (max-width: 768px) {
          .carousel {
            height: 350px;
          }
          
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}