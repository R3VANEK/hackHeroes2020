import React, { Component } from 'react';
import './Welcome.css'

class Welcome extends Component {
    state = {  }
    render() { 
        return ( 
            <main>
                <div id="welcome-main-holder">
                    Witaj w naszej aplikacji Healfy! Odkryj jej niesamowity potencjał. Od teraz nie musisz się martwić,
                    że zapomnisz numeru recepty, nie znajdziesz odpowiedniego lekarza, a sam kontakt telefoniczny Ci nie wystarcza.
                    Healfy o to wszystko zadba. Odbywaj video rozmowy z specjalistami z całej Polski, miej recepty w jednym miejscu, 
                    wygodnie wpisuj dane dotyczące twojego stanu zdrowia, odczytuj je na wykresach i udostępniaj lekarzom do monitorowania postępu leczenia. Cały nasz zespół trzyma kciuki żebyś jak najszybciej doszedł do zdrowia!
                </div>
            </main>
         );
    }
}
 
export default Welcome;