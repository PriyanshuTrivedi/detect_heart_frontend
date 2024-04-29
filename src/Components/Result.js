import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataItem from './DataItem';
import DataContext from '../Context/Data/DataContext';

const Result = () => {

  console.log("yha ara");

  const navigate = useNavigate();

  const [result, setResult] = useState('')

  const { data,setData } = useContext(DataContext);

  console.log(data)

  useEffect(()=>{
    console.log('Hello');
    console.log(localStorage)
  },[]);

  useEffect(() => {
    if(localStorage.getItem('result') && data.length>0){
      if(localStorage.getItem('result')<50)
        data[data.length-1].col = '#008000ab'
      else
        data[data.length-1].col = '#ff0000ab'
      setResult(localStorage.getItem('result'));
    }
    else{
      navigate('/');
    }
  },[setData])

  return (
    <div className='form-cont'>
      <div className='form'>
        <form className='detail'>
          <div id="form-head">
            <h3>Medical Report</h3>
          </div>
          {result<50
          ?
          <div className='report-g' id='report'>
            Your medical report is clear. You are at no risk of having any kind of Heart Disease.
          </div>
          :
          <div className='report-r' id='report'>
            Your medical report indicates that you are at risk of having Heart Disease.
          </div>}

          <div style={{textAlign: 'center', padding: '1rem'}}>
            <h5>Given details</h5>
            <DataItem data={data[data.length-1]}/> 
          </div>
        </form>
      </div>
    </div>
    // <div className='form-cont'>
    //   <div className='detail'>
    //     <div id="form-head">
    //       <h3>Medical Report</h3>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Result