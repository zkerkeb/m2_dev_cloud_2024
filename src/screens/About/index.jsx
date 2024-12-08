import styled from 'styled-components'
import Navigation from '../../components/Navigation'

// Styled Components
const AboutContainer = styled.div`
  padding: 2rem;
`

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`

const Content = styled.div`
  padding: 2rem;
  background-color:#333333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const PerformanceSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #222;
  border-radius: 4px;
`

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #007bff;
    }
  }
`

/**
 * Page À propos
 * Explique les avantages du lazy loading et son impact sur les performances
 * @returns {JSX.Element} Le composant About
 */
const About = () => {
  return (
    <>
      <Navigation />
      <AboutContainer>
        <Title>À propos du Lazy Loading</Title>
        <Content>
          <h2>Pourquoi utiliser le Lazy Loading ?</h2>
          <p>
            Le lazy loading est une technique d'optimisation qui consiste à retarder
            le chargement de certaines parties de votre application jusqu'à ce qu'elles
            soient réellement nécessaires.
          </p>

          <PerformanceSection>
            <h3>Avantages pour les performances :</h3>
            <BenefitsList>
              <li>Réduction du temps de chargement initial</li>
              <li>Optimisation de l'utilisation des ressources</li>
              <li>Amélioration de l'expérience utilisateur</li>
              <li>Réduction de la consommation de données</li>
            </BenefitsList>
          </PerformanceSection>

          <p>
            Cette page elle-même est chargée de manière lazy ! Vous pouvez vérifier
            dans l'onglet Network des outils de développement que le code de cette
            page n'est chargé que lorsque vous naviguez vers elle.
          </p>
        </Content>
      </AboutContainer>
    </>
  )
}

export default About 