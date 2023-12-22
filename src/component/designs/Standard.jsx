import React from 'react'

const Standard = () => {
  return (
    
        <div className="bg-white w-[330px] md:w-[400px] lg:w-[250px] xl:[280px]  2xl:w-[400px] h-[330px] mx-auto shadow-2xl mt-6 rounded-xl pl-4">
  <div>
    <p className="font-bold text-2xl">Basic</p>
    <div className="relative">
      <p className=" font-light text-[10px]">$ 89.99/mo</p>
      <img className="absolute w-[50px] rotate-12  left-0  -top-2 right-0 " src={require("../assets/115-1154076_clip-art-for-free-download-clip-art-red-removebg-preview.png")} alt="" />
    </div>
    <p className='font-meduim text-2xl'>$ 9.99/mo</p>
    <div className="mt-2">
  <button className="bg-orange-200 hover:bg-orange-500 w-[150px] relative flex  gap-x-2 font-medium p-1 rounded-lg">
    Get Started
    <span className="absolute inset-y-0 left-32 flex items-center">
      <ion-icon name="arrow-forward-outline" className="ml-2"></ion-icon>
    </span>
  </button>
</div>
<hr className='border-black mt-4 mx-auto w-[280px] md:w-[350px]  lg:w-[200px] xl:[220px]   2xl:w-[350px]' />

<p className='text-xs mt-3'>What you'll get:</p>
<div>
    <div className='flex gap-x-4 ml-2 mt-2'>
    <ion-icon class="mt-1" name="person-outline"></ion-icon>
        <p className='font-semibold text-base'>Up to 25 Users</p>
    </div>
    <div className='flex gap-x-4 ml-2 mt-2'>
    <ion-icon class="mt-1" name="cloud-upload-outline"></ion-icon>
        <p className='font-semibold text-base'>Up to 25gb Storage</p>
    </div>
    <div className='flex gap-x-4 ml-2 mt-2'>
    <ion-icon class="mt-1" name="mail-outline"></ion-icon>
        <p className='font-semibold text-base'>Email Support</p>
    </div>
</div>

<div  className='mt-5 ml-7 flex items-center'>
    <p>Explore Feautres</p>
    <ion-icon class="text-xl " name="caret-forward-outline"></ion-icon>

</div>
  </div>
</div>

  
  )
}

export default Standard