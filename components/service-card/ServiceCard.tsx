
import styles from "./service-card.module.css";
import Text from "../text/Text";
import AppLink from "../app-link/AppLink";
type ServiceCardProps = {
  title: string;
  price: string;
  packageDetails: string;
  details: string;
  features: string[];
  buttonStyle: string;
  buttonLabel: string;
};

export default function ServiceCard({
  title,
  price,
  packageDetails,
  details,
  features,
  buttonStyle,
  buttonLabel,
}: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceCardHeader}>
        <h3 className={`text-white serif ${styles.title}`}>{title}</h3>
        <div>
          <Text text={price} className={`text-orange serif ${styles.price}`} />
          <Text
            text={packageDetails}
            className={`text-dark uppercase letter-spacing ${styles.packageDetails}`}
          />
        </div>
      </div>
      <Text text={details} className={`text-dark ${styles.details}`} />
      <ul>
        {features.map((feature) => (
          <li key={feature} className={`text-dark uppercase letter-spacing ${styles.feature}`}>{feature}</li>
        ))}
      </ul>
      <AppLink className={buttonStyle} label={buttonLabel} toSectionId="booking" />
    </div>
  );
}
