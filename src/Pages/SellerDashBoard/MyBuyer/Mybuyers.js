import React from "react";

const Mybuyers = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-2xl text-center font-bold pb-5">My Buyer</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>s/n</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mybuyers;
