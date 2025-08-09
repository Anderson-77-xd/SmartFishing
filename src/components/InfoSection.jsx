import './InfoSection.css'

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-header">
          <h2>Por que escolher o SmartFishing?</h2>
          <p>A plataforma mais completa para pescadores encontrarem os melhores pesqueiros</p>
        </div>
        
        <div className="info-features">
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <div>
              <h3>Localização Precisa</h3>
              <p>Endereços completos e direções para chegar facilmente aos pesqueiros</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🐟</span>
            <div>
              <h3>Catálogo de Peixes</h3>
              <p>Saiba exatamente quais espécies você pode encontrar em cada local</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <div>
              <h3>Avaliações Reais</h3>
              <p>Comentários e dicas valiosas de outros pescadores experientes</p>
            </div>
          </div>
        </div>
        
        <div className="info-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Pesqueiros Cadastrados</span>
          </div>
          <div className="stat">
            <span className="stat-number">1.2k+</span>
            <span className="stat-label">Pescadores Ativos</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Avaliação Média</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Suporte Online</span>
          </div>
        </div>
        
        <div className="info-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">🕰️</span>
            <div>
              <h4>Atualizado Diariamente</h4>
              <p>Informações sempre atualizadas com novos pesqueiros e dados</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎆</span>
            <div>
              <h4>Totalmente Gratuito</h4>
              <p>Sem taxas, mensalidades ou custos ocultos para usar</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📱</span>
            <div>
              <h4>Acesso Mobile</h4>
              <p>Use em qualquer dispositivo, a qualquer hora e lugar</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🤝</span>
            <div>
              <h4>Comunidade Ativa</h4>
              <p>Conecte-se com outros pescadores e compartilhe experiências</p>
            </div>
          </div>
        </div>
        
        <div className="info-cta">
          <h3>Pronto para sua próxima pescaria?</h3>
          <p>Junte-se a milhares de pescadores que já encontraram seus pesqueiros favoritos</p>
          <button className="cta-btn">Começar Agora</button>
        </div>
      </div>
    </section>
  )
}

export default InfoSection