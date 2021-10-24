
import './App.css';
import Profile from './Components/Profile';
import PropTypes from 'prop-types';
import image from './Image/avatar.png'
const styleObject = {
  
  color: "violet",
  textAlign: "center",
  fontSize: "150%",

};

function App() {
  let name='nawres chaibi'
  let age =26
  let job='student'
  let  handleName=()=>{
    alert("newapp")
  };

  return (
    <div style={styleObject}>
      <Profile FullName= {name} bio={age} profession={job}  handleName={ handleName} />

    </div>
  );
}
Profile.defaultProps = {
  FullName: "unknown",
  image:
};



Profile.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.number,
  profession: PropTypes.string,
  image: PropTypes.string,
}

export default App;
