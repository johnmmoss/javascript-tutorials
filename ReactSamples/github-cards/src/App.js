import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const data = [
  {
    login: "johnmmoss",
    avatar_url: "https://avatars3.githubusercontent.com/u/1917380?v=4",
    url: "https://api.github.com/users/johnmmoss",
    blog: "http://mossup.blogspot.com",
    location: "Leeds, UK",
    repos_url: "https://api.github.com/users/johnmmoss/repos",
    public_repos: 33,
    public_gists: 99,
    created_at: "2012-07-03T08:46:40Z",
    updated_at: "2019-12-17T14:55:14Z"
  },
  {
    login: "rmerry",
    avatar_url: "https://avatars3.githubusercontent.com/u/3913406?v=4",
    url: "https://api.github.com/users/rmerry",
    blog: "http://bitsociety.co.uk",
    location: "York",
    repos_url: "https://api.github.com/users/rmerry/repos",
    public_repos: 101,
    public_gists: 20,
    created_at: "2012-07-03T08:46:40Z",
    updated_at: "2019-12-17T14:55:14Z"
  }
];


class App extends React.Component {

  /* To initialise the class...
   constructor(props) {
     super(props);
     this.state = {
       profiles:data;
     }
   }
   Instead we can use the class field as a short cut...
   */
  state = {
    profiles:[] 
  }

  addNewProfile = (profile) => {
    console.log(profile);
    this.setState(previousState => ({ profiles: [...previousState.profiles, profile] }));
  }

  clearProfiles = () => {
    console.log("Resetting Form");
    this.setState({ profiles: []})
  }

  render() {
    return (
      <div className="App" >
        <h1>Github Profiles</h1>
        <Form onSubmitHandler={this.addNewProfile} onResetHandler={this.clearProfiles}/>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile} />)}
  </div>
)

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="card">
        <img src={profile.avatar_url} />
        <div className="card-content" >
          <h3>{profile.login}</h3>
          <p>{profile.location}, {profile.email}</p>
          <a href={profile.blog}>{profile.blog}</a>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {

  state = { userName: '' }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    console.log(response.data);
    this.props.onSubmitHandler(response.data);
    this.setState({ userName : ''});
  }

  resetHandler = (event) => {
    console.log("Resetting...");
    //this.state.userName = 'test';
    this.setState({ userName: "" });
    this.props.onResetHandler();
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          Username: &nbsp;
        <input
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="username"
            required
          />
          <input type="submit" value="Add"></input>
          <input type="button" value="Reset" onClick={this.resetHandler}></input>
        </form>
      </div>
    );
  }
}

export default App;
