import React from 'react'

const Field = ({ name, val }) => {
  return (
    <div className="input-group mb-1">
      <div className="input-group-prepend">
        <span className="input-group-text" style={{fontWeight: 'bold'}} id="basic-addon3">{name}</span>
      </div>
      <input type="text" className="form-control" value={val} id="basic-url" aria-describedby="basic-addon3" disabled />
    </div>
  )
}

const DataItem = (props) => {

  const { data } = props;
  // console.log(data);

  return (
    <>
    {
      data?
    <div className='data-items' style={{backgroundColor: `${data.col}`}}>
        <label htmlFor="basic-url">Report on {data.date}</label>
        <Field name="Age" val={data.age}/>
        <Field name="Gender" val={data.sex==='0' ? 'Male' : 'Female'}/>
        <Field name="Chestpain" val={data.cp==='0' ? 'None' : data.cp==='1' ? 'Typical Angina' : data.cp==='2' ? 'Non-Angina' : 'Asymptomatic'}/>
        <Field name="Resting BP" val={data.trestbps}/>
        <Field name="Fasting BS" val={data.fbs==='0' ? '< 120 mg/dl' : '> 120 mg/dl'}/>
        <Field name="Resting ECG" val={data.restecg==='0' ? 'Normal' : data.restecg==='1' ? 'Having ST-T wave abnormality' : 'Hypertrophy'}/>
        <Field name="Maximum Rate" val={data.thalach}/>
        <Field name="Exercise Angina" val={data.exang==='0' ? 'Yes' : 'No'}/>
        <Field name="ST Depression" val={data.oldpeak}/>
        <Field name="Slope" val={data.slope==='0' ? 'Unsloping' : data.slope==='1' ? 'Flat' : 'Down Sloping'}/>
        <Field name="Major Vessels" val={data.ca==='0' ? 'None' : data.ca==='1' ? 'One' : data.ca==='2' ? 'Two' : 'Three'}/>
        <Field name="Thalium Scan" val={data.thal==='0' ? 'Normal' : data.thal==='1' ? 'Fixed Defect' : 'Reversible Defect'}/>
        <Field name="Cholestrol" val={data.chol}/>
    </div>
    :<></>
    }
    </>

  )
}

export default DataItem