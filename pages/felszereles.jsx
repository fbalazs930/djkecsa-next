import Image from "next/image"
import TurbosoundMilanM12 from "../public/images/TurbosoundMilanM12.png"
import JBLPRXPRX618SXLF from "../public/images/JBLPRXPRX618S-XLF.png"
import DBXdriverackpa2 from "../public/images/DBXdriverackpa2.png"
import PioneerDDJ1000Dj from "../public/images/PioneerDDJ1000Dj.png"
import macbook from "../public/images/macbook.png"
import par from "../public/images/par.png"
import CameoHydrabeam1000RGBW from "../public/images/CameoHydrabeam1000RGBW.png"
import EUROLITELEDTMH13MovingHeadSpot from "../public/images/EUROLITELEDTMH13MovingHeadSpot.png"
import EUROLITELEDBAR6QCLRGBWBar from "../public/images/EUROLITELEDBAR6QCLRGBWBar.png"
import EUROLITELEDPartyUVBar9 from "../public/images/EUROLITELEDPartyUVBar9.png"
import InvoltightFOG1200 from "../public/images/InvoltightFOG1200.png"
import Cerebellumdigi128M from "../public/images/Cerebellumdigi128M.png"

export default function Equipment() {
    return (
        <div className="equipment">
            <h1>Felszerelés</h1>
            <div className="items">
                <div className="item">
                    <div>Turbosound Milan M12 aktív hangfal</div>
                    <div className="img">
                        <Image alt="Turbosound Milan M12" layout="fill" src={TurbosoundMilanM12} />
                    </div>
                </div>
                <div className="item">
                    <div>JBL PRX PRX618S-XLF aktív mélyláda</div>
                    <div className="img">
                        <Image alt="JBL PRX PRX618S-XLF" layout="fill" src={JBLPRXPRX618SXLF} />
                    </div>
                </div>
                <div className="item">
                    <div>DBX driverack pa2 rendeszvezérlő processzor</div>
                    <div className="img">
                        <Image alt="DBX driverack pa2" layout="fill" src={DBXdriverackpa2} />
                    </div>
                </div>
                <div className="item">
                    <div>Pioneer DDJ-1000 Dj szoftver vezérlő</div>
                    <div className="img">
                        <Image alt="Pioneer DDJ-1000" layout="fill" src={PioneerDDJ1000Dj} />
                    </div>
                </div>
                <div className="item">
                    <div>Macbook Pro 13” 2019</div>
                    <div className="img">
                        <Image alt="Macbook Pro 13 2019" layout="fill" src={macbook} />
                    </div>
                </div>
                <div className="item">
                    <div>Teremszinező PAR lámpa</div>
                    <div className="img">
                        <Image alt="PAR lampa" layout="fill" src={par} />
                    </div>
                </div>
                <div className="item">
                    <div>Cameo Hydrabeam 1000 RGBW</div>
                    <div className="img">
                        <Image alt="Cameo Hydrabeam 1000 RGBW" layout="fill" src={CameoHydrabeam1000RGBW} />
                    </div>
                </div>
                <div className="item">
                    <div>EUROLITE - LED TMH-13 Moving-Head Spot</div>
                    <div className="img">
                        <Image alt="EUROLITE - LED TMH-13 Moving-Head Spot" layout="fill" src={EUROLITELEDTMH13MovingHeadSpot} />
                    </div>
                </div>
                <div className="item">
                    <div>EUROLITE - LED BAR-6 QCL RGBW Bar</div>
                    <div className="img">
                        <Image alt="EUROLITE - LED BAR-6 QCL RGBW Bar" layout="fill" src={EUROLITELEDBAR6QCLRGBWBar} />
                    </div>
                </div>
                <div className="item">
                    <div>EUROLITE - LED Party UV Bar 9</div>
                    <div className="img">
                        <Image alt="EUROLITE - LED Party UV Bar 9" layout="fill" src={EUROLITELEDPartyUVBar9} />
                    </div>
                </div>
                <div className="item">
                    <div>Involtight FOG1200</div>
                    <div className="img">
                        <Image alt="Involtight FOG1200" layout="fill" src={InvoltightFOG1200} />
                    </div>
                </div>
                <div className="item">
                    <div>Cerebellum digi 128M fényvezérlő</div>
                    <div className="img">
                        <Image alt="Cerebellum digi 128M" layout="fill" src={Cerebellumdigi128M} />
                    </div>
                </div>
            </div>

            <h2>Valamint minden apróság, ami kellhet..</h2>
        </div>
    )
}
