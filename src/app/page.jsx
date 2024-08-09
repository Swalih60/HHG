 'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {account ? (
        <div>
          <p>Connected account: {account}</p>
        </div>
      ) : (
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
