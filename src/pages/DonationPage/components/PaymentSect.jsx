import PaymentCard from "./payment/PaymentCard";
import DonateText from "../components/payment/DonateText";
function PaymentSect() {
  return (
    <section className="paymentSect">
      <DonateText />
      <PaymentCard />
    </section>
  );
}

export default PaymentSect;
