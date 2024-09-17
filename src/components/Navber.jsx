import React from 'react'
import Container from "./Container"

const Navber = () => {
  return (
    <>
    <section className='py-5 bg-[#262626]'>
      <Container>
        <div className=" flex justify-around items-center  ">
          <div className="">
            <h2 className='font-sans font-bold   text-[28px]  text-[#fff]'>Exam</h2>
          </div>
          <div className="">
            <ul className='flex gap-7 font-sans font-bold   text-[16px]  text-[#fff]'>
              <li><a href=""></a>Home</li>
              <li><a href=""></a>About</li>
              <li><a href=""></a>Blog</li>
              <li><a href=""></a>Contact</li>
            </ul>
          </div>
        </div>

      </Container>
    </section>
    </>
  )
}

export default Navber