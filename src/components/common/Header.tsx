import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showSearch?: boolean;
  showNotification?: boolean;
  transparent?: boolean;
}

export function Header({
  title,
  showBack = false,
  onBack,
  showSearch = false,
  showNotification = true,
  transparent = false,
}: HeaderProps) {
  const { user } = useAuth();

  return (
    <header
      className={`sticky top-0 z-40 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-100'
      }`}
    >
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
          {title ? (
            <h1 className="text-lg font-bold text-gray-800">{title}</h1>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-medical rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800">يمن عافية</h1>
                <p className="text-xs text-gray-500">المنصة الصحية المتكاملة</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showSearch && (
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={22} className="text-gray-600" />
            </button>
          )}
          {showNotification && (
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <Bell size={22} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full"></span>
            </button>
          )}
          {user && (
            <button className="flex items-center gap-2 p-2 pr-4 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-700">
                {user.full_name?.split(' ')[0]}
              </span>
              <div className="w-8 h-8 bg-gradient-medical rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
