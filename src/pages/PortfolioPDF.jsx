import React, { useEffect } from 'react';
import AuraCharge from './projects/AuraCharge';
import ImmersiveTraffic from './projects/ImmersiveTraffic';
import MakhanaProject from './projects/MakhanaProject';
import JioBPProject from './projects/JioBPProject';
import PdfCoverPage from '../components/pdf/PdfCoverPage';
import PdfTableOfContents from '../components/pdf/PdfTableOfContents';

export default function PortfolioPDF() {
  useEffect(() => {
    document.body.classList.add('pdf-mode');
    return () => {
      document.body.classList.remove('pdf-mode');
    };
  }, []);

  return (
    <div className="bg-background text-white">
      <PdfCoverPage />
      <PdfTableOfContents />
      <ImmersiveTraffic projectNumber="01" />
      <JioBPProject projectNumber="02" />
      <MakhanaProject projectNumber="03" />
      <AuraCharge projectNumber="04" />
    </div>
  );
}
