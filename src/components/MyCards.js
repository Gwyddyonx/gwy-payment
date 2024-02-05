import React, { useEffect, useState } from 'react'
import { CreditCard } from './CreditCard'

const URI = 'http://localhost:3001/client/5bb09bd801ffa311f002953'

export const MyCards = () => {
    const [cards, setCards] = useState([])

    /*useEffect(() => {
        fetch(URI)
            .then(results => results.json())
            .then(data => {
                setCards(data.client.cards)
                //console.log('funciona',data)
            }).catch(error => console.log('error', error))
    }, [])*/


    var creditInfo = {
        "client": {
            "id_customer": "5bb09bd801ffa311f002953",
            "name": "Joe",
            "created": "01/31/2024",
            "email": "joe@gmail.co",
            "phone": "3005234321",
            "address": "Cr 4 # 55 36",
            "cards": [
                {
                    "token": "5bc4f1180c46962120abb5b",
                    "franchise": "visa",
                    "mask": "457562******0326",
                    "created": "01/02/2024",
                    "default": false
                },
                {
                    "token": "5bc54383eb77b33b2079035",
                    "franchise": "visa",
                    "mask": "457562******0326",
                    "created": "01/02/2024",
                    "default": true
                }
            ]
        }
    }

    useEffect(()=>{
        setCard(creditInfo)
    })

    return (
        <div class='main-container'>
            <div class="toolbar">
                <h1>Gwy Payments</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div class="content">
                {
                    cards.map((card, index) => (
                        <CreditCard creditCard={card} key={index} size='M'></CreditCard>
                    ))
                }

            </div>

            <footer class="footer">
                <p>&copy; 2024 Gwyddyon. All rights reserved.</p>
            </footer>
        </div>
    )
}
