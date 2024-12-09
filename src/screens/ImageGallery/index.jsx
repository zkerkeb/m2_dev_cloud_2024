import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import LazyImage from '../../components/LazyImage';
import { useTranslation } from 'react-i18next';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const ImageGallery = () => {
  const { t } = useTranslation();

  // Array d'images 4K
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800',
      alt: t('gallery.images.nature')
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800',
      alt: t('gallery.images.mountain')
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?q=80&w=800',
      alt: t('gallery.images.forest')
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
      alt: t('gallery.images.lake')
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800',
      alt: t('gallery.images.aurora')
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=800',
      alt: t('gallery.images.waterfall')
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
      alt: t('gallery.images.valley')
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800',
      alt: t('gallery.images.sunset')
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=800',
      alt: t('gallery.images.ocean')
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800',
      alt: t('gallery.images.desert')
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800',
      alt: t('gallery.images.prairie')
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800',
      alt: t('gallery.images.snowy')
    }
  ];

  return (
    <GalleryContainer>
      <Navigation />
      <Title>{t('gallery.title')}</Title>
      <ImageGrid>
        {images.map((image) => (
          <ImageWrapper key={image.id}>
            <LazyImage
              src={image.src}
              alt={image.alt}
              placeholderSrc={`${image.src}&w=50`}
            />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </GalleryContainer>
  );
};

export default ImageGallery;
