import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";


const ExcelChart = () => {
  const [selectedFile, setSelectedFile] = useState(""); // Archivo seleccionado
  const [data, setData] = useState([]);
  
  // Lista de archivos en la carpeta public
  const files = [
    "NDVI.xlsx",
    "GCI.xlsx",
    "GNDVI.xlsx",
    "NDRE.xlsx",
    "FRUITS.xlsx"
  ];

  useEffect(() => {
    if (selectedFile) {
      fetch(`/${selectedFile}`)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.readAsBinaryString(blob);
          reader.onload = (e) => {
            const workbook = XLSX.read(e.target.result, { type: "binary" });
            const sheetName = workbook.SheetNames[0]; // Tomar la primera hoja
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            if (jsonData.length > 0) {
              const keys = Object.keys(jsonData[0]).filter(key => key !== "Week"); // Detectar columnas dinámicas
              const formattedData = jsonData.map((row) => {
                let newRow = { Day: row.Day };
                keys.forEach((key) => {
                  newRow[key] = parseFloat(row[key]) || 0; // Convertir a número
                });
                return newRow;
              });

              setData(formattedData);
            }
          };
        });
    }
  }, [selectedFile]);

  return (
    <div max-w-6xl mx-auto p-6>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faChartLine} className="text-primary text-4xl" />
        Visualización de datos de sensores
      </h2>

      <div className="flex flex-col items-center mb-8">
        <label className="mb-2 text-lg text-gray-700 font-medium">
          <FontAwesomeIcon icon={faFileExcel} className="mr-2 text-green-600" />
          Selecciona un archivo:
        </label>
        <select
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          onChange={(e) => setSelectedFile(e.target.value)}
          value={selectedFile}
        >
          <option value="">-- Elegir archivo --</option>
          {files.map((file, index) => (
            <option key={index} value={file}>
              📄 {file}
            </option>
          ))}
        </select>
      </div>

      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0]).filter(key => key !== "Day").map((key, index) => (
              <Line key={index} type="monotone" dataKey={key} stroke={`hsl(${index * 60}, 70%, 50%)`} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ExcelChart;
