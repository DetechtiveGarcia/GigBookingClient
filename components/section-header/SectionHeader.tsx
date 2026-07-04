import { ReactNode } from "react";
import "./section-header.css";

type SectionHeaderProps = {
  sectionLabel: string;
  sectionHeading: ReactNode;
};
export default function SectionHeader({ sectionLabel, sectionHeading }: SectionHeaderProps) {


  return (
    <div className="section-header">
      <span className="section-label">{sectionLabel}</span>
      <h2 className="section-heading serif text-white">{sectionHeading}</h2>
    </div>
  );
}
