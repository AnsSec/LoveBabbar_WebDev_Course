import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center">
      <h1 className="bg-white rounded-xl  w-11/12 mt-10 text-center mx-6 px-10 py-2 text-3xl font-bold uppercase">Random GIF</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-8">
        <Random />
        <Tags />
      </div>
    </div>
  );
};

export default App;
