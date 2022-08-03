import { BoundingBox } from "@aws-sdk/client-rekognition";

const frame = (e: any, dataList: any[])=>{
    
    const Top = ((e.currentTarget.clientHeight * dataList[0].BoundingBox.Top))
    const Left = ((e.currentTarget.clientWidth * dataList[0].BoundingBox.Left)-4)
    const Width = (e.currentTarget.clientWidth * dataList[0].BoundingBox.Width)
    const Height = (e.currentTarget.clientHeight * dataList[0].BoundingBox.Height)
    
    
    document.documentElement.style.setProperty('--width', Width+ "px");
    document.documentElement.style.setProperty('--height', Height+ "px");
    document.documentElement.style.setProperty('--left', Left+ "px");
    document.documentElement.style.setProperty('--top', Top+ "px");
  }
    
    export default frame;