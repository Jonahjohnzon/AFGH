import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { filterbar } from '../../test/testapi'
import EffectText from '../../EffectText'

const Filterbar = () => {
  return (
    <div className=' fixed h-full w-[500px] bg-dak right-0 top-0 pt-40 font-barlow text-white'>
    <div className=' flex justify-center'>
        <div className=' w-[80%]'>
        <form className=" mb-[6vh]">
              <div className="flex item">
                <input type="text" className=" bg-transparent border-solid border-[0.01em] w-full h-14 rounded-s-full border-gray pl-5 " placeholder="Search"/>
                <div className=" border-solid border-[0.1em] px-5 flex items-center flex-1 rounded-e-full border-gray"><BiSearch size={20} className=" hover:text-cream text-green cursor-pointer transition-all duration-500"/></div>
              </div>
            </form>
            <div>
                <div className='  mb-[6vh]'>
                <div className=' flex items-end justify-between mb-3'>
                    <h1 className=' text-3xl font-bold'><EffectText words={"SORT BY :"}/></h1>
                    <h1 className=' text-green font-bold'>Clear X</h1>
                    </div>
                    <div>
                        <ul className=' flex justify-between '>
                            <li className='rounded-s-md  w-full border-[1px] border-solid border-green py-2 flex justify-center bg-green bg-opacity-40'>Top Seller</li>
                            <li className='w-full border-[1px] border-solid border-green  py-2 flex justify-center'>New Release</li>
                            <li className='rounded-e-md  w-full border-[1px] border-solid border-green  py-2 flex justify-center'>Rating</li>
                        </ul>
                    </div>
                </div>
                <div>
                <div >
                <div  className=' flex items-end justify-between mb-3'>
                    <h1 className=' text-3xl font-bold'><EffectText words={"Filter BY :"}/></h1>
                    <h1 className=' text-green font-bold'>Clear X</h1>
                </div>
                <div>
                    <div className=' text-green font-bold mb-2'>GENRE</div>
                    <div className=' flex flex-wrap'>
                        {
                            filterbar.map((e)=>{
                                    return(
                                        <div key={e.id} className=' mr-14 mb-5'>
                                        <div className=' flex items-center cursor-pointer'>
                                            <input id={e.cate} type='checkbox' className=' mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 text-lg rounded focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/><label for={e.cate}>{e.cate}</label>
                                        </div>
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>
                </div>
                <div></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Filterbar