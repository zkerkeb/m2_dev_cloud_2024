import styled from 'styled-components';
import { motion } from 'framer-motion';
import LanguageSelector from '../components/LanguageSelector';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0052FF 0%, #001B54 100%);
  color: white;
  overflow: hidden;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Helvetica Neue', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MainContent = styled.main`
  padding: 0 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
  max-width: 800px;
`;

const Subtitle = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  opacity: 0.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:first-child {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
  }
  
  &:last-child {
    background: white;
    color: #0052FF;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <Logo>Leeroy</Logo>
        <Nav>
          <NavLink href="#agence">AGENCE</NavLink>
          <NavLink href="#projets">PROJETS</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
          <LanguageSelector />
        </Nav>
      </Header>
      
      <MainContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Élever les marques dans un monde digital.
        </Title>
        
        <Subtitle>
          UNE AGENCE CREATIVE HUMAINE ET AMBITIEUSE
        </Subtitle>
        
        <ButtonContainer>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VOIR NOS PROJETS
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NOUS DÉCOUVRIR
          </Button>
        </ButtonContainer>
      </MainContent>
    </HomeContainer>
  );
};

export default Home; 