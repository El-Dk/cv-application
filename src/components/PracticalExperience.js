import { useState } from "react";

const PracticalExperience = (props) => {
  const [data, setData] = useState(props.data);
  const [mode, setMode] = useState(props.mode);

  const sendData = (e) => {
    e.preventDefault();
    props.updatePracticalExperience(data, 'practicalExperience');
    setMode('show');
  };

  const handleChange = (e) => {
    const { dataset: { property }, value } = e.currentTarget;
    setData({
      ...data,
      [property]: value
    });
  };

  const { id, companyName, position, title, mainTasks, dateFrom, dateUntil } = data;
  if (mode === 'edit') {
    return (<div className="segment">
      <form onSubmit={sendData}>
      <div className="field">
          <label>Company name: </label>
          <input type="text" data-property="companyName" value={companyName} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Position: </label>
          <input type="text" data-property="position" value={position} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Title: </label>
          <input type="text" data-property="title" value={title} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Main tasks: </label>
          <textarea data-property="mainTasks" value={mainTasks} onChange={handleChange} cols="50" required>
          </textarea>
        </div>
        <div className="field">
          <label>From: </label>
          <input type="date" data-property="dateFrom" value={dateFrom} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Until: </label>
          <input type="date" data-property="dateUntil" value={dateUntil} onChange={handleChange}/>
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setMode('show')}>Cancel</button>
        </div>
      </form>
    </div>);
  }
  if (mode === 'show') {
    return (<div className="segment">
      <div className="show field">
        <label>Company Name: </label>
        <span>{companyName}</span>
      </div>
      <div className="show field">
        <label>Position: </label>
        <span>{position}</span>
      </div>
      <div className="show field">
        <label>Title: </label>
        <span>{title}</span>
      </div>
      <div className="show field">
        <label>Main tasks: </label>
        <span>{mainTasks}</span>
      </div>
      <div className="show field">
        <label>Date: </label>
        <span>{dateFrom} - {dateUntil ? dateUntil : 'current'}</span>
      </div>
      <div className="buttons">
          <button type="button" onClick={() => setMode('edit')}>Edit</button>
          <button type="button" onClick={() => props.removeExperience({ id, type: 'practicalExperience' })}>Remove</button>
      </div>
    </div>);
  }
}

export default PracticalExperience;
