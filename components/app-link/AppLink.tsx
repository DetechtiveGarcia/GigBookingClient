type LinkProps = {
    href: string;
    label: string;
}
export default function AppLink({ href, label }: LinkProps){
    return <a href={href}>{label}</a>
}