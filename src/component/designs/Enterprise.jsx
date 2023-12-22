import React from 'react'

const Enterprise = () => {
  return (
    <div className="bg-[#ffff] w-[300px] lg:w-[720px] h-[500px] lg:h-[280px] mx-auto shadow-2xl mt-6 rounded-xl pt-1 block lg:flex gap-x-5">
    <div>
    <div className="ml-10">
    <button className=" mt-8 p-0.5 rounded-3xl w-[100px] bg-[#E26EE5] hover:bg-violet-600 font-medium text-xs flex justify-center items-center">
      free forevevr
    </button>
  </div>
  <p className="font-bold text-3xl ml-10 mt-2">Free Starter</p>
  <div className="ml-10">
    <p className="font-semibold">
      The quickest and easiest way to try protocols <br /> with basic
      functionalities
    </p>
  </div>
  <div className="ml-10 mt-6">
    <button className="bg-[#E26EE5] hover:bg-violet-600 w-[150px] relative flex  gap-x-2 font-medium p-1 rounded-lg">
      Get Started
      <span className="absolute inset-y-0 left-32 flex items-center">
        <ion-icon name="arrow-forward-outline" className="ml-2"></ion-icon>
      </span>
    </button>
  </div>
    </div>


  <div>
  <p className='text-xs mt-8 ml-8 md:ml-0'>What you'll get:</p>
<div>
<div className='flex gap-x-4 ml-8 md:ml-2 mt-2'>
<ion-icon class="mt-1" name="person-outline"></ion-icon>
    <p className='font-semibold text-base'>Up to 25 Users</p>
</div>
<div className='flex gap-x-4 ml-8 md:ml-2 mt-2'>
<ion-icon class="mt-1" name="cloud-upload-outline"></ion-icon>
    <p className='font-semibold text-base'>Up to 25gb Storage</p>
</div>
<div className='flex gap-x-4 ml-8 md:ml-2 mt-2'>
<ion-icon class="mt-1" name="mail-outline"></ion-icon>
    <p className='font-semibold text-base'>Email Support</p>
</div>
<div className='flex gap-x-4 ml-8 md:ml-2 mt-2'>
<ion-icon name="checkmark-done-outline"></ion-icon>
    <p className='font-semibold text-base text-balance'>Basics of Document Task Flow,<br />Voting,Accounting,Banking
    ,Notes <br /> Investor,Diresctor and Team <br /> Managment Included</p>
</div>
</div>
  </div>

 
</div>
  )
}

export default Enterprise