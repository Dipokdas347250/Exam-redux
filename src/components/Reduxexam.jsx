import React from 'react'
import {Link} from "react-router-dom"

const Reduxexam = () => {
  return (
    <>
          <Link to="https://dasdipok.netlify.app/">
              <div className="h-[100px] w-[50%] bg-[#000] mt-[30px] ml-[50%] translate-x-[-50%]  items-center   cursor-pointer rounded-xl">
                  <h5 className='font-sans font-bold   text-[24px]  text-[#fff] text-center leading-[100px]  '>Click Redux-Exam</h5>
              </div>
          </Link>
    </>
  )
}

export default Reduxexam