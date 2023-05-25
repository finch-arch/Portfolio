import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import cfico from "./Images/cf.png";

export default function Cf() {
  const [userData, setData] = useState([]);
  const [text, setText] = useState([]);
  const[alert , setAlert]= useState(null);
  let url = `https://codeforces.com/api/user.rating?handle=${text}`;
  // useEffect(() => {
   
  // }, []);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // console.log("clicked");
   await axios.get(url).then((response) => {
      const l = response.data.result.length;
      // console.log(response.data.result[l - 1]);
      setData(response.data.result[l - 1]);
   //   console.log(l);
    }).catch(err =>{
      console.log(err);
      setAlert("Invalid Details")
      setTimeout(()=>{
        setAlert(null);
      },3000)
    });
    
  }
  const handleOnchange= (event) =>{
    setText(event.target.value);
  }
  return (
    <>
    <div className="form">
    <Alert alert={alert}/>
      <div className="cfform">
       
        <img src={cfico} alt="" />
        <form onSubmit={handleSubmit}>
          <label>Enter your Codeforces handle</label>
          <br />
          <input type="text"  name="fname" value={text} onChange={handleOnchange} />
          <br />
          <input className="sbcf" type="submit" value="submit" />
        </form>
      </div>

      <div className="c">
       <h3>Handle-{userData.handle}</h3>
      <h3>Rating- {userData.newRating}</h3>
      </div>
    </div>
     
    </>
  );
}
