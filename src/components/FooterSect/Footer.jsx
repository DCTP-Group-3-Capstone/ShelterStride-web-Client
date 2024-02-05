import ContactUs from "./components/ContactUs";
import FooterDonate from "./components/FooterDonate";
import FooterText from "./components/FooterText";
import Subscribe from "./components/Subscribe";

function Footer() {
  return (
    <div className="footerWrapper">
      <Subscribe />
      <FooterText />
      <FooterDonate />
      <ContactUs />
    </div>
  );
}

export default Footer;
