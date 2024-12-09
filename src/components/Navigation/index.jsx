import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

// Styled Components
const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`

const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    color: #007bff;
    background-color: #e6f0ff;
  }
`

/**
 * Composant de navigation principal
 * Utilise NavLink de react-router-dom pour la navigation
 * avec des styles conditionnels pour le lien actif
 * @returns {JSX.Element} Le composant Navigation
 */
const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="/">{t('navigation.home')}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">{t('navigation.about')}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">{t('navigation.contact')}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/gallery">{t('navigation.gallery')}</StyledNavLink>
        </li>
      </NavList>
    </Nav>
  )
}

export default Navigation 