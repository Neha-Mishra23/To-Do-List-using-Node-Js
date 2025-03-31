import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
  let Location = useLocation();
  let Navigate = useNavigate();

  let { user, id, userrole, rating, DESIGNATION, joingDate, company_id, image_url } = Location.state;
  console.log(id);

  let [Updateimage, setUpdateimage] = useState(image_url);
  let [Updateuser, setUpdateuser] = useState(user);
  let [Updateuserrole, setUpdateuserrole] = useState(userrole);
  let [Updaterating, setUpdaterating] = useState(rating);
  let [UpdateDESIGNATION, SetDESIGNATION] = useState(DESIGNATION);
  let [UpdatejoingDate, SetjoingDate] = useState(joingDate);
  let [Updatecompany_id, Setcompany_id] = useState(company_id);

  function handleUpdate(el) {
    el.preventDefault();
    axios.patch(`http://localhost:8080/Updateuser/${id}`, {
      user: Updateuser,
      userrole: Updateuserrole,
      rating: Updaterating,
      DESIGNATION: UpdateDESIGNATION,
      joingDate: UpdatejoingDate,
      company_id: Updatecompany_id,
      image_url: Updateimage
    })
    .then(() => {
      alert("Updated Successfully");
      Navigate('/'); // Navigate after update if needed
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <div className='Form-Container'>
        <form onSubmit={handleUpdate}>
          <label htmlFor="Username">User Name <span>*</span></label>
          <input type="text" placeholder='Username...' value={Updateuser} onChange={(e) => setUpdateuser(e.target.value)} />

          <label htmlFor="userrole">User Role <span>*</span></label>
          <select name='userrole' value={Updateuserrole} onChange={(e) => setUpdateuserrole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Administrator">Administrator</option>
            <option value="Viewer">Viewer</option>
            <option value="Moderator">Moderator</option>
          </select>

          <label htmlFor="Rating">Rating <span>*</span></label>
          <input type="text" placeholder='Rating...' value={Updaterating} onChange={(e) => setUpdaterating(e.target.value)} />

          <label htmlFor="DESIGNATION">Designation <span>*</span></label>
          <select name="DESIGNATION" value={UpdateDESIGNATION} onChange={(e) => SetDESIGNATION(e.target.value)}>
            <option value="">Select Designation</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </select>

          <label htmlFor="JoingDate">Joining Date <span>*</span></label>
          <input type="date" name='joingDate' value={UpdatejoingDate} onChange={(e) => SetjoingDate(e.target.value)} />

          <label htmlFor="Companyid">Company ID <span>*</span></label>
          <input type="number" placeholder='Company ID...' value={Updatecompany_id} onChange={(e) => Setcompany_id(e.target.value)} />

          <label htmlFor="UserImage">User Image <span>*</span></label>
          <input type="text" placeholder='User Image...' value={Updateimage} onChange={(e) => setUpdateimage(e.target.value)} />

          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;