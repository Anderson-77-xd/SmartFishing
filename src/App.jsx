import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Hero from './components/Hero'
import Pesqueiros from './components/Pesqueiros'
import PesqueiroDetalhes from './components/PesqueiroDetalhes'
import Contato from './components/Contato'
import Sobre from './components/Sobre'
import Sharks from './components/Sharks'
import DashboardDono from './components/DashboardDono'
import InfoSection from './components/InfoSection'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState(null)
  const [selectedPesqueiro, setSelectedPesqueiro] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [peixesDono, setPeixesDono] = useState(['Tucunaré', 'Dourado', 'Pintado'])
  const [dadosDashboard, setDadosDashboard] = useState({
    stats: {
      visitantesHoje: 24,
      peixesPescados: 156,
      receitaMes: "R$ 3.240",
      avaliacaoMedia: 4.8
    },
    atividades: [
      { tempo: "10:30", descricao: "João Silva pescou um Tucunaré de 2.5kg" },
      { tempo: "09:15", descricao: "Maria Santos fez check-in no pesqueiro" },
      { tempo: "08:45", descricao: "Carlos Oliveira deixou uma avaliação 5 estrelas" }
    ],
    reservas: [
      { nome: "João Silva", data: "Hoje, 14:00 - 2 pessoas", status: "confirmada" },
      { nome: "Maria Santos", data: "Amanhã, 08:00 - 4 pessoas", status: "pendente" }
    ],
    avaliacoes: [
      { nome: "João Silva", estrelas: 5, comentario: "Excelente pesqueiro! Peixes grandes e água limpa. Voltarei com certeza!", data: "Há 2 dias" },
      { nome: "Maria Santos", estrelas: 4, comentario: "Lugar muito bom para levar a família. Estrutura boa e atendimento excelente.", data: "Há 1 semana" },
      { nome: "Carlos Oliveira", estrelas: 5, comentario: "Melhor pesqueiro da região! Consegui pescar um tucunaré de 3kg. Recomendo!", data: "Há 2 semanas" }
    ]
  })

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setSelectedPesqueiro(null)
  }

  const renderContent = () => {
    // Se for dono de pesqueiro, mostrar dashboard
    if (userType === 'dono') {
      return <DashboardDono peixesDono={peixesDono} setPeixesDono={setPeixesDono} dadosDashboard={dadosDashboard} setDadosDashboard={setDadosDashboard} />
    }
    
    if (selectedPesqueiro) {
      return (
        <PesqueiroDetalhes 
          pesqueiro={selectedPesqueiro} 
          onBack={() => setSelectedPesqueiro(null)}
        />
      )
    }

    switch (currentPage) {
      case 'contato':
        return <Contato />
      case 'sobre':
        return <Sobre />
      default:
        return (
          <>
            <Hero />
            <Pesqueiros onSelectPesqueiro={setSelectedPesqueiro} userType={userType} peixesDono={peixesDono} dadosDashboard={dadosDashboard} />
            <InfoSection />
          </>
        )
    }
  }

  return (
    <div className="App">
      {userType !== 'dono' && (
        <Navbar 
          onLoginClick={() => setShowLogin(true)} 
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            setIsLoggedIn(false)
            setUserType(null)
          }}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
      )}
      
      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)}
          onLogin={(type) => {
            setIsLoggedIn(true)
            setUserType(type)
            setShowLogin(false)
          }}
        />
      )}
      
      {renderContent()}
      <Sharks />
    </div>
  )
}

export default App