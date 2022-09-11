import { Component } from "react";

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      mode: this.props.mode
    };
  }

  sendData = (e) => {
    e.preventDefault();
    this.props.updatePracticalExperience(this.state.data, 'practicalExperience');
    this.setState({
      mode: 'show'
    });
  };

  handleChange = (e) => {
    const { dataset: { property }, value } = e.currentTarget;
    this.setState({
      data: {
        ...this.state.data,
        [property]: value
      }
    });
  };

  render() {
    const { data: { id, companyName, position, title, mainTasks, dateFrom, dateUntil }, mode } = this.state;
    if (mode === 'edit') {
      return (<div className="segment">
        <form onSubmit={this.sendData}>
        <div className="field">
            <label>Company name: </label>
            <input type="text" data-property="companyName" value={companyName} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Position: </label>
            <input type="text" data-property="position" value={position} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Title: </label>
            <input type="text" data-property="title" value={title} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Main tasks: </label>
            <textarea data-property="mainTasks" value={mainTasks} onChange={this.handleChange} cols="50" required>
            </textarea>
          </div>
          <div className="field">
            <label>From: </label>
            <input type="date" data-property="dateFrom" value={dateFrom} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Until: </label>
            <input type="date" data-property="dateUntil" value={dateUntil} onChange={this.handleChange}/>
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => this.setState({ mode: 'show' })}>Cancel</button>
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
            <button type="button" onClick={() => this.setState({ mode: 'edit' })}>Edit</button>
            <button type="button" onClick={() => this.props.removeExperience({ id, type: 'practicalExperience' })}>Remove</button>
        </div>
      </div>);
    }
  }
}

export default PracticalExperience;
