import React,{ useState, useEffect} from 'react';
import * as AWS from 'aws-sdk';

function aws() {
    const [dataList, setDataList] = useState<any>()
    const [fichier, setFichier] = useState<any>("");

    
const DetectFaces = (imageData: ArrayBuffer) => {
    AWS.config.region = 'eu-west-2'; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId:  "eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc",
    });
    var rekognition = new AWS.Rekognition({region: "eu-west-2"});
    var params = {
      Image: {
        Bytes: imageData
      },
      Attributes: [
        'ALL',
      ]
    };
    rekognition.detectFaces(params, function (err, data) {
      if (err) {
      }
      else {
        setDataList(data.FaceDetails)
      }
  });

  
};

useEffect(() => {
   DetectFaces(fichier)
}, [fichier]);
}

export default aws;