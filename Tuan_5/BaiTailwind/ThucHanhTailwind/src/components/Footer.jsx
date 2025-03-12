import Logo from '../assets/Chefify_logo.png'

function Footer(){
    return (

        <footer className="bg-[#1D2228] text-white py-10 px-5">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* About Us */}
                <div className="col-span-2 p-4">
                    <div>
                        <h3 className="font-bold text-lg text-left">About Us</h3>
                        <p className="mt-2 text-gray-300 text-left">
                        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                        </p>
                    </div>
                    <div className="mt-4 flex"> 
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="p-2 mr-2 bg-white flex-1 rounded-md text-black"
                        />
                        <button className="!bg-pink-500 px-4 py-2 rounded-r-md">Send</button>
                    </div>
                </div>

                <div>
                <h3 className="font-bold text-lg text-left">Learn More</h3>
                    <ul className="mt-2 space-y-1 text-gray-300 text-left">
                        <li><a href="#" className='!text-white text-sm font-thin'>Our Cooks</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>See Our Features</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>FAQ</a></li>
                    </ul>
                </div>

                {/* Recipes */}
                <div className="row-span-2">
                    <h3 className="font-bold text-lg text-left">Recipes</h3>
                    <ul className="mt-2 space-y-1 text-gray-300 text-left">
                        <li><a href="#" className='!text-white text-sm font-thin'>What to Cook This Week</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Pasta</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Dinner</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Healthy</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Vegetarian</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Vegan</a></li>
                        <li><a href="#" className='!text-white text-sm font-thin'>Christmas</a></li>
                    </ul>
                </div>
            
                <div className="col-span-2 flex items-center">
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="" />
                    </div>
                    <p className='text-xs'>2023 Chefify Company</p>
                    <p>
                        <a href="#" className="hover:text-white !text-white text-xs m-1">Terms of Service</a> | 
                        <a href="#" className="hover:text-white !text-white text-xs m-1"> Privacy Policy</a>
                    </p>
                </div>
                <div className="">
                    <div>
                        <h3 className="font-bold text-lg text-left">Shop</h3>
                        <ul className="space-y-1 text-gray-300 text-left">
                            <li><a href="#" className='!text-white text-sm font-thin'>Gift Subscription</a></li>
                            <li><a href="#" className='!text-white text-sm font-thin'>Send Us Feedback</a></li>
                        </ul>
                    </div>
                </div>

                
            </div>
    </footer>

    )
}
export default Footer;