// import { Link } from "react-router-dom";
// import { PaystackButton } from "react-paystack";
// import { CartContext } from "../features/CartManager";
// import { useContext, useEffect } from "react";
// import { IoMdClose } from "react-icons/io";

// function Cart() {
//   const {
//     // dispatch,
//     // addToCart,
//     cartProduct,
//     setCartProduct,
//     isToggle,
//     setIsToggle,
//     handleToggle,
//     // handleCloseToggle,
//   } = useContext(CartContext);
//   const totalAmount = cartProduct.reduce(
//     (acc, itm) => acc + (itm?.price || 0) * (itm?.quantity || 0),
//     0
//   );

//   const publicKey = "pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862";
//   const amount = totalAmount * 100;
//   const email = "innovativedesign67@gmail.com";
//   const name = "oluremi";
//   const phone = 123456;

//   const componentProps = {
//     email,
//     amount,
//     metadata: {
//       name,
//       phone,
//     },
//     publicKey,
//     text: `Pay Now ${`${totalAmount}.00 ₦`}`,
//     onSuccess: () =>
//       alert("Thanks for doing business with us! Come back soon!!"),
//   };

//   useEffect(() => {
//     const storedCartProduct = localStorage.getItem("data");
//     if (storedCartProduct) {
//       setCartProduct(JSON.parse(storedCartProduct));
//     }
//   }, [setCartProduct]);

//   function handleIncrease(index) {
//     const newCart = [...cartProduct];
//     newCart[index].quantity = (newCart[index].quantity || 0) + 1;
//     setCartProduct(newCart);
//   }

//   function handleDecrease(index) {
//     const newCart = [...cartProduct];
//     if (newCart[index].quantity > 1) {
//       newCart[index].quantity = (newCart[index].quantity || 1) - 1;
//       setCartProduct(newCart);
//     }
//   }

//   // function handleCloseCart() {
//   //   dispatch({ type: "closeCart" });
//   //   console.log("close");
//   // }

//   function handleDeleteCart(index) {
//     const newCart = cartProduct.filter((_, i) => i !== index);
//     setCartProduct(newCart);
//     localStorage.setItem("data", JSON.stringify(newCart));
//   }

//   return (
//     <>
//       {isToggle && (
//         <div className="">
//           <div
//             className="w-full fixed z-[1000] h-full bg-black bg-opacity-70"
//             onClick={() => setIsToggle(!isToggle)}
//           ></div>
//           <div className="bg-white z-[2000] w-52 md:w-96 overflow-scroll flex flex-col h-screen fixed top-0 right-0 transform transition-transform duration-300">
//             <div className="flex justify-between items-center px-6 py-5">
//               <Link to="#">
//                 <p
//                   onClick={() => setIsToggle(!isToggle)}
//                   className="text-2xl border border-black text-black px-2.5 py-2.5 rounded-full border-spacing-1 cursor-pointer"
//                 >
//                   <IoMdClose />
//                 </p>
//               </Link>
//               {/* <h1 className='text-lg underline'>Cart Items</h1> */}
//             </div>
//             <div>
//               {cartProduct.map((itm, i) => (
//                 <div key={i} className="flex items-center">
//                   <img
//                     src={itm?.imageUrl}
//                     alt={itm?.id}
//                     className="w-[36%] py-4 px-7"
//                   />
//                   <div>
//                     <p className="py-2 font-semibold">Price: {itm?.price} ₦</p>
//                     <div className="flex">
//                       <p
//                         className="border m-1 px-2 cursor-pointer"
//                         onClick={() => handleDecrease(i)}
//                       >
//                         -
//                       </p>
//                       <p className="border m-1 px-2">{itm?.quantity || 0}</p>
//                       <p
//                         className="border m-1 px-2 cursor-pointer"
//                         onClick={() => handleIncrease(i)}
//                       >
//                         +
//                       </p>
//                     </div>
//                     <p className=" m-1">
//                       Qty: x {itm?.quantity || 1} (
//                       {itm?.price * (itm?.quantity || 1)} ₦){" "}
//                     </p>
//                   </div>
//                   <div
//                     className="border rounded-full px-[6px] mx-3 cursor-pointer"
//                     onClick={() => handleDeleteCart(i)}
//                   >
//                     &times; Remove
//                   </div>
//                 </div>
//               ))}

//               {/* <h1 className='checkOut py-4 cursor-pointer mx-7 my-7 bg-red-900 text-white text-center'>Checkout: {`${(totalAmount)}.00 €`} </h1> */}
//               <PaystackButton
//                 className="checkOut py-4 cursor-pointer mx-7 my-7 bg-red-900 text-white text-center"
//                 {...componentProps}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cart;

// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../features/CartManager';

// function Cart() {
//   const {  dispatch } = useContext(CartContext);

//   function handleCloseCart() {
//     dispatch({ type: 'closeCart' });
//   }

//   return (

//       <div className='w-full fixed z-[1000] bg-black bg-opacity-70 left-0 top-0'>
//         <div className='bg-white lg:w-96 flex flex-col h-screen fixed top-0 right-0'>
//           <div className='flex justify-between p-4'>
//             <Link to="#">
//               <p onClick={handleCloseCart} className='text-2xl cursor-pointer'>&times;</p>
//             </Link>
//             <h1 className='text-xl'>Cart</h1>
//           </div>
//           {/* Add more components/elements for cart items and functionalities */}
//         </div>
//       </div>
//   );
// }

// export default Cart;

/////////////////////////////////////////
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { CartContext } from "../features/CartManager";
import { useContext, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function Cart() {
  const { cartProduct, setCartProduct, isToggle, setIsToggle } =
    useContext(CartContext);

  const totalAmount = cartProduct.reduce(
    (acc, itm) => acc + (itm?.price || 0) * (itm?.quantity || 0),
    0
  );

  const publicKey = "pk_test_dcfa3d8202774206e8f20cc79886e77e10fc9862";
  const amount = totalAmount * 100;
  const email = "innovativedesign67@gmail.com";
  const name = "oluremi";
  const phone = 123456;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: `Pay Now ${`${totalAmount}.00 ₦`}`,
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
  };

  useEffect(() => {
    const storedCartProduct = localStorage.getItem("data");
    if (storedCartProduct) {
      setCartProduct(JSON.parse(storedCartProduct));
    }
  }, [setCartProduct]);

  function handleIncrease(index) {
    const newCart = [...cartProduct];
    newCart[index].quantity = (newCart[index].quantity || 0) + 1;
    setCartProduct(newCart);
    localStorage.setItem("data", JSON.stringify(newCart));
  }

  function handleDecrease(index) {
    const newCart = [...cartProduct];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity = (newCart[index].quantity || 1) - 1;
      setCartProduct(newCart);
      localStorage.setItem("data", JSON.stringify(newCart));
    }
  }

  function handleDeleteCart(index) {
    const newCart = cartProduct.filter((_, i) => i !== index);
    setCartProduct(newCart);
    localStorage.setItem("data", JSON.stringify(newCart));
  }

  return (
    <>
      {isToggle && (
        <div className="">
          <div
            className="w-full fixed z-[1000] h-full bg-black bg-opacity-70"
            onClick={() => setIsToggle(false)}
          ></div>
          <div className="bg-white z-[2000] w-full md:w-96 overflow-scroll flex flex-col h-screen fixed top-0 right-0 transform transition-transform duration-300">
            <div className="flex justify-between items-center px-6 py-5">
              <Link to="#">
                <p
                  onClick={() => setIsToggle(false)}
                  className="text-2xl border border-black text-black px-2.5 py-2.5 rounded-full border-spacing-1 cursor-pointer"
                >
                  <IoMdClose />
                </p>
              </Link>
            </div>
            <div>
              {cartProduct.map((itm, i) => (
                <div key={i} className="flex items-center">
                  <img
                    src={itm?.imageUrl}
                    alt={itm?.id}
                    className="w-fit py-4 px-7"
                  />
                  <div>
                    <p className="py-2 font-semibold">Price: {itm?.price} ₦</p>
                    <div className="flex">
                      <p
                        className="border m-1 px-2 cursor-pointer"
                        onClick={() => handleDecrease(i)}
                      >
                        -
                      </p>
                      <p className="border m-1 px-2">{itm?.quantity || 0}</p>
                      <p
                        className="border m-1 px-2 cursor-pointer"
                        onClick={() => handleIncrease(i)}
                      >
                        +
                      </p>
                    </div>
                    <p className=" m-1">
                      Qty: x {itm?.quantity || 1} (
                      {itm?.price * (itm?.quantity || 1)} ₦){" "}
                    </p>
                  </div>
                  <div
                    className="border rounded-full px-[6px] mx-3 cursor-pointer"
                    onClick={() => handleDeleteCart(i)}
                  >
                    &times; Remove
                  </div>
                </div>
              ))}

              <PaystackButton
                className="checkOut py-4 cursor-pointer mx-7 my-7 bg-red-900 text-white text-center"
                {...componentProps}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
