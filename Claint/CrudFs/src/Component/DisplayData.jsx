import React, { useEffect, useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DisplayData() {
  let [Userdata, setuserdata] = useState([]);
  let [objectuser, setobjectuser] = useState({
    user: '',
    company_id: '',
    joingDate: '',
    DESIGNATION: '',
    image_url: '',
  });
  const [totalCount, setTotalCount] = useState(0);
  // modal
  let [Overlaymodal, setOverlaymodal] = useState(false);

  console.log(objectuser);

  function Getdata() {
    axios.get("http://localhost:8080/Userdata")
      .then((res) => {
        console.log(res.data);
        setuserdata(res.data.Userdata);
        setobjectuser(res.data.Userdata[0]);
        setTotalCount(res.data.Userdata.length);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:8080/Deleteuserdata/${id}`)
      .then(() => {
        alert("Data Delete");
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    Getdata();
  }, [Userdata])

  return (
    <div>
      <div className='Container'>
        <div className='AllUSerNuber'>
          <h5>All Users: <span>{totalCount}</span></h5>
          <h5>Projects: <span>884</span></h5>
          <i className="ri-information-2-fill"></i>
        </div>
        <Link to={"/AddData"}>
          <button className='Add'><i className="ri-add-line"></i>&nbsp;&nbsp;Add new user</button>
        </Link>
        <div className='UserDetails'>
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>USER ROLE</th>
                <th>SATUS</th>
                <th>DESIGNATION</th>
                <th>RATING</th>
                <th>JOING DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Userdata.map((Data, index) => {
                return (
                  <tr key={index}>
                    <td><img src={Data.image_url} alt="" srcSet="" /><span>{Data.user}</span></td>
                    <td><h5><i className="ri-draft-line"></i> {Data.userrole}</h5></td>
                    <td><i className="ri-circle-fill"></i>&nbsp;&nbsp;Active</td>
                    <td>{Data.DESIGNATION}</td>
                    <td> <i className={Data.rating > 4.5 ? "ri-arrow-up-line" : "ri-arrow-down-line"} style={{ color: Data.rating > 4.5 ? 'green' : 'red' }} ></i>{Data.rating}</td>
                    <td>{Data.joingDate}</td>
                    <td><Link to={'/Update'} state={{ id: Data.id, image_url: Data.image_url, userrole: Data.userrole, DESIGNATION: Data.DESIGNATION, rating: Data.rating, joinDate: Data.joinDate, user: Data.user, company_id: Data.company_id }}><i className="ri-pencil-line"></i></Link>
                      <i className="ri-delete-bin-6-line" onClick={() => { handleDelete(Data.id) }}></i> <i className="ri-eye-line" onClick={() => { setOverlaymodal(true); setobjectuser(Data); }}></i></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`Overlay ${Overlaymodal ? "showmodal" : ""}`}></div>
      <div className={`Modal ${Overlaymodal ? "showModal" : ""}`}>
        <h5 className='Cross' onClick={() => { setOverlaymodal(!Overlaymodal) }}>X</h5>
        <div className='Image-Section'>
          <img src={objectuser.image_url} alt="" />
        </div>
        <div className='userDetails'>
          <h5>User Details</h5>
          <h6>Name : {objectuser.user}</h6>
          <h6>Company Id: {objectuser.company_id}</h6>
          <h6>Joining Date : {objectuser.joingDate}</h6>
          <h6>Designation: {objectuser.DESIGNATION}</h6>
        </div>
      </div>
    </div>
  )
}

export default DisplayData;
