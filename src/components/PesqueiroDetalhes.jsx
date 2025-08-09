import { useState } from 'react'
import './PesqueiroDetalhes.css'

function PesqueiroDetalhes({ pesqueiro, onBack }) {
  const [selectedPeixe, setSelectedPeixe] = useState(null)

  const peixesInfo = {
    'Tucunaré': {
      nome: 'Tucunaré',
      nomecientifico: 'Cichla spp.',
      descricao: 'Peixe carnívoro de água doce, muito apreciado na pesca esportiva.',
      tamanho: 'Médio a Grande (1-8kg)',
      habitat: 'Águas calmas com vegetação',
      isca: 'Lambari vivo, iscas artificiais',
      dificuldade: 'Média',
      melhorhorario: '06:00-09:00 e 17:00-19:00',
      dicas: 'Prefere locais com estruturas submersas como troncos e pedras.'
    },
    'Dourado': {
      nome: 'Dourado',
      nomecientifico: 'Salminus brasiliensis',
      descricao: 'Conhecido como "rei do rio", é um dos peixes mais desejados pelos pescadores.',
      tamanho: 'Grande (3-15kg)',
      habitat: 'Corredeiras e águas oxigenadas',
      isca: 'Tuvira, lambari, iscas artificiais',
      dificuldade: 'Difícil',
      melhorhorario: '05:00-08:00 e 16:00-18:00',
      dicas: 'Peixe muito brigador, use equipamentos resistentes.'
    },
    'Pintado': {
      nome: 'Pintado',
      nomecientifico: 'Pseudoplatystoma corruscans',
      descricao: 'Grande bagre de couro com manchas características.',
      tamanho: 'Grande (5-30kg)',
      habitat: 'Fundo de rios e lagoas',
      isca: 'Pedaços de peixe, minhocuçu',
      dificuldade: 'Média',
      melhorhorario: '18:00-06:00 (noturno)',
      dicas: 'Pesca melhor durante a noite, use iscas no fundo.'
    },
    'Pacu': {
      nome: 'Pacu',
      nomecientifico: 'Piaractus mesopotamicus',
      descricao: 'Peixe onívoro, parente da piranha, mas de hábitos pacíficos.',
      tamanho: 'Médio (1-5kg)',
      habitat: 'Águas calmas com vegetação',
      isca: 'Milho, frutas, massas',
      dificuldade: 'Fácil',
      melhorhorario: '07:00-11:00 e 14:00-17:00',
      dicas: 'Gosta de iscas vegetais, especialmente milho e frutas.'
    },
    'Traíra': {
      nome: 'Traíra',
      nomecientifico: 'Hoplias malabaricus',
      descricao: 'Peixe carnívoro agressivo, excelente para iniciantes.',
      tamanho: 'Pequeno a Médio (0.5-3kg)',
      habitat: 'Águas rasas com vegetação',
      isca: 'Minhoca, lambari, rã',
      dificuldade: 'Fácil',
      melhorhorario: '06:00-10:00 e 16:00-19:00',
      dicas: 'Ataca qualquer isca em movimento, ideal para iniciantes.'
    },
    'Surubim': {
      nome: 'Surubim',
      nomecientifico: 'Pseudoplatystoma fasciatum',
      descricao: 'Bagre de grande porte com listras características.',
      tamanho: 'Grande (3-20kg)',
      habitat: 'Fundo de rios com correnteza',
      isca: 'Pedaços de peixe, coração',
      dificuldade: 'Média',
      melhorhorario: '18:00-06:00 (noturno)',
      dicas: 'Pesca noturna é mais eficaz, use iscas no fundo.'
    },
    'Pirarara': {
      nome: 'Pirarara',
      nomecientifico: 'Phractocephalus hemioliopterus',
      descricao: 'Bagre gigante, um dos maiores peixes de água doce.',
      tamanho: 'Muito Grande (10-50kg)',
      habitat: 'Fundo de rios profundos',
      isca: 'Peixes inteiros, coração',
      dificuldade: 'Muito Difícil',
      melhorhorario: '19:00-05:00 (noturno)',
      dicas: 'Requer equipamentos muito resistentes e experiência.'
    },
    'Lambari': {
      nome: 'Lambari',
      nomecientifico: 'Astyanax spp.',
      descricao: 'Peixe pequeno e ágil, ideal para iniciantes e crianças.',
      tamanho: 'Pequeno (0.1-0.3kg)',
      habitat: 'Águas rasas e margens',
      isca: 'Minhoca, pão, massa',
      dificuldade: 'Muito Fácil',
      melhorhorario: '07:00-17:00',
      dicas: 'Peixe ideal para crianças aprenderem a pescar.'
    },
    'Carpa': {
      nome: 'Carpa',
      nomecientifico: 'Cyprinus carpio',
      descricao: 'Peixe resistente e brigador, muito popular em pesqueiros.',
      tamanho: 'Médio a Grande (2-10kg)',
      habitat: 'Águas calmas e fundos lodosos',
      isca: 'Milho, batata, massas',
      dificuldade: 'Média',
      melhorhorario: '06:00-10:00 e 16:00-19:00',
      dicas: 'Peixe muito esperto, varie as iscas frequentemente.'
    },
    'Tilápia': {
      nome: 'Tilápia',
      nomecientifico: 'Oreochromis niloticus',
      descricao: 'Peixe dócil e saboroso, muito comum em pesqueiros.',
      tamanho: 'Médio (0.5-2kg)',
      habitat: 'Águas mornas e rasas',
      isca: 'Minhoca, milho, rão',
      dificuldade: 'Fácil',
      melhorhorario: '08:00-16:00',
      dicas: 'Peixe calmo, ideal para pesca relaxante.'
    }
  }

  const mostrarInfoPeixe = (nomePeixe) => {
    const info = peixesInfo[nomePeixe] || {
      nome: nomePeixe,
      nomecientifico: 'Informação não disponível',
      descricao: 'Peixe disponível no pesqueiro.',
      tamanho: 'Variado',
      habitat: 'Águas do pesqueiro',
      isca: 'Iscas variadas',
      dificuldade: 'Média',
      melhorhorario: '06:00-18:00',
      dicas: 'Consulte o proprietário para mais informações.'
    }
    setSelectedPeixe(info)
  }
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
          <p className="catalogo-hint">Clique em qualquer peixe para ver informações detalhadas</p>
          <div className="peixes-grid">
            {pesqueiro.peixes.map((peixe, index) => (
              <div key={index} className="peixe-card clickable" onClick={() => mostrarInfoPeixe(peixe)}>
                <span className="peixe-icon">🐟</span>
                <span className="peixe-nome">{peixe}</span>
                <span className="click-indicator">👁️</span>
              </div>
            ))}
          </div>
        </div>
        
        {selectedPeixe && (
          <div className="peixe-modal-overlay" onClick={() => setSelectedPeixe(null)}>
            <div className="peixe-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>🐟 {selectedPeixe.nome}</h3>
                <button className="close-btn" onClick={() => setSelectedPeixe(null)}>×</button>
              </div>
              
              <div className="modal-content">
                <div className="peixe-detail-section">
                  <h4>Informações Gerais</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <strong>Nome Científico:</strong>
                      <span>{selectedPeixe.nomecientifico}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Tamanho:</strong>
                      <span>{selectedPeixe.tamanho}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Dificuldade:</strong>
                      <span>{selectedPeixe.dificuldade}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Melhor Horário:</strong>
                      <span>{selectedPeixe.melhorhorario}</span>
                    </div>
                  </div>
                </div>
                
                <div className="peixe-detail-section">
                  <h4>Descrição</h4>
                  <p>{selectedPeixe.descricao}</p>
                </div>
                
                <div className="peixe-detail-section">
                  <h4>Habitat</h4>
                  <p>{selectedPeixe.habitat}</p>
                </div>
                
                <div className="peixe-detail-section">
                  <h4>Iscas Recomendadas</h4>
                  <p>{selectedPeixe.isca}</p>
                </div>
                
                <div className="peixe-detail-section">
                  <h4>Dicas de Pesca</h4>
                  <p>{selectedPeixe.dicas}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
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