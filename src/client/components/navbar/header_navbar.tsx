import React from 'react'
import MainLogo from './components/main_logo'

const HeaderNavbar = () => {

    return (
        <header className='sticky flex items-center h-20 backdrop-blur-md bg-white/80 shadow-[0px_1px_0px_0px_rgba(19,15,64,0.1)]'>
            <nav className='container'>
                <MainLogo />
            </nav>
        </header>
    )
}

export default HeaderNavbar