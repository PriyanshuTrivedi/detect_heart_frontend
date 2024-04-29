import { React, useState, useContext, useEffect } from 'react'
import UserContext from '../Context/User/UserContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const {setUser} = useContext(UserContext);
    
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });

    useEffect(() => {
        if(localStorage.getItem('result'))
          localStorage.removeItem('result');

          if(localStorage.getItem('u-token'))
            navigate('/');
      }, [])

    const handleSubmit = async (e) => { 
        e.preventDefault();
        
        const response = await fetch( `https://heartdisease-backend.glitch.me/api/users/createuser` , {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
          }); 
        const json = await response.json();

        // console.log(json);
        if(json.success){
            // Save the auth token and redirect
            setUser({name:credentials.name, email:credentials.email});
            localStorage.setItem('u-token', json.authtoken);
            localStorage.removeItem('result');
            navigate("/");
        }
        else{
            alert("User already Exist")
        }
    };


    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='signup'>
            <div className='signup-form'>
                <h2 className="mb-4">SIGN UP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={handleChange} aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={handleChange} minLength={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup