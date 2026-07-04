import './external-link.css'

type LinkProps = {
    href: string;
    label: string;
}
export default function ExternalLink({ href, label }: LinkProps){
    return <a href={href} target="_blank" className="external-link letter-spacing uppercase" rel="noopener noreferrer">{label}</a>
}