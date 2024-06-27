import classNames from "classnames";

// text
export const sectionheader = classNames(
  "text-[16px] lg:text-[26px] font-medium mb-11 text-primaryColor"
);
export const label = classNames("text-sm font-medium text-gray-600 mb-2");

// scrollbar
export const scrollbar = classNames(
  "overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
);

// card
export const sectioncard = classNames(
  "min-h-[340px] rounded-xl border border-gray-300 bg-white shadow-md lg:p-8 md:p-6 p-4"
);
export const sectioncardsm = classNames(
  "rounded-xl border border-gray-300 bg-white shadow-md lg:p-6 p-4"
);
export const statuscard = classNames(
  "p-5 rounded-xl bg-white border border-gray-300 shadow-lg hover:-translate-y-1.5 transition duration-300"
);

export const cardStatus = classNames(
  "p-4 h-[152px] flex items-center rounded-xl bg-white border border-gray-300 shadow-lg hover:-translate-y-1 transition duration-300 relative"
);

// button
export const primarybtn = classNames(
  "py-2 px-6 bg-primaryColor opacity-100 hover:opacity-80 trasnition duration-300 text-white rounded-[8px]"
);

export const dropdownbtn = classNames(
  "py-1.5 px-3 border border-1 border-gray-300 text-xs rounded-full shadow-md hover:bg-green-100 hover:text-green-800 flex gap-2 items-center transition duration-300 select-none"
);
export const dropdownbtnLg = classNames(
  "bg-white py-1.5 lg:py-2 px-2 md:px-3 lg:px-5 border border-1 border-gray-300 lg:text-base md:text-md text-sm rounded-lg shadow-md hover:bg-green-100 hover:text-green-800 flex lg:gap-2 md:gap-2 gap-1 items-center transition duration-300 select-none"
);

export const dropdownbtnNew = classNames(
  "bg-white py-1.5 lg:py-2 px-2 md:px-3 lg:px-5 border border-1 border-gray-300 lg:text-base md:text-md text-sm rounded-lg flex lg:gap-2 md:gap-2 gap-1 items-center transition duration-300 select-none"
);
export const dropdownbtnMd = classNames(
  "bg-white py-2 px-3 border border-1 border-gray-300 text-sm rounded-lg shadow-md hover:bg-green-100 hover:text-green-800 flex gap-2 items-center transition duration-300 select-none"
);

export const actionBtn = classNames(
  "lg:pt-2.5 lg:pb-3 py-2 lg:pl-3 pl-2 lg:pr-4 pr-2.5 lg:text-sm text-xs lg:rounded-lg rounded-md h-fit w-fit flex items-center gap-2 shadow bg-primaryColor hover:bg-[#5060b5] text-white text-sm transition duration-300"
);
export const saveBtn = classNames(
  "py-1.5 px-4 text-sm border border-1 border-gray-400 rounded-lg text-gray-600 font-medium bg-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition duration-200 shadow"
);

export const cancelBtn = classNames(
  "py-2 border-2 border-gray-300 rounded-lg text-gray-500 font-medium hover:bg-gray-100 hover:border-gray-400 hover:text-gray-600 transition duration-200"
);

export const createBtn = classNames(
  "py-2 border-2 border-primaryColor bg-primaryColor rounded-lg text-white font-medium hover:opacity-90 transition duration-200"
);

export const submitBtn = classNames(
  "bg-primaryColor hover:bg-opacity-90 py-2 px-6 rounded-lg text-white text-sm transition duration-300"
);

export const declineBtn = classNames(
  "py-2 border-2 border-gray-400 rounded-lg text-gray-600 font-medium hover:bg-red-100 hover:border-red-500 hover:text-red-500 transition duration-200"
);

export const declineBtnInActive = classNames(
  "py-2 border-2 border-gray-400 rounded-lg text-gray-600 font-medium"
);

export const approveBtn = classNames(
  "py-2 border-2 border-green-500 rounded-lg bg-green-500 text-white hover:bg-green-600 hover:border-green-600 transition duration-200"
);

export const approveBtnInActive = classNames(
  "py-2 border-2 border-green-500 rounded-lg bg-green-500 text-white"
);

export const saveChangesBtn = classNames(
  "mt-8 flex justify-center items-center bg-primaryColor hover:bg-opacity-90 transition-all duration-300 text-white font-bold rounded-lg py-2.5 px-8 text-sm"
);

// iconbutton
export const deleteIconBtn = classNames(
  "text-2xl hover:bg-red-100 hover:text-red-500 p-1 rounded-full transition duration-300"
);
export const editIconBtn = classNames(
  "text-2xl hover:bg-blue-100 hover:text-blue-500 p-1 rounded-full transition duration-300 mr-1"
);

// positon
export const centerPosition = classNames(
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1.5 text-[10px] font-medium flex flex-col items-center"
);
