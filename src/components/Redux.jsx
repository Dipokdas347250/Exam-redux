import React from 'react'
import Container from './Container'
import { FaPlus ,FaMinus  } from "react-icons/fa";


const Redux = () => {
   

    return (
        <section className=' py-60 bg-[]'>
            <Container>
            <div className=" flex justify-around py-10 bg-[#98AFC7] ">
                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43] mr-[30px]'>Totle : $1000</h3>
                <div className=" gap-x-6 ">
                    <button   className='font-Sans font-bold text-[16px] text-[#0D0E43] py-2 px-2 border-2 border-[#000]  rounded-lg bg-[#d5dbdb] '><FaMinus /></button>
                    <button className='font-Sans font-bold text-[20px] text-[#0D0E43] px-5   '>00</button>
                    <button   className='font-Sans font-bold text-[16px] text-[#0D0E43] py-2 px-2 border-2 border-[#000]  rounded-lg bg-[#d5dbdb] '><FaPlus /></button>
                </div>
                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'> SubTotle : $1000</h3>
            </div>
        </Container>
        </section>
    )
}

export default Redux