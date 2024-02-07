import React from 'react'
import './Loader.css'


function Loader() {
    return (
        <div className='loader'>
            <div className="loader-container">
                <div className="credit-card-loader">
                    <div className="loader-dot dot-1"></div>
                    <div className="loader-dot dot-2"></div>
                    <div className="loader-dot dot-3"></div>
                </div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
    )
}

export default Loader