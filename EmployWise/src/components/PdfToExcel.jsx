import React, { useState } from 'react';

const PdfToExcel = () => {
  const [uploadForms, setUploadForms] = useState([{ id: 0 }]); // Array of upload forms
  const [pdfType, setPdfType] = useState('');
  const pdfTypes = ['Type A', 'Type B', 'Type C']; // Example PDF types
  const [numFiles, setNumFiles] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 5; // Number of rows per page

  const tableData = [
    { id: 1, offerId: 'Marketing', company: 'Company A', pdfNumber: 'PDF-001', uploadedBy: 'User 1' },
    { id: 2, offerId: 'Sales', company: 'Company B', pdfNumber: 'PDF-002', uploadedBy: 'User 2' },
    { id: 3, offerId: 'Finance', company: 'Company C', pdfNumber: 'PDF-003', uploadedBy: 'User 3' },
    { id: 4, offerId: 'HR', company: 'Company D', pdfNumber: 'PDF-004', uploadedBy: 'User 4' },
    { id: 5, offerId: 'IT', company: 'Company E', pdfNumber: 'PDF-005', uploadedBy: 'User 5' },
    { id: 6, offerId: 'Logistics', company: 'Company F', pdfNumber: 'PDF-006', uploadedBy: 'User 6' },
    { id: 7, offerId: 'Operations', company: 'Company G', pdfNumber: 'PDF-007', uploadedBy: 'User 7' },
    { id: 8, offerId: 'Procurement', company: 'Company H', pdfNumber: 'PDF-008', uploadedBy: 'User 8' },
    { id: 9, offerId: 'Legal', company: 'Company I', pdfNumber: 'PDF-009', uploadedBy: 'User 9' },
    { id: 10, offerId: 'Research', company: 'Company J', pdfNumber: 'PDF-010', uploadedBy: 'User 10' },
  ];

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handleAddForm = () => {
    setUploadForms([...uploadForms, { id: uploadForms.length }]);
  };

  const handleRemoveForm = (id) => {
    setUploadForms(uploadForms.filter((form) => form.id !== id));
  };

  const handleNumFilesChange = (e) => {
    setNumFiles(parseInt(e.target.value) || 1);
  };

  const handlePdfTypeChange = (e) => {
    setPdfType(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentTableData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 mb-4 shadow">
        {uploadForms.map((form) => (
          <div key={form.id} className="mb-4 border p-4 rounded">
            <div className="flex items-center mb-2">
              <label htmlFor={`numFiles-${form.id}`} className="mr-2">Number of Files:</label>
              <input
                type="number"
                id={`numFiles-${form.id}`}
                className="border rounded px-2 py-1 w-20"
                value={numFiles}
                onChange={(e) => handleNumFilesChange(e)}
                min="1"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor={`pdfType-${form.id}`} className="mr-2">PDF Type:</label>
              <select
                id={`pdfType-${form.id}`}
                className="border rounded px-2 py-1"
                value={pdfType}
                onChange={(e) => handlePdfTypeChange(e)}
              >
                <option value="">Select Type</option>
                {pdfTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Choose File</button>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Choose File to Upload</button>
              {uploadForms.length > 1 && (
                <button
                  onClick={() => handleRemoveForm(form.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  -
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={handleAddForm}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
          Export to Excel
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg p-4 shadow">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">S.R No.</th>
              <th className="border px-4 py-2">Offer ID</th>
              <th className="border px-4 py-2">Company</th>
              <th className="border px-4 py-2">Pdf Number</th>
              <th className="border px-4 py-2">Uploaded by</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="border px-4 py-2">{row.id}.</td>
                <td className="border px-4 py-2">{row.offerId}</td>
                <td className="border px-4 py-2">{row.company}</td>
                <td className="border px-4 py-2">{row.pdfNumber}</td>
                <td className="border px-4 py-2">{row.uploadedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            className={`text-gray-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`text-gray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfToExcel;
