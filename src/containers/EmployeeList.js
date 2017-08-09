import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { employeesFetch } from '../actions';
import ListItem from '../components/ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        enableEmptySections
        data={this.props.data}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => (
          <ListItem
            employeeName={item.name}
            onPress={() => Actions.employeeEdit({ employee: item })} />
        )}
      />
    );
  }
}

const mapStateToProps = ({ employees }) => {
  const { data } = employees;

  return { data };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
