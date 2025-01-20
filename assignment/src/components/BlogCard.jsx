import { assets } from "../assets/asset.js";

export const BlogCard = ({ blogs }) => {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-8 gap-8">
      {blogs.map((blog, index) => (
        <div 
          key={index} 
          className="flex flex-col gap-4 sm:gap-6 w-full sm:w-[380px]">
          {/* Blog Image */}
          <img 
            src={blog.image} 
            className="w-full sm:w-[380px] h-auto rounded-md object-cover" 
            alt="Blog Image" 
          />

          {/* Blog Content */}
          <div className="flex flex-col gap-2 justify-between">
            <h1 className="font-semibold text-customRed text-base sm:text-lg">
              {blog.name}
            </h1>
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl sm:text-2xl text-darkBlack">
                {blog.heading}
              </h1>
              <img 
                src={assets.arrowUpRight} 
                className="w-6 h-6 sm:w-8 sm:h-8" 
                alt="Arrow Icon" 
              />
            </div>

            <p className="text-customBlack text-sm sm:text-base">
              {blog.details}
            </p>

            {/* Blogger Information */}
            <div className="flex gap-3 items-center">
              <img 
                src={blog.blogger} 
                className="w-10 h-10 rounded-full object-cover" 
                alt="Blogger Avatar" 
              />
              <div className="flex flex-col">
                <p className="font-semibold text-darkBlack text-sm sm:text-base">
                  {blog.bloggerName}
                </p>
                <p className="text-customBlack text-sm sm:text-base">
                  {blog.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
