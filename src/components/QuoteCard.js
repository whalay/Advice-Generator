import React from 'react'
import pattern from '../components/assets/images/pattern-divider-mobile.svg';
import patterndesk from '../components/assets/images/pattern-divider-desktop.svg';
import dice from '../components/assets/images/icon-dice.svg'




const QuoteCard = props => {
    return (
        <div className='bg-color  text-gray-300 '>

            <div className='flex justify-center items-center max-w-lg md:mx-auto  h-[600px] p-9 '>
                <div className=' relative card-color flex flex-col justify-center items-center  rounded-2xl p-6 '>
                    <h5 className='text-Neon-Green  text-xs tracking-[5px] py-4'>ADVICE #{props.quote.id}</h5>
                   
                    <p className='text-[28px] pl-9 pr-3 text-center  text-Light-Cyan '>"{props.quote.advice}"</p>
                    
                    <div className='pt-7 pb-[60px] md:hidden'>
                        <img src={pattern} alt="" />
                    </div>
                    <div className='md:pt-7 md:pb-[60px] hidden md:block '>
                        <img src={patterndesk} alt="" />
                    </div>
                    <div className='absolute  p-4 bottom-[-32px] border rounded-full  border-Neon-Green shadow-Neon-Green hover:shadow-2xl  bg-Neon-Green hover:shadow-Neon-Green'>
                       <button onClick={props.fetchQuote}><img src={dice} alt="" /></button> 
                    </div>

                </div>



            </div>
        </div>
    )
}

export default QuoteCard;