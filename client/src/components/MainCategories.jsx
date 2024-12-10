import { Link } from "react-router-dom";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap gap-4 sm:justify-around md:justify-between">
        <Link
          to="/posts"
          className="bg-blue-500 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-desing"
          className="hover:bg-blue-500 rounded-full px-4 py-2"
        >
          Web Desing
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-500 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-500 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-500 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=
              deployment"
          className="hover:bg-blue-500 rounded-full px-4 py-2"
        >
          Deployment
        </Link>
          </div>
          <span className="text-blue-500 text-xl font-medium">|</span>
      {/* search */}
          <div className="flex rounded-full p-2 bg-gray-100 items-center gap-2">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" placeholder="Search a post..." className="bg-transparent outline-none ml-2"/>
      </div>
    </div>
  );
}

export default MainCategories