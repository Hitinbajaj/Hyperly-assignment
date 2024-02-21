import React, { useState } from 'react';
import SuccessModal from './components/SuccessModal';
import Navbar from './components/Nabar';
import CreatePost from './components/CreatePost';
import GeneratePost from './components/GeneratePost';

function App() {
  const [activeTab, setActiveTab] = useState('write');
  const [success, setSuccess] = useState(false);

  const handleShare = ()=>{
    setSuccess(true);
  }
  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      {success && <SuccessModal onClose={() => setSuccess(false)} />}
      {activeTab === 'write' && <CreatePost handleShare={handleShare}/>}
      {activeTab === 'generate' && <GeneratePost />}
    </div>
  );
}

export default App;
