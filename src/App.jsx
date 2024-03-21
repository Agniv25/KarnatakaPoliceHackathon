import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar.jsx";
const dummyData = [
  {
    id: 1,
    offenseDate: "2023-05-15",
    firRegistrationDate: "2023-05-16",
    firType: "Heinous",
    complaint: "Written",
    crimeGroup: "POCSO",
    crimeHeadName: "Street Gambling (87)",
    placeOfOffense: "KAMATAGI BUS STAND, KAMATAGI BUS STAND",
  },
  {
    id: 2,
    offenseDate: "2023-06-20",
    firRegistrationDate: "2023-06-21",
    firType: "Non-Heinous",
    complaint: "Sue-moto by Police",
    crimeGroup: "MOTOR VEHICLE ACCIDENTS FATAL",
    crimeHeadName: "Security For Good Behaviour (Sec 107 )",
    placeOfOffense: "AMBLIKOPPA BUS STAND, AMBLIKOPPA BUS STAND",
  },
  // Add more dummy data as needed
];

// const LeftSidebar = ({ handleFilterChange }) => {
//   return (
//     <div className="flex flex-col mr-4">
//       <input
//         type="date"
//         name="offenseDate"
//         onChange={handleFilterChange}
//         className="p-2 mb-2"
//       />
//       <input
//         type="date"
//         name="firRegistrationDate"
//         onChange={handleFilterChange}
//         className="p-2 mb-2"
//       />
//       <input
//         type="text"
//         name="crimeHeadName"
//         placeholder="Search by Crime Head Name"
//         onChange={handleFilterChange}
//         className="p-2 mb-2"
//       />
//     </div>
//   );
// };

const CrimeTable = () => {
  const [filters, setFilters] = useState({
    offenseDate: null,
    firRegistrationDate: null,
    firType: null,
    complaint: null,
    placeOfOffense: null,
    crimeHeadName: "",
    crimeGroup: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = dummyData.filter((item) => {
    const {
      offenseDate,
      firRegistrationDate,
      firType,
      complaint,
      placeOfOffense,
      crimeHeadName,
      crimeGroup,
    } = filters;
    return (
      (!offenseDate || item.offenseDate === offenseDate) &&
      (!firRegistrationDate ||
        item.firRegistrationDate === firRegistrationDate) &&
      (!firType ||
        (firType === "Heinous" && item.firType === "Heinous") ||
        (firType === "Non-Heinous" && item.firType === "Non-Heinous")) &&
      (!complaint ||
        item.complaint.toLowerCase().includes(complaint.toLowerCase())) &&
      (!placeOfOffense ||
        item.placeOfOffense
          .toLowerCase()
          .includes(placeOfOffense.toLowerCase())) &&
      (!crimeHeadName ||
        item.crimeHeadName
          .toLowerCase()
          .includes(crimeHeadName.toLowerCase())) &&
      (!crimeGroup ||
        item.crimeGroup.toLowerCase().includes(crimeGroup.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto flex">
      <LeftSideBar handleFilterChange={handleFilterChange} />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Offense Date</th>
            <th className="border px-4 py-2">FIR Registration Date</th>
            <th className="border px-4 py-2">FIR Type</th>
            <th className="border px-4 py-2">Complaint</th>
            <th className="border px-4 py-2">Crime Group</th>
            <th className="border px-4 py-2">Crime Head Name</th>
            <th className="border px-4 py-2">Place of Offense</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.offenseDate}</td>
              <td className="border px-4 py-2">{item.firRegistrationDate}</td>
              <td className="border px-4 py-2">{item.firType}</td>
              <td className="border px-4 py-2">{item.complaint}</td>
              <td className="border px-4 py-2">{item.crimeGroup}</td>
              <td className="border px-4 py-2">{item.crimeHeadName}</td>
              <td className="border px-4 py-2">{item.placeOfOffense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrimeTable;
