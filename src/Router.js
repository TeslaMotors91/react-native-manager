import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
import EmployeeList from './containers/EmployeeList';
import EmployeeCreate from './containers/EmployeeCreate';
import EmployeeEdit from './containers/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="root" >
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
