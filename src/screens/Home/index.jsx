import styled from 'styled-components'
import Navigation from '../../components/Navigation'
import { useTranslation } from 'react-i18next'

/**
 * Page d'accueil
 * Présente un exemple de lazy loading avec React
 * @returns {JSX.Element} Le composant Home
 */
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <HomeContainer>
        <Title>{t('home.title')}</Title>
        <Content>
          <h2>{t('home.subtitle')}</h2>
          <p>{t('home.description')}</p>
          <CodeExample>
            {`// ${t('home.example.title')}
const MonComposant = lazy(() => import('./MonComposant'))

// ${t('home.example.usage')}
<Suspense fallback={<div>${t('messages.loading')}</div>}>
  <MonComposant />
</Suspense>`}
          </CodeExample>
          <p>{t('home.explanation')}</p>
        </Content>
      </HomeContainer>
    </>
  )
}

// Styled Components
const HomeContainer = styled.div`
  padding: 2rem;
`

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CodeExample = styled.pre`
  background-color: #222222;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
`

export default Home 