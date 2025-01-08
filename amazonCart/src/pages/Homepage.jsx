import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../atom/cartState'
import { Toaster, toast } from 'react-hot-toast'
import Navbar from '../components/Navbar'


const Homepage = () => {

    const [cart, setCart] = useRecoilState(cartState)
    const [products, setProducts] = useState([])
    const notify = () => toast.success('Added to Cart');;

    const fetchAllProducts = async () => {
        // 'https://dummyjson.com/products'
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        console.log(data);
        // console.log('hi')

        setProducts(data.products);
    }

    useEffect(() => { fetchAllProducts() }, [])

    return (
        <div className='text-center w-full' >
            <Navbar />

            <div className='p-4 flex flex-wrap gap-4 justify-center' >
                {products && products.length > 0 ?
                    products.map((item) => {
                        return <div key={item.id}
                            className='w-48 h-64 border px-4 pb-2 shadow rounded flex flex-col justify-between' >
                            <div className=''>
                                <img src={item.images} className='h-36 my-2 object-contain' alt={item.title} />
                                <h1 className='text-xs leading-3  font-bold' >{item.title}</h1>
                                <p className='text-sm font-bold'>${item.price}</p>


                            </div>
                            <div className=''>
                                <button className='w-full py-1 bg-orange-300 rounded font-semibold '
                                    onClick={() => { notify(); setCart([...cart, item]); }}
                                >Add to cart</button>
                            </div>

                            <Toaster
                                position="bottom-right"
                            // reverseOrder={true}
                            />
                        </div>
                    })
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Homepage