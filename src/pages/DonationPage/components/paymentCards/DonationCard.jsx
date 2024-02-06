import btnIcon from "../../../../assets/icon/whiteRight arrow.svg";
function DonationCard() {
  return (
    <div className="donationCard">
      <div className="giveButtons">
        <button>Give Monthly</button>
        <button>Give One Time</button>
      </div>
      <div className="chooseText">
        <p>Choose an amount to donate today</p>
      </div>
      <div className="paymentAmount">
        <div className="buttonSect">
          <button>25,000</button>
          <button>40,000</button>
        </div>
        <div className="buttonSect">
          <button>75,000</button>
          <button>75,000</button>
        </div>
        <div className="buttonSect">
          <button>Other</button>
        </div>
      </div>
      <div className="continueBtn">
        <button>
          Continue <img src={btnIcon} alt="button icon" />
        </button>
      </div>
    </div>
  );
}

export default DonationCard;
