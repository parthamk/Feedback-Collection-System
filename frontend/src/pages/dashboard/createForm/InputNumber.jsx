import React, { useState } from 'react'

const InputNumber = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        setIsVisible(true);
    };

    return (
        <button 
            className="flex bg-white light:bg-slate-600 text-black p-2 shadow-lg rounded-full border dark:text-slate-600 font-bold"
            onClick={handleClick}
        >
            Input Number
            {isVisible && <span className="bg-gray-200 rounded-full px-2 ml-1">{count}</span>}
        </button>
        
    )
}

export default InputNumber