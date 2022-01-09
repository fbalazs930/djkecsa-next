import Router, { useRouter } from "next/router"

export default function About() {
    const router = useRouter();
    const { pid } = router.query
    console.log(pid);
    return (
        <div className="about">
            <h1>Üdvözöllek!</h1>
            <h3>Kecskeméti Márk vagyok, de lehet úgy ismersz hogy Kecsa.</h3>
            <p>
                Az én zenei szeretetem általános iskolába nyúlik vissza 6. osztály, ahol felkértek, hogy zenéljek a felsős évfolyamnak ekkor ez egy nagy falat volt nekem, de a végén sikeresen teljesítettem. Ezentúl én voltam a zenei felelős az iskolában a studió munkálatokat is én végeztem(iskolai hangosítás, ballagások, különböző ünnepségek).
            </p>
            <p>
                Az igazi fellendülés 2016 decemberében kezdődött egy családi rendezvényen ahol Kiskőrös legprofibb DJ-je szórakoztatott minket és megkért, hogy hozzam el a saját pultomat és megengedte, hogy az éjszaka folyamán zenélhessek én is ő Németh Pál, aki a késöbbiekben a szárnya alá vett és elindultunk (ahogy Ő mondaná Pali és Padaván) közösen az éjszakába figyelmesen megtanultam, hogy mit és hogyan kell.
            </p>
            <p>
                Ezután egyik barátommal (Lengyel Dominik) Kiskőrösön a Holdfényes Biliárd Clubban elkezdtünk bulikat szervezni egész jól indult ahol elértük a 250+ főt ami számunkra egy hatalmas megtisztelés volt ez kicsit több mint 2 évig működött, mindeközben jártam a környékbeli születésnapokat, kisebb nagyobb nyilvános rendezvényeket, céges évzárók, lakodalmak, ekkoriban kezdtem el az Extrém Sörözőben is elkezdeni zenélni, ami még a mai napig tart és töretlenül működik (amit köszönök minden oda járó bulizni vágyónak).
            </p>

            <h2>
                A zenei repertoárom elég széles én úgy gondolom megtalálható benne: Retró slágerek, Mulatós, mai fiatalságnak megfelelő stílusok tömérdektelen mennyiségben!
            </h2>

            <h1>KÉPEK IDE MAJD</h1>
        </div>
    )
}
