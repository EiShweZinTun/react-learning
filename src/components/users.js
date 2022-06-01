import React ,{ useEffect, useState}from 'react'
import User from '../components/user';

const Users = () => {
  
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    getUsers();
  }, []);

  console.log(userData);
  const getUsers = async () => {
     setLoading(true);
     await fetch('https://randomuser.me/api/?results=100&nat=us')
      .then((response) => response.json())
      .then ((data) => setUserData(data.results));
    setLoading(false);       
  };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData.map((data, dataIndex) => (
        <User key={dataIndex} user={data}/>
        ))
       )}
      </div>
  );
};

export default Users;