function gameCard({ game }) {
return (
    <div className="gameMain" key={game.id}>
        <h3 className="gameTitle">{game.title}</h3>
        <img className="gameThumbnail" src={game.thumbnail} alt={game.title} />
        <p className="gameDescription">{game.short_description}</p>
        <button className="gameButton" onClick={() => window.open(game.game_url, '_blank')}>Play Now</button>
    </div>
);
}

export default gameCard;