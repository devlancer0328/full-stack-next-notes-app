import TabComponent from "@/components/Tabs/TabComponent";
import Title from "@/components/Title/Title";
import React from "react";

const App = () => {
  return (
    <section className="bg-white rounded-xl p-4 shadow-lg w-[94%] lg:w-[880px] min-h-[420px] lg:m-4">
      <Title />
      <TabComponent />
    </section>
  );
};

export default App;
