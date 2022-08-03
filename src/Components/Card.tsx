import React, {useState, useEffect} from 'react';
import {Markup} from 'interweave';


function Card(props: any) {
  const [key, setKey] = useState<any>()
  const [value, setValue] = useState<any[]>([])
  let info = props
  
  const check = (table: any) => {

    let cle = Object.keys(table);
    let out = "<ul>"
    for(let one of cle){
      out+=`\n<li>${one} : ${table[one]}</li>\n`
    }
  return out+="</ul>"
  }
  
  const table = (data: any)=>{
  let tableKey = []
  let tableValue = []
  let index = Object.keys(data[0])
  for(let item of index){
      if(typeof(data[0][item]) == 'number'){
        tableKey.push(item)
        tableValue.push((data[0][item]));
     }else if(data[0][item].length){
      tableKey.push(item)
      let ok = ""
          for(let i=0; i<data[0][item].length; i++){
              ok += (check(data[0][item][i]))
          } 
       tableValue.push(ok)
      }else{
        tableKey.push(item)
          tableValue.push(check((data[0][item])));
      }
  }
    setKey(tableKey);
    setValue(tableValue)
  }


useEffect(()=>{
  if(info){
    table(info.datas);
  }
}, [info])


  return (
    <>
      <div className="title" onClick={()=>{ }}>Face Details</div>
      <table>
        <tbody>
      {value.map((elt: any, idx:number)=>(
         <tr key={idx}>
            <td className='attribut'><Markup content={key[idx]} /> :</td>
            <td className='value'><Markup content={(elt).toString()}/></td>
          </tr>
      ))}
      </tbody>
        </table>        
    </>
  )
}

export default Card;
