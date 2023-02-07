import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
const RatingStar = ({rating}) => {
    let arr=Array(5).fill(<AiOutlineStar/>);
  return (
    <>
        {
            arr.map((star,ind)=>{
                if(ind+1 <= rating){
                    return <AiFillStar key={ind}/>
                }else{
                    return <AiOutlineStar key={ind}/>
                }
            })

        }
    </>
  )
}

export default RatingStar