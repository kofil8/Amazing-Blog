import Image from "./Image";
import { Link } from "react-router-dom";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col gap-9 lg:flex-row">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="featured1.jpeg"
          alt="post"
          className="rounded-3xl object-cover w-full h-80"
          w={895}
        />
        {/* details */}
        <div className="flex gap-4 items-start">
          <h1 className="lg:text-lg font-semibold">01.</h1>
          <Link
            to="/"
            className="text-blue-500 hover:underline text-md lg:text-lg"
          >
            Web Design
          </Link>
          <span className="text-gray-500 text-sm">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold hover:underline"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Others Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            alt="post"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="flex flex-col gap-4 w-2/3">
            {/* details */}
            <div className="flex gap-4 items-start items-center text-sm lg:text-base mb-4">
              <h1 className="lg:text-lg font-semibold">02.</h1>
              <Link
                to="/"
                className="text-blue-500 hover:underline text-md lg:text-lg"
              >
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured3.jpeg"
            alt="post"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="flex flex-col gap-4 w-2/3">
            {/* details */}
            <div className="flex gap-4 items-start items-center text-sm lg:text-base mb-4">
              <h1 className="lg:text-lg font-semibold">03.</h1>
              <Link
                to="/"
                className="text-blue-500 hover:underline text-md lg:text-lg"
              >
                Development
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured4.jpeg"
            alt="post"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="flex flex-col gap-4 w-2/3">
            {/* details */}
            <div className="flex gap-4 items-start items-center text-sm lg:text-base mb-4">
              <h1 className="lg:text-lg font-semibold">04.</h1>
              <Link
                to="/"
                className="text-blue-500 hover:underline text-md lg:text-lg"
              >
                Databases
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold lg:font-bold hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts