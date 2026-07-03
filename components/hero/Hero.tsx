import heroImg from '../../public/7a7117ea-ae42-467f-b47e-dc0c75c8ae72.jpeg'
import './hero.css'
export default function Hero(){
    return(
        <section id='hero'>
            <img src={heroImg.src} alt="" />
        </section>
    );
}