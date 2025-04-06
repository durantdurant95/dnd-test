import { BarChart2 } from "lucide-react";

export default function Sidebar() {
  return (
    <div className=" min-w-12 flex flex-col items-center py-2 space-y-4 h-full">
      <div className="text-xs text-gray-400">1m</div>
      <BarChart2 className="h-5 w-5 text-gray-400" />
      <div className="h-5 w-5 flex items-center justify-center">
        <div className="h-3 w-3 border border-gray-400 rounded"></div>
      </div>
      <div className="text-xs text-gray-400">...</div>
    </div>
  );
}
