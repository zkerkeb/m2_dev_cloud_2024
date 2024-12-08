import styled from 'styled-components'
import Navigation from '../../components/Navigation'


/**
 * Page d'accueil
 * Présente un exemple de lazy loading avec React
 * @returns {JSX.Element} Le composant Home
 */
const Home = () => {
  return (
    <>
      <Navigation />
      <HomeContainer>
        <Title>Démonstration du Lazy Loading avec React</Title>
        <Content>
          <h2>Comment fonctionne le Lazy Loading ?</h2>
          <p>
            Le lazy loading permet de charger les composants uniquement lorsqu'ils sont nécessaires,
            améliorant ainsi les performances de l'application.
          </p>
          <CodeExample>
            {`// Exemple de lazy loading
const MonComposant = lazy(() => import('./MonComposant'))

// Utilisation avec Suspense
<Suspense fallback={<div>Chargement...</div>}>
  <MonComposant />
</Suspense>`}
          </CodeExample>
          <p>
            Dans cette application, toutes les pages sont chargées de manière lazy.
            Vous pouvez observer le chargement en ouvrant les outils de développement (F12)
            et en naviguant entre les pages.
          </p>
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
  /* max-width: 800px; */
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