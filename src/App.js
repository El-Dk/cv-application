import { Component } from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import uniqid from 'uniqid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInformation: {
        address: '',
        age: 0,
        birthDate: '',
        fullName: ''
      },
      educationalExperience: [],
      practicalExperience: []
    };
  }

  updateGeneralInformation = (data) => {
    this.setState({
      generalInformation: data
    });
  };

  addEducationalExperience = () => {
    const experience = {
      id: uniqid(),
      schoolName: '',
      title: '',
      date: ''
    };
    this.setState({
      educationalExperience: this.state.educationalExperience.concat(experience)
    });
  };

  updateExperience = (data, type) => {
    const experiences = this.state[type];
    this.setState({
      [type]: experiences.map((experience) => {
        if (data.id === experience.id) {
          return data;
        }
        return experience;
      })
    });
  };

  addPracticalExperience = () => {
    const experience = {
      id: uniqid(),
      companyName: '',
      position: '',
      title: '',
      mainTasks: '',
      dateFrom: '',
      dateUntil: ''
    };
    this.setState({
      practicalExperience: this.state.practicalExperience.concat(experience)
    });
  };

  removeExperience = ({ id, type }) => {
    const experiences = this.state[type];
    this.setState({
      [type]: experiences.reduce((acc, experience) => {
        if (experience.id !== id) {
          acc.push(experience)
        }
        return acc;
      }, [])
    });
  };

  render() {
    const buttonStyle = {
      width: '5rem',
      marginLeft: '1.5rem',
      padding: '0.5rem',
      borderRadius: '0'
    };
    return (
      <div className="App">
        <header>
          CV Application
        </header>
        <GeneralInformation data={this.state.generalInformation} updateGeneralInformation={this.updateGeneralInformation} mode="edit"/>
        <div className="container">
          <h2>Educational Experience</h2>
          {this.state.educationalExperience.map(experience =>
            <EducationalExperience
              key={experience.id}
              data={experience}
              updateEducationalExperience={this.updateExperience}
              removeExperience={this.removeExperience}
              mode="edit"
            />
          )}
          <div style={{ margin: '0 auto 0 auto', width: 'fit-content' }}>
            <button type='button' onClick={this.addEducationalExperience} style={buttonStyle}>Add</button>
          </div>
        </div>
        <div className="container">
          <h2>Practical Experience</h2>
          {this.state.practicalExperience.map(experience =>
            <PracticalExperience
              key={experience.id}
              data={experience}
              updatePracticalExperience={this.updateExperience}
              removeExperience={this.removeExperience}
              mode="edit"
            />
          )}
          <div style={{ margin: '0 auto 0 auto', width: 'fit-content' }}>
            <button type='button' onClick={this.addPracticalExperience} style={buttonStyle}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
