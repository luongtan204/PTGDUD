import React from 'react';
import Header from '../components/Header';
import NavLeft from '../components/NavLeft';
import Main from '../components/Main';
const Home = () => {
    return (
       

            <div class="grid grid-cols-6 gap-1 ">
                <div class="col-span-1 bg-white bg-opacity-80 p-2 border-r-1 border-gray-400">
                    <NavLeft></NavLeft>
                </div>
                <div class="col-span-5 bg-white bg-opacity-80 ">
                    <Main></Main>
                    
                </div>
            </div>
       
    );
}
export default Home;