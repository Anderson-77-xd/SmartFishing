import { useState } from 'react'
import './DashboardDono.css'

function DashboardDono({ peixesDono, setPeixesDono, dadosDashboard, setDadosDashboard }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [novoPeixe, setNovoPeixe] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const adicionarPeixe = () => {
    if (novoPeixe.trim()) {
      setPeixesDono([...peixesDono, novoPeixe.trim()])
      setNovoPeixe('')
      setShowAddForm(false)
    }
  }

  const removerPeixe = (index) => {
    setPeixesDono(peixesDono.filter((_, i) => i !== index))
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="overview-content">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>📊 Visitantes Hoje</h3>
                <p className="stat-number">{dadosDashboard.stats.visitantesHoje}</p>
              </div>
              <div className="stat-card">
                <h3>🐟 Peixes Pescados</h3>
                <p className="stat-number">{dadosDashboard.stats.peixesPescados}</p>
              </div>
              <div className="stat-card">
                <h3>💰 Receita do Mês</h3>
                <p className="stat-number">{dadosDashboard.stats.receitaMes}</p>
              </div>
              <div className="stat-card">
                <h3>⭐ Avaliação Média</h3>
                <p className="stat-number">{dadosDashboard.stats.avaliacaoMedia}</p>
              </div>
            </div>
            
            <div className="overview-grid">
              <div className="recent-activity">
                <h3>Atividade Recente</h3>
                <div className="activity-list">
                  {dadosDashboard.atividades.map((atividade, index) => (
                    <div key={index} className="activity-item">
                      <span className="activity-time">{atividade.tempo}</span>
                      <span>{atividade.descricao}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="weather-info">
                <h3>🌤️ Condições do Tempo</h3>
                <div className="weather-card">
                  <div className="weather-main">
                    <span className="weather-icon">☀️</span>
                    <div className="weather-temp">
                      <span className="temp">28°C</span>
                      <span className="condition">Ensolarado</span>
                    </div>
                  </div>
                  <div className="weather-details">
                    <div className="weather-item">
                      <span>💧 Umidade: 65%</span>
                    </div>
                    <div className="weather-item">
                      <span>🌬️ Vento: 12 km/h</span>
                    </div>
                    <div className="weather-item">
                      <span>🌡️ Sensação: 31°C</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <div className="performance-section">
              <div className="revenue-chart">
                <h3>📈 Receita dos Últimos 7 Dias</h3>
                <div className="chart-container">
                  <div className="chart-bars">
                    <div className="chart-bar" style={{height: '60%'}}>
                      <span className="bar-value">R$ 180</span>
                      <span className="bar-label">Seg</span>
                    </div>
                    <div className="chart-bar" style={{height: '80%'}}>
                      <span className="bar-value">R$ 240</span>
                      <span className="bar-label">Ter</span>
                    </div>
                    <div className="chart-bar" style={{height: '45%'}}>
                      <span className="bar-value">R$ 135</span>
                      <span className="bar-label">Qua</span>
                    </div>
                    <div className="chart-bar" style={{height: '90%'}}>
                      <span className="bar-value">R$ 270</span>
                      <span className="bar-label">Qui</span>
                    </div>
                    <div className="chart-bar" style={{height: '100%'}}>
                      <span className="bar-value">R$ 300</span>
                      <span className="bar-label">Sex</span>
                    </div>
                    <div className="chart-bar" style={{height: '95%'}}>
                      <span className="bar-value">R$ 285</span>
                      <span className="bar-label">Sáb</span>
                    </div>
                    <div className="chart-bar" style={{height: '85%'}}>
                      <span className="bar-value">R$ 255</span>
                      <span className="bar-label">Dom</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="top-clients">
                <h3>🏆 Top Clientes do Mês</h3>
                <div className="clients-list">
                  <div className="client-item">
                    <div className="client-rank">1</div>
                    <div className="client-info">
                      <span className="client-name">João Silva</span>
                      <span className="client-visits">8 visitas - R$ 200</span>
                    </div>
                  </div>
                  <div className="client-item">
                    <div className="client-rank">2</div>
                    <div className="client-info">
                      <span className="client-name">Maria Santos</span>
                      <span className="client-visits">6 visitas - R$ 150</span>
                    </div>
                  </div>
                  <div className="client-item">
                    <div className="client-rank">3</div>
                    <div className="client-info">
                      <span className="client-name">Carlos Lima</span>
                      <span className="client-visits">5 visitas - R$ 125</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        )
      
      case 'pesqueiro':
        return (
          <div className="pesqueiro-content">
            <h3>Gerenciar Pesqueiro</h3>
            <div className="form-section">
              <div className="form-group">
                <label>Nome do Pesqueiro</label>
                <input type="text" defaultValue="Pesqueiro Águas Claras" />
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea rows="3" defaultValue="Pesqueiro com águas cristalinas e grande variedade de peixes."></textarea>
              </div>
              <div className="form-group">
                <label>Horário de Funcionamento</label>
                <input type="text" defaultValue="06:00 às 18:00" />
              </div>
              <div className="form-group">
                <label>Preço por Pessoa</label>
                <input type="text" defaultValue="R$ 25,00" />
              </div>
              <button className="save-btn">Salvar Alterações</button>
            </div>
          </div>
        )
      
      case 'peixes':
        return (
          <div className="peixes-content">
            <div className="peixes-header">
              <h3>Gestão de Peixes</h3>
              <button 
                className="add-btn" 
                onClick={() => setShowAddForm(!showAddForm)}
              >
                {showAddForm ? 'Cancelar' : '+ Adicionar Espécie'}
              </button>
            </div>
            
            <div className="peixes-info">
              <p>Gerencie as espécies de peixes disponíveis no seu pesqueiro</p>
            </div>
            
            {showAddForm && (
              <div className="add-peixe-form">
                <div className="form-row">
                  <input
                    type="text"
                    value={novoPeixe}
                    onChange={(e) => setNovoPeixe(e.target.value)}
                    placeholder="Nome da espécie"
                    onKeyPress={(e) => e.key === 'Enter' && adicionarPeixe()}
                  />
                  <select>
                    <option>Tamanho Médio</option>
                    <option>Pequeno (até 1kg)</option>
                    <option>Médio (1-3kg)</option>
                    <option>Grande (3-8kg)</option>
                    <option>Troféu (+8kg)</option>
                  </select>
                </div>
                <div className="form-row">
                  <input type="text" placeholder="Preço por kg (ex: R$ 18,00)" />
                  <select>
                    <option>Dificuldade</option>
                    <option>Fácil</option>
                    <option>Média</option>
                    <option>Difícil</option>
                  </select>
                </div>
                <button onClick={adicionarPeixe} className="confirm-btn">
                  Adicionar Espécie
                </button>
              </div>
            )}
            
            <div className="peixes-grid">
              {peixesDono.map((peixe, index) => (
                <div key={index} className="peixe-card">
                  <div className="peixe-header">
                    <span className="peixe-icon">🐟</span>
                    <h4>{peixe}</h4>
                    <div className="peixe-actions">
                      <button className="edit-peixe-btn">✏️</button>
                      <button 
                        className="remove-peixe-btn" 
                        onClick={() => removerPeixe(index)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  <div className="peixe-info">
                    <div className="info-item">
                      <span className="info-label">Tamanho:</span>
                      <span className="info-value">{index % 2 === 0 ? 'Médio' : 'Grande'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Dificuldade:</span>
                      <span className="info-value">{index % 3 === 0 ? 'Fácil' : 'Média'}</span>
                    </div>

                  </div>
                  
                  <div className="peixe-tags">
                    <span className="tag size">{index % 2 === 0 ? 'Médio' : 'Grande'}</span>
                    <span className="tag difficulty">{index % 3 === 0 ? 'Fácil' : 'Média'}</span>
                  </div>
                </div>
              ))}
            </div>
            

          </div>
        )
      
      case 'reservas':
        return (
          <div className="reservas-content">
            <div className="reservas-header">
              <h3>Gestão de Reservas</h3>
            </div>
            
            <div className="reservas-summary">
              <div className="summary-item">
                <span className="summary-number">15</span>
                <span className="summary-label">Total de Reservas</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">8</span>
                <span className="summary-label">Pendentes</span>
              </div>
              <div className="summary-item">
                <span className="summary-number">7</span>
                <span className="summary-label">Confirmadas</span>
              </div>
            </div>
            
            <div className="reservas-filters">
              <button className="filter-btn active">Todas</button>
              <button className="filter-btn">Pendentes</button>
              <button className="filter-btn">Confirmadas</button>
            </div>
            
            <div className="reservas-list">
              {dadosDashboard.reservas.map((reserva, index) => (
                <div key={index} className="reserva-item-expanded">
                  <div className="reserva-main-info">
                    <div className="reserva-cliente">
                      <div className="cliente-avatar">
                        {reserva.nome.charAt(0)}
                      </div>
                      <div className="cliente-details">
                        <h4>{reserva.nome}</h4>
                        <p className="cliente-contato">📞 (11) 99999-{1000 + index}</p>
                      </div>
                    </div>
                    
                    <div className="reserva-details">
                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <span>{reserva.data}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">👥</span>
                        <span>{index === 0 ? '2' : '4'} pessoas</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">💰</span>
                        <span>R$ {index === 0 ? '50,00' : '100,00'}</span>
                      </div>
                    </div>
                    
                    <div className="reserva-actions">
                      <span className={`status-badge ${reserva.status}`}>
                        {reserva.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
                      </span>
                      <div className="action-buttons">
                        {reserva.status === 'pendente' && (
                          <button className="confirm-btn">✓</button>
                        )}
                        <button className="edit-btn">✏️</button>
                        <button className="delete-btn">🗑️</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="reserva-extra-info">
                    <div className="extra-detail">
                      <strong>Observações:</strong> {index === 0 ? 'Primeira vez no pesqueiro' : 'Cliente frequente, prefere área sombreada'}
                    </div>
                    <div className="extra-detail">
                      <strong>Equipamentos:</strong> {index === 0 ? 'Próprios' : 'Aluguel de varas'}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="reserva-item-expanded">
                <div className="reserva-main-info">
                  <div className="reserva-cliente">
                    <div className="cliente-avatar">P</div>
                    <div className="cliente-details">
                      <h4>Pedro Costa</h4>
                      <p className="cliente-contato">📞 (11) 99999-1002</p>
                    </div>
                  </div>
                  
                  <div className="reserva-details">
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <span>Amanhã, 15:00 - 6 pessoas</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">👥</span>
                      <span>6 pessoas</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">💰</span>
                      <span>R$ 150,00</span>
                    </div>
                  </div>
                  
                  <div className="reserva-actions">
                    <span className="status-badge confirmada">Confirmada</span>
                    <div className="action-buttons">
                      <button className="edit-btn">✏️</button>
                      <button className="delete-btn">🗑️</button>
                    </div>
                  </div>
                </div>
                
                <div className="reserva-extra-info">
                  <div className="extra-detail">
                    <strong>Observações:</strong> Grupo de amigos, aniversariante
                  </div>
                  <div className="extra-detail">
                    <strong>Equipamentos:</strong> Aluguel completo + churrasco
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'info':
        return (
          <div className="info-content">
            <div className="info-grid">
              <div className="pesqueiro-info">
                <h3>🏢 Informações do Pesqueiro</h3>
                <div className="info-card">
                  <div className="info-item">
                    <strong>Nome:</strong> Meu Pesqueiro
                  </div>
                  <div className="info-item">
                    <strong>Endereço:</strong> Estrada Rural, Km 15 - Zona Rural
                  </div>
                  <div className="info-item">
                    <strong>Telefone:</strong> (11) 99999-1111
                  </div>
                  <div className="info-item">
                    <strong>Horário:</strong> 06:00 às 18:00
                  </div>
                  <div className="info-item">
                    <strong>Capacidade:</strong> 150 pessoas
                  </div>
                  <div className="info-item">
                    <strong>Área:</strong> 12 hectares
                  </div>
                  <div className="info-item">
                    <strong>Preço:</strong> R$ 25,00 por pessoa
                  </div>
                </div>
              </div>
              
              <div className="avaliacoes-section">
                <h3>⭐ Avaliações dos Clientes</h3>
                <div className="rating-summary">
                  <div className="rating-average">
                    <span className="rating-number">4.8</span>
                    <div className="stars">
                      <span>★★★★★</span>
                    </div>
                    <p>Baseado em 47 avaliações</p>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {dadosDashboard.avaliacoes.map((avaliacao, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <strong>{avaliacao.nome}</strong>
                        <span className="review-stars">
                          {'★'.repeat(avaliacao.estrelas)}{'☆'.repeat(5 - avaliacao.estrelas)}
                        </span>
                      </div>
                      <p>"{avaliacao.comentario}"</p>
                      <span className="review-date">{avaliacao.data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="dashboard-dono">
      <div className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>🏢 Painel do Proprietário</h1>
            <p>Gerencie seu pesqueiro de forma eficiente</p>
          </div>
          <button className="logout-btn" onClick={() => window.location.reload()}>
            🚪 Sair
          </button>
        </div>
      </div>
      
      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Visão Geral
        </button>
        <button 
          className={`nav-btn ${activeTab === 'pesqueiro' ? 'active' : ''}`}
          onClick={() => setActiveTab('pesqueiro')}
        >
          🏢 Meu Pesqueiro
        </button>
        <button 
          className={`nav-btn ${activeTab === 'peixes' ? 'active' : ''}`}
          onClick={() => setActiveTab('peixes')}
        >
          🐟 Peixes
        </button>
        <button 
          className={`nav-btn ${activeTab === 'reservas' ? 'active' : ''}`}
          onClick={() => setActiveTab('reservas')}
        >
          📅 Reservas
        </button>
        <button 
          className={`nav-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          📋 Informações & Avaliações
        </button>
      </div>
      
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default DashboardDono