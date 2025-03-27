import React, { useState } from 'react';

const AffiliateTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of rows per page
  const totalItems = 100; // Total number of affiliate entries (example)
  const [selectedStudent, setSelectedStudent] = useState(null); // State for the selected student

  const affiliateData = Array.from({ length: totalItems }, (_, i) => ({
    id: String(i + 1).padStart(2, '0') + ".",
    studentId: i + 1,
    name: `Student ${i + 1}`,
    email: `student${i + 1}@example.com`,
    contact: `+123456789${i}`,
    college: `College ${i + 1}`,
    country: "India",
    action: "Active",
    status: "Active"
  }));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = affiliateData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleRowClick = (student) => {
    setSelectedStudent(student); // Set the selected student details
  };

  const closePopup = () => {
    setSelectedStudent(null); // Close the popup
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#7FAD221C] rounded-lg shadow-md p-6 w-full mx-auto mt-10">
      <div className="overflow-x-auto rounded-[25px]">
      <div className="">
                <h2 className="text-sm text-[#000000] font-normal mb-2 w-[130px] mt-4">Student Lists</h2>
                <div className="flex items-center space-x-4 justify-between mb-4">
                    <label htmlFor="" className=''>
                        <span className='text-sm text-[#474747] font-normal pr-1'>Status*</span>

                        <select className="border rounded-[14px] px-3 py-2 bg-[#FFFFFF]">
                            <option>Complete</option>
                            <option>Complete</option>
                        </select>
                    </label>
                    {/* <button className="bg-gradient-to-r from-[#7FAD22] to-[#0A7847] text-white px-4 py-2 rounded-full font-medium" onClick={() => setShowPopup(true)}>Add Affiliates</button> */}
                </div>
            </div>
        <table className="w-[1000px] bg-[#FFFFFF] divide-y divide-gray-200 table-auto">
          <thead>
            <tr>
              {["SL No", "Student ID", "Name", "Email", "Contact", "College", "Country", "Action", "Status"].map((header) => (
                <th key={header} className="px-4 py-4 text-left text-xs font-medium text-[#555555] uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.studentId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.contact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.college}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.country}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.action}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#232323] font-normal">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-[#FFFFFF] px-3 py-1 rounded-md text-[#344054] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`w-[40px] h-[40px] px-1 py-2 rounded-[50%] ${currentPage === i + 1 ? 'bg-gradient-to-r from-[#7FAD22] to-[#0A7847] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-[#FFFFFF] px-3 py-1 rounded-md text-[#344054] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>

      {/* Popup */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[32px] p-8 w-[800px]">
            <div className="flex justify-between">
              <h2 className="text-lg font-medium mb-4">Student Details</h2>
              <button onClick={closePopup} className="text-gray-600 hover:text-red-500 transition duration-300 text-xl">
                ×
              </button>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <input type="text" value={selectedStudent.name} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
              <input type="text" value={selectedStudent.email} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
              <input type="text" value={selectedStudent.contact} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
              <input type="text" value={selectedStudent.college} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
              <input type="text" value={selectedStudent.country} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
              <input type="text" value={selectedStudent.status} readOnly className="border rounded-[10px] px-3 py-2 bg-gray-100" />
            </form>
            <div className="flex space-x-2 mt-4 justify-end"> {/* Use flexbox for horizontal arrangement */}
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Reject
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateTable;
