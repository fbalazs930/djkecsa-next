import emailjs from 'emailjs-com';

export default function Arajanlat() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_33gx7rg', 'kecsaForm', e.target, 'user_J1ob3Ryk5QebuFnmmgVdQ')
            .then((result) => {
                alert("Elküldve!");
            }, (error) => {
                alert("Sikertelen!");
            });
        e.target.reset()
    }
    return (
        <div className="bidding">
            <h1>Kérj árajánlatot</h1>
            <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder="Név" name="name" />
                <input className='email' type="email" placeholder="E-mail cím" name="email" />
                <input className='tel' type="tel" placeholder="Telefonszám" name="tel" />
                <input type="text" placeholder="Rendezvény típusa" name="type" />
                <input type="text" placeholder="Rendezvény helyszíne" name="place" />
                <input className='date' type="date" placeholder="Rendezvény dátuma" name="date" />
                <input type="number" placeholder="Létszám (kb)" name="headcount" />
                <textarea className='message' placeholder="Különböző igények(kezdés,befejezése,különböző igények)" name="text"></textarea>
                <button className='send' type="submit">Küldés</button>
            </form>
            
            

            

        </div>
    )
}

