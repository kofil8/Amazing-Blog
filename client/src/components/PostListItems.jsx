import Image from './Image';
import { Link } from 'react-router-dom';
const PostListItem = () => (
  <article className="flex flex-col xl:flex-row gap-8">
    {/* Image of the post */}
    <div className="hidden md:block xl:w-1/3">
      <Image
        src="postImg.jpeg"
        alt="Post Thumbnail"
        className="rounded-3xl object-cover"
        w={735}
      />
    </div>

    {/* Post details */}
    <div className="flex flex-col gap-4 xl:w-2/3">
      {/* Title of the post */}
      <Link to="/test" className="text-4xl font-semibold hover:underline">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        provident aperiam distinctio nihil quasi cum esse
      </Link>

      {/* Author and date of the post */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Written by</span>
        <Link to="/test" className="text-blue-500 hover:underline">
          John Doe
        </Link>
        <span>on</span>
        <Link to="/test" className="text-blue-500 hover:underline">
          Deployment
        </Link>
        <span>2 days ago</span>
      </div>

      {/* Content of the post */}
      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa
        repellat. Quia, quae. Quae, ipsa repellat. Quia, quae. Quae, ipsa
        repellat. Quia, quae. Quae, ipsa repellat. Quia, quae. Quae, ipsa
      </p>

      {/* Link to the full post */}
      <Link to="/test" className="text-blue-500 hover:underline text-sm">
        Read More
      </Link>
    </div>
  </article>
);

/**
 * Export the PostListItem component as the default export of the module.
 */
export default PostListItem;

