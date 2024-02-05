const CardList = ({ cards }) => {
  return (
    <div className="cardList">
      {cards.map((card) => (
        <div key={card.id}>
          <div>
            <h4>{card.title}</h4>
            <p>{card.body}</p>
          </div>
          <div className="cardImage">
            <img src={card.image} alt={card.alt} />
          </div>
          <div className="cardBtnWrapper">
            <button>
              {card.btnTxt} <img src={card.btnImg} alt="button icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
