import Link from 'next/link';
import './app-link.css'
type LinkProps = {
    toSectionId: string;
    label: string;
    linkStyle: 'app-link' | 'app-link-btn' 
}
export default function AppLink({ toSectionId, label, linkStyle }: LinkProps){
    return <Link href={`/#${toSectionId}`} className={`${linkStyle} font-uppercase letter-spacing `}>{label}</Link>
}