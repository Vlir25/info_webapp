import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
    <div>
      <h2>Selecciona un archivo para graficar</h2>
      <select onChange={(e) => setSelectedFile(e.target.value)} value={selectedFile}>
        <option value="">Seleccione un archivo</option>
        {files.map((file, index) => (
          <option key={index} value={file}>{file}</option>
        ))}
      </select>

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
