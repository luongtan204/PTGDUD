import { NavLink } from 'react-router-dom';

const NavLeft = () => {
  return (
    <div className="p-4">
      <div>
        <img src="/img/Image 1858.png" alt="" />
      </div>
      <nav class="flex-1 my-5">
        <ul class="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Squares four 1.png" alt="" />
              <span class="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/main"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Folder.png" alt="" />
              <span class="ml-3">Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Groups.png" alt="" />
              <span class="ml-3">Teams</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Pie chart.png" alt="" />
              <span class="ml-3">Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Chat.png" alt="" />
              <span class="ml-3">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${
                  isActive ? 'bg-pink-500 text-white' : ''
                }`
              }
            >
              <img src="\img\Code.png" alt="" />
              <span class="ml-3">Integrations</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div class="">
        <img src="\img\Group.png" alt="" />
      </div>
      <div class="mt-auto p-4 bg-blue-50 rounded-lg">
        <p class="text-sm font-medium text-blue-800">V2.0 is available</p>
        <button class="mt-2 w-full py-2 px-4 bg-white border-blue-700 border-2 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
          Try now
        </button>
      </div>
    </div>
  );
};

export default NavLeft;