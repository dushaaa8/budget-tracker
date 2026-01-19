import React from 'react';
import TransactionItem from "./TransactionItem.jsx";

const TransactionsList = ({transactions}) => {
    return (
        <ul className="py-10 grid grid-cols-1 gap-3 w-[90%] h-auto ">
            {transactions.map((transaction) => {
                    return (
                        <TransactionItem
                        id={transaction.id}
                        title={transaction.title}
                        amount={transaction.amount}
                        income={transaction.income}
                        />
                    );
                }
            )}
        </ul>
    );
};

export default TransactionsList;