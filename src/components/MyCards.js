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
                    "mask": "347762******634",
                    "created": "01/02/2024",
                    "default": false
                },
                {
                    "token": "5bc54383eb77b33b2079035",
                    "franchise": "visa",
                    "mask": "517562******0326",
                    "created": "01/02/2024",
                    "default": true
                },
                {
                    "token": "5bc54383eb77b33b2079035",
                    "franchise": "visa",
                    "mask": "123456******1234",
                    "created": "01/02/2024",
                    "default": true
                }
            ]
        }
    }

    useEffect(() => {
        setCards(creditInfo.client.cards)
    }, [])

    return (
        <div class="my-cards">
            {
                cards.map((card, index) => (
                    <div className='card-container'>
                        <CreditCard creditCard={card} key={index} size='S' colorCard=''></CreditCard>
                    </div>
                ))
            }

        </div>
    )
}
