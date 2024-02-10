import PaymentSect from "./components/PaymentSect";
import YourDonation from "./components/YourDonation";
import JoinUs from "./components/JoinUs";

//style import
import "./donation.scss";

function DonationPage() {
  return (
    <div className="donationPageWrapper">
      <PaymentSect />
      <YourDonation />
      <JoinUs />
    </div>
  );
}

export default DonationPage;
