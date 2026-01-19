import React from 'react';

const TransactionItem = ({id,title,income,amount,}) => {
    const statusClasses = income
        ? "border-green-300 before:bg-green-400/70"
        : "border-red-300 before:bg-red-400/70"
    return (
        <li key={id} className={`relative py-3 px-5 capitalize  flex justify-between rounded-xl bg-[rgba(0,0,0,0.35)] border-r-16
                    before:content-[''] before:absolute before:inset-y-0 before:-right-[15px]
                    before:w-[13px] before:blur-md before:rounded-full ${statusClasses}`}>
            <h3>{title}</h3>
            {income
                ? <p>+ {amount}$</p>
                : <p>- {amount}$</p>
            }

        </li>
    );
};

export default TransactionItem;