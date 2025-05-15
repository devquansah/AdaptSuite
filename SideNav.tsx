import { NavLink } from 'react-router-dom';
import { ChartBar, ChevronLeft, DollarSign, LayoutDashboard, Package, Plug, Settings, Users } from 'lucide-react';

type SideNavProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function SideNav({ open, setOpen }: SideNavProps) {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Financials', path: '/financials', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Inventory', path: '/inventory', icon: <Package className="w-5 h-5" /> },
    { name: 'CRM', path: '/crm', icon: <Users className="w-5 h-5" /> },
    { name: 'Marketing', path: '/marketing', icon: <ChartBar className="w-5 h-5" /> },
    { name: 'Integrations', path: '/integrations', icon: <Plug className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`${
        open ? 'w-64' : 'w-20'
      } transition-width duration-300 ease-in-out bg-white border-r border-gray-200 relative h-full`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-0 top-16 bg-white rounded-l-md p-1 -mr-3 border border-gray-200 border-r-0 hidden md:block"
      >
        <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${!open ? 'rotate-180' : ''}`} />
      </button>

      <div className="p-4 flex items-center">
        <div className="bg-blue-600 text-white rounded-md p-2 mr-2 shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="currentColor" />
            <path d="M4 12L12 16L20 12" fill="currentColor" />
            <path d="M4 16L12 20L20 16" fill="currentColor" />
          </svg>
        </div>
        {open && (
          <div>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Fusion<span className="text-blue-600">ERP</span></h1>
          </div>
        )}
      </div>

      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center py-3 px-3 rounded-md transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                  } ${!open && 'justify-center'}`
                }
              >
                {item.icon}
                {open && <span className="ml-3 font-medium">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
