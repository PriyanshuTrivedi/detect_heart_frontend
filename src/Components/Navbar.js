import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    // const location = useLocation();
    const navigate = useNavigate();

    // console.log(localStorage.getItem('u-token'));
    const logout = () => {
        localStorage.removeItem('u-token');
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div>
                    <Link className="navbar-brand" to="/"><span className='head'>Heart</span> Disease Detection</Link>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <Link className="btn btn-dark nav-btn" to='/' role="button">Home</Link>

                        {!localStorage.getItem('u-token')
                            ?
                            <form className="d-flex">
                                <Link className="btn btn-dark nav-btn" to='/login' role="button">Login</Link>
                                <Link className="btn btn-dark nav-btn" to='/signup' role="button">Signup</Link>
                            </form>
                            :
                            <>
                                <div className="d-flex" style={{ alignItems: "center" }}>
                                    <Link className="btn btn-dark nav-btn" to='/form' role="button">Detect</Link>
                                    <Link className="far fa-user" to='/reports'></Link> 
                                    {/* <Link className="btn btn-dark nav-btn"  role="button">Past Reports</Link> */}
                                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            </div>
        </nav>
    )
}

export default Navbar