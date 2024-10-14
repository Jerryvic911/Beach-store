import Header from '../components/Header'
import "../landing-page-features/Body.css"
import Items from './Items'
import Testimonial from './testimonial'
import Coupon from './Coupon'
import Footer from '../components/Footer'

function Body() {
  return (
    <div className='body'>
      <div className="">
      <Header/>
      </div>
    
      <div className='imgg justify-center text-center mt-[9vh]'>
        <div className=' hold-img text-center pt-[12.5rem]'>
        <h1 className='text capitalize text-6xl font-semibold font-display'>BEACH</h1>
        <h2 className=' capitalize font-light font-Montserrat text-5xl mt-2 mb-3 tracking-[8px]'>Multipurpose Store</h2>
        <div>
        <button className=' capitalize font-Montserrat bg-black text-white w-[30vh] h-[8vh] text-xl tracking-[3px] rounded-sm mt-6'>Shop now</button>
        </div>
        </div>
  
      </div>

      <div>
      <Items/>
      </div>
      
      <div>
      <Testimonial/>
      </div>
    <div>
      <div>
      <Coupon/>
      </div>
      <div className=" w-[98.5vw] h-[0.1px] bg-black mt-20"> </div>

            <div>
             <Footer/>
            </div>
    
    </div>
      

    </div>
  )
}

export default Body