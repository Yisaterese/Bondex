import React from 'react';
interface TACProps {
    header: string;
    content: string;
    buttonText?: React.ReactNode;
}

const TAC: React.FC<TACProps> = ({ header, content, buttonText }) => {
    return (
        <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-[16px] md:text-3xl font-bold text-[#073A45] mb-4">{header}</h1>
            <p className="md:text-lg text-[12px]  text-gray-600 ">{content}</p>

            {buttonText && (
                <div className="flex text-white text-center justify-center">
                    <button className="mt-4">{buttonText}</button>
                </div>
            )}
        </div>
    );
}

export default TAC;
