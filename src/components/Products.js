// import { useContext } from 'react'
// import { CartContext } from '../features/CartManager';

function Products({ product }) {
// const { dispatch } = useContext(CartContext)

// const filteredHat = product.filter((item) => item.title === 'Hats')
// const filteredSneakers = product.filter((item) => item.title === 'Sneakers')

console.log(product.title)
  
return (    
{/* <div>
    <div className='m-16'>
      <h1 className='lg:text-2xl py-5 text-red-900 font-semibold'>Hats</h1>
      {filteredHat.map((item,i) => (
        <div key={i}  className='grid grid-cols-5'>
          {item.items.map((item, i) => (
            <div key={i} className=''>
              <img src={item.imageUrl} alt="hat" className='object-contain w-[80%] hover:sepia transition-all duration-350 hover:scale-110 border shadow-lg' />
              </div>
          ))}
        </div>
      )   
        )}
    </div>

  </div> */}
  );
}

export default Products