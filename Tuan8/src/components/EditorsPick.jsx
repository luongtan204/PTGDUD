import React, { useEffect, useState } from "react";
import axios from "axios";

const EditorsPick = () => {
  const [editorsPick, setEditorsPick] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/EditorsPick")
      .then(response => setEditorsPick(response.data))
      .catch(error => console.error("Error fetching editor's pick:", error));
  }, []);

  return (
    <div className="bg-white pt-[50px]">
      <h2 className="text-center text-pink-500 text-4xl font-bold mb-2">Editor's pick</h2>
      <p className="text-center text-gray-600 text-lg mb-8">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="grid grid-cols-2 gap-6 px-[132px] pt-[30px]">
        {editorsPick.map((item, index) => (
          <div key={index} className="flex bg-white rounded-lg shadow-md overflow-hidden relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={item.authorAvatar}
                  alt={item.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.author}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            </div>
            <button className="w-[36px] h-[36px] flex items-center justify-center absolute top-4 right-4 text-pink-500 hover:text-pink-700 rounded-full border border-[#F44B87]  active:text-[#D20D52]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-[22px] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18l-7-3-7 3V4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;