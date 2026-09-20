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
            <li><ExternalLink href="https://open.spotify.com/artist/2Pg2lEjBhQojoP8pGXWQzw" label="spotify"/></li>
        </ul>
      </div>
    </footer>
  );
}
