import AppLink from "../app-link/AppLink";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <AppLink toSectionId="listen" label="lyssna" linkStyle="app-link" />
        </li>
        <li>
          <AppLink toSectionId="discography" label="diskografi" linkStyle="app-link"/>
        </li>
        <li>
          <AppLink toSectionId="about" label="om mig" linkStyle="app-link"/>
        </li>
      </ul>
    </nav>
  );
}
