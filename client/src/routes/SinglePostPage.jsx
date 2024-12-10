import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Post details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <span className="text-blue-800">John Doe</span>
            <span>on</span>
            <span className="text-blue-800">Development</span>
          </div>
          <p className="text-gray-500 font-medium">2 days ago</p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" width={600} className="rounded-2xl" />
        </div>
      </div>

      {/* Post content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
        </div>

        {/* Sidebar menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <span className="text-blue-800">John Doe</span>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com">
                <Image src="facebook.svg" />
              </a>
              <a href="https://www.instagram.com">
                <Image src="instagram.svg" />
              </a>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <a className="underline" href="/">All</a>
            <a className="underline" href="/">Web Design</a>
            <a className="underline" href="/">Development</a>
            <a className="underline" href="/">Databases</a>
            <a className="underline" href="/">Search Engines</a>
            <a className="underline" href="/">Marketing</a>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;