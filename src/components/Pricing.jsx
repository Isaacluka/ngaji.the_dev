import React from 'react'
import { pricingList } from '../constants'
import CheckCircleIcon from '@mui/icons-material/CheckCircle' 



const Pricing = () => {
  return (
    <div id="pricing" className='flex flex-col gap-6 justify-content-center items-center px-5 lg:px-40 py-20'>
        <h1 className='text-3xl md:4xl lg:text-6xl text-center font-bold'>Investment Plans</h1>
        <p className='text-slate-400 text-center pb-6'>Choose a plan that fits your project needs. All plans include clean code and responsive layouts.</p>
        <div className="priceCards flex flex-col lg:flex-row gap-6 justify-center items-center">
            {pricingList.map((price)=>(
                <div className={`p-8 bg-slate-900/30 w-full md:w-100 md:h-120 rounded-lg flex flex-col ${price.name === "Business" ? "highlighted relative md:w-110 md:h-130" : ""}`} key={price}>
                    {price.name === "Business" && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-2xl text-sm font-semibold">
                            Most Popular
                        </div>
                    )}
 
                    <div className='text-lg pb-2'>{price.name}</div>
                    <div className='pb-2 text-3xl md:4xl lg:text-4xl font-extrabold'>{price.pricetag}<span className='text-slate-500 text-sm font-normal'>{price.pricetag === "Contact" ? ' Us' : '/project'}</span></div>
                    <div className='button bg-white/5 hover:bg-primary border border-white/5 px-8 py-4 my-4 rounded-lg w-full active:scale-95 active:bg-primary flex items-center justify-center'>{price.buttontag}</div>
                    <div>{price.services.map((service)=>(
                        <li className='list-none px-2 py-2' key={service}><span className="material-symbols-outlined text-primary text-sm pr-4"><CheckCircleIcon /></span>{service}</li>
                    ))}</div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Pricing