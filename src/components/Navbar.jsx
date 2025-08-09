import './Navbar.css'

function Navbar({ onLoginClick, isLoggedIn, onLogout, onNavigate, currentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
           SmartFishing
        </div>
        
        <ul className="nav-menu">
          <li>
            <button 
              onClick={() => onNavigate('home')} 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Início
            </button>
          </li>
          <li className="dropdown">
            <button 
              onClick={() => {
                onNavigate('home')
                setTimeout(() => {
                  const pesqueirosSection = document.getElementById('pesqueiros')
                  if (pesqueirosSection) {
                    pesqueirosSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100)
              }} 
              className="nav-link dropdown-btn"
            >
               Pesqueiros
            </button>
            <div className="dropdown-content">
       
            </div>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('sobre')} 
              className={`nav-link ${currentPage === 'sobre' ? 'active' : ''}`}
            >
              Sobre
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('contato')} 
              className={`nav-link ${currentPage === 'contato' ? 'active' : ''}`}
            >
               Contato
            </button>
          </li>
        </ul>
        
        <div className="nav-auth">
          {isLoggedIn ? (
            <button onClick={onLogout} className="auth-btn">Sair</button>
          ) : (
            <button onClick={onLoginClick} className="auth-btn">Entrar</button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar