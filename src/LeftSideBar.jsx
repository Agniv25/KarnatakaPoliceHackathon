import React from "react";

const LeftSidebar = ({ handleFilterChange }) => {
  return (
    <div className="flex flex-col mr-4">
      <input
        type="date"
        name="offenseDate"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
      <input
        type="date"
        name="firRegistrationDate"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="heinous"
          name="firType"
          value="Heinous"
          onChange={handleFilterChange}
          className="mr-2"
        />
        <label htmlFor="heinous" className="mr-4">
          Heinous
        </label>
        <input
          type="radio"
          id="nonHeinous"
          name="firType"
          value="Non-Heinous"
          onChange={handleFilterChange}
          className="mr-2"
        />
        <label htmlFor="nonHeinous">Non-Heinous</label>
      </div>
      <input
        type="text"
        name="crimeHeadName"
        placeholder="Crime Head Name"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
      <input
        type="text"
        name="complaint"
        placeholder="Complaint"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
      <input
        type="text"
        name="crimeGroup"
        placeholder="Crime Group"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
      <input
        type="text"
        name="placeOfOffense"
        placeholder="Place of Offense"
        onChange={handleFilterChange}
        className="p-2 mb-2"
      />
    </div>
  );
};

export default LeftSidebar;
