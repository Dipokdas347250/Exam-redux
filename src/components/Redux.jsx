import React from 'react'
import Container from './Container'
import { FaPlus ,FaMinus  } from "react-icons/fa";
import Reduxexam from './Reduxexam';


const Redux = () => {
   

    return (
        <section className=' py-32 bg-[]'>
            <Container>
            <div className=" flex justify-around py-10 bg-[#98AFC7] ">
                <h2 className='font-sans font-bold   text-[42px]  text-[#000]'>Wellcome to fireBase</h2>
            </div>
            <div className="">
                <Reduxexam/>
            </div>
            
        </Container>
        </section>
    )
}

export default Redux