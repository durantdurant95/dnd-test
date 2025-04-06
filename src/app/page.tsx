"use client";

import BottomBar from "@/components/bottom-bar";
import ChartArea from "@/components/chart-area";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TokenInfoBar from "@/components/token-info-bar";
import TradingPanel from "@/components/trading-panel";
import { useEffect, useRef } from "react";
import { createSwapy, Swapy } from "swapy";

export default function HomePage() {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Example event listener for swap events
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });

      const updateLayout = () => {
        const slotItemMap = swapy.current?.slotItemMap().asObject || {};
        const verticalSlots = ["sidebar", "chart-area", "trading-panel"];
        const verticalItems = ["header", "token-info-bar", "bottom-bar"];

        verticalItems.forEach((item) => {
          const slot = Object.keys(slotItemMap).find(
            (key) => slotItemMap[key] === item
          );
          const element = document.querySelector(`[data-swapy-item="${item}"]`);
          if (element) {
            if (verticalSlots.includes(slot || "")) {
              element.classList.add("vertical-layout");
            } else {
              element.classList.remove("vertical-layout");
            }
          }
        });
      };

      swapy.current.onSwap(updateLayout);
      updateLayout(); // Initial check
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col h-screen bg-black text-white overflow-hidden"
    >
      {/* Top Navigation Bar */}
      <div data-swapy-slot="header" className="border-b border-gray-700">
        <div data-swapy-item="header">
          <Header />
        </div>
      </div>

      {/* Token Info Bar */}
      <div
        data-swapy-slot="token-info-bar"
        className="border-b border-gray-700"
      >
        <div data-swapy-item="token-info-bar">
          <TokenInfoBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          data-swapy-slot="sidebar"
          className="flex-shrink-0 h-full border-r border-gray-700"
        >
          <div data-swapy-item="sidebar" className="h-full">
            <Sidebar />
          </div>
        </div>

        {/* Chart Area */}
        <div
          data-swapy-slot="chart-area"
          className="flex-grow h-full border-r border-gray-700 relative"
        >
          <div data-swapy-item="chart-area" className="h-full">
            <ChartArea />
          </div>
        </div>

        {/* Trading Panel */}
        <div
          data-swapy-slot="trading-panel"
          className="flex-shrink-0 w-80 h-full"
        >
          <div data-swapy-item="trading-panel" className="h-full">
            <TradingPanel />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div data-swapy-slot="bottom-bar" className="border-t border-gray-700">
        <div data-swapy-item="bottom-bar">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
