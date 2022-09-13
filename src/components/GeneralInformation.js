import { useState } from "react";

const GeneralInformation = (props) => {
  const [data, setData] = useState(props.data);
  const [mode, setMode] = useState(props.mode);

  const sendData = (e) => {
    e.preventDefault();
    const { address, age, birthDate, fullName } = data;
    props.updateGeneralInformation({ address, age, birthDate, fullName });
    setMode('show');
  };

  const handleChange = (e) => {
    const { dataset: { property }, value } = e.currentTarget;
    setData({
      ...data,
      [property]: value
    });
  };

  const { address, age, birthDate, fullName } = data;
  if (mode === 'edit') {
    return(<div className="container">
      <h2>General Information</h2>
      <form onSubmit={sendData}>
        <div className="field">
          <label>Full Name: </label>
          <input type="text" data-property="fullName" value={fullName} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Age: </label>
          <input type="number" data-property="age" value={age} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Address: </label>
          <input type="text" data-property="address" value={address} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Birthdate: </label>
          <input type="date" data-property="birthDate" value={birthDate} onChange={handleChange} required/>
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setMode('show')}>Cancel</button>
        </div>
      </form>
    </div>);
  }
  if (mode ===  'show') {
    return (<div className="container">
      <div className="show field">
        <label>Full Name: </label>
        <span>{fullName}</span>
      </div>
      <div className="show field">
        <label>Age: </label>
        <span>{age}</span>
      </div>
      <div className="show field">
        <label>Address: </label>
        <span>{address}</span>
      </div>
      <div className="show field">
        <label>Birthdate: </label>
        <span>{birthDate}</span>
      </div>
      <div className="buttons">
          <button type="button" onClick={() => setMode('edit')}>Edit</button>
      </div>
    </div>);
  }
}

export default GeneralInformation;
