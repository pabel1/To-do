import React from "react";

const UserLargeProfile = ({ data }) => {
  const { photo, name, designation, department } = data;
  return (
    <div className="flex items-center gap-2">
      <img
        src={photo?.url}
        alt={name}
        className="h-16 w-16 object-cover rounded-full"
      />
      <div>
        <h2 className="text-gray-600 text-lg font-medium">{name}</h2>
        <p className="text-sm text-gray-600">{designation}</p>
        <p className="text-xs text-gray-500">{department} Department</p>
      </div>
    </div>
  );
};

export default UserLargeProfile;
