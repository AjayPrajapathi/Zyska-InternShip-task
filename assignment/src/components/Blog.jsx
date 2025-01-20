
import { blogList } from "../assets/asset";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <div className="flex flex-col py-16 sm:py-24 gap-12 sm:gap-16">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 gap-8 items-start sm:items-center">
        <div className="flex flex-col gap-4 sm:gap-5">
          <p className="text-customRed font-semibold text-base sm:text-lg">
            Our blog
          </p>
          <h1 className="text-2xl sm:text-4xl text-darkBlack font-semibold">
            Latest blog posts
          </h1>
          <p className="text-sm sm:text-xl text-customBlack font-[400]">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="bg-customRed  w-[148px]  h-[48px]  sm:w-[148px] h-[48px] rounded-lg py-[12px] px-[20px] text-white">
          View all posts
        </button>
      </div>

      {/* Blog Cards Section */}
      <div className="px-4 sm:px-8">
        <BlogCard blogs={blogList} />
      </div>
    </div>
  );
};
