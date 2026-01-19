import React from 'react';

const Input = ({label, ...props}) => {
    return (
        <div className="w-[85%] flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-2">{label}</label>
            <input
                className="w-full rounded-xl p-3 bg-slate-50 border border-slate-100 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none transition-all placeholder:text-slate-300"
                {...props}/>
        </div>
    );
};

export default Input;