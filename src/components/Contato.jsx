import { useState } from 'react'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
  }

  return (
    <div className="contato-page">
      <div className="contato-container">
        <div className="contato-header">
          <h1>📞 Entre em Contato</h1>
          <p>Tem alguma dúvida sobre os pesqueiros? Precisa de informações? Estamos aqui para ajudar!</p>
        </div>

        <div className="contato-content">
          <div className="contato-info">
            <h2>Informações de Contato</h2>
            
            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>Av. dos Pescadores, 1234<br />Centro - São Paulo - SP<br />CEP: 01234-567</p>
            </div>

            <div className="info-item">
              <h3>📞 Telefones</h3>
              <p>WhatsApp: (11) 99999-8888<br />Fixo: (11) 3333-4444</p>
            </div>

            <div className="info-item">
              <h3>📧 Email</h3>
              <p>contato@smartfishing.com.br<br />suporte@smartfishing.com.br</p>
            </div>

            <div className="info-item">
              <h3>🕒 Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h<br />Sábados: 8h às 16h<br />Domingos e Feriados: 9h às 15h</p>
            </div>
          </div>

          <div className="contato-form">
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome Completo:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Telefone:</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mensagem:</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreve aqui sua mensagem, dúvida ou o que você quiser saber..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="enviar-btn">Enviar Mensagem</button>
            </form>
          </div>
        </div>

        <div className="mapa-section">
          <h2>Nossa Localização</h2>
          <div className="mapa-placeholder">
            <p>🗺️ Mapa interativo em breve</p>
            <p>Estamos localizados no centro da cidade, com fácil acesso e estacionamento gratuito.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato