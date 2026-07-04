import './marquee-text.css'

type MarqueeTextProps = {
    text: string;
}
export default function MarqueeText({ text }: MarqueeTextProps){
    return(
        <div className='marquee-text'>
            <p className='text-white serif'>{text}</p>
            <p className='text-orange'>·</p>
        </div>
    )
}