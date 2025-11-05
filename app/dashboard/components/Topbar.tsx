'use client';

import { useRouter } from 'next/navigation';

interface TopbarProps {
  userEmail: string;
}

export default function Topbar({ userEmail }: TopbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6" style={{ backgroundColor: '#fff' }}>
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">{userEmail}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-white rounded-md hover:opacity-90"
          style={{ backgroundColor: '#d61935' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
