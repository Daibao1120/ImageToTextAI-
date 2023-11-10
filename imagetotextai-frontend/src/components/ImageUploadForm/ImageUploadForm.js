import React, { useState } from 'react';

function ImageUploadForm({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      // 提示用戶選擇一個文件
      alert("請選擇一個圖片文件");
    }
  };

  return (
    <div>
      <h2>圖片上傳</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">上傳</button>
      </form>
    </div>
  );
}

export default ImageUploadForm;
