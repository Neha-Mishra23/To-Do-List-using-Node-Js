import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddData() {
  const Navigate = useNavigate();
  const [userDataAdd, setUserDataAdd] = useState({
    user: "",
    userrole: "",
    rating: "",
    DESIGNATION: "",
    joingDate: "",
    company_id: "",
    image_url: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/AddUserdata", userDataAdd)
      .then((res) => {
        setUserDataAdd(res.data);
        Navigate('/');
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setUserDataAdd({ ...userDataAdd, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div>
      <div className='Form-Container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Username">User Name <span>*</span></label>
          <input type="text" placeholder='Username...' name='user' value={userDataAdd.user} onChange={handleChange} />

          <label htmlFor="userrole">User Role <span>*</span></label>
          <select name='userrole' value={userDataAdd.userrole} onChange={handleChange} id="">
            <option value="">Select Role</option>
            <option value="Administator">Administator</option>
            <option value="Viewer">Viewer</option>
            <option value="Moderator">Moderator</option>
          </select>

          <label htmlFor="Rating">Rating <span>*</span></label>
          <input type="text" placeholder='Rating...' name='rating' value={userDataAdd.rating} onChange={handleChange} />

          <label htmlFor="DESIGNATION">Designation <span>*</span></label>
          <select name="DESIGNATION" value={userDataAdd.DESIGNATION} onChange={handleChange} id="">
            <option value="">Select Designation</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </select>

          <label htmlFor="JoingDate">Joing Date <span>*</span></label>
          <input type="date" name='joingDate' value={userDataAdd.joingDate} onChange={handleChange} />

          <label htmlFor="Companyid">Company id <span>*</span></label>
          <input type="number" placeholder='Companyid...' name='company_id' value={userDataAdd.company_id} onChange={handleChange} />

          <label htmlFor="UserImage">User Image <span>*</span></label>
          <input type="text" placeholder='UserImage...' name='image_url' value={userDataAdd.image_url} onChange={handleChange} />

          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddData;
