import { useState } from 'react'
import styled from 'styled-components'
import Navigation from '../../components/Navigation'



/**
 * Page Contact
 * Formulaire de contact avec gestion d'état et validation
 * @returns {JSX.Element} Le composant Contact
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation d'envoi de formulaire
    console.log('Formulaire soumis:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <>
      <Navigation />
      <ContactContainer>
        <Title>Contactez-nous</Title>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
              />
            </FormGroup>

            <Button type="submit" disabled={!isFormValid}>
              Envoyer
            </Button>
          </Form>

          {isSubmitted && (
            <SuccessMessage>
              Merci pour votre message ! Nous vous répondrons bientôt.
            </SuccessMessage>
          )}
        </FormContainer>
      </ContactContainer>
    </>
  )
}

// Styled Components
const ContactContainer = styled.div`
  padding: 2rem;
`

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  /* max-width: 600px; */
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #333;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
`


export default Contact 