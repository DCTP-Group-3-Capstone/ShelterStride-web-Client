function PaymentDetails() {
  return (
    <div>
      <div className="donationAmount">
        <p>Your Donation Amount</p>
        <p>25,000/Month</p>
      </div>
      <div className="yourInfo">
        <div>
          <h6>YOUR INFORMATION</h6>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By providing your mobile phone number you agree that Shelter stride
            may contact you by phone and/or text message regarding Shelter
            stride news and updates. You can opt-out at any time. See Privacy
            Policy for details.
          </label>
        </div>
      </div>
      <div className="payment"></div>
      <div className="confirmButton"></div>
    </div>
  );
}

export default PaymentDetails;
