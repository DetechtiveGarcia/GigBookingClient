import './app-link.css'
type LinkProps = {
    href: string;
    label: string;
    linkStyle: 'app-link' | 'app-link-btn' 
}
export default function AppLink({ href, label, linkStyle }: LinkProps){
    return <a href={href} className={`${linkStyle} font-uppercase letter-spacing center-element-horizontal`}>{label}</a>
}