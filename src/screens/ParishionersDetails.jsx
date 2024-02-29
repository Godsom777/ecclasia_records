import React from "react";
import Appbar from "../Components/Appbar/Appbar";

const ParishionersDetails = () => {
  // Sample data for parishioners
  const parishioners = [
    {
      name: "John",
      surname: "Doe",
      dateOfBirth: "1990-01-01",
      parish: "St. Mary",
    },
    {
      name: "Jane",
      surname: "Smith",
      dateOfBirth: "1985-05-10",
      parish: "St. Joseph",
    },
    {
      name: "Michael",
      surname: "Johnson",
      dateOfBirth: "1995-12-15",
      parish: "St. Patrick",
    },
    // Add more parishioners here
  ];

  return (
    <>
      <Appbar />
      <div>
        <h1>Parishioners Details</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Date of Birth</th>
              <th>Parish</th>
            </tr>
          </thead>
          <tbody>
            {parishioners.map((parishioner, index) => (
              <tr key={index}>
                <td>{parishioner.name}</td>
                <td>{parishioner.surname}</td>
                <td>{parishioner.dateOfBirth}</td>
                <td>{parishioner.parish}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ParishionersDetails;
