import React from 'react'

const Resume= ({ pdfUrl }) => {
    return (
      <div className="pdf-viewer ">
        <iframe
          title="PDF Viewer"
          src= "/Ujjwal.pdf"
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
    );
  };

export default Resume
