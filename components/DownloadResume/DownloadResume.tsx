import "./DownloadResume.css";

import downloadUrl from "../../assets/vectors/download.svg";

const DownloadResume: React.FC = () => {
  return (
    <div className="download-resume-container">
      <a
        href="/resume.pdf"
        download
        className="download-resume unselectable"
      >
        <img src={downloadUrl} alt="download" />
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;