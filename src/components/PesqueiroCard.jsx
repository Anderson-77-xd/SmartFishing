import './PesqueiroCard.css'



function PesqueiroCard({ pesqueiro, onClick }) {
  return (
    <div className="pesqueiro-card" onClick={onClick}>
      <div className="card-header">
        <h3>{pesqueiro.nome}</h3>
        <div className="rating">
          <span className="stars">{'★'.repeat(Math.floor(pesqueiro.avaliacao))}</span>
          <span className="rating-number">{pesqueiro.avaliacao}</span>
        </div>
      </div>
      
      <div className="card-content">
        <p className="descricao">{pesqueiro.descricao}</p>
        
        <div className="info-simple">
          <div className="info-row">
            <span>🕒 {pesqueiro.horario}</span>
            <span>💰 {pesqueiro.detalhes.preco}</span>
          </div>
        </div>
        
        <div className="peixes-preview">
          <span className="peixes-label">🐟</span>
          <div className="peixes-tags">
            {pesqueiro.peixes.slice(0, 3).map((peixe, index) => (
              <span key={index} className="peixe-tag-small">{peixe}</span>
            ))}
            {pesqueiro.peixes.length > 3 && (
              <span className="peixe-tag-small more">+{pesqueiro.peixes.length - 3}</span>
            )}
          </div>
        </div>
        
        <button className="reservar-btn" onClick={(e) => e.stopPropagation()}>Ver Detalhes</button>
      </div>
    </div>
  )
}

export default PesqueiroCard