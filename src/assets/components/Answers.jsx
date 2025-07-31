import React, { useEffect, useState } from 'react'
import { checkHeading,replaceHeading } from './helper'

function Answers({ans , index}) {
   
    const [heading,setHeading] = useState(false)
    const [answer,setAnswer] =useState(ans)


    useEffect(
        ()=>{
            if(checkHeading(ans)){
                setHeading(true)
                setAnswer(replaceHeading(ans))
            }

        },
        []
    )

    


  return (
    <>
    {
        index==0? <span className='firsttext'>{answer}</span>: heading? <span className='subheadind'>{answer}</span>:<span className='normaltext'>{ans}</span>

    }
      
    </>
  )
}

export default Answers
