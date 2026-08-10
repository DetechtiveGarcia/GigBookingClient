import Link from 'next/link';
import './app-link.css'
type LinkProps = {
    toSectionId: string;
    label: string;
    linkStyle?: 'app-link' | 'app-link-btn';
    className?: string;
}
export default function AppLink({ toSectionId, label, linkStyle, className }: LinkProps){
    return <Link href={`/#${toSectionId}`} className={`${linkStyle} ${className} font-uppercase letter-spacing `}>{label}</Link>
}