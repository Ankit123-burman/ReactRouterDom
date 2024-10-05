import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6">
      {/* Main Content */}
      <div className="lg:w-2/3 pr-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            {/* Video/Image Section */}
            <img
              className="w-full h-64 object-cover"
              src="https://via.placeholder.com/800x400"
              alt="Article"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Title Heading</h2>
            <p className="text-gray-600 mb-4">Title description, April 7, 2014</p>
            <p className="text-gray-700 mb-6">
              Mauris neque quam, fermentum ut nisi vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat.
            </p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 mt-6 lg:mt-0">
        {/* Profile Section */}
        <div className="bg-white shadow-lg p-4 mb-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">My Name</h3>
          <p className="text-gray-600">
            Just me, myself, and I, exploring the universe of unknownment...
          </p>
        </div>

        {/* Popular Posts Section */}
        <div className="bg-white shadow-lg p-4 mb-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Popular Posts</h3>
          <ul>
            {["Lorem", "Ipsum", "Dorum", "Mingsum"].map((post, index) => (
              <li key={index} className="mb-3">
                <a href="#" className="text-blue-500">
                  {post}
                </a>
                <p className="text-sm text-gray-600">Sed mattis nunc</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags Section */}
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Travel",
              "New York",
              "London",
              "DIY",
              "Family",
              "Ideas",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
