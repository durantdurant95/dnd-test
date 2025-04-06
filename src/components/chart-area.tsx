import { Layout } from "lucide-react";

export default function ChartArea() {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chart Controls */}
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <div className="text-gray-300">
            TRUMP/USD on Raydium CPMM · 1 · axiom.trade
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-400">O:</span>
            <span className="ml-1">8.48</span>
            <span className="text-gray-400 ml-2">H:</span>
            <span className="ml-1 text-green-500">8.488</span>
            <span className="text-gray-400 ml-2">L:</span>
            <span className="ml-1 text-red-500">8.47B</span>
            <span className="text-gray-400 ml-2">C:</span>
            <span className="ml-1">8.48B</span>
            <span className="text-green-500 ml-2">71.2M (+0.85%)</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-gray-900 rounded px-2 py-1">
            <span>Axiom</span>
            <Layout className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="text-gray-400 text-sm">Graph Placeholder</div>
      </div>
    </div>
  );
}
