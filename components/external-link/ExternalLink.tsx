import Link from "next/link"
import './external-link.css'

type LinkProps = {
    href: string;
    label: string;
}
export default function ExternalLink({ href, label }: LinkProps){
    return <Link href={href} target="_blank" className="external-link letter-spacing uppercase">{label}</Link>
}