import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../features/SignInAuth";
import { signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import SpinnerMini from "../components/SpinnerMini";

function Users() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);
  const [isLoadingContinue, setIsLoadingContinue] = useState(false);

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [inputLoginEmail, setinputLoginEmail] = useState("");
  const [inputLoginPassword, setInputLoginPassword] = useState("");

  function handleSignUp(e) {
    setIsLoadingSignUp(true);
    setInputEmail(e.target.value);
    setInputPassword(e.target.value);
    createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleSignIn() {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, inputLoginEmail, inputLoginPassword)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function handleGoogleSignIn() {
    setIsLoadingContinue(true);
    signInWithPopup(auth, provider).then((user) => {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", user.user.displayName);
      localStorage.setItem("email", user.user.email);
      navigate("/home");
    });
  }

  return (
    <div>
      <div className="bg-white-900 border shadow-md top-0 z-50">
        <span className="bg-[#EFF0D1] w-full inline-block py-5 text-center text-red-900">
          Black Friday&apos;s discount - Take advantage of them!
        </span>
        <div className="flex justify-around lg:mx-25 mx-0 px-0 py-5 md:px-0 md:mx-3">
          {/* <Link className="text-black text-sm lg:text-1xl">&larr; BACKWARD</Link> */}
          {/* <Link><p className="p-9 mx-24" onClick={handleClick}>&larr; BACKWARD</p> </Link> */}
          <Link to="/" className="flex text-lg lg:text-2xl text-black">
            <p className="font-bold">Cozy</p> Hub
          </Link>
          <p className="text-black">100% SECURE PAYMENT</p>
        </div>
      </div>

      <div className="md:flex md:justify-around items-center">
        <div className="flex justify-around items-center p-9 my-16">
          <div className="space-y-4">
            <h1 className="font-bold text-xl lg:3xl text-center">
              LOG IN TO YOUR ACCOUNT
            </h1>
            <Link>
              <p className="text-center py-3">
                Do you have an existing account?
              </p>
            </Link>
            <input
              type="text"
              name="email"
              onChange={(e) => setinputLoginEmail(e.target.value)}
              placeholder="Email Address*"
              required
              className="border border-stone-800 w-[100%] p-4 "
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setInputLoginPassword(e.target.value)}
              placeholder="Password*"
              required
              className="border border-stone-800 w-[100%] p-4 "
            />
            <p className="underline text-end">Don’t remember your password?</p>
            <button
              onClick={handleSignIn}
              className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-3 lg:px-5 py-2 px-4 rounded-full"
            >
              {!isLoading ? "SIGN IN" : <SpinnerMini />}
            </button>
          </div>
        </div>

        <div className="flex justify-around items-center p-9 my-16">
          <div className="space-y-4">
            <h1 className="font-bold text-xl lg:3xl text-center">SIGN NOW</h1>
            <Link>
              <p className="text-center py-3">
                Don&apos;t have an existing account?
              </p>
            </Link>
            <input
              type="text"
              name="email"
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="Email Address*"
              required
              className="border border-stone-800 w-[100%] p-4 "
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Password*"
              required
              className="border border-stone-800 w-[100%] p-4 "
            />
            {/* <p className="underline text-end">Don’t remember your password?</p> */}
            <div className="md:block md:space-y-2 flex justify-between">
              <button
                onClick={handleSignUp}
                className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-3 lg:px-5 py-2 px-4 rounded-full"
              >
                {!isLoadingSignUp ? "SIGN UP" : <SpinnerMini />}
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-3 lg:px-5 py-2 px-2 rounded-full"
              >
                {!isLoadingContinue ? "CONTINUE WITH GOOGLE" : <SpinnerMini />}
              </button>
            </div>
          </div>
        </div>

        {/* <div className="space-y-4 my-3">
            <div className="space-y-4">
            <h1 className="font-bold text-xl lg:3xl text-center">REGISTRATION</h1>
            <input type="text" name='' placeholder='Email Address *' required className='border border-stone-800 w-[100%] p-4 '/>
            <p className="text-center pt-5 font-semibold">Choose your registration password</p>
            <input type="password" name='' placeholder='Password *' required className='border border-stone-800 w-[100%] p-4 '/>
            <input type="password" name='' placeholder='Confirm Password *' required className='border border-stone-800 w-[100%] p-4 '/>
            </div>

            <p className="text-center pt-5 font-semibold">Your Data</p>

            <div className="space-x-5 flex justify-start">
            <input type="text" name='' placeholder='First Name *' required className='border border-stone-800 w-[50%] p-4 '/>
            <input type="text" name='' placeholder='Last Name *' required className='border border-stone-800 w-[50%] p-4 '/>
            </div>

            <input type="text" name='' placeholder='Additional Informational *' required className='border border-stone-800 w-[100%] p-4 '/>

            <div className="space-x-5 flex justify-start">
            <input type="text" name='' placeholder='Postal code *' required className='border border-stone-800 w-[50%] p-4 '/>
            <input type="text" name='' placeholder='City *' required className='border border-stone-800 w-[50%] p-4 '/>
            </div>
            <input type="text" name='' placeholder='Phone Number *' required className='border border-stone-800 w-[100%] p-4 '/>
        
            <div className='flex items-center py-4 space-x-5'>
                <input type="checkbox" name="" id="" className='size-5' />
                <p className=''> I agree to the treatment of my personal information. <br /> See the Privacy Policy for more information.</p> 
            </div>
            <button className='buttonWhite uppercase hover:text-black bg-black hover:border m-auto hover:border-stone-500 outline-none flex text-white py-3 px-5 rounded-full'>GET STARTED </button>

        </div> */}
      </div>
    </div>
  );
}

export default Users;
