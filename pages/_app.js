import Head from 'next/head'
import '../styles/Main.css'
import Link from "next/link";
import Image from "next/image"

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>DJ Kecsa</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
    </Head>
    <nav className="nav">
      <Link href="/" passHref>
        <div className="kecsa">
          <Image alt="logo" width="130px" height="30px" src="https://i.postimg.cc/W3p6qCkN/logo.png" />
        </div>
      </Link>

      <div className="links">
        <Link href="/">Kezdőlap</Link>
        <Link href="/bemutatkozo">Bemutatkozó</Link>
        <Link href="/felszereles">Felszerelés</Link>
        <Link href="/kapcsolat">Kapcsolat</Link>
      </div>

      <div className="bid">
        <Link href="/arajanlat">Árajánlat kérés</Link>
      </div>
    </nav>
    <Component {...pageProps} />
  </div>
}

export default MyApp
