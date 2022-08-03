import React, { useState, useEffect, CSSProperties} from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Aws from './Components/Aws';
import frame from './Components/Frame';



function App() {
  const [fichier, setFichier] = useState<any>("");
  const [file, setFile] = useState<any>(null)
  const [dataList, setDataList] = useState<any>()
  const [source, setSource] = useState<any>()

  const previewFile = (event: any) => {
    setFile(event.target.files[0])

    const reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    
    reader.addEventListener("load", function () {
      setFichier(reader.result)
    }, false);   
  }

  
// console.log(dataList);


  useEffect(() => {
    if(file){
    const read = new FileReader();
    read.readAsDataURL(file)
    read.addEventListener('load', function(){
      setSource(read.result);
      })
    }

  }, [file])

// useEffect(() =>{
//   if(dataList){
//     for (var i = 0; i < dataList.length; i++) {
//       dataList[i].AgeRange.Low 
//       dataList[i].AgeRange.High
//       setOther(dataList[i] )
//     }
//    }
//   }, [dataList])
  
  // console.log(dataList);

  const cadre : CSSProperties = {
    position: 'absolute',
    border: '',
    width: '',
    height: '',
    top: '',
    left: ''
  }

  
  return (
   <>
     <Header/>
    <div className='container'>
      <div className='left'>
        <img src={source} alt="" id="" onLoad={(e)=>{frame(e, dataList)}}/>
        <div className='frame'></div>
        <input id='fileToUpload' type="file" accept='image/*' onChange={(e)=>{previewFile(e); }} />
      </div>
      <div className='right'>
        {dataList?
        
        <Card datas={dataList} ></Card> :""}
      </div>
    </div>
     
   </>
   
  );
}

export default App;