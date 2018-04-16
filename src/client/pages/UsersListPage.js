import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers} from '../actions/index';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users App</title>
          <meta property="og:title" content="Users App" />
        </Helmet>
        Here's a list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};


export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};
