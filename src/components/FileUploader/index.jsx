import { useRef } from "react";

const FileUploader = ({onFileSelected}) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        onFileSelected(e.target.files[0]);
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary">s</button>
        </div>
    )
}

export default FileUploader;