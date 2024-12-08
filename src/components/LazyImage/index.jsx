import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ thumbnail }) => `url(${thumbnail})`};
  background-size: cover;
  filter: blur(10px);
  opacity: ${({ isLoaded }) => (isLoaded ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const LazyImage = ({ src, alt, placeholderSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // Configuration de l'Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% de l'image est visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageContainer ref={imageRef}>
      <Placeholder 
        thumbnail={placeholderSrc}
        isLoaded={isLoaded}
      />
      {isVisible && (
        <StyledImage
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          isLoaded={isLoaded}
        />
      )}
    </ImageContainer>
  );
};

export default LazyImage; 