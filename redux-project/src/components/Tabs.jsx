import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "GIFs", "Videos"];

  const dispatch = useDispatch()

  // active tab ki current tab nikalne ka tareeka
  const activeTab = useSelector((state)=>{return state.search.activeTab})

  return (
    <div className="flex gap-2 border-b border-gray-200">
      {tabs.map((elem, idx) => {
        return (
          <button
          onClick={()=>{
            dispatch(setActiveTab(elem))
          }}
            key={idx}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition duration-200 ${
  activeTab === elem
    ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
}`}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;