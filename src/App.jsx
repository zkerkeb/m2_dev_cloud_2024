import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'

// Composants statiques
import Home from './screens/Home'

// Composants lazy loadés
const About = lazy(() => import('./screens/About'))
const Contact = lazy(() => import('./screens/Contact'))
const ImageGallery = lazy(() => import('./screens/ImageGallery'))

/**
 * Composant principal de l'application
 * Utilise React Router pour la navigation et Suspense pour le lazy loading
 * @returns {JSX.Element} Le composant App
 */
function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header>
          <LanguageSelector />
        </Header>
        <Suspense fallback={
          <LoadingWrapper>
            {t('messages.loading')}
          </LoadingWrapper>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<ImageGallery />} />
          </Routes>
        </Suspense>
      </AppWrapper>
    </BrowserRouter>
  )
}

// Styled Components
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #333;
`

const AppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #f5f5f5;
`

export default App
