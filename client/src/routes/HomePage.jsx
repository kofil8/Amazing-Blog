import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 md:gap-8">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <span>.</span>
        <span className="text-blue-500 ">Blogs and Articles</span>
      </div>
      {/* INTODUCTION */}
      <div className="flex items-center justify-center">
        {/* titles */}
        <div className="flex flex-col gap-4">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-6xl font-bold">
            Welcome to Amazing Blog
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            exercitationem animi hic ducimus atque placeat molestiae temporibus
            consectetur architecto.
          </p>
        </div>
        {/* animated button */}
        <Link to="/write" className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-wider animate-spin-pulse"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text className="font-semibold fill-red-800">
              <textPath href="#circlePath" startOffset="0%">
                * Write your story *
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                * Share your idea *
              </textPath>
            </text>
          </svg>
          <button className="absolute flex top-0 m-auto left-0 right-0 bottom-0 w-20 h-20 bg-blue-800 rounded-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="50"
              height="50"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
        <h1 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold my-8">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
}

export default HomePage