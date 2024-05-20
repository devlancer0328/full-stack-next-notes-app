"use client";
import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("notifications");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>
        <select
          id="Tab"
          className="w-full rounded-md border-gray-200"
          value={activeTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          <option value="settings">Settings</option>
          <option value="messages">Messages</option>
          <option value="archive">Archive</option>
          <option value="notifications">Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teamb"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teamb")}
            >
              Team B
            </a>

            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teamc"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teamc")}
            >
              Team C
            </a>

            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teamd"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teamd")}
            >
              Team D
            </a>

            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teame"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teame")}
              aria-current="page"
            >
              Team E
            </a>

            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teamf"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teamf")}
              aria-current="page"
            >
              Team F
            </a>

            <a
              href="#"
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                activeTab === "teamm"
                  ? "border-yellow-600 text-yellow-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick("teamm")}
              aria-current="page"
            >
              Team M
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "teamb" && (
          <div>
            <p>Team B content goes here.</p>
          </div>
        )}
        {activeTab === "teamc" && (
          <div>
            <p>Team C content goes here.</p>
          </div>
        )}
        {activeTab === "teamd" && (
          <div>
            <p>Team D content goes here.</p>
          </div>
        )}
        {activeTab === "teame" && (
          <div>
            <p>Team E content goes here.</p>
          </div>
        )}
        {activeTab === "teamf" && (
          <div>
            <p>Team F content goes here.</p>
          </div>
        )}
        {activeTab === "teamm" && (
          <div>
            <p>Team M content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
