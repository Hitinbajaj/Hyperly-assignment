function Navbar({ setActiveTab }) {
    return (
      <nav className="bg-gray-800 p-4 px-5 flex justify-between items-center fixed top-0 w-full z-10">
        <div className="text-white text-lg font-semibold">Hyperly</div>
        <div className='pl-5 flex'>
          <button className="text-white mr-4 bg-gray-900 p-2 hover:bg-black" onClick={() => setActiveTab('write')}>
            Write a Post
          </button>
          <button className="text-white bg-gray-900 p-2 hover:bg-black" onClick={() => setActiveTab('generate')}>
            Generate Post
          </button>
        </div>
      </nav>
    );
  }

export default Navbar;