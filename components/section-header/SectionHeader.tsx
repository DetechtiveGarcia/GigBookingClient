import { ReactNode } from "react";
import "./section-header.css";

type SectionHeaderProps = {
  sectionLabel: string;
  sectionHeading: ReactNode;
  children?: ReactNode;
};
export default function SectionHeader({ sectionLabel, sectionHeading, children }: SectionHeaderProps) {


  return (
    <div className="section-header">
      <span className="section-label uppercase">{sectionLabel}</span>
      <h2 className="section-heading serif text-white">{sectionHeading}</h2>
      {children}
    </div>
  );
}
