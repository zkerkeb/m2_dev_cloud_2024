import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
// import ImageGallery from './screens/ImageGallery'
// Composants statiques
import Home from './screens/Home'

// Composants lazy loadés
const About = lazy(() => import('./screens/About'))
const Contact = lazy(() => import('./screens/Contact'))
const ImageGallery = lazy(() => import('./screens/ImageGallery') )


/**
 * Composant principal de l'application
 * Utilise React Router pour la navigation et Suspense pour le lazy loading
 * @returns {JSX.Element} Le composant App
 */
function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        {/* 
          Suspense affiche un fallback pendant le chargement des composants
          C'est ici que le lazy loading entre en jeu
        */}
        <Suspense fallback={
          <LoadingWrapper>
            Chargement en cours...
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
