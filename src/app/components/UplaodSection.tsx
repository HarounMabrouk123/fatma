'use client';

import { Upload } from 'lucide-react';
import Papa from 'papaparse';
import { useRef, useState } from 'react';

export default function UploadSection({
  onDataExtracted,
}: {
  onDataExtracted: (data: any[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const first10 = result.data.slice(0, 5);
        onDataExtracted(first10);
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-white bg-white/20 border-4 border-black p-4 rounded-lg shadow-xl max-w-sm mx-auto mt-56 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-3 text-white text-center">
        Upload All Transactions here:
      </h2>

      <label
        htmlFor="csv-upload"
        className="flex flex-col items-center justify-center w-full h-32 border border-gray-300 rounded-md cursor-pointer hover:bg-blue-500/30 transition-colors text-white"
      >
        <Upload size={32} className="mb-1 text-white" />
        <span className="text-sm font-medium">
          {fileName ? fileName : 'Upload CSV File'}
        </span>
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
