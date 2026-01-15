import React from 'react';

const ButtonModal = ({openModal}) => {
    return (
        <button onClick={openModal}
                className="transition-all ease-in-out fixed bottom-12 right-6 w-16 h-16 pb-4 rounded-full text-6xl shadow-2xl bg-cyan-300 shadow-cyan-200 flex items-center justify-center active:scale-95">
            +
        </button>
    );
};

export default ButtonModal;