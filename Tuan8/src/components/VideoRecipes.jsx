import React from "react";

const VideoRecipes = () => {
    return (
        <div className="bg-white">
            {/* Title Section */}
            <section className="relative">
                <h1 className="absolute top-[64px] left-[521px] font-lora text-[40px] leading-[56px] font-bold text-[#F44B87]">
                    Recipes With Videos
                </h1>
                <p className="absolute top-[126px] left-[495px] font-manrope text-[20px] leading-[30px] font-normal text-[#171A1F]">
                    Cooking Up Culinary Creations with Step-by-Step Videos
                </p>
            </section>

            {/* Recipe Cards */}
            <section className="grid grid-cols-4 gap-6 px-[132px] pt-[196px]">
                {/* Card 1 */}
                <div className="relative w-[270px] h-[292px] bg-white rounded-[12px] shadow-[0px_0px_1px_rgba(23,26,31,0.15),0px_0px_2px_rgba(23,26,31,0.2)]">
                    <img
                        src="img\Italian-style tomato.png"
                        alt="Salad with cabbage and shrimp"
                        className="absolute top-0 left-[-2px] w-[273px] h-[176px] rounded-t-[12px] border border-[#BCC1CA]"
                    />
                    <p className="absolute top-[192px] left-[16px] w-[153px] h-[52px] font-poppins text-[16px] leading-[26px] font-bold text-[#171A1F]">
                        Salad with cabbage and shrimp
                    </p>
                    <div className="absolute top-[256px] left-[16px] w-[67px] h-[20px] flex items-center justify-between font-manrope text-[11px] leading-[18px] font-normal">
                        <div className="bg-[#FEF0F5] rounded-[10px] px-[4px] py-[0px] hover:bg-[#FBC8DA] active:bg-[#F99FBE]">
                            32 minutes
                        </div>
                    </div>
                    <button className="absolute top-[186px] left-[216px] w-[36px] h-[36px] flex items-center justify-center text-[#F44B87] bg-white rounded-full border border-[#F44B87] hover:text-[#F0105E] active:text-[#D20D52]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px] fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" />
                        </svg>
                    </button>
                </div>

                {/* Card 2 */}
                <div className="relative w-[270px] h-[292px] bg-white rounded-[12px] shadow-[0px_0px_1px_rgba(23,26,31,0.15),0px_0px_2px_rgba(23,26,31,0.2)]">
                    <img
                        src="img\Vegetable and shrimp spaghetti.png"
                        alt="Salad of cove beans, shrimp and potatoes"
                        className="absolute top-0 left-[-2px] w-[273px] h-[176px] rounded-t-[12px] border border-[#BCC1CA]"
                    />
                    <p className="absolute top-[192px] left-[16px] w-[153px] h-[52px] font-poppins text-[16px] leading-[26px] font-bold text-[#171A1F]">
                        Salad of cove beans, shrimp and potatoes
                    </p>
                    <div className="absolute top-[256px] left-[16px] w-[67px] h-[20px] flex items-center justify-between font-manrope text-[11px] leading-[18px] font-normal">
                        <div className="bg-[#FEF0F5] rounded-[10px] px-[4px] py-[0px] hover:bg-[#FBC8DA] active:bg-[#F99FBE]">
                            20 minutes
                        </div>
                    </div>
                    <button className="absolute top-[186px] left-[216px] w-[36px] h-[36px] flex items-center justify-center text-[#F44B87] bg-white rounded-full border border-[#F44B87] hover:text-[#F0105E] active:text-[#D20D52]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px] fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" />
                        </svg>
                    </button>
                </div>

                {/* Card 3 */}
                <div className="relative w-[270px] h-[292px] bg-white rounded-[12px] shadow-[0px_0px_1px_rgba(23,26,31,0.15),0px_0px_2px_rgba(23,26,31,0.2)]">
                    <img
                        src="img/Lotus delight salad.png"
                        alt="Sunny-side up fried eggs"
                        className="absolute top-0 left-[-2px] w-[273px] h-[176px] rounded-t-[12px] border border-[#BCC1CA]"
                    />
                    <p className="absolute top-[192px] left-[16px] w-[153px] h-[52px] font-poppins text-[16px] leading-[26px] font-bold text-[#171A1F]">
                        Sunny-side up fried eggs
                    </p>
                    <div className="absolute top-[256px] left-[16px] w-[67px] h-[20px] flex items-center justify-between font-manrope text-[11px] leading-[18px] font-normal">
                        <div className="bg-[#FEF0F5] rounded-[10px] px-[4px] py-[0px] hover:bg-[#FBC8DA] active:bg-[#F99FBE]">
                            15 minutes
                        </div>
                    </div>
                    <button className="absolute top-[186px] left-[216px] w-[36px] h-[36px] flex items-center justify-center text-[#F44B87] bg-white rounded-full border border-[#F44B87] hover:text-[#F0105E] active:text-[#D20D52]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px] fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" />
                        </svg>
                    </button>
                </div>

                {/* Card 4 */}
                <div className="relative w-[270px] h-[292px] bg-white rounded-[12px] shadow-[0px_0px_1px_rgba(23,26,31,0.15),0px_0px_2px_rgba(23,26,31,0.2)]">
                    <img
                        src="img/Snack cakes.png"
                        alt="Lotus delight salad"
                        className="absolute top-0 left-[-2px] w-[273px] h-[176px] rounded-t-[12px] border border-[#BCC1CA]"
                    />
                    <p className="absolute top-[192px] left-[16px] w-[153px] h-[52px] font-poppins text-[16px] leading-[26px] font-bold text-[#171A1F]">
                        Lotus delight salad
                    </p>
                    <div className="absolute top-[256px] left-[16px] w-[67px] h-[20px] flex items-center justify-between font-manrope text-[11px] leading-[18px] font-normal">
                        <div className="bg-[#FEF0F5] rounded-[10px] px-[4px] py-[0px] hover:bg-[#FBC8DA] active:bg-[#F99FBE]">
                            20 minutes
                        </div>
                    </div>
                    <button className="absolute top-[186px] left-[216px] w-[36px] h-[36px] flex items-center justify-center text-[#F44B87] bg-white rounded-full border border-[#F44B87] hover:text-[#F0105E] active:text-[#D20D52]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px] fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default VideoRecipes;