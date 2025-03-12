
import Logo from '../assets/chefify.png'
import Avt from '../assets/avatar.png'
import { MagnifyingGlassIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const nav = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'];

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm z-50">
            
            {/* Logo */}
            <div className="flex items-center m-5">
                <img src={Logo} alt="" className="" />
            </div>

            {/* Search bar */}
            <div className="flex">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
                <input 
                    type="text" 
                    className="ml-2 bg-transparent outline-none w-full text-gray-700" 
                    placeholder='Search recipes' 
                />
            </div>
            
            {/* Nav */}
            {nav.map((text, idex) => (
                <nav className='hidden md:flex space-x-6 !text-gray-700 mr-3' key={idex}>
                    <a 
                        href="#" 
                        className="!text-gray-400 !hover:text-pink-500"
                    >
                        {text}
                    </a>
                </nav>
            ))}

            {/* Button */}
            <button className="flex items-center px-4 py-2 text-pink-500 border !border-pink-500 ml-5">
                You Recipe Box
            </button>
            <img src={Avt} alt="" />
        </header>
    );
  }
  
  export default Header;