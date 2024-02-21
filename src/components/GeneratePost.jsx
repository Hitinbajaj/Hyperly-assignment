import { useState } from "react";

function GeneratePost() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
  
    const handlePromptChange = (e) => {
      setPrompt(e.target.value);
    };
  
    const handleGenerate = () => {
      // Demo response for now, in future integrate with AI
      const demoResponse = "This is a generated post based on the prompt: '" + prompt + "'";
      setResponse(demoResponse);
    };
  
    return (
      <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
        <div className="bg-dashboard p-8 px-8 rounded-lg shadow-md w-[70%] md:w-96 bg-gray-800">
          <div className="mb-4">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-200">
              Prompt:
            </label>
            <input
              id="prompt"
              name="prompt"
              type="text"
              value={prompt}
              onChange={handlePromptChange}
              className="bg-gray-800 mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white focus:border-transparent"
              placeholder="Enter your prompt"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="response" className="block text-sm font-medium text-gray-200">
              Response:
            </label>
            <textarea
              id="response"
              name="response"
              rows="4"
              value={response}
              readOnly
              className="min-h-32  bg-gray-800 mt-1 p-2 block w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white focus:border-transparent"
              placeholder="Generated post will appear here"
            ></textarea>
          </div>
          <div className="flex">
            <button onClick={handleGenerate} className="bg-blue-700 text-white py-2 px-2 text-sm rounded-md hover:bg-blue-600">
              Generate Post
            </button>
          </div>
        </div>
      </div>
    );
  }

export default GeneratePost;