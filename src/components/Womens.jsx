import { useContext, useEffect } from 'react';
import { CartContext } from "../features/CartManager";
import { IoRocketOutline } from "react-icons/io5";
import items from "../features/Items";
import Swal from 'sweetalert2'


function Womens() {
    const { dispatch, cartProduct, status, setCartProduct } = useContext(CartContext);
  
    useEffect(() => {
      dispatch({ type: 'dataReceived', payload: items });
    }, [dispatch]);
  
    const WomenCategory = items.filter((item) => item.title === 'Womens')
  
    // function handleCart (item) {
    //   dispatch({type: 'product'})
    //   setCartProduct([...cartProduct, item])
    // }

    function handleCart (item) {
      Swal.fire({
        position: "left",
        text: "Already added to cart",
        showConfirmButton: true,
        timer: 3000,
      })
      if (cartProduct.some((itm) => itm.id === item.id)) {
        setCartProduct([...cartProduct])
      } else {
        Swal.fire({
          position: "top-right",
          text: "Item added to cart",
          showConfirmButton: false,
          timer: 1000,
        })
        dispatch({type: 'product'})
        const newCartProduct = [...cartProduct, item]
        localStorage.setItem('data', JSON.stringify(newCartProduct))
        setCartProduct(newCartProduct)
      }
    }
  return (
    <div>
        {status === 'loading' && <img src="Spinner.gif" alt="spinner" className="mx-[40%] my-[10%]" />}
        {status === 'error' && 'An error occurred while loading the products'}

             {WomenCategory.map((item,i) => (
                <div key={i}  className='grid lg:grid-cols-5 items-baseline gap-y-7 sm:grid-cols-3'>
                  {item.items.map((item, i) => (
                    <div key={i} className='py-4'>
                      <img src={item.imageUrl} alt="hat" className='object-contain w-[85%] hover:sepia transition-all duration-400 hover:scale-90 border shadow-xl' />
                      <div className=''>
                        <h2>{item.name}</h2>
                        <h2 className='font-semibold'>Price: {item.price} ₦</h2>
                      </div>
                      
                      <div className='flex items-center gap-2 py-2 justify-center border border-stone-600  mr-10'>
                      <button onClick={() => handleCart(item)} className='underline'>Add to cart </button>
                      <IoRocketOutline onClick={() => handleCart(item)} className='bg-white border rounded-full p-2 size-8 cursor-pointer' />
                      </div>
                      
                      </div>
                    ))}

              </div>
            ))}
    </div>
  )
}

export default Womens