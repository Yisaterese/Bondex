import React, { useState } from "react";
import { EsusuEntry } from "@/types/Types";
import DepositInformation from "../../components/community/Deposit";

const EsusuData: EsusuEntry[] = [
    { name: 'Person1', wallet: '0x01234...def01234', deposits: '10 SUI', reward: '50%' },
    { name: 'Person2', wallet: '0x01234...def01235', deposits: '10 SUI', reward: '30%' },
    { name: 'Person3', wallet: '0x01234...def01236', deposits: '10 SUI', reward: '20%' },
    { name: 'Person4', wallet: '0x01234...def01237', deposits: '10 SUI', reward: '' },
    { name: 'Person5', wallet: '0x01234...def01238', deposits: '10 SUI', reward: '' },
    { name: 'Person6', wallet: '0x01234...def01239', deposits: '10 SUI', reward: '' },
    { name: 'Person7', wallet: '0x01234...def01240', deposits: '10 SUI', reward: '' },
];

export default function EsusuCommunity() {
    const [deposit, setDeposit] = useState<boolean>(false);

    const handleDeposit = () => {
        setDeposit(true);
    };

    return (
        <div>
            {deposit ? (
                <DepositInformation />
            ) : (
                <>
                    <div className="flex justify-between">
                        <h1 className="md:text-2xl text-nowrap md:font-semibold">Esusu Community</h1>
                        <button onClick={handleDeposit} className="text-black justify-center rounded py-2 px-4 bg-[#09A896] font-bold">
                            Deposit
                        </button>
                    </div>
                    <div className="bg-[#073A45] flex rounded pb-0 flex-col items-center">
                        <div className="mt-6 w-full rounded max-w-4xl overflow-x-auto">
                            <table className="min-w-full bg-[#09A896]">
                                <thead className="hidden md:table-header-group">
                                <tr>
                                    <th className="py-2 text-black px-4 border-b">Name</th>
                                    <th className="py-2 px-4 text-black border-b">Wallet Address</th>
                                    <th className="py-2 px-4 text-black border-b">Deposits</th>
                                    <th className="py-2 px-4 border-b text-black">Reward</th>
                                </tr>
                                </thead>
                                <tbody className="block md:table-row-group">
                                {EsusuData.map((user, index) => (
                                    <tr key={index} className="block md:table-row mb-4 md:mb-0">
                                        <td className="py-2 px-4 border-b md:border-none">
                                            <span className="block md:hidden font-bold">Name:</span> {user.name}
                                        </td>
                                        <td className="py-2 px-4 border-b md:border-none">
                                            <span className="block md:hidden font-bold">Wallet Address:</span> {user.wallet}
                                        </td>
                                        <td className="py-2 px-4 border-b md:border-none">
                                            <span className="block md:hidden font-bold">Deposits:</span> {user.deposits}
                                        </td>
                                        <td className="py-2 px-4 border-b md:border-none">
                                            <span className="block md:hidden font-bold">Reward:</span> {user.reward}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
