import React from "react";

const FullPostView = ({ post, onClose }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-600 mb-4">By {post.author}</p>
        <div className="prose max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 px-8 pb-8">
              {paragraph}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default FullPostView;
