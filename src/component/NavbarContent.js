import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div className="header-container">
      <div className="logo">
        <a href="">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="100"
          >
            <path
              fill="#1f4068"
              d="M15.945,66.2l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l6.966-0.135l4.05,8.991l4.239-8.856l6.48-0.135l0,2.43l-1.944,0.81l0,12.69l2.025,0.81l0,2.295l-8.046,0l0-2.295l2.106-0.81l0-10.152l-0.729,1.782l-3.051,6.345l-2.916,0.135l-3.105-6.399l-0.459-1.404l0,9.693l2.079,0.81l0,2.295l-7.695,0z M50.97777,46.841c5.4,0,8.505,3.564,8.505,9.585c0,6.075-3.645,10.125-9.045,10.125s-8.37-3.375-8.37-9.72c0-6.21,3.429-9.99,8.91-9.99z M50.84277,50.216c-2.7,0-4.185,1.674-4.185,6.48c0,4.455,1.215,6.48,3.915,6.48s4.32-1.755,4.32-6.615c0-4.455-1.35-6.345-4.05-6.345z M62.97954,49.595l0-2.295l8.37-0.135l0,2.43l-1.998,0.783l2.484,7.749l0.864,3.321l0.864-3.186l2.673-7.857l-2.052-0.81l0-2.295l8.073-0.135l0,2.43l-1.971,0.81l-5.697,15.795l-4.32,0l-5.454-15.849z M85.34931,66.2l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l8.235-0.135l0,2.43l-2.025,0.81l0,12.69l2.025,0.81l0,2.295l-8.235,0z M109.42008,54.86l0,2.97l-5.454,0l0,5.13l4.833,0l0.621-2.214l2.43,0l0,5.454l-14.094,0l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l6.21-0.135l7.56,0l0,5.211l-2.43,0l-0.675-1.971l-4.455,0l0,4.455l5.454,0z M126.36285,62.96l0.594-2.97l2.565,0l0,6.21l-13.5,0l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l8.235-0.135l0,2.43l-2.025,0.81l0,12.555l4.131,0z M144.54762,54.86l0,2.97l-5.454,0l0,5.13l4.833,0l0.621-2.214l2.43,0l0,5.454l-14.094,0l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l6.21-0.135l7.56,0l0,5.211l-2.43,0l-0.675-1.971l-4.455,0l0,4.455l5.454,0z M163.21839,54.86l0,2.97l-5.454,0l0,5.13l4.833,0l0.621-2.214l2.43,0l0,5.454l-14.094,0l0-2.295l2.025-0.81l0-12.69l-2.025-0.81l0-2.295l6.21-0.135l7.56,0l0,5.211l-2.43,0l-0.675-1.971l-4.455,0l0,4.455l5.454,0z"
            />
            <path fill="#" d="" />
          </svg>
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <span>Favorite</span>
            </Link>
          </li>
          <li className="dropdown">
            <a href="">Menu</a>
            <ul className="dropdown-menu">
              <li>
                <a href="">Movie List</a>
              </li>
              <li>
                <a href="">Genre</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="search">
        <div class="search-box">
          <button class="btn-search">
            <i class="fas fa-search"></i>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
            onChange={(event) => props.setSearchValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export { NavbarComponent };
