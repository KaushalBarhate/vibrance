import React from 'react'
import Select from 'react-select'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdResize } from 'react-icons/io';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import dummyImg from '../../assets/images/dummy.jpg'
import dummyImg2 from '../../assets/images/unisex.png'
import { motion } from "framer-motion"

const Body = () => {
  const optionsSize = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'X-Large' }
  ]
  const optionsCombo = [
    { value: 'combo1', label: 'Combo 1' },
    { value: 'combo2', label: 'Combo 2' },
    { value: 'combo3', label: 'Combo 3' }
  ]
  const dummyString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim explicabo cum nam consequuntur saepe provident dolorum eveniet ipsa fugiat tempore, sint harum blanditiis sunt accusantium deleniti commodi numquam exercitationem.';
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #343D4C',
      borderRadius: '32px',
      padding: '6px 16px',
      '&:hover': {
        border: state.isFocused ? '1px solid #343D4C' : '1px solid #343D4C',
        backgroundColor: '#fff',
        cursor: 'pointer'
      },
      backgroundColor: '#D7FDFF',
      color: '#343D4C',
      minWidth: '180px',
      
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#a8b2c3' : state.isFocused ? '#cbd1db' : null,
      color: state.isSelected ? '#343D4C' : state.isFocused ? '#343D4C' : null,
      '&:hover': {
        cursor: 'pointer'
      },
      '&:active': {
        backgroundColor: '#343D4C',
        color: '#343D4C'
      }
    }),
    menuList: (base) => ({
      ...base,
      padding: '0'
    }),
    singleValue: (base) => ({
      ...base,
      color: '#343D4C'
    }),
    placeholder: (base) => ({
      ...base,
      color: '#343D4C'
    }),
    indicatorSeparator: (base) => ({
      ...base,
      color: '#343D4C'
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#343D4C'
    })
  }
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11]
  
  const handleVClick = (e) => {
    console.log(e)
  }
  const cardVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };


  return (
    <div className='flex flex-col space-y-10'>
      {/* filter */}
      <div className='filters flex md:flex-row flex-col-reverse justify-center md:justify-evenly items-center py-5 md:h-24 md:space-x-52 md:space-y-0 mx-3'>
        <div className='flex md:space-x-10 space-x-5 mt-5'>
          <Select styles={customStyles} placeholder="Size" options={optionsSize}/>
          <Select styles={customStyles} placeholder="Combo" options={optionsCombo}/>
        </div>
        <div className='flex justify-center space-x-5 h-full items-center md:px-5 pl-5 md:w-auto w-full mx-4 pr-10 py-2 border-black border rounded-[32px] text-xl'>
          <label htmlFor='search'>
            <AiOutlineSearch/>
          </label>
          <input className='bg-transparent focus:outline-none text-lg w-full' id='search' placeholder='Search..' type="text" />
        </div>
      </div>

      {/* merch */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.1}} className='merch grid justify-center grid-flow-row md:grid-flow-row md:grid-cols-4 grid-cols-1 md:mx-40 mx-5 gap-10 items-center'>
        {arr.map((i,idx)=>{return <motion.div id={i} key={i} variants={cardVariants} className={`${i} group hover:scale-105 transition-all merch-items md:max-w-sm flex flex-col justify-center items-center border space-y-2 rounded-3xl p-3 border-black`}>
          <div className='relative object-cover w-fit object-center'>
            <img className=' rounded-xl' src={dummyImg} alt="" />
            <div className='absolute top-1 right-2 flex text-xs space-x-1 rounded-2xl bg-white p-1'><img src={dummyImg2} alt="" /><span>Unisex</span></div>
          </div>
          <div className='m-2'><p className='font-secondary'>{dummyString.slice(0,100)}. <span className='font-bold hover:cursor-pointer' onClick={handleVClick(i,idx)}>view more</span></p></div>
          <div className='flex justify-center items-center p-2 bg-white rounded-xl text-xs space-x-3  place-items-start'><span className='p-0.5 bg-black text-white'><IoMdResize/></span><p>Available Sizes: <span>S, M, L, XL, XX</span></p></div>
          <div className='flex justify-center items-center p-2 bg-white rounded-xl space-x-2'><span className=' '><HiCurrencyRupee/></span><p className='text-sm'>499</p></div>
          <div className='w-full'><button className='bg-[#26B7FB] w-full justify-center rounded-2xl py-3 text-white font-secondary flex items-center space-x-2'><span className='font-semibold'>Buy Now </span><span className='text-xs'><FaExternalLinkAlt/></span></button></div>
        </motion.div>}) }



        {/* <div className='merch-items md:max-w-xs flex flex-col justify-center items-center border space-y-2 rounded-3xl p-3 border-black'>
          <div className='relative object-cover w-fit object-center'>
            <img className=' rounded-xl' src={dummyImg} alt="" />
            <div className='absolute top-1 right-2 flex text-xs space-x-1 rounded-2xl bg-white p-1'><img src={dummyImg2} alt="" /><span>Unisex</span></div>
          </div>
          <div className='m-2'><p className='font-secondary'>{dummyString.slice(0,100)}. <span className='font-bold hover:cursor-pointer'>view more</span></p></div>
          <div className='flex justify-center items-center p-2 bg-white rounded-xl text-xs space-x-3  place-items-start'><span className='p-0.5 bg-black text-white'><IoMdResize/></span><p>Available Sizes: <span>S, M, L, XL, XX</span></p></div>
          <div className='flex justify-center items-center p-2 bg-white rounded-xl space-x-2'><span className=' '><HiCurrencyRupee/></span><p className='text-sm'>499</p></div>
          <div className='w-full'><button className='bg-[#26B7FB] w-full justify-center rounded-2xl py-3 text-white font-secondary flex items-center space-x-2'><span className='font-semibold'>Buy Now </span><span className='text-xs'><FaExternalLinkAlt/></span></button></div>

        </div> */}

      </motion.div>
    </div>
  )
}

export default Body