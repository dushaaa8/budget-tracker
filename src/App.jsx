import Footer from "./components/Footer.jsx";
import {useState} from "react";
import TransactionModal from "./components/TransactionModal.jsx";
import ButtonModal from "./components/ButtonModal.jsx";

function App() {
    const [balance, setBalance] = useState(1800)
    const [isModal, setModal] = useState(false)
    const [transactions, setTransactions] = useState(
        [{
            id:1,
            title:"ZARPLATA",
            amount:200,
            income:true
        },
        {
            id:2,
            title:"KAZIK",
            amount:100,
            income:false
        },
            {
                id:3,
                title:"ЛАСТ ДОДЕП",
                amount:50,
                income:false
            }]
    );


    const openModal = () =>{
        setModal(!isModal)
    }

    return (
        <div className="flex flex-col items-center h-screen overflow-y-auto bg-[linear-gradient(45deg,#333,#1E1E1E)] text-shadow-md text-white max-w-full ">
            {/* it will be spinner*/}
            {/*<h1 className="text-4xl font-medium mt-12 text-center ">Welocme👋</h1>*/}
            <header className="w-full shadow-[0_12px_18px_-5px_rgba(255,255,255,0.5)] border-b-white border-b-2">
                <h1 className="text-4xl font-medium mt-12 text-center">Balacne</h1>
                <p className="w-full text-center pb-5 text-white text-7xl tracking-tighter font-bold mt-6">{balance} $</p>
            </header>

            <main className="flex flex-col w-full pl-10 lg:max-w-1/3">
                <h2 className="pt-8">My transactions</h2>
                <ul className="py-10 grid grid-cols-1 gap-3 w-[90%] h-auto uppercase">
                    {transactions.map((transaction)=> {
                        const statusClasses = transaction.income
                            ? "border-green-300 before:bg-green-400/70"
                            : "border-red-300 before:bg-red-400/70"
                        return (
                            <li key={transaction.id} className={`relative py-3 px-5  flex justify-between rounded-xl bg-[rgba(0,0,0,0.35)] border-r-16
                    before:content-[''] before:absolute before:inset-y-0 before:-right-[15px]
                    before:w-[13px] before:blur-md before:rounded-full ${statusClasses}`}>
                                <h3>{transaction.title}</h3>
                                {transaction.income
                                    ? <p>+ {transaction.amount}</p>
                                    : <p>- {transaction.amount}</p>
                                }

                            </li>
                            );
                        }
                    )}
                </ul>
                <ButtonModal openModal={openModal}/>
                <TransactionModal openModal={openModal} isModal={isModal}/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
