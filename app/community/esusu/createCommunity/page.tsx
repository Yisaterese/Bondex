'use client';
import React  from 'react';
import CreateCommunity from '../../../../components/community/createCommunity';
import Navbar from "../../../../components/navbar/Navbar";

export default function page(){

    return (
        <div className="">
            <Navbar/>
            <CreateCommunity communityname={'Esusu'}/>
        </div>
    );
};

