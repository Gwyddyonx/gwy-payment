import React, { useEffect, useState } from 'react'
import './CreditCard.css'

const color = [
    'red', 'blue', 'black', 'purple', 'green'
]

export const CreditCard = ({ creditCard, size = 'M', colorCard }) => {

    const [mainColorCard, setMainColorCard] = useState(() => colorCard || getColor());

    function getCard() {
        if(creditCard.mask == undefined|| creditCard.mask == null) return ''
        return creditCard.mask.replace(/(\S{4})/g, '$1 ').trim()
    }

    function getFranchise() {
        if (/^4/.test(creditCard.mask) && (creditCard.mask.length === 13 || creditCard.mask.length === 16)) {
            return 'Visa';
        } else if (/^5[1-5]/.test(creditCard.mask) && creditCard.mask.length === 16) {
            return 'MasterCard';
        } else if (/^3[47]/.test(creditCard.mask) && creditCard.mask.length === 15) {
            return 'Amex';
        } else {
            return 'Visa';
        }
    }

    function getImageFranchise() {
        switch (getFranchise()) {
            case 'Visa':
                return require("../assets/visa.png")
                break;
            case 'MasterCard':
                return require("../assets/mastercard.png")
                break;
            case 'Amex':
                return require("../assets/amex.png")
                break;
            default:
                break;
        }
    }

    const getSizeClass = () => {
        switch (size) {
            case 'L':
                return 'large';
            case 'S':
                return 'small';
            default:
                return 'medium';
        }
    };

    function getColor() {
        var i = Math.floor(Math.random() * color.length);
        return color[i];
    }

    return (
        <div className={`credit-card ${getSizeClass()}`}>
            <div className={`flip ${getSizeClass()}`}>
                <div class={`front-card ${getSizeClass()} color-${mainColorCard}`}>
                    <div class={`chip ${getSizeClass()}`}></div>
                    <div class={`logo ${getSizeClass()}`}>
                        <img src={getImageFranchise()}></img>
                    </div>
                    <div class={`number ${getSizeClass()}`}>{getCard()}</div>
                    <div class={`card-holder ${getSizeClass()}`}>
                        <label>Card holder</label>
                        <div>{creditCard.name}</div>
                    </div>
                    <div class={`card-expiration-date ${getSizeClass()}`}>
                        <label>Expires</label>
                        <div>{(creditCard.month ?? 'MM') + '/' + (creditCard.year ?? 'YYYY')}</div>
                    </div>
                </div>
                <div class={`back-card ${getSizeClass()}`}>
                    <div class={`strip ${getSizeClass()}`}></div>
                    <div class={`logo ${getSizeClass()}`}>
                        <img src={require("../assets/visa.png")}></img>
                    </div>
                    <label class={`label-ccv ${getSizeClass()}`}>CCV</label>
                    <div class={`ccv ${getSizeClass()}`}>
                        <div>{creditCard.ccv}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}