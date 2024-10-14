import Header from '../../components/Header'
import { PRODUCTS } from "../../products"
import { Product } from "./products"

function Shop() {
  return (
    <div>
        <div className='bg-black text-white '>
          <div className='text-black'>
          <Header/>
          </div>
            
        </div>

        <div className='grid grid-cols-3 mt-[10rem]'>
            
            {PRODUCTS.map((product) => <Product key={product.id} data={product}/>)}
    
        </div>
    </div>
  )
}

export default Shop