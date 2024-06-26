import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
const DownloadPdf = () => {
  const h2Style = "font-bold text-[1.5rem] text-[#ed091c]"
  const handleDownload = () => {
    // This function will be called when the download button is clicked
    // Here you can perform actions like fetching data, generating PDF, etc.
    // For simplicity, let's assume we're opening a PDF file
    window.open('/kp.pdf', '_blank');
  };

  return (
    <div className='flex items-center justify-center gap-4'>
      <button onClick={handleDownload} className='flex items-center justify-center gap-4'>
        <FaCloudDownloadAlt className='text-[5rem] text-red-500 bounce' />
        <p className={h2Style}>KP Metals Brochure Download</p>
      </button>
    </div>
  );
};

export default DownloadPdf;
