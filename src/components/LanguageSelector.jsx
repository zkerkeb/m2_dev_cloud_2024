import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SelectStyled = styled.select`
  padding: 8px;
  border-radius: 4px;
  color: black;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  margin: 10px;
  
  &:hover {
    border-color: #666;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    // Ajuster la direction du document pour l'arabe
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <SelectStyled value={i18n.language} onChange={changeLanguage}>
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </SelectStyled>
  );
};

export default LanguageSelector; 