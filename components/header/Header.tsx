import AppLink from "../app-link/AppLink";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import "./header.css";
export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <AppLink href="/booking" label="boka" linkStyle="app-link-btn" />
    </header>
  );
}
