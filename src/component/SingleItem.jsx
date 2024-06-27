import {useGlobal} from '../ContextStore';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function SingleItem({item}) {
  const {incAmount,decAmount,removeItem} = useGlobal();

  return (
    <article className='p-1 sm:p-2 flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-1 sm:gap-2 items-center'>
        <img src={`./${item.img}`} alt={item.title} className='w-20 sm:w-32'/>
        <div>
          <h2 className='text-lg sm:text-xl font-semibold'>{item.title}</h2>
          <p className='text-lg'>$ {item.price}</p>
          <button className='text-red-600' onClick={()=>removeItem(item.id)}>Remove</button>
        </div>
      </div>
      <div className='text-center'>
        <button onClick={()=>incAmount(item.id)}><IoIosArrowUp /></button>
        <p>{item.amount}</p>
        <button onClick={()=>decAmount(item.id)}><IoIosArrowDown /></button>
      </div>
    </article>
  )
}

export default SingleItem
