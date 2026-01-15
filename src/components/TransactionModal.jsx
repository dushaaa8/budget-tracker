import React from 'react';

const TransactionModal = ({isModal, openModal}) => {
    return (
        <section
            onClick={openModal}
            className={`fixed inset-0 bg-black-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-all ease-in-out duration-300 ${isModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <form
                onClick={(e) => e.stopPropagation()}
                className={`${isModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}w-full transition-all ease-in-out duration-300 max-w-md bg-white flex flex-col items-center gap-6 py-12 px-6 text-[#333] rounded-[2rem] shadow-2xl ring-1 ring-black/5`}>
                <h2 className="text-2xl font-black text-slate-800 mb-2">New Transaction</h2>

                <div className="w-[85%] flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Title</label>
                    <input
                        className="w-full rounded-xl p-3 bg-slate-50 border border-slate-100 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all placeholder:text-slate-300"
                        type="text"
                        placeholder="What for?"/>
                </div>

                <div className="w-[85%] flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Amount</label>
                    <input
                        className="w-full rounded-xl p-3 bg-slate-50 border border-slate-100 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all placeholder:text-slate-300 font-mono text-lg"
                        type="number"
                        placeholder="0.00"/>
                </div>

                <div className="w-[85%] flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Type</label>
                    <select
                        className="w-full rounded-xl p-3 bg-slate-50 border border-slate-100 focus:border-cyan-400 outline-none cursor-pointer appearance-none"
                        name="selectTypeOfTransaction"
                        defaultValue="waiting">
                        <option value="waiting" disabled>Select type...</option>
                        <option value="plus">🟢 Income</option>
                        <option value="minus">🔴 Expense</option>
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