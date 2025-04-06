import { Bell, Briefcase, ChevronDown, Search, Star, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className="header-container">
      <header className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="mr-1 mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path
                  d="M2 17L12 22L22 17M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">AXIOM</span>
            <span className="text-xl text-gray-400">Pro</span>
          </div>

          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Discover
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Pulse
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Trackers
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Perpetuals
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Yield
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Portfolio
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Rewards
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              className="bg-gray-900 border-gray-700 rounded-full pl-8 pr-4 py-1 w-64 h-9 text-sm"
              placeholder="Search by token or CA..."
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-1 h-9">
            Deposit
          </Button>
          <Star className="h-5 w-5 text-gray-400" />
          <Bell className="h-5 w-5 text-gray-400" />
          <div className="flex items-center space-x-1 bg-gray-900 rounded-md px-2 py-1">
            <Briefcase className="h-4 w-4 text-gray-400" />
            <span className="text-sm">0</span>
          </div>
          <div className="flex items-center space-x-1 bg-gray-900 rounded-md px-2 py-1">
            <span className="text-sm">0</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-300" />
          </div>
        </div>
      </header>
    </div>
  );
}
