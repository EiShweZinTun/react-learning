import React from 'react'

const User = (props) => {
  const { user } = props;

  return (
      <div className='container'>
            <img src={user.picture.thumbnail} alt={user.name.first} />
          <p>
            Name: {user.name.first} {user.name.last}
          </p>
          <p>Email: {user.email}</p>
    </div>
      
  );
};

export default User;