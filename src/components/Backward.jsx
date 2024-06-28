import { Link, useNavigate } from "react-router-dom"

function Backward() {
    const  navigate = useNavigate()
    
    function handleBackward () {
        navigate(-1)
    }
    function handleForward () {
        navigate(1)
    }
  return (
    <div className="flex justify-between p-9 lg:mx-20">
   <Link><p className="" onClick={handleBackward}>&larr; BACKWARD</p> </Link>
   <Link><p className="" onClick={handleForward}>FORWARD &rarr;</p> </Link>
    </div>
  )
}

export default Backward