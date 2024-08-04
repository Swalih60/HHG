'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/file_upload');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Authenticate
      </button>
    </div>
  );
}
