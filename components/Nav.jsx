import Link from "next/link";
export default function Nav() {
    return (
        <nav className="nav">
            <Link href="/">Kezdőlap</Link>
            <Link href="/About">Bemutatkozó</Link>
            <Link href="/Equipment">Felszerelés</Link>
            <Link href="/Bidding">Árajánlat kérés</Link>
            <Link href="/Contact">Kapcsolat</Link>
        </nav>
    )
}
