import Link from "next/link"
import { useState } from "react";

export default function Kapcsolat() {

    const [click2, setClick2] = useState(false);
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
            <h3 className="bottom">Ezt a tevékenységet hivatalosan hajtom végre, <br /> ezáltal számlaképes vagyok és rendelkezem éves <span onDoubleClick={() => { setClick2(!click2) }}>MAHASZ</span> engedéllyel!</h3>
            {click2 && <Link href="https://www.hitwebcounter.com" passHref>
                <a target="_blank"><img src="https://www.webfreecounter.com/hit.php?id=gvpncoq&nd=5&style=1" border="0" alt="web counter" /></a>
            </Link>}
        </div>
    )
}

