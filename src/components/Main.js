import React, { useEffect, useState } from 'react'
import { CreditCard } from './CreditCard'
import { MyCards } from './MyCards'

export const Main = () => {

    return (
        <div class='main-container'>
            <div class="toolbar">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">My Cards</a></li>
                    </ul>
                </nav>
                <h1>Gwy Payments</h1>
            </div>

            <div class="content">
                <MyCards></MyCards>
            </div>

            <footer class="footer">
                <p>&copy; 2024 Gwyddyon. All rights reserved.</p>
            </footer>
        </div>
    )
}