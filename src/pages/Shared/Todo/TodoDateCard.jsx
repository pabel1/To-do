import React from "react";
import moment from "moment";

const TodoDateCard = ({ date }) => {
  const formattedDay = moment(date).format("dddd"); // Format the day as "Sat"
  const formattedDate = moment(date).format("MMMM DD"); // Format the date as "21"

  return (
    <div className="shadow py-2.5 px-2 flex justify-between bg-white rounded-lg border-b-[4px] border-b-primaryColor">
      <div className="pl-2">
        <h2 className="text-sm text-primaryColor font-semibold">{formattedDay}</h2>
        <p className="text-xs text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default TodoDateCard;
