import React,{useState} from 'react'
import Basics from './Basics'
import Standard from './Standard.jsx'
import Premium from './Premium'
import Free from './Free.jsx'
import Enterprise from './Enterprise.jsx'
import Sidebar from './Sidebar.jsx'
import Parent from './Parent.jsx'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <>
  <nav  className={`bg-[#CAEDFF] overflow-x-hidden shadow-xl w-full h-screen ${isMenuOpen ? 'overflow-y-hidden':'overflow-y-scroll'}  relative`}>
    <div className='flex justify-between'>
    <div className='bg-[#ffff] h-[70px] flex md:block md:h-[140px] lg:h-[140px]  w-[150px]  md:w-[250px] lg:w-[250px] shadow-lg  '>
    <div className="text-2xl  md:hidden">
              <ion-icon
                onClick={onToggleMenu}
                class="font-bold z-20"
                name={isMenuOpen ? "close" : "menu"}
              ></ion-icon>
            </div>
        <div className=' flex justify-center items-center ml-7 md:ml-0'>
            <img className=' w-[60px] md:w-[100px] h-[60px] md:h-[100px]' src={require("../assets/6996081-removebg-preview.png")} alt="" />
        </div>
    </div>

<div className='flex '>
<div className='bg-[#ffff] w-[150px] md:w-[240px] lg:w-[280px] h-[30px] md:h-[45px] lg:h-[60px] mt-5 md:mt-8  mr-5 md:mr-6  lg:mr-10 flex items-center gap-x-2 md:gap-x-3 rounded-md md:rounded-xl shadow-lg'>
        <img className= ' w-[15px] md:w-[40px] h-[15px] md:h-[40px] ml-2 md:ml-3 lg:ml-5 ' src={require("../assets/159251-OUTOIK-365-removebg-preview.png")} alt="flower-pic" />
        <p className=' text-xs md:text-sm lg:text-lg text-black font-medium'>XYZ Enterprises pvt ltd</p>
      </div>
      <div className='bg-[#ffff] shadow-lg w-[30px] md:w-[45px]  lg:w-[60px] h-[30px] lg:h-[50px] md:h-[40px] mt-5 md:mt-8 mr-4 md:mr-12 rounded-md md:rounded-xl flex items-center justify-center'>
      <ion-icon class=" text-base md:text-lg  lg:text-3xl " name="chevron-down-outline"></ion-icon>
      </div>
</div>

   
    </div>



<div className={`flex absolute left-0  ${ isMenuOpen? 'top-12':'top-28'}`}>
  <div className=''>
  <Sidebar menu={isMenuOpen}/>
  </div>

<div className='  lg:mt-5'>
<Parent/>
</div>

</div>





    
   
{/* <Free/>
<Enterprise/> */}


  </nav>
  </>
  )
}

export default Nav