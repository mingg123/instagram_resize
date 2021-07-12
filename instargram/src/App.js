import React, { useState } from 'react';
import './App.css';

function App() {
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
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
          }
        };
      }
    }
  };

  return (
    <div className="root">
      <div className="container">
        <div className="title"> 인스타 사진 크기 조절 </div>
        {/* <div className="size">hihi</div> */}
        <div className="input-container">
          <div className="input-title">
            <div>가로 </div>
            <div>
              <input
                type="width"
                name="width"
                // value={password}
                // onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-title">
            <div> 세로</div>
            <div>
              <input
                type="height"
                name="height"
                // value={password}
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fullWidth">
        <input type="file" id="file" onChange={handleChangeFile} multiple="multiple" />
        {imgBase64.map((item) => {
          return <img className="image" src={item} alt="First slide" />;
        })}
      </div>
    </div>
  );
}

export default App;
