import {
  LayoutDashboard,
  Text,
  Square,
  LogIn,
  UserPlus,
  BadgeHelp,
  Globe,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow border-r px-4 py-6 flex flex-col justify-between">
      {/* Top logo */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">M</div>
          <span className="text-xl font-bold text-gray-800">Modernize</span>
        </div>

        {/* Section: HOME */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">HOME</p>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-md">
            <LayoutDashboard size={16} />
            <span className="text-sm font-medium">Dashboard</span>
          </div>
        </div>

        {/* Section: UTILITIES */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">UTILITIES</p>
          <SidebarItem icon={<Text size={16} />} label="Typography" />
          <SidebarItem icon={<Square size={16} />} label="Shadow" />
        </div>

        {/* Section: AUTH */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">AUTH</p>
          <SidebarItem icon={<LogIn size={16} />} label="Login" />
          <SidebarItem icon={<UserPlus size={16} />} label="Register" />
        </div>

        {/* Section: EXTRA */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">EXTRA</p>
          <SidebarItem icon={<BadgeHelp size={16} />} label="Icons" />
          <SidebarItem icon={<Globe size={16} />} label="Sample Page" />
        </div>
      </div>

      {/* Upgrade block */}
      <div className="bg-blue-50 p-4 rounded-xl mt-6 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-2">Unlimited Access</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md">
          Upgrade
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer text-sm mb-1">
      {icon}
      <span>{label}</span>
    </div>
  );
}
