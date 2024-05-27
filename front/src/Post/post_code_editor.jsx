import React, { useState } from 'react';
import './post_code_editor.css';

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here.."
      />
      <div className="code-output">
        <pre>{code}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
