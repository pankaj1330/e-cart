import {useGlobal} from './ContextStore';
import Product from './component/Product'
import './App.css'

function App() {
  const {state,clearCart,initState} = useGlobal();

  return (
    <>
      <h2 className='text-center text-2xl font-bold text-orange-700 mt-4'>Shopping Cart</h2>
      <div className='max-w-[600px] mx-auto mt-5 p-2'>
        <Product />
        <hr />
        {
          state.cart.length !== 0 ? (<div className='flex flex-row justify-between items-center my-4'>
            <h4 className='text-lg font-semibold'>Total</h4>
            <p className='text-xl'>$ {state.total}</p>
          </div>
          
        ) : (<h1 className='text-center text-xl font-semibold my-4'>Cart is Empty</h1>)
        }
        {
          state.cart.length !== 0 ?
          <button onClick={clearCart} className='px-3 py-1 bg-blue-400 text-white rounded-md block mx-auto'>Clear Cart</button> 
          :
          <button onClick={initState} className='px-3 py-1 bg-blue-400 text-white rounded-md block mx-auto'>Refresh</button>

        }
      </div>
    </>
  )
}

export default App
