import ExternalLink from "../external-link/ExternalLink";
import Logo from "../logo/Logo";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="center-element-vertical">
        <Logo />

        <p className="text-dark">&copy; 2026 - All rights reserved</p>
      </div>
      <div>
        <ul>
            <li><ExternalLink href="www.youtube.com" label="youtube"/></li>
            <li><ExternalLink href="www.youtube.com" label="youtube"/></li>
            <li><ExternalLink href="www.youtube.com" label="youtube"/></li>
            <li><ExternalLink href="www.youtube.com" label="youtube"/></li>
        </ul>
      </div>
    </footer>
  );
}
