import { Component } from "react";

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      mode: this.props.mode
    };
  }

  sendData = (e) => {
    e.preventDefault();
    this.props.updateEducationalExperience(this.state.data, 'educationalExperience');
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
    const { schoolName, title, date, id } = this.state.data;
    if (this.state.mode === 'edit') {
      return (<div className="segment">
        <form onSubmit={this.sendData}>
          <div className="field">
            <label>Title: </label>
            <input type="text" data-property="title" value={title} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>School name: </label>
            <input type="text" data-property="schoolName" value={schoolName} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Date: </label>
            <input type="date" data-property="date" value={date} onChange={this.handleChange} required/>
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => this.setState({ mode: 'show' })}>Cancel</button>
          </div>
        </form>
      </div>);
    }
    if (this.state.mode === 'show'){
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
            <button type="button" onClick={() => this.setState({ mode: 'edit' })}>Edit</button>
            <button type="button" onClick={() => this.props.removeExperience({ id, type: 'educationalExperience' })}>Remove</button>
        </div>
      </div>);
    }
  }
}

export default EducationalExperience;
