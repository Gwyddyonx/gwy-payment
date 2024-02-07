import React, { useEffect, useState } from 'react'
import { CreditCard } from './CreditCard'
import Modal from './Modal'
import Loader from './Loader'

const URI = 'http://localhost:3001/client/5bb09bd801ffa311f002953'

export const MyCards = () => {
    const [cards, setCards] = useState([])

    const [loader, setLoader] = useState([true])

    let userInformatio = {}

    const [newCard, setNewCard] = useState([{}])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewCard(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newCard);
    }
    /*useEffect(() => {
        fetch(URI)
            .then(results => results.json())
            .then(data => {
                userInformation = data
                userInformation.client.cards = userInformation.client.cards.map((card)=>{
                    card.name = userInformation.client.name
                })
                setCards(data.client.cards)
                setNewCard(values => ({ ...values, ['name']: userInformation.client.name }))
                //console.log('funciona',data)
            }).catch(error => console.log('error', error))
    }, [])*/

    useEffect(() => {
        setTimeout(() => {
            setNewCard(values => ({ ...values, ['name']: 'camilo lopez' }))
            setLoader(false)
        }, 1000);
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    "default": false,
                    "name": "Joe"
                },
                {
                    "token": "5bc54383eb77b33b2079035",
                    "franchise": "visa",
                    "mask": "517562******0326",
                    "created": "01/02/2024",
                    "default": true,
                    "name": "Joe"
                },
                {
                    "token": "5bc54383eb77b33b2079035",
                    "franchise": "visa",
                    "mask": "123456******1234",
                    "created": "01/02/2024",
                    "default": true,
                    "name": "Joe"
                }
            ]
        }
    }

    useEffect(() => {
        setCards(creditInfo.client.cards)
    }, [])

    return (
        <div >
            {
                loader ? < Loader /> : ''
            }

            <h2>My Credit Cards</h2>
            <div className='card-credits'>
                <div class="my-cards">
                    {
                        cards.map((card, index) => (
                            <div className='card-container'>
                                <CreditCard creditCard={card} key={index} size='S' colorCard=''></CreditCard>
                                <div className='card-options'>
                                    <button disabled={!card.default} className='default-button btn'>Set as default</button>
                                    <button className='delete-button btn'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='options-container'>
                    <button className='new-card-button btn' onClick={openModal}>New card</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="modal-header">
                    <h2>New Credit Card</h2>
                </div>
                <div className="modal-body">
                    <CreditCard className='move-card' creditCard={newCard} size='M' colorCard=''></CreditCard>

                    <form className="form-container" onSubmit={handleSubmit}>
                        <label className="form-label">Number Card:
                            <input
                                className="form-input"
                                type="number"
                                name="mask"
                                size="50"
                                min="1000000000000000"
                                max="99999999999999999"
                                value={newCard.mask || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="form-label">Month:
                            <input
                                className="form-input"
                                type="number"
                                name="month"
                                min="1"
                                max="12"
                                value={newCard.month || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="form-label">Year:
                            <input
                                className="form-input"
                                type="number"
                                name="year"
                                min={new Date().getFullYear()}
                                max={new Date().getFullYear() + 100}
                                value={newCard.year || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="form-label">CCV:
                            <input
                                className="form-input"
                                type="number"
                                name="ccv"
                                min="100"
                                max="9999"
                                value={newCard.ccv || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <input className="form-submit" type="submit" value="Submit" />
                    </form>
                </div>
            </Modal>
        </div>
    )
    /*<!--button className='save-button btn'>Save</button--> */
}
