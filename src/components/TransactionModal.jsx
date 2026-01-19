import React, {useState} from 'react';
import Input from "./ui/Input.jsx";

const TransactionModal = ({isModal, openModal, setTransactions}) => {
    const initialState = {
        title: "",
        amount: "",
        isIncome: "waiting"
    }
    const [form, setForm] = useState(initialState)
    const handleChange = (e) =>{
        const {name, value} = e.target

        setForm(prev =>({...prev, [name]:value}))
    }

    const createTransaction = (event) =>{
        event.preventDefault()

        const newTransaction = {id: Date.now(), title: form.title, amount:form.amount, income: form.isIncome === 'income'}

        setTransactions(prev => [newTransaction, ...prev])
        setForm(initialState)
        console.log("creating transaction")
        openModal()

    }

    return (
        <section
            onClick={openModal}
            className={`fixed inset-0 bg-black-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-all ease-in-out duration-300 ${isModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={createTransaction}
                className={`${isModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}w-full transition-all ease-in-out duration-300 min-w-[90%] bg-white flex flex-col items-center gap-6 py-12 px-6 text-[#333] rounded-[2rem] shadow-2xl ring-1 ring-black/5 md:min-w-1/4`}>
                <h2 className="text-2xl font-black text-slate-800 mb-2">New Transaction</h2>
                <Input
                    label={"Title"}
                    required={true}
                    value={form.title}
                    onChange={handleChange}
                    name={"title"}
                    type={"text"}
                    placeholder={"What for?"}
                />

                <Input
                    label={"Amount"}
                    value={form.amount}
                    onChange={handleChange}
                    name={"amount"}
                    type={"number"}
                    placeholder="0.00"
                    min={0.01}
                    step={0.01}
                />


                <div className="w-[85%] flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Type</label>
                    <select
                        value={form.isIncome}
                        onChange={handleChange}
                        name="isIncome"
                        className="w-full rounded-xl p-3 bg-slate-50 border border-slate-100 focus:border-cyan-400 outline-none cursor-pointer appearance-none">
                        <option value="waiting" disabled>Select type...</option>
                        <option value="income">🟢 Income</option>
                        <option value="expanse">🔴 Expense</option>
                    </select>
                </div>
                <button
                    className="w-[85%] mt-4 py-4 bg-cyan-300 hover:bg-cyan-300 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-cyan-200 transition-all uppercase tracking-widest">
                    Add Transaction
                </button>
            </form>
        </section>
    );
};

export default TransactionModal;