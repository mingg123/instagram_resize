import React, { useState } from 'react';
import './App.css';

function App() {
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);

    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        // 파일을 읽어 버퍼에 저장
        reader.readAsDataURL(event.target.files[i]);
        // 파일 상태 업데이트
        reader.onloadend = () => {
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
  };

  return (
    <div className="fullWidth">
      인스타 사진 크기 조절
      <div>
        <input type="file" id="file" onChange={handleChangeFile} multiple="multiple" />
      </div>
      {imgBase64.map((item) => {
        return (
          <img
            className="d-block w-100"
            src={item}
            alt="First slide"
            style={{ width: '100%', height: '100%' }}
          />
        );
      })}
    </div>
  );
}

export default App;
