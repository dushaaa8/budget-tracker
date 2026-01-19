import Footer from "./components/ui/Footer.jsx";
import {useEffect, useState} from "react";
import TransactionModal from "./components/TransactionModal.jsx";
import ButtonModal from "./components/ui/ButtonModal.jsx";
import Header from "./components/ui/Header.jsx";
import TransactionsList from "./components/TransactionsList.jsx";
import Spinner from "./components/ui/Spinner.jsx";

function App() {
    const [isModal, setModal] = useState(false)
    const [transactions, setTransactions] = useState(()=>{
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [
            { id: 3, title: "зарплатка", amount: 500, income: true }
        ];
    });
    const balance = transactions.reduce((acc, t) => t.income ? acc + Number(t.amount) : acc - Number(t.amount), 0);
    const [isLoading, changeLoading] = useState(true)

    const openModal = () =>{
        setModal(!isModal)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            changeLoading(false);
        }, 1000);

        // 2. ОЧЕНЬ ВАЖНО: функция очистки (cleanup)
        // Если пользователь закроет страницу раньше, чем сработает таймер,
        // эта строка "убьет" его, предотвращая утечки памяти. --- GEMINI's TIP
        return () => clearTimeout(timer);
    }, []); // [] означает, что код сработает только 1 раз при загрузке

    useEffect(()=>{
        localStorage.setItem("transactions",JSON.stringify(transactions))
    },[transactions])


    return (
        <div className="flex flex-col items-center h-screen overflow-y-auto bg-[linear-gradient(45deg,#333,#1E1E1E)] text-shadow-md text-white max-w-full ">

            {isLoading
                ? <Spinner/>
                : <>
                    <Header title={"Balance"} balance={balance}/>

                    <main className="flex flex-col w-full pl-10 md:max-w-1/3">
                        <h2 className="pt-8">My transactions</h2>
                        <TransactionsList transactions={transactions}/>
                        <ButtonModal openModal={openModal}/>
                        <TransactionModal
                            openModal={openModal}
                            isModal={isModal}
                            setTransactions={setTransactions}
                        />
                    </main>
                </>
            }
            <Footer/>
        </div>
    )
}

export default App
