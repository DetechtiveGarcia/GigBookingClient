type TextProps = {
    text: string;
    className: string;
}

export default function Text({text, className}: TextProps){
    return <p className={className}>{text}</p>
}