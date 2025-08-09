import './PesqueiroDetalhes.css'

function PesqueiroDetalhes({ pesqueiro, onBack }) {
  return (
    <div className="pesqueiro-detalhes">
      <div className="detalhes-container">
        <button className="back-btn" onClick={onBack}>
          ← Voltar
        </button>
        
        <div className="detalhes-header">
          <div className="header-info">
            <h1>{pesqueiro.nome}</h1>
            <div className="rating-detalhes">
              <span className="stars">{'★'.repeat(Math.floor(pesqueiro.avaliacao))}</span>
              <span className="rating-number">{pesqueiro.avaliacao}/5.0</span>
            </div>
            <p className="descricao-completa">{pesqueiro.descricao}</p>
          </div>
        </div>
        
        <div className="specs-grid">
          <div className="spec-card">
            <h4>🏞️ Área Total</h4>
            <p>{pesqueiro.area}</p>
          </div>
          <div className="spec-card">
            <h4>👥 Capacidade</h4>
            <p>{pesqueiro.capacidade}</p>
          </div>
          <div className="spec-card">
            <h4>🌊 Profundidade</h4>
            <p>{pesqueiro.profundidade}</p>
          </div>
          <div className="spec-card">
            <h4>🕒 Horário</h4>
            <p>{pesqueiro.horario}</p>
          </div>
        </div>
        
        <div className="detalhes-grid">
          <div className="info-card">
            <h3>📍 Localização</h3>
            <p>{pesqueiro.detalhes.endereco}</p>
          </div>
          
          <div className="info-card">
            <h3>📞 Contato</h3>
            <p>{pesqueiro.detalhes.telefone}</p>
          </div>
          
          <div className="info-card">
            <h3>💰 Entrada</h3>
            <p>{pesqueiro.detalhes.preco}</p>
          </div>
          
          <div className="info-card">
            <h3>⚖️ Preço por Kg</h3>
            <p>{pesqueiro.detalhes.precoKg}</p>
          </div>
        </div>
        
        <div className="modalidades-section">
          <h3>🎣 Modalidades de Pesca</h3>
          <div className="modalidades-grid">
            {pesqueiro.modalidades.map((modalidade, index) => (
              <div key={index} className="modalidade-card">
                {modalidade}
              </div>
            ))}
          </div>
        </div>
        
        <div className="catalogo-section">
          <h3>🐟 Catálogo de Peixes</h3>
          <div className="peixes-grid">
            {pesqueiro.peixes.map((peixe, index) => (
              <div key={index} className="peixe-card">
                <span className="peixe-nome">{peixe}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="iscas-section">
          <h3>🪱 Iscas Disponíveis</h3>
          <div className="iscas-grid">
            {pesqueiro.detalhes.iscasDisponiveis.map((isca, index) => (
              <div key={index} className="isca-item">
                • {isca}
              </div>
            ))}
          </div>
        </div>
        
        <div className="facilidades-section">
          <h3>🏢 Facilidades</h3>
          <div className="facilidades-grid">
            {pesqueiro.facilidades.map((facilidade, index) => (
              <div key={index} className="facilidade-item">
                ✓ {facilidade}
              </div>
            ))}
          </div>
        </div>
        
        <div className="equipamentos-section">
          <h3>🎣 Equipamentos Inclusos</h3>
          <div className="equipamentos-grid">
            {pesqueiro.detalhes.equipamentos.map((equipamento, index) => (
              <div key={index} className="equipamento-item">
                ✓ {equipamento}
              </div>
            ))}
          </div>
        </div>
        
        {pesqueiro.isDono && (
          <>
            <div className="dashboard-stats">
              <h3>📈 Estatísticas do Seu Pesqueiro</h3>
              <div className="stats-grid-detalhes">
                <div className="stat-item">
                  <span className="stat-number">{pesqueiro.stats.visitantesHoje}</span>
                  <span className="stat-label">Visitantes Hoje</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{pesqueiro.stats.peixesPescados}</span>
                  <span className="stat-label">Peixes Pescados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{pesqueiro.stats.receitaMes}</span>
                  <span className="stat-label">Receita do Mês</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{pesqueiro.stats.avaliacaoMedia}</span>
                  <span className="stat-label">Avaliação Média</span>
                </div>
              </div>
            </div>
            
            <div className="atividade-recente">
              <h3>🕰️ Atividade Recente</h3>
              <div className="atividades-list">
                {pesqueiro.atividades.map((atividade, index) => (
                  <div key={index} className="atividade-item">
                    <span className="atividade-tempo">{atividade.tempo}</span>
                    <span>{atividade.descricao}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reservas-dono">
              <h3>📅 Reservas</h3>
              <div className="reservas-list-detalhes">
                {pesqueiro.reservas.map((reserva, index) => (
                  <div key={index} className="reserva-item-detalhes">
                    <div className="reserva-info-detalhes">
                      <h4>{reserva.nome}</h4>
                      <p>📅 {reserva.data}</p>
                    </div>
                    <span className={`status-detalhes ${reserva.status}`}>
                      {reserva.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="avaliacoes-dono">
              <h3>⭐ Avaliações dos Clientes</h3>
              <div className="avaliacoes-list-detalhes">
                {pesqueiro.avaliacoes.map((avaliacao, index) => (
                  <div key={index} className="avaliacao-item-detalhes">
                    <div className="avaliacao-header">
                      <strong>{avaliacao.nome}</strong>
                      <span className="estrelas-detalhes">
                        {'★'.repeat(avaliacao.estrelas)}{'☆'.repeat(5 - avaliacao.estrelas)}
                      </span>
                    </div>
                    <p>"{avaliacao.comentario}"</p>
                    <span className="avaliacao-data">{avaliacao.data}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        
        <div className="acao-section">
          <button className="reservar-grande-btn">
            {pesqueiro.isDono ? 'Gerenciar Pesqueiro' : 'Fazer Reserva'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PesqueiroDetalhes