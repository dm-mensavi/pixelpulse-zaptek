import React, {useEffect, useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Loading = ({comp}) => {
    const [loading, setLoading] = useState(false)
    const [margin, setMargin] = useState(0);

    const setLoadingAndLoading=()=>{
      setMargin(25)
      setLoading(true)
      setTimeout(() => {
          setMargin(0)
          setLoading(false)
      }, 3000);
    }
    useEffect (()=>{
      setLoadingAndLoading();
    },[])
    
  return (
    <div className={`flex justify-center items-center m-[${margin}%]`}>

        {
            loading ?   <ClipLoader
            color='#374151'
            loading={loading} 
             size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : comp
        }
    </div>
  )
}

export default Loading