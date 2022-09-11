import { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      mode: this.props.mode
    };
  }

  sendData = (e) => {
    e.preventDefault();
    const { address, age, birthDate, fullName } = this.state.data;
    this.props.updateGeneralInformation({ address, age, birthDate, fullName });
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
    const { address, age, birthDate, fullName } = this.state.data;
    if (this.state.mode === 'edit') {
      return(<div className="container">
        <h2>General Information</h2>
        <form onSubmit={this.sendData}>
          <div className="field">
            <label>Full Name: </label>
            <input type="text" data-property="fullName" value={fullName} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Age: </label>
            <input type="number" data-property="age" value={age} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Address: </label>
            <input type="text" data-property="address" value={address} onChange={this.handleChange} required/>
          </div>
          <div className="field">
            <label>Birthdate: </label>
            <input type="date" data-property="birthDate" value={birthDate} onChange={this.handleChange} required/>
          </div>
          <div className="buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => this.setState({ mode: 'show' })}>Cancel</button>
          </div>
        </form>
      </div>);
    }
    if (this.state.mode ===  'show') {
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
            <button type="button" onClick={() => this.setState({ mode: 'edit' })}>Edit</button>
        </div>
      </div>);
    }
  }
}

export default GeneralInformation;
