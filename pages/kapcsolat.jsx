import Link from "next/link"

export default function Contact() {
    return (
        <div className="contact">
            <h1>Kecskeméti Márk</h1>
            <div className="icons">
                <Link href="tel:+36305982808" passHref>
                    <div className="icon">
                        <i className="fas fa-mobile"></i>
                        <p>+36305982808</p>
                    </div>
                </Link>

                <Link href="mailto:djkecsa22@gmail.com" passHref>
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <p>djkecsa22@gmail.com</p>
                    </div>
                </Link>

                <Link href="https://www.facebook.com/djkecsa/" passHref>
                    <a target="_blank">
                        <div className="icon">
                            <i className="fab fa-facebook"></i>
                            <p>@djkecsa</p>
                        </div>
                    </a>
                </Link>
            </div>
            <h3 className="bottom">Ezt a tevékenységet hivatalosan hajtom végre, <br /> ezáltal számlaképes vagyok és rendelkezem éves MAHASZ engedéllyel!</h3>
        </div>
    )
}
