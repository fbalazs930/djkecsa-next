import Link from "next/link";
export default function Nav() {
    return (
        <nav className="nav">
            <div className="kecsa">
                <Link href="/"> DJ Kecsa</Link>
            </div>

            <div className="links">
                <Link href="/">Kezdőlap</Link>
                <Link href="/About">Bemutatkozó</Link>
                <Link href="/Equipment">Felszerelés</Link>
                <Link href="/Contact">Kapcsolat</Link>
            </div>

            <div className="bid">
                <Link href="/Bidding">Árajánlat kérés</Link>
            </div>
        </nav>
    )
}
