import { useState } from "react";

function CreatePost({handleShare}) {
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleTagsChange = (e) => {
      setTags(e.target.value);
    };
  
  
    return (
      <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
        <div className="bg-dashboard p-8 rounded-lg shadow-md w-[70%] md:w-96 bg-gray-800 ">
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-200">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={content}
              onChange={handleContentChange}
              className="min-h-32 bg-gray-800 mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white focus:border-transparent"
              placeholder="Write your LinkedIn post here..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-200">
              Tags:
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={tags}
              onChange={handleTagsChange}
              className="bg-gray-800 mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white focus:border-transparent"
              placeholder="Add relevant tags (comma-separated)"
            />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleShare} className="bg-blue-700 text-white py-2 px-2 text-sm rounded-md hover:bg-blue-600">
              Share on LinkedIn
            </button>
            <span className="text-gray-500 text-sm">Max 300 characters</span>
          </div>
        </div>
      </div>
    );
  }

export default CreatePost;