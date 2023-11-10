import React, { useState } from 'react';
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';
// 如果需要的話，添加API請求的相關代碼

function App() {
  const [ocrText, setOcrText] = useState("");

  const handleFileUpload = (file) => {
    // 創建FormData
    const formData = new FormData();
    formData.append('image', file);

    // 發送請求到後端API
    // 根據您的API地址替換 'YOUR_API_ENDPOINT'
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      setOcrText(data.text); // 假設返回的數據包含一個text字段
    })
    .catch(error => {
      console.error('錯誤:', error);
    });
  };

  return (
    <div className="App">
      <ImageUploadForm onFileUpload={handleFileUpload} />
      <ResultDisplay textResult={ocrText} />
    </div>
  );
}

export default App;
