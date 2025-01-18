import React from 'react'
import Sheraton from '../assets/sheraton.jpg'
import Nairobi from '../assets/nairobi.jpg'
import Sudan from '../assets/sudan.jpg'
function HotDeals() {
  return (
    <div className=''>
      <h2 className='mt-24 font-bold text-2xl'>Take the best Hotel Deals In AFRICA</h2>
  <div className='slides flex gap-4 mt-4 mx-auto justify-between '>
  <div className='rounded-lg shadow-lg'>
      <img src={Sheraton} className='h-[250px] w-[350px] rounded-t-lg'/>
      <div className="p-4">
    <h3 className="text-lg font-bold">Sheraton Addis Ethiopia</h3>
    <div className='flex justify-between'>8.9 - Excellent (5230)  <p>Ethipia</p> </div>
    <div>
    <div className="border  p-4 max-w-sm bg-white mt-7 relative">
      <div className="text-xs absolute ml-16 mt-[-8%] font-semibold text-red-600 bg-red-100 rounded-full px-2 py-1 w-fit ">
        34% Less than usual
      </div>
      <h2 className="text-lg font-bold mt-2">AfriHot Book & Go</h2>
      <p className="text-sm text-gray-500">Free cancellation</p>
      <div className="mt-4">
        <p className="text-xl font-bold">About $199</p>
        <p className="text-sm text-gray-500">per night</p>
      </div>
      <div className="mt-2 text-gray-600">
        <p>
          <span className="font-semibold">Jan 6</span> -{" "}
          <span className="font-semibold">Jan 7</span>
        </p>
      </div>
      <button className="mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-24 text-center rounded">
        Check deal
      </button>
    </div>

      </div>


     </div>
    </div>

    <div className='rounded-lg shadow-lg'>
      <img src={Nairobi} className='rounde-lgd h-[250px] w-[350px] rounded-t-lg'/>
      <div className="p-4">
    <h3 className="text-lg font-bold">Nairobi Hotel Kenya</h3>
    <div className='flex justify-between'>8.9 - Excellent (5230)  <p>Kenya</p> </div>
    <div>
    <div className="border  p-4 max-w-sm bg-white mt-7 relative">
      <div className="text-xs absolute ml-16 mt-[-8%] font-semibold text-red-600 bg-red-100 rounded-full px-2 py-1 w-fit">
        34% Less than usual
      </div>
      <h2 className="text-lg font-bold mt-2">AfriHot Book & Go</h2>
      <p className="text-sm text-gray-500">Free cancellation</p>
      <div className="mt-4">
        <p className="text-xl font-bold">About $199</p>
        <p className="text-sm text-gray-500">per night</p>
      </div>
      <div className="mt-2 text-gray-600">
        <p>
          <span className="font-semibold">Jan 6</span> -{" "}
          <span className="font-semibold">Jan 7</span>
        </p>
      </div>
      <button className="mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-24 text-center rounded">
        Check deal
      </button>
    </div>

    </div>


  </div>
    </div>
    <div className='rounded-lg shadow-lg '>
      <img src={Sudan} className='h-[250px] w-[350px] rounded-t-lg'/>
      <div className="p-4">
    <h3 className="text-lg font-bold">Corinthia Hotel Khartoum</h3>
    <div className='flex justify-between'>8.9 - Excellent (5230)  <p>Sudan</p> </div>
    <div>
    <div className="border  p-4 max-w-sm bg-white mt-7 relative">
      <div className="text-xs absolute ml-16 mt-[-8%] font-semibold text-red-600 bg-red-100 rounded-full px-2 py-1 w-fit">
        34% Less than usual
      </div>
      <h2 className="text-lg font-bold mt-2">AfriHot Book & Go</h2>
      <p className="text-sm text-gray-500">Free cancellation</p>
      <div className="mt-4">
        <p className="text-xl font-bold">About $199</p>
        <p className="text-sm text-gray-500">per night</p>
      </div>
      <div className="mt-2 text-gray-600">
        <p>
          <span className="font-semibold">Jan 6</span> -{" "}
          <span className="font-semibold">Jan 7</span>
        </p>
      </div>
      <button className="mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-24 text-center rounded">
        Check deal
      </button>
    </div>

    </div>


  </div>
    </div>
   






  </div>


    </div>
  )
}

export default HotDeals
