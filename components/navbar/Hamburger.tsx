'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import CommunityMenu from '../../components/community/modal/communities';

export default function Hamburger() {
    const [communityMenuVisible, setCommunityMenuVisible] = useState(false);

    const toggleCommunityMenu = () => {
        setCommunityMenuVisible((prevState) => !prevState);
    };


    return (
        <div className="font-bold text-lg items-center flex flex-col text-black p-4 gap-2 cursor-pointer bg-teal-500 bg-opacity-25">
            {/* If community menu is visible, show CommunityMenu */}
            {communityMenuVisible ? (
                <CommunityMenu />
            ) : (
                <>
                    <div className="hover:text-teal-500 hover:-translate-y-1 transition-all">
                        <h1>Home</h1>
                    </div>
                    <Link href={'/about'}>
                        <div className="hover:text-teal-500 hover:-translate-y-1 transition-all">
                            <h1>About</h1>
                        </div>
                    </Link>
                    <Link href={'/staking'}>
                        <div className="hover:text-teal-500 hover:-translate-y-1 transition-all">
                            <h1>Staking</h1>
                        </div>
                    </Link>
                    {/* When Community is clicked, toggle community menu */}
                    <div
                        className="hover:text-teal-500 hover:-translate-y-1 transition-all"
                        onClick={toggleCommunityMenu}
                    >
                        <h1>Community</h1>
                    </div>b
                </>
            )}
        </div>
    );
}
