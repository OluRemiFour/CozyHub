
import { useContext, useEffect } from 'react';
import Header from "../components/Header";
import { CartContext } from "../features/CartManager";
import Backward from '../components/Backward';
import items from "../features/Items";
import { NavLink, Outlet, Link} from 'react-router-dom'

  
  function Shop() {
  const { dispatch, status } = useContext(CartContext);
  
  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: items });
  }, [dispatch]);



  return (
    <div>
      <Header />

        {status === 'loading' && <img src="Spinner.gif" alt="spinner" className="mx-[40%] my-[10%]" />}
        {status === 'error' && 'An error occurred while loading the products'}

        <div className='m-16'>
            <div className='lg:text-xl py-3 text-red-900 font-semibold border-b-2 border-dotted lg:space-x-10 space-x-5'>
            <Link to={'/shop'}>Hats</Link>
            <NavLink to={'sneakers'}>Sneakers</NavLink>
            <NavLink to='womens'>Womens</NavLink>
            <NavLink to='jackets'>Jackets</NavLink>
            <NavLink to='mens'>Mens</NavLink>
            </div>
              {/* {HatCategory.map((item,i) => (
                <div key={i}  className='grid lg:grid-cols-5 items-baseline gap-y-7 sm:grid-cols-3'>
                  {item.items.map((item, i) => (
                    <div key={i} className='py-4'>
                      <img src={item.imageUrl} alt="hat" className='object-contain w-[85%] hover:sepia transition-all duration-400 hover:scale-90 border shadow-xl' />
                      <div className=''>
                        <h2>{item.name}</h2>
                        <h2 className='font-semibold'>Price: {item.price} €</h2>
                      </div>
                      
                      <div className='flex items-center gap-2 py-2 justify-center'>
                      <button onClick={() => handleCart(item)} className='underline'>Add to cart </button>
                      <IoRocketOutline onClick={() => handleCart(item)} className='bg-white border rounded-full p-2 size-8 cursor-pointer' />
                      </div>
                      
                      </div>
                    ))}

              </div>
            ))} */}
            <Outlet />
        </div>
        <Backward />
    </div>
  );
}

export default Shop;
