import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    Axios.get('https://corsproxy.io/?https://www.mmobomb.com/api1/games')
    .then(res => {
      setGameList(res.data);
    });
  }, []);

  return (
    <div className="app">
      <Header className="header-component" />
      <SearchBar onSearch={(term) => {
        if (term === '') {
          Axios.get('https://corsproxy.io/?https://www.mmobomb.com/api1/games')
          .then(res => {
            setGameList(res.data);
          });
        } else {
          const filteredGames = gameList.filter(game =>
            game.title.toLowerCase().includes(term.toLowerCase())
          );
          setGameList(filteredGames);
        }
      }} />
      <div className="gameList">
      {gameList.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
      </div>
      <Footer className="footer-component" />
    </div>
  );
}

export default App;
