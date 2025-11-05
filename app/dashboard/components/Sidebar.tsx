'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'SEO', path: '/dashboard/seo', icon: '🔍' }
  ];

  return (
    <div className="w-64 min-h-screen border-r border-gray-200" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="#d61935"/>
          </svg>
          <span className="text-xl font-bold text-white">DailyEcho</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                pathname === item.path
                  ? 'text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
              style={pathname === item.path ? { backgroundColor: '#d61935' } : {}}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
