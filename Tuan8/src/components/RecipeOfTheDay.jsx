import React from "react";

const RecipeOfTheDay = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[871px]">
                <img
                    src="img\anhbia.png"
                    alt="Cooking"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-[310px] left-[108px] w-[413px] h-[418px] bg-white rounded-[12px] border-dashed border-[1px] border-[#854EF4] p-6 shadow-lg">
                    <div className="absolute top-[-18px] left-[92px] w-[229px] h-[36px] flex items-center justify-center text-[#5D4600] bg-[#FFC415] rounded-[6px] text-sm font-medium hover:bg-[#D7A100] active:bg-[#B88A00]">
                        Recipe of the day
                    </div>
                    {/* Title */}
                    <h2 className="absolute top-[65px] left-[132px] font-poppins text-[20px] leading-[30px] font-bold text-[#F44B87]">
                        Salad Caprese
                    </h2>

                    {/* Description */}
                    <p className="absolute top-[107px] left-[37px] w-[340px] h-[88px] font-manrope text-[14px] leading-[22px] font-normal text-[#171A1F]">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
                        herbs, olive oil, and balsamic vinegar create a refreshing dish for
                        lunch or appetizer.
                    </p>

                    {/* Avatar */}
                    <div className="absolute top-[250px] left-[175px] w-[36px] h-[36px] bg-[#FBC8DA] rounded-full overflow-hidden">

                        <img
                            src="\img\Avatar (1).png"
                            alt="Author"
                            className="w-full h-full"
                        />
                    </div>
                    <p className="absolute top-[294px] left-[150px] font-manrope text-[14px] leading-[22px] font-semibold text-[#565E6C]">
                        Salad Caprese
                    </p>
                    {/* Button */}
                    <button className="absolute top-[340px] left-[149px] h-[46px] px-3 flex items-center justify-center font-manrope text-[14px] leading-[22px] font-normal text-white bg-[#F44B87] rounded-[12px] gap-[6px] hover:bg-[#F0105E] active:bg-[#D20D52]">
                        <span>View now</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RecipeOfTheDay;