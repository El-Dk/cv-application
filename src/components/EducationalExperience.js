import { useState } from "react";

const EducationalExperience = (props) => {
  const [data, setData] = useState(props.data);
  const [mode, setMode] = useState(props.mode);

  const sendData = (e) => {
    e.preventDefault();
    props.updateEducationalExperience(data, 'educationalExperience');
    setMode('show');
  };

  const handleChange = (e) => {
    const { dataset: { property }, value } = e.currentTarget;
    setData({
      ...this.state.data,
      [property]: value
    });
  };

  const { schoolName, title, date, id } = data;
  if (mode === 'edit') {
    return (<div className="segment">
      <form onSubmit={sendData}>
        <div className="field">
          <label>Title: </label>
          <input type="text" data-property="title" value={title} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>School name: </label>
          <input type="text" data-property="schoolName" value={schoolName} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Date: </label>
          <input type="date" data-property="date" value={date} onChange={handleChange} required/>
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setMode('show')}>Cancel</button>
        </div>
      </form>
    </div>);
  }
  if (mode === 'show'){
    return (<div className="segment">
      <div className="show field">
        <label>Title: </label>
        <span>{title}</span>
      </div>
      <div className="show field">
        <label>School name: </label>
        <span>{schoolName}</span>
      </div>
      <div className="show field">
        <label>date: </label>
        <span>{date}</span>
      </div>
      <div className="buttons">
          <button type="button" onClick={() => setMode('edit')}>Edit</button>
          <button type="button" onClick={() => props.removeExperience({ id, type: 'educationalExperience' })}>Remove</button>
      </div>
    </div>);
  }
};

export default EducationalExperience;
