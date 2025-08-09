import { useState } from 'react'
import './Login.css'

function Login({  onLogin }) {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [userType, setUserType] = useState('cliente') // 'cliente' ou 'dono'
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    confirmarSenha: '',
    nomePesqueiro: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isLoginMode) {
      // Login
      if (formData.email && formData.senha) {
        const loginMessage = userType === 'dono' 
          ? 'Login realizado como Dono de Pesqueiro!' 
          : 'Login realizado como Pescador!'
        alert(loginMessage)
        onLogin(userType)
      } else {
        alert('Por favor, preencha todos os campos!')
      }
    } else {
      // Cadastro
      if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
        alert('Preencha todos os campos!')
        return
      }
      
      if (userType === 'dono' && !formData.nomePesqueiro) {
        alert('Informe o nome do pesqueiro!')
        return
      }
      
      if (formData.senha !== formData.confirmarSenha) {
        alert('As senhas não coincidem!')
        return
      }
      
      alert('Conta criada com sucesso!')
      setIsLoginMode(true)
      setFormData({ email: '', senha: '', nome: '', confirmarSenha: '', nomePesqueiro: '' })
    }
  }

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode)
    setFormData({ email: '', senha: '', nome: '', confirmarSenha: '', nomePesqueiro: '' })
    setUserType('cliente')
  }

  return (
    <div className="login-overlay">
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <h1>🎣 SmartFishing</h1>
            <p>Descubra os melhores pesqueiros e viva experiências únicas de pesca!</p>
          </div>
          <div className="login-features">
            <div className="feature">
              <span className="feature-icon">📍</span>
              <div>
                <h4>Localização dos Melhores Pesqueiros</h4>
                <p>Encontre os pesqueiros mais bem avaliados da região</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🐟</span>
              <div>
                <h4>Catálogo Completo de Peixes</h4>
                <p>Saiba quais espécies você pode encontrar em cada local</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <div>
                <h4>Avaliações e Dicas</h4>
                <p>Acesse avaliações reais e dicas de outros pescadores</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>{isLoginMode ? 'Bem-vindo de volta!' : 'Crie sua conta'}</h2>
              <p>{isLoginMode ? 'Entre na sua conta para continuar' : 'Junte-se à comunidade de pescadores'}</p>
            </div>
            
            <div className="user-type-selector">
              <button 
                type="button"
                className={`type-btn ${userType === 'cliente' ? 'active' : ''}`}
                onClick={() => setUserType('cliente')}
              >
                🎣 Pescador
              </button>
              <button 
                type="button"
                className={`type-btn ${userType === 'dono' ? 'active' : ''}`}
                onClick={() => setUserType('dono')}
              >
                🏢 Dono de Pesqueiro
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              {!isLoginMode && (
                <div className="form-group">
                  <label>{userType === 'dono' ? 'Nome do Responsável' : 'Nome Completo'}</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder={userType === 'dono' ? 'Nome do responsável pelo pesqueiro' : 'Seu nome completo'}
                    required={!isLoginMode}
                  />
                </div>
              )}
              
              {!isLoginMode && userType === 'dono' && (
                <div className="form-group">
                  <label>Nome do Pesqueiro</label>
                  <input
                    type="text"
                    name="nomePesqueiro"
                    value={formData.nomePesqueiro}
                    onChange={handleChange}
                    placeholder="Nome do seu pesqueiro"
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <label>Email</label>
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
                <label>Senha</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Sua senha"
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
              </div>
              
              {!isLoginMode && (
                <div className="form-group">
                  <label>Confirmar Senha</label>
                  <input
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    placeholder="Confirme sua senha"
                    required={!isLoginMode}
                  />
                </div>
              )}
              
              <button type="submit" className="login-btn">
                {isLoginMode ? 'Entrar' : 'Criar Conta'}
              </button>
            </form>
            
            <div className="login-divider">
              <span>ou</span>
            </div>
            
            <div className="social-login">
              <button className="social-btn google">
                <span>G</span> Continuar com Google
              </button>
              <button className="social-btn facebook">
                <span>f</span> Continuar com Facebook
              </button>
            </div>
            
            <div className="login-footer">
              <p>
                {isLoginMode ? 'Não tem conta?' : 'Já tem conta?'}
                <button onClick={toggleMode} className="toggle-btn">
                  {isLoginMode ? 'Cadastre-se' : 'Faça login'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login