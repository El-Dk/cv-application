import { useState } from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import uniqid from 'uniqid';
import './App.css';

const App = () => {
  const [generalInformation, setGeneralInformation] = useState({
    address: '',
    age: 0,
    birthDate: '',
    fullName: ''
  });
  const [educationalExperience, setEducationalExperience] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState([]);
  const experienceTypes = {
    educationalExperience: {
      value: educationalExperience,
      set: setEducationalExperience
    },
    practicalExperience: {
      value: practicalExperience,
      set: setPracticalExperience
    }
  };

  const updateGeneralInformation = (data) => {
    setGeneralInformation(data);
  };

  const addEducationalExperience = () => {
    const experience = {
      id: uniqid(),
      schoolName: '',
      title: '',
      date: ''
    };
    setEducationalExperience(educationalExperience.concat(experience));
  };

  const updateExperience = (data, type) => {
    const experiences = experienceTypes[type].value;
    experienceTypes[type].set(experiences.map(
      (experience) => {
        if (data.id === experience.id) {
          return data;
        }
        return experience;
      }
    ));
  }

  const addPracticalExperience = () => {
    const experience = {
      id: uniqid(),
      companyName: '',
      position: '',
      title: '',
      mainTasks: '',
      dateFrom: '',
      dateUntil: ''
    };
    setPracticalExperience(practicalExperience.concat(experience));
  };

  const removeExperience = ({ id, type }) => {
    const experiences = experienceTypes[type].value;
    experienceTypes[type].set(experiences.reduce((acc, experience) => {
      if (experience.id !== id) {
        acc.push(experience)
      }
      return acc;
    }, []));
  };

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
      <GeneralInformation data={generalInformation} updateGeneralInformation={updateGeneralInformation} mode="edit"/>
      <div className="container">
        <h2>Educational Experience</h2>
        {educationalExperience.map(experience =>
          <EducationalExperience
            key={experience.id}
            data={experience}
            updateEducationalExperience={updateExperience}
            removeExperience={removeExperience}
            mode="edit"
          />
        )}
        <div style={{ margin: '0 auto 0 auto', width: 'fit-content' }}>
          <button type='button' onClick={addEducationalExperience} style={buttonStyle}>Add</button>
        </div>
      </div>
      <div className="container">
        <h2>Practical Experience</h2>
        {practicalExperience.map(experience =>
          <PracticalExperience
            key={experience.id}
            data={experience}
            updatePracticalExperience={updateExperience}
            removeExperience={removeExperience}
            mode="edit"
          />
        )}
        <div style={{ margin: '0 auto 0 auto', width: 'fit-content' }}>
          <button type='button' onClick={addPracticalExperience} style={buttonStyle}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default App;
