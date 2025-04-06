import { Button } from "@/components/ui/button";
import { Bell, Clock, Layout } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="bottom-bar-container">
      <div className="flex items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="border-blue-600 bg-blue-900/20 text-blue-400 rounded-md px-2 py-1 h-6 text-xs"
          >
            PRESET 1
          </Button>
          <div className="flex items-center space-x-1 bg-gray-900 rounded px-2 py-1">
            <Layout className="h-3 w-3 text-gray-400" />
            <span>1</span>
            <span>=</span>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-gray-900 rounded px-2 py-1">
            <Clock className="h-3 w-3 text-gray-400 mr-1" />
            <span>00:0G</span>
          </div>
          <Bell className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
