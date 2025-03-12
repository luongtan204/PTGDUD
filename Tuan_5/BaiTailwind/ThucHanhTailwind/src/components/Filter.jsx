import { Bars3Icon , ChevronUpIcon, StarIcon  } from '@heroicons/react/24/outline';
import MultiRangeSlider from './MultiRangeSlider'
import { useState } from 'react';
  const tpye = ['Pan-fried','Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'];
  
  // useEffect(() => {
  //   console.log("isOpenType:", isOpenType);
  // }, [isOpenType]);
function Filter(){
  const [isOpenType0, setOpenType0] = useState(true);
  const [isOpenType1, setOpenType1] = useState(true);
  const [isOpenType2, setOpenType2] = useState(true);
  const [isOpenType3, setOpenType3] = useState(true);
  return(
      <div className="absolute top-30 left-5 max-w-sm bg-white p-6 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-start">
            <Bars3Icon className='h-6 w-6 text-gray-500' onClick={()=>{setOpenType0(!isOpenType0)}}/>
            <h2 className="text-lg font-bold">FILTERS</h2>
          </div>

         {isOpenType0 && (
          <>
             {/* Type section */}
          <div className="mt-4 justify-start pt-2">
            <div className="flex items-center justify-between">
            <h3 className="font-semibold text-left">Type</h3>
            <ChevronUpIcon class="h-5 w-5 text-pink-600" onClick={()=>{setOpenType1(!isOpenType1)}}/>
            </div>
            
            {isOpenType1 && <div className="grid grid-cols-2 gap-2 mt-2">
                {tpye.map((type,index)=>(
                  <label htmlFor="" key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox accent-pink-500"/>
                    <span>{type}</span>
                  </label>
                ))}
            </div>}

            <div className='w-full h-[1px] bg-gray-300 my-4' ></div>
          </div>

          {/* Time Range */}
          <div className="flex items-center justify-between pt-2 mt-4">
            <h3 className="font-semibold text-left">Time</h3>
            <ChevronUpIcon class="h-5 w-5 text-pink-600" onClick={()=>{setOpenType2(!isOpenType2)}}/>
          </div>
          {isOpenType2 &&  <MultiRangeSlider
            min={0}
            max={100}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />}

          <div className='w-full h-[1px] bg-gray-300 my-4' ></div>
          {/* Rating */}
          <div className="flex items-center justify-between pt-2 mt-4">
            <h3 className="font-semibold text-left">Rating</h3>
            <ChevronUpIcon class="h-5 w-5 text-pink-600" onClick={()=>{setOpenType3(!isOpenType3)}}/>
          </div>
          {isOpenType3 &&  <div>
         <div className='flex pt-2'>
            <input type="checkbox" className="form-checkbox mr-2 accent-pink-500"/>
            <StarIcon class="h-6 w-6 text-yellow-500 font-bold" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
          </div>
          
          <div className='flex pt-1'>
            <input type="checkbox" className="form-checkbox mr-2 accent-pink-500"/>
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
          </div>
          <div className='flex pt-1'>
            <input type="checkbox" className="form-checkbox mr-2 accent-pink-500"/>
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
          </div>
          <div className='flex pt-1'>
            <input type="checkbox" className="form-checkbox mr-2 accent-pink-500"/>
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
          </div>
          <div className='flex pt-1'>
            <input type="checkbox" className="form-checkbox mr-2 accent-pink-500"/>
            <StarIcon class="h-6 w-6 text-yellow-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
            <StarIcon class="h-6 w-6 text-gray-500" />
          </div>
         </div>}
          <div className='w-full h-[1px] bg-gray-300 my-4' ></div>
          {/* Apply */}
          <div className='pt-1'>
            <button className='w-full text-white !bg-pink-500 !outline-none'> 
              Apply
            </button>
          </div>
          </>
         )}
     
      </div>
  )
}
export default Filter;