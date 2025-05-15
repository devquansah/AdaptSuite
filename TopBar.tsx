import { Bell, Mail, Menu, Search, User } from 'lucide-react';

type TopBarProps = {
  onMenuButtonClick: () => void;
};

export default function TopBar({ onMenuButtonClick }: TopBarProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuButtonClick}
            className="text-gray-600 focus:outline-none md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none relative">
            <Mail className="h-5 w-5" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              5
            </span>
          </button>
          <div className="border-l border-gray-200 h-6 mx-2"></div>
          <div className="flex items-center">
            <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300">
              <div className="flex items-center justify-center bg-blue-100 text-blue-500 rounded-full h-8 w-8">
                <User className="h-5 w-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
