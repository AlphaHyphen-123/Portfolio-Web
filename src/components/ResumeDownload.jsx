import React from "react";

function ResumeDownload() {
  return (
    <div
      name="ResumeDownload"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center transition-all duration-300 hover:text-green-600 hover:scale-105">
          Download My Resume
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl transition-all duration-300 hover:text-gray-800 dark:hover:text-white hover:font-medium">
          Ready to explore my skills and experience? Click the button below to download my resume and learn more about my journey in software development.
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf" // Replace with your actual resume file path or URL
          download="Shivam_Sen_Resume.pdf" // Suggested filename for download
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-green-500 hover:shadow-xl hover:scale-110 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
        >
          <svg
            className="w-6 h-6 mr-3 transition-all duration-300 hover:animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </a>

        {/* Additional Visual Elements */}
        <div className="mt-8 flex space-x-4">
          <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-green-300 dark:hover:bg-green-700 hover:scale-110">
            <span className="text-2xl">📄</span>
          </div>
          <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-110">
            <span className="text-2xl">💼</span>
          </div>
          <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-purple-300 dark:hover:bg-purple-700 hover:scale-110">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeDownload;
