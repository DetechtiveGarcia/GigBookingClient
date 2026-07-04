import AppLink from "../app-link/AppLink";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import "./header.css";
export default function Header() {
  return (
    <div className="header-container">
      <header className="sides-padding">
        <Logo />
        <Navigation />
        <AppLink toSectionId="booking" label="boka" linkStyle="app-link-btn" />
      </header>
    </div>
  );
}
