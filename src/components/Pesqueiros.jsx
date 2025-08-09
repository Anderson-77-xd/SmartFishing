import PesqueiroCard from './PesqueiroCard'
import './Pesqueiros.css'

function Pesqueiros({ onSelectPesqueiro, userType, peixesDono, dadosDashboard }) {
  const pesqueiros = [
    {
      id: 1,
      nome: "Pesqueiro Águas Claras",
      peixes: ["Tucunaré", "Dourado", "Pintado", "Pacu", "Traíra", "Surubim", "Pirarara"],
      horario: "06:00 às 18:00",
      descricao: "Pesqueiro com águas cristalinas e grande variedade de peixes. Ambiente familiar com estrutura completa.",
      avaliacao: 4.8,
      capacidade: "150 pessoas",
      area: "12 hectares",
      profundidade: "2-8 metros",
      modalidades: ["Pesca esportiva", "Pesque e pague", "Pesca noturna"],
      facilidades: ["Restaurante", "Lanchonete", "Banheiros", "Estacionamento", "Aluguel de equipamentos"],
      detalhes: {
        endereco: "Estrada Rural, Km 15 - Zona Rural",
        telefone: "(11) 99999-1111",
        preco: "R$ 25,00 por pessoa",
        precoKg: "R$ 18,00/kg",
        equipamentos: ["Varas de pescar", "Iscas naturais", "Cadeiras", "Guarda-sol"],
        iscasDisponiveis: ["Minhoca", "Milho", "Massa", "Ração", "Lambari vivo"]
      }
    },
    {
      id: 2,
      nome: "Pesqueiro Vale Verde",
      peixes: ["Lambari", "Carpa", "Tilápia", "Bagre", "Piau", "Matrinxã", "Piauçu"],
      horario: "05:30 às 19:00",
      descricao: "Localizado em meio à natureza preservada. Ideal para quem busca tranquilidade e peixes de grande porte.",
      avaliacao: 4.6,
      capacidade: "200 pessoas",
      area: "18 hectares",
      profundidade: "1-6 metros",
      modalidades: ["Pesca esportiva", "Pesque e solte", "Torneios"],
      facilidades: ["Restaurante", "Área de churrasco", "Camping", "Trilhas", "Piscina natural"],
      detalhes: {
        endereco: "Rodovia SP-123, Km 8 - Vale Verde",
        telefone: "(11) 99999-2222",
        preco: "R$ 30,00 por pessoa",
        precoKg: "R$ 20,00/kg",
        equipamentos: ["Equipamentos completos", "Restaurante", "Área de churrasco", "Estacionamento"],
        iscasDisponiveis: ["Minhoca", "Queijo", "Salsicha", "Ração", "Camarão"]
      }
    },
    {
      id: 3,
      nome: "Pesqueiro Lagoa Azul",
      peixes: ["Cascudo", "Mandi", "Piapara", "Curimbatá", "Tilápia", "Carpa"],
      horario: "06:30 às 17:30",
      descricao: "Perfeito para famílias e iniciantes. Ambiente seguro com águas calmas e peixes dóceis.",
      avaliacao: 4.4,
      capacidade: "100 pessoas",
      area: "8 hectares",
      profundidade: "1-4 metros",
      modalidades: ["Pesque e pague", "Pesca infantil", "Aulas de pesca"],
      facilidades: ["Playground", "Área infantil", "Lanchonete", "Banheiros", "Fraldário"],
      detalhes: {
        endereco: "Av. das Águas, 500 - Lagoa Azul",
        telefone: "(11) 99999-3333",
        preco: "R$ 20,00 por pessoa",
        precoKg: "R$ 15,00/kg",
        equipamentos: ["Área infantil", "Playground", "Lanchonete", "Banheiros"],
        iscasDisponiveis: ["Minhoca", "Milho", "Pão", "Ração", "Massa"]
      }
    },
    {
      id: 4,
      nome: "Pesqueiro Recanto do Pescador",
      peixes: ["Pintado", "Surubim", "Dourado", "Pirarara", "Jaú", "Piraputanga"],
      horario: "05:00 às 20:00",
      descricao: "Para pescadores experientes! Peixes troféu e desafios únicos em águas profundas.",
      avaliacao: 4.9,
      capacidade: "80 pessoas",
      area: "15 hectares",
      profundidade: "3-12 metros",
      modalidades: ["Pesca esportiva", "Pesca noturna", "Torneios profissionais"],
      facilidades: ["Restaurante gourmet", "Hospedagem", "Guias especializados", "Barcos"],
      detalhes: {
        endereco: "Estrada do Pescador, Km 22 - Serra da Mantiqueira",
        telefone: "(11) 99999-4444",
        preco: "R$ 45,00 por pessoa",
        precoKg: "R$ 25,00/kg",
        equipamentos: ["Equipamentos profissionais", "Barcos", "Sonar", "Guias"],
        iscasDisponiveis: ["Lambari vivo", "Tuvira", "Camarão gigante", "Iscas artificiais"]
      }
    }
  ]
  
  // Adicionar pesqueiro do dono se for dono logado
  if (userType === 'dono') {
    pesqueiros.unshift({
      id: 0,
      nome: "Meu Pesqueiro",
      peixes: peixesDono || ["Tucunaré", "Dourado", "Pintado", "Pacu"],
      horario: "06:00 às 18:00",
      descricao: "Seu pesqueiro - gerencie e visualize as informações do seu negócio.",
      avaliacao: 4.8,
      capacidade: "150 pessoas",
      area: "12 hectares",
      profundidade: "2-8 metros",
      modalidades: ["Pesca esportiva", "Pesque e pague"],
      facilidades: ["Restaurante", "Estacionamento", "Banheiros"],
      isDono: true,
      stats: dadosDashboard?.stats || {
        visitantesHoje: 24,
        peixesPescados: 156,
        receitaMes: "R$ 3.240",
        avaliacaoMedia: 4.8
      },
      atividades: dadosDashboard?.atividades || [
        { tempo: "10:30", descricao: "João Silva pescou um Tucunaré de 2.5kg" },
        { tempo: "09:15", descricao: "Maria Santos fez check-in no pesqueiro" },
        { tempo: "08:45", descricao: "Carlos Oliveira deixou uma avaliação 5 estrelas" }
      ],
      reservas: dadosDashboard?.reservas || [
        { nome: "João Silva", data: "Hoje, 14:00 - 2 pessoas", status: "confirmada" },
        { nome: "Maria Santos", data: "Amanhã, 08:00 - 4 pessoas", status: "pendente" }
      ],
      avaliacoes: dadosDashboard?.avaliacoes || [
        { nome: "João Silva", estrelas: 5, comentario: "Excelente pesqueiro! Peixes grandes e água limpa. Voltarei com certeza!", data: "Há 2 dias" },
        { nome: "Maria Santos", estrelas: 4, comentario: "Lugar muito bom para levar a família. Estrutura boa e atendimento excelente.", data: "Há 1 semana" },
        { nome: "Carlos Oliveira", estrelas: 5, comentario: "Melhor pesqueiro da região! Consegui pescar um tucunaré de 3kg. Recomendo!", data: "Há 2 semanas" }
      ],
      detalhes: {
        endereco: "Estrada Rural, Km 15 - Zona Rural",
        telefone: "(11) 99999-1111",
        preco: "R$ 25,00 por pessoa",
        precoKg: "R$ 18,00/kg",
        equipamentos: ["Varas de pescar", "Iscas naturais"],
        iscasDisponiveis: ["Minhoca", "Milho", "Massa"]
      }
    })
  }

  return (
    <section id="pesqueiros" className="pesqueiros-section">
      <div className="container">
        <h2>Pesqueiros que eu recomendo</h2>
        <div className="pesqueiros-grid">
          {pesqueiros.map(pesqueiro => (
            <PesqueiroCard 
              key={pesqueiro.id} 
              pesqueiro={pesqueiro} 
              onClick={() => onSelectPesqueiro(pesqueiro)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Pesqueiros