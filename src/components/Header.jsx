import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  return (
    <header className="bg-[#003554] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-[#F0F3FA]">Namah</span>
            <span className="text-[#006da4]">Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-[#f0f3fa] p-3 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-[#006da4]" />
          </button>
          
        </form>
        <ul className="flex object-center gap-6 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-[#F0F3FA] cursor-pointer hover:text-[#006da4]">
              Home
            </li>
          </Link>
          <Link to="/aboout">
            <li className="hidden sm:inline text-[#F0F3FA] cursor-pointer hover:text-[#006da4]">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-[#F0F3FA] cursor-pointer hover:text-[#006da4]">
                SignIn
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
