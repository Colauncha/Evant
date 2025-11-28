import React from 'react'
import { useNavigate } from 'react-router-dom';

const Notfound = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>404 | Page Not found</h1>
        <br />
        {/* <button onClick={() => window.history.back()}>Go Back</button> */}
        <button onClick={() => navigate('/')}>Go Back To Homepage</button>
    </div>
  )
}

export default Notfound