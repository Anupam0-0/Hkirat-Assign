import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../atom/cartState'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'

const Cart = () => {

    const [cart, setCart] = useRecoilState(cartState)
    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    return (
        <div>
            <Navbar />

            <div className='w-full flex'>
                <div className=' w-3/5 flex flex-wrap justify-start gap-4 my-6 mx-2 pl-2 lg:px-4' >
                    {cart && cart.length > 0 ?
                        cart.map((item) => {
                            return <div key={item.id} className='w-48 h-64 border px-4 pb-2 shadow-sm rounded flex flex-col justify-around items-center' >
                                <img src={item.images} className='h-36 object-contain' alt={item.title} />
                                <h1 className='text-sm leading-4 py-1 font-bold' >{item.title}</h1>
                                <p className='text-sm font-bold my-1'>${item.price}</p>
                                <button className='w-full py-1 border bg-slate-50 rounded font-semibold ' onClick={() => handleRemove(item.id)}>Remove </button>

                            </div>
                        }) :
                        <h1>Cart is empty</h1>
                    }
                </div>

                <div className='w-2/5 h-[85vh] border shadow m-4 p-4 flex flex-col justify-between'>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>In Cart Items:</h1>
                        <ul className='py-2'>
                            {
                                cart.map((item) => {
                                    return <li key={item.id} className='flex justify-between py-1 border-b'>
                                        <h1>{item.title}</h1>
                                        <h1>${item.price}</h1>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-full flex justify-between mt-10'>
                        <h1 className='text-xl font-semibold'>Total:</h1>
                        <h1 className='' >${cart.reduce((acc, item) => acc + item.price, 0)}</h1>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Cart