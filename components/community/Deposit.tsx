"use client";
import React, { useState } from "react";

export default function DepositInformation() {
    const [depositAmount, setDepositAmount] = useState("");
    const balance = 150.0;

    const handleMax = () => {
        setDepositAmount(balance.toString());
    };

    const handleDeposit = () => {
        alert("You deposited ${depositAmount} SUI!");
    };

    return (
        <div className="">
            <div className="border border-[#16D7A6] rounded-lg py-20  px-[300px]  w-full bg-[#113A47] shadow-lg">
                <h2 className="text-[#72ddd1] ml-[-270px]  text-lg font-bold mb-6">Deposit Information</h2>

                {/* Radio button for currency */}
                <div className="flex ml-[-270px] items-center space-x-2 mb-4">
                    <input
                        type="radio"
                        id="sui"
                        name="currency"
                        value="SUI"
                        className="cursor-pointer"
                    />
                    <span className="text-[#72ddd1] text-lg">SUI</span>
                </div>

                {/* Deposit input with "MAX" button */}
                <div className="relative ml-[-270px] justify-between mb-4">
                    <input
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        placeholder="100.00"
                        className="block p-2 bg-[#1c7974] w-full  rounded-md text-white focus:outline-none focus:ring focus:ring-teal-500 pr-16"
                    />
                    <button
                        onClick={handleMax}
                        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-[#16D7A6] font-bold hover:underline"
                    >
                        MAX
                    </button>
                </div>

                {/* Balance details */}
                <div className="flex  ml-[-270px]  justify-between text-[#72ddd1] text-sm mb-6  ">
                    <span>$349.49</span>
                    <span>Balance: {balance} SUI</span>
                </div>

                {/* Deposit button */}
                <div className="flex justify-center items-center">
                    <button
                        onClick={handleDeposit}
                        className="bg-[#16D7A6] text-white font-bold py-2 px-4 rounded-md hover:bg-[#0EAF8B] transition"
                    >
                        Deposit
                    </button>
                </div>
            </div>
        </div>
    );
}