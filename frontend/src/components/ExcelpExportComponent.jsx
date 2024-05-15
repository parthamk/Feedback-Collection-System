/* eslint-disable react/prop-types */
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExcelExportComponent({ userData }) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, "FeedbackData.xlsx");
  };

  return (
    <div className="App">
      <button
        onClick={exportToExcel}
        className="text-white text-l p-2 mt-8 bg-red-500 hover:bg-red-600 rounded bg-gradient-to-r from-blue-400 to-red-600"
      >
        Export as Excel
      </button>
    </div>
  );
}

export default ExcelExportComponent;
