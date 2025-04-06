import { Copy, Star } from "lucide-react";

export default function TokenInfoBar() {
  return (
    <div className="token-info-bar-container">
      <div className="flex items-center px-4 py-2 text-sm">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-gray-400 mr-2" />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs">T</span>
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-bold">TRUMP</span>
                <span className="text-gray-400 ml-1">OFFICIAL TRUMP</span>
                <div className="ml-1 px-1 bg-gray-800 rounded text-xs">
                  Zero
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <span>CPMM</span>
                <div className="mx-1 w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-8 flex items-center space-x-8">
          <div>
            <div className="text-xl font-bold">$8.41B</div>
            <div className="flex items-center space-x-4 text-xs">
              <div>
                <span className="text-gray-400">Price</span>
                <span className="ml-1">$8.406</span>
              </div>
              <div>
                <span className="text-gray-400">Liquidity</span>
                <span className="ml-1">$3.93M</span>
              </div>
              <div>
                <span className="text-gray-400">Supply</span>
                <span className="ml-1">1B</span>
              </div>
              <div>
                <span className="text-gray-400">Tax</span>
                <span className="ml-1">0.25%</span>
              </div>
              <div className="flex items-center">
                <Copy className="h-3 w-3 mr-1" />
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <div className="text-gray-400 text-xs">5m Vol</div>
              <div className="font-medium">$17.6K</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-gray-400 text-xs">Buys</div>
              <div className="text-green-500 font-medium">13 / $9.05K</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-gray-400 text-xs">Sells</div>
              <div className="text-red-500 font-medium">17 / $8.5K</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-gray-400 text-xs">Net Vol</div>
              <div className="text-green-500 font-medium">+$541</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
