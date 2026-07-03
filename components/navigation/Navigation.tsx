import AppLink from "../app-link/AppLink";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <AppLink href="/listen" label="lyssna" linkStyle="app-link" />
        </li>
        <li>
          <AppLink href="/discography" label="diskografi" linkStyle="app-link"/>
        </li>
        <li>
          <AppLink href="/about" label="om mig" linkStyle="app-link"/>
        </li>
      </ul>
    </nav>
  );
}
