'use client';

import { useState } from 'react';
import { uploadToIPFS } from '../../lib/pinata';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const result = await uploadToIPFS(file);
      setIpfsHash(result.IpfsHash);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {ipfsHash && (
        <div> 
          <p>IPFS Hash: {ipfsHash}</p>
          <a href={`https://gateway.pinata.cloud/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">
            View File
          </a>
        </div>
      )}  
    </div>
  );
};

export default Upload;
