import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className=" flex flex-row justify-between px-90 ">
        {/* About Us Section */}
        <div className="">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-gray-900 w-full bg-white"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded ml-4 hover:bg-pink-600 hover:cursor-pointer">
              Send
            </button>
          </div>
        </div>


        <div className="flex justify-between items-center mt-20 text-center text-sm text-gray-400">
        <div className="flex justify-center items-center space-x-2">
          <img src="/img/chefify.png" alt="Chefify Logo" className="" />
        </div>
          <span>2023 Chefify Company</span>
        <p className="">
          Terms of Service | Privacy Policy
        </p>
      </div>

        </div>
        

        {/* Learn More Section */}
        <div className="flex justify-between w-96">


        <div className="flex flex-col">
            <div >
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
                <li>Our Cooks</li>
                <li>See Our Features</li>
                <li>FAQ</li>
            </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4 mt-8">Shop</h3>
            <ul className="space-y-2 text-sm">
                <li>Gift Subscription</li>
                <li>Send Us Feedback</li>
            </ul>
            </div>
        </div>

        {/* Recipes Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="space-y-2 text-sm">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>

        {/* Shop Section */}

        </div>

      </div>

      {/* Footer Bottom */}

    </footer>
  );
};

export default Footer;