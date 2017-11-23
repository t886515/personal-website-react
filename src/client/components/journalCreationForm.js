import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { updateUser } from '../model/user';

class JournalCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imagelink: this.props.userInfo.profilePicture
    }
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  async onSubmitForm(e) {
    e.preventDefault();
    await updateUser(this.props.userInfo.username, this.state.name, this.state.description, this.state.imagelink, (err, user)=>{
      if(!err) {
        this.props.updateUserInfo(user);
        this.props.updateAllUsers();
      }
    })
  
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="changeProfile">
       <h4>Change your profile</h4>
        <form>
          <TextField name="name" placeholder="Enter Profile Name" value={this.state.name} onChange={this.handleOnChange}/>
          <br />
          <TextField
            name="body"
            placeholder="Enter journal content here"
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
          <TextField name="description" placeholder="Enter Profile Description" value={this.state.description} onChange={this.handleOnChange}/>
          <br />
          <TextField name="imagelink" placeholder="Enter Image Link" value={this.state.imagelink} onChange={this.handleOnChange}/>
          <br />
          <RaisedButton
            className='submitButton'
            label="Submit"
            onClick={this.onSubmitForm} />
        </form>
        
      </div>
    );
  }
}

export default JournalCreationForm;


