import Image from "next/image"

export default function Equipment() {
    return (
        <div className="equipment">
            <h1>Felszerelés</h1>
            <div className="items">
                <div className="item">
                    <div>2db Turbosound Milan M12 aktív hangfal</div>
                    <div className="img">
                        <Image alt="hangfal" layout="fill" src="https://i.postimg.cc/4NTXQPmk/turbosound-milan-m12.jpg" />
                    </div>
                </div>

                <div className="item">
                    <div>2db JBL PRX PRX618S-XLF aktív mélyláda</div>
                    <div className="img">
                        <Image alt="melylada" layout="fill" src="https://i.postimg.cc/XJMP6HMn/PRX618-S-XLF.jpg" />
                    </div>
                </div>
            </div>


            DBX driverack pa2 rendeszvezérlő processzor
            Pioneer DDJ-1000 Dj szoftver vezérlő
            Macbook Pro 13” 2019
            2db teremszinező PAR lámpa
            2db Cameo Hydrabeam 1000 RGBW
            2db EUROLITE - LED TMH-13 Moving-Head Spot
            EUROLITE - LED BAR-6 QCL RGBW Bar
            Eurolite - LED Party UV Bar 9
            Involtight FOG1200
            Cerebellum digi 128M fényvezérlő

            valamint minden ami kellhet apróság...


            KÉPEK
        </div>
    )
}
