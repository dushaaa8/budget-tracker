import React from 'react';

const Header = ({title,balance}) => {
    return (
        <header className="w-full shadow-[0_12px_18px_-5px_rgba(255,255,255,0.5)] border-b-white border-b-2">
            <h1 className="text-4xl font-medium mt-12 text-center">{title}</h1>
            <p className="w-full text-center pb-5 text-white text-7xl tracking-tighter font-bold mt-6">{balance} $</p>
        </header>
    );
};

export default Header;