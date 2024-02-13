import React from 'react'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="innerWidth flexCenter h-container">
                <div className="h-left logo">
                    <img src="logo.png" alt="logo" width='100' />
                </div>
                <div className="h-right">
                    <h3>My Favourite Todolist</h3>
                </div>
            </div>
        </section>
    )
}

export default Header