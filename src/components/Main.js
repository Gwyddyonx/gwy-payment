import React, { useEffect, useState } from 'react'
import { CreditCard } from './CreditCard'
import { MyCards } from './MyCards'

export const Main = () => {

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const [selectedOption, setSelectedOption] = useState('MyCards');

    const renderContent = () => {
        switch (selectedOption) {
            case 'Home':
                return <div>Home Content</div>;
            case 'About':
                return <div>About Content</div>;
            case 'MyCards':
                return <MyCards />;
            default:
                return <div>No content available</div>;
        }
    };

    return (
        <div class='main-container'>
            <div class="toolbar">
                <nav>
                    <ul>
                        <li className={selectedOption == 'Home' ? 'menu-selected' : ''}><a href="#" onClick={() => handleOptionChange('Home')}>Home</a></li>
                        <li className={selectedOption == 'About' ? 'menu-selected' : ''}><a href="#" onClick={() => handleOptionChange('About')}>About</a></li>
                        <li className={selectedOption == 'MyCards' ? 'menu-selected' : ''}><a href="#" onClick={() => handleOptionChange('MyCards')}>My Cards</a></li>
                    </ul>
                </nav>
                <h1>Gwy Payments</h1>
            </div>

            <div class="content">
                {renderContent()}
            </div>

            <footer class="footer">
                <p>&copy; 2024 Gwyddyon. All rights reserved.</p>
            </footer>
        </div>
    )
}