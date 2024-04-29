import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/Data/DataContext';

const Form = () => {

  const { addData } = useContext(DataContext);

  const navigate = useNavigate();

  const [newData, setNewData] = useState({ age: '', sex: '', cp: '', trestbps: '', fbs: '', restecg: '', thalach: '', exang: '', oldpeak: '', slope: '', ca: '', thal: '', chol: '' });

  const [click, setClick] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('result'))
      localStorage.removeItem('result');

    if (!localStorage.getItem('u-token')) {
      navigate('/login');
    }
  })

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
    // console.log(newData);
  }

  const handleSubmit = async (e) => {
    setClick(true);
    e.preventDefault();

    const response = await fetch('https://ml-backend-zn9i.onrender.com/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ age: newData.age, sex: newData.sex, cp: newData.cp, trestbps: newData.trestbps, fbs: newData.fbs, restecg: newData.restecg, thalach: newData.thalach, exang: newData.exang, oldpeak: newData.oldpeak, slope: newData.slope, ca: newData.ca, thal: newData.thal, chol: newData.chol })
    });

    const json = await response.json();
    // json = 1-json.prob
    // console.log(json);
    if (true) {
      // console.log('Hello');
      // console.log(click);
      // console.log(newData);
      const res = json.res * 100;
      if (res < 50) {
        addData({ age: newData.age, sex: newData.sex, cp: newData.cp, trestbps: newData.trestbps, fbs: newData.fbs, restecg: newData.restecg, thalach: newData.thalach, exang: newData.exang, oldpeak: newData.oldpeak, slope: newData.slope, ca: newData.ca, thal: newData.thal, chol: newData.chol, col: '#008000ab' });
      }
      else {
        addData({ age: newData.age, sex: newData.sex, cp: newData.cp, trestbps: newData.trestbps, fbs: newData.fbs, restecg: newData.restecg, thalach: newData.thalach, exang: newData.exang, oldpeak: newData.oldpeak, slope: newData.slope, ca: newData.ca, thal: newData.thal, chol: newData.chol, col: '#ff0000ab' });
      }

      console.log(res);
      localStorage.setItem('result', res);

      console.log(localStorage)

      // if(res<50)
      //   data[data.length-1].col = '#008000ab'
      // else
      //   data[data.length-1].col = '#ff0000ab'
      // console.log(data.age);
      navigate("/result");

    }
    else {
      alert('Give valid data');
    }

  }

  return (
    <div className='form-cont'>
      <div className='form'>
        <form className='detail' onSubmit={handleSubmit}>
          <div id="form-head">
            <h3>Fill in the details</h3>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="inp1">Age</label>
              <input type="number" className="form-control" id="age" name="age" value={newData.age} onChange={handleChange} placeholder="Enter your age" required />
            </div>
            <div className="form-group">
              <label htmlFor="inp2">Gender</label>
              <select className="dropdown" id="sex" name="sex" value={newData.sex} onChange={handleChange} required>
                <option value="" selected>-- Select gender --</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp3">Chestpain</label>
              <select className="dropdown" id="cp" name="cp" value={newData.cp} onChange={handleChange} required>
                <option value="" selected>-- Chestpain --</option>
                <option value="0">None</option>
                <option value="1">Typical Angina</option>
                <option value="2">Non-Angina</option>
                <option value="3">Asymptomatic</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp4">Resting Blood Pressure</label>
              <input type="number" className="form-control" id="trestbps" name="trestbps" value={newData.trestbps} onChange={handleChange} placeholder="Enter value in mg/dl" required />
            </div>
            <div className="form-group">
              <label htmlFor="inp5">Fasting Blood Sugar</label>
              <select className="dropdown" id="fbs" name="fbs" value={newData.fbs} onChange={handleChange} required>
                <option value="" selected>-- Fasting bp --</option>
                <option value="0">&lt; 120 mg/dl</option>
                <option value="1">&gt; 120 mg/dl</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp6">Resting Electrocardiographic Results</label>
              <select className="dropdown" id="restecg" name="restecg" value={newData.restecg} onChange={handleChange} required>
                <option value="" selected>-- Restecg --</option>
                <option value="0">Normal</option>
                <option value="1">Having ST-T wave abnormality</option>
                <option value="2">Hypertrophy</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp7">Maximum Heart Rate</label>
              <input type="number" className="form-control" id="thalach" name="thalach" value={newData.thalach} onChange={handleChange} placeholder="Enter the value" required />
            </div>
            <div className="form-group">
              <label htmlFor="inp8">Exercise Induced Angina</label>
              <select className="dropdown" id="exang" name="exang" value={newData.exang} onChange={handleChange} required>
                <option value="" selected>-- Exang --</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp9">ST Depression</label>
              <input type="number" className="form-control" id="oldpeak" name="oldpeak" value={newData.oldpeak} onChange={handleChange} placeholder="Enter the value" required />
            </div>
            <div className="form-group">
              <label htmlFor="inp10">Slope of The Peak Exercise ST Segment</label>
              <select className="dropdown" id="slope" name="slope" value={newData.slope} onChange={handleChange} required>
                <option value="" selected>-- Slope --</option>
                <option value="0">Unsloping</option>
                <option value="1">Flat</option>
                <option value="2">Down Sloping</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp11">Number of Major Vessels (0-3) Colored By Flourosopy</label>
              <select className="dropdown" id="ca" name="ca" value={newData.ca} onChange={handleChange} required>
                <option value="" selected>-- ca --</option>
                <option value="0">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp12">Thalium Scan Results</label>
              <select className="dropdown" id="thal" name="thal" value={newData.thal} onChange={handleChange} required>
                <option value="" selected>-- Thal --</option>
                <option value="0">Normal</option>
                <option value="1">Fixed Defect</option>
                <option value="2">Reversible Defect</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inp13">Cholestrol</label>
              <input type="number" className="form-control" id="chol" name="chol" value={newData.chol} onChange={handleChange} placeholder="Enter the value" required />
            </div>
          </div>
          <div id="form-btn">
            {click
              ?
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
              :
              <input className="btn btn-primary" type="submit" value="Submit" />}

          </div>
        </form>
      </div>
    </div>
  )
}

export default Form