import './Hero.css'

function Hero() {
  const scrollToPesqueiros = () => {
    const pesqueirosSection = document.getElementById('pesqueiros')
    if (pesqueirosSection) {
      pesqueirosSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>🎣 Descubra os Melhores Pesqueiros</h1>
        <p>Encontre o local perfeito para sua próxima pescaria com informações detalhadas e avaliações reais</p>
        <button className="cta-btn" onClick={scrollToPesqueiros}>Explorar Pesqueiros</button>
      </div>
    </section>
  )
}

export default Hero