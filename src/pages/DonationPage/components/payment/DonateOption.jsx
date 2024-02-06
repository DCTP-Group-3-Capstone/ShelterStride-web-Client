// import DonationCard from "../paymentCards/DonationCard";
import PaymentDetails from "../paymentCards/PaymentDetails";
function DonateOption() {
  return (
    <div className="paymentCardContainer">
      <div className="paymentCardIndicator">
        <p>Donation</p>
        <p>Payment details</p>
      </div>
      <div>
        {/* <DonationCard /> */}
        <PaymentDetails />
      </div>
    </div>
  );
}

export default DonateOption;
