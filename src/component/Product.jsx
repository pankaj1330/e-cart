import {useGlobal} from '../ContextStore';
import SingleItem from './SingleItem'

function Product() {
  const {state} = useGlobal();
  return (
    <div className='space-y-6 my-6'>
      {
        state.cart.map(item => {
          return <SingleItem key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default Product
