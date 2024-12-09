import styled from 'styled-components'
import Navigation from '../../components/Navigation'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <AboutContainer>
        <Title>{t('about.title')}</Title>
        <Content>
          <h2>{t('about.subtitle')}</h2>
          <p>{t('about.description')}</p>

          <PerformanceSection>
            <h3>{t('about.performance.title')}</h3>
            <BenefitsList>
              <li>{t('about.performance.benefits.initial')}</li>
              <li>{t('about.performance.benefits.resources')}</li>
              <li>{t('about.performance.benefits.experience')}</li>
              <li>{t('about.performance.benefits.data')}</li>
            </BenefitsList>
          </PerformanceSection>

          <p>{t('about.verification')}</p>
        </Content>
      </AboutContainer>
    </>
  )
}

export default About 