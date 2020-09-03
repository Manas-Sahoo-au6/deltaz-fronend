import React from "react";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const Api = `https://deltaz-backend.herokuapp.com/post`;

function TableData() {
  let [data, setData] = useState(null);
  console.log(data);
  useEffect(async () => {
    try {
      let Alldata = await Axios({
        url: `${Api}`,
        method: "GET",
      });

      if (Alldata) {
        setData(Alldata.data.data);
        
      }
    } catch (err) {}
  }, []);
  const handleDelete = async(e)=>{
    
      try{
        console.log(`${Api}/${e.target.id}`)
       
       let data = await Axios({
         url:`${Api}/${e.target.id}`,
         method:"DELETE",

       })
       if(data){
         alert('Post deleted sucessfully')
         window.location.replace('/')
       }



      }
      catch(err){
        console.log(err)
      }

    
    
  }
 
  return (
    

    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Value</th>
            <th scope="col">Criteria</th>
            <th scope="col">EveryDay</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
            {
              data === null ?null : data.map((item) => (
                <>
                <tr key={item._id}>
                  <th scope="row">{Math.floor(Math.random() * (100 - 1) + 1)}</th>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Value}</td>
                  <td>{item.Criteria}</td>
                  <td>{item.Everyday ?"yes":"No"}</td>
                  <td><DeleteIcon id={item._id} onClick={handleDelete} /></td>
                  </tr>
                </>
              ))
            }
        
        </tbody>
      </table>
    </>
  );
}

export default TableData;
