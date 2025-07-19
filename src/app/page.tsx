'use client';
import Image from "next/image";

import { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UploadSection from "./components/UplaodSection";
import KpiGrid from "./components/KpiGrid";
import TransactionTable from "./components/TransactionTable";

export default function Home() {
  const [parsedData, setParsedData] = useState<any[]>([]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />

        {/* Background wrapper */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat text-black"
          style={{
            backgroundImage: "url('/logos/stb.jpg')",
            

          }}
        >
          <main className="flex flex-col items-center justify-start p-6 gap-12">
            <UploadSection onDataExtracted={setParsedData} />
            <KpiGrid />
            <TransactionTable data={parsedData} />
          </main>
        </div>
      </div>
    </div>
  );
}
