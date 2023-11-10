import React from 'react';

function ResultDisplay({ textResult }) {
  return (
    <div>
      <h2>OCR結果</h2>
      <textarea value={textResult} readOnly rows="10" cols="50"></textarea>
    </div>
  );
}

export default ResultDisplay;
