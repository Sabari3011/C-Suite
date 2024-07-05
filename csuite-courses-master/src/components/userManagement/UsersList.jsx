import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../Assets/Images/potrate-1.jpg";
import moreIcon from "../Assets/Images/more.png";
import EditUser from "./EditUser";
import axios from "axios"; 

const UsersList = ({ editAction }) => {
  const [editUser, setEditUser] = useState(false);
  const [users, setUsers] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setEditUser(false);
      }
    }

    if (editUser) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editUser]);


// get all user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUsers(response.data.user);
        // console.log(response.data.user)
      } catch (err) {
        console.log(err);
      } 
    
    };

    fetchData();
  }, []);
  
// console.log(user)
  return (
    <div className="users-list-cnt">
      <div className="users-details-header">
        <p className="user-name-cnt ">username</p>
        <p className="user-name-cnt">position</p>
        <p className="user-name-cnt">compnay</p>
        <p className="user-date-cnt">Joined date</p>
        <p style={{ width: ".5rem" }}></p>
      </div>

{users.map((user)=>(
  


      <div className="user-details-cnt" key={user._id}>
        <div className="user-name-cnt">
          <img src={searchIcon} alt="profile-icon" className="profile-img" />
          <div className="name-cnt">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <p className="user-name-cnt details-text">{user.position}</p>
        <p className="details-text user-name-cnt">{user.companyname}</p>
        <p className="details-text user-date-cnt">{user.createdAt || "july 4, 2023"}</p>
        <img
          src={moreIcon}
          alt="more"
          className="more-icon"
          onClick={() => setEditUser(true)}
        />
      </div>


))}

      {/* <div className="user-details-cnt">
        <div className="user-name-cnt">
          <img src={searchIcon} alt="profile-icon" className="profile-img" />
          <div className="name-cnt">
            <h3>Test user</h3>
            <p>testuser123@gmail.com</p>
          </div>
        </div>
        <p className="user-name-cnt details-text">Hr-manager</p>
        <p className="details-text user-name-cnt">One-yes Infotech solutions</p>
        <p className="details-text user-date-cnt">july 4, 2023</p>
        <img
          src={moreIcon}
          alt="more"
          className="more-icon"
          onClick={() => setEditUser(true)}
        />
      </div> */}
      <div ref={wrapperRef}>
        <EditUser open={editUser} openEdit={editAction} />
      </div>
    </div>
  );
};

export default UsersList;
