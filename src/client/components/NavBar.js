import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, NavBarDiv } from '../styledComponents';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ListIcon from 'material-ui/svg-icons/action/list';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  small: {
    width: 30,
    height: 30,
    padding: 10,
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);

  }

  handleToggleDrawer() {
    this.setState({open: !this.state.open});
  }

  handleCloseDrawer() {
    this.setState({open: false});
  }

  handleMenu(e) {
    e.target.innerText==="Home"? this.props.history.push("/") : this.props.history.push(`/${e.target.innerText}`);
    this.handleCloseDrawer();
  }

  render() {
    return (
      <NavBarDiv>
        <ListIcon
          label="Toggle Drawer"
          onClick={this.handleToggleDrawer}
          color="white"
          style={styles.small}
        />
        <Button className="languageButton">Chinese</Button>
        <Button className="languageButton">English</Button>
        <Drawer 
          open={this.state.open}
          docked={false}
          width={200}
          onRequestChange={this.handleCloseDrawer}
        >
          <MenuItem onClick={this.handleMenu} primaryText="Home" />
          <MenuItem onClick={this.handleMenu} primaryText="About" />
          <MenuItem onClick={this.handleMenu} primaryText="Resume" />
          <MenuItem onClick={this.handleMenu} primaryText="Journal" />
          <MenuItem onClick={this.handleMenu} primaryText="Contact" />
          
        </Drawer>
      </NavBarDiv>
    );
  }
}

export default withRouter(NavBar);