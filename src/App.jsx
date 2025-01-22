import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [likedCards, setLikedCards] = useState({})

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLike = (cardId) => {
    setLikedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  const cards = [
    { id: 1, title: 'Mountain Trek', description: 'Explore beautiful mountain landscapes', image: 'https://placehold.co/300x200/2196f3/ffffff?text=Mountain+Trek' },
    { id: 2, title: 'Beach Retreat', description: 'Relax by the ocean waves', image: 'https://placehold.co/300x200/f50057/ffffff?text=Beach+Retreat' },
    { id: 3, title: 'City Adventure', description: 'Discover urban excitement', image: 'https://placehold.co/300x200/4caf50/ffffff?text=City+Adventure' },
    { id: 4, title: 'Forest Mystery', description: 'Wander through ancient woods', image: 'https://placehold.co/300x200/ff9800/ffffff?text=Forest+Mystery' },
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>TravelMate</h1>
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className={activeTab === 'home' ? 'active' : ''}>Home</a>
          <a href="#" className={activeTab === 'explore' ? 'active' : ''}>Explore</a>
          <a href="#" className={activeTab === 'favorites' ? 'active' : ''}>Favorites</a>
          <a href="#" className={activeTab === 'profile' ? 'active' : ''}>Profile</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="card-grid">
          {cards.map(card => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <button 
                  className={`like-button ${likedCards[card.id] ? 'liked' : ''}`}
                  onClick={() => handleLike(card.id)}
                >
                  ♥
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bottom-nav">
        <button 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={() => setActiveTab('home')}
        >
          🏠
        </button>
        <button 
          className={activeTab === 'explore' ? 'active' : ''} 
          onClick={() => setActiveTab('explore')}
        >
          🔍
        </button>
        <button 
          className={activeTab === 'favorites' ? 'active' : ''} 
          onClick={() => setActiveTab('favorites')}
        >
          ⭐
        </button>
        <button 
          className={activeTab === 'profile' ? 'active' : ''} 
          onClick={() => setActiveTab('profile')}
        >
          👤
        </button>
      </footer>
    </div>
  )
}

export default App
