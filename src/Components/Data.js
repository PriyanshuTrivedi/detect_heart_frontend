import { React, useContext, useEffect } from 'react'
import DataContext from '../Context/Data/DataContext';
import DataItem from './DataItem';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/User/UserContext';

const Data = () => {

    const { data, getData } = useContext(DataContext);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(localStorage);
        if (localStorage.getItem('u-token')) {
            getData();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line 
    }, [])

    // console.log(user)

    return (
        <div className='data-cont'>
            <div className='user-data'>
                <h3>User Profile</h3>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{ fontWeight: 'bold' }} id="basic-addon3">Name</span>
                    </div>
                    <input type="text" className="form-control" value={user.name} id="basic-url" aria-describedby="basic-addon3" disabled />
                </div>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{ fontWeight: 'bold' }} id="basic-addon3">Email</span>
                    </div>
                    <input type="text" className="form-control" value={user.email} id="basic-url" aria-describedby="basic-addon3" disabled />
                </div>
            </div> 
            <br style={{border: '1px solid red'}}/>
            <div className='item-cont'>
                <h4>Your Past Reports</h4>
                <div>
                    {data.length === 0 && 'No Reports to display'}
                </div>
                <div className='items'>
                    {data.reverse().map((temp) => {
                        return <DataItem data={temp} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Data