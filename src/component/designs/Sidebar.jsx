import React from 'react'

const Sidebar = (props) => {
  return (
    <>
    <div className='bg-[#ffff] w-[250px] h-[820px] hidden  md:block mx-auto shadow-xl mt-6 rounded-xl border border-gray-300'>
      <div className='bg-white w-[250px] h-[150px] shadow-2xl rounded-md border border-gray-200'>
    <div className=' flex justify-center'>
        <img  className='rounded-full w-[70px] h-[75px] mt-4' src={require("../assets/WhatsApp Image 2023-12-21 at 1.33.12 AM.jpeg")} alt="" />
    </div>
    <div className='text-center mt-3'>
        <p className='font-bold text-sm'>Ram Mohan</p>
        <p className='text-[10px] text-xs'>Rammohan@gmail.com</p>
    </div>
    <div className='flex-col space-y-10  mt-10'>
        <div className='flex items-center  gap-x-3 bg-white p-2 shadow-2xl h-[60px] mt-2 w-[230px] rounded-r-lg'>
           <img className='w-[25px] h-[25px] ml-4' src={require("../assets/folder.png")} alt="" /> 
           <p className='text-[23px] font-medium'>Dashboard</p>
        </div>
        <div className='flex items-center  gap-x-3 bg-white p-2 shadow-2xl h-[60px] mt-2 w-[230px] rounded-r-lg'>
           <img className='w-[25px] h-[25px] ml-4' src={require("../assets/folder.png")} alt="" /> 
           <p className='text-[23px] font-medium'>Perks</p>
        </div>
        <div className='flex items-center  gap-x-3 bg-white p-2 shadow-2xl h-[60px] mt-2 w-[230px] rounded-r-lg'>
           <img className='w-[25px] h-[25px] ml-4' src={require("../assets/folder.png")} alt="" /> 
           <p className='text-[23px] font-medium'>Addons</p>
        </div>
        <div className='flex items-center  gap-x-3 bg-white p-2 shadow-2xl h-[60px] mt-2 w-[230px] rounded-r-lg'>
           <img className='w-[25px] h-[25px] ml-4' src={require("../assets/folder.png")} alt="" /> 
           <p className='text-[23px] font-medium'>FAQ</p>
        </div>
        <div className='flex items-center  gap-x-3 bg-white p-2 shadow-2xl h-[60px] mt-2 w-[230px] rounded-r-lg'>
           <img className='w-[25px] h-[25px] ml-4' src={require("../assets/folder.png")} alt="" /> 
           <p className='text-[23px] font-medium'>Support</p>
        </div>
    </div>


    <div className='mt-24 flex justify-center'>
        <p className='text-2xl font-medium'>Logout</p>
        <ion-icon class="text-blue-400 mt-1 ml-2 text-2xl" name="log-out-outline"></ion-icon>
    </div>

      </div>
    </div>


{props.menu && (
 <div className=' md:static absolute  z-10 md:hidden bg-gray-400 w-full h-screen    mx-auto shadow-xl mt-6 rounded-xl border border-gray-300'>
<div className='bg-white w-full h-[130px] shadow-2xl rounded-md border border-gray-200'>
<div className=' flex justify-center'>
  <img  className='rounded-full w-[60px] h-[65px] mt-2' src={require("../assets/WhatsApp Image 2023-12-21 at 1.33.12 AM.jpeg")} alt="" />
</div>
<div className='text-center mt-2'>
  <p className='font-bold text-sm'>Ram Mohan</p>
  <p className='text-[10px] text-xs'>Rammohan@gmail.com</p>
</div>
<div className='flex-col space-y-5  mt-5'>
  <div className='flex items-center  gap-x-2 bg-white p-2 shadow-2xl h-[45px] mt-2 w-[185px] rounded-r-lg'>
     <img className='w-[15px] h-[15px] ml-4' src={require("../assets/folder.png")} alt="" /> 
     <p className='text-[18px] font-medium'>Dashboard</p>
  </div>
  <div className='flex items-center  gap-x-2 bg-white p-2 shadow-2xl h-[45px] mt-2 w-[185px] rounded-r-lg'>
     <img className='w-[15px] h-[15px] ml-4' src={require("../assets/folder.png")} alt="" /> 
     <p className='text-[18px] font-medium'>Perks</p>
  </div>
  <div className='flex items-center  gap-x-2 bg-white p-2 shadow-2xl h-[45px] mt-2 w-[185px] rounded-r-lg'>
     <img className='w-[15px] h-[15px] ml-4' src={require("../assets/folder.png")} alt="" /> 
     <p className='text-[18px] font-medium'>Addons</p>
  </div>
  <div className='flex items-center  gap-x-2 bg-white p-2 shadow-2xl h-[45px] mt-2 w-[185px] rounded-r-lg'>
     <img className='w-[15px] h-[15px] ml-4' src={require("../assets/folder.png")} alt="" /> 
     <p className='text-[18px] font-medium'>FAQ</p>
  </div>
  <div className='flex items-center  gap-x-2 bg-white p-2 shadow-2xl h-[45px] mt-2 w-[185px] rounded-r-lg'>
     <img className='w-[15px] h-[15px] ml-4' src={require("../assets/folder.png")} alt="" /> 
     <p className='text-[18px] font-medium'>Support</p>
  </div>
</div>


<div className='mt-24 flex justify-center'>
  <p className='text-2xl font-medium'>Logout</p>
  <ion-icon class=" mt-1 ml-2 text-2xl" name="log-out-outline"></ion-icon>
</div>

</div>
</div>
)}


</>








  )
}

export default Sidebar