import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import { createStore } from "redux";
import { Provider } from "react-redux";
import addCategoryReducer from "../reducers/category/category";
import Tabs from "./Tabs";
import Layout from "./Layout/layout";
const store = createStore(addCategoryReducer);

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
const Dashboard = ({ logout, session }) => (
  <>
    <Layout username={session.username} logout={logout}>
      {/* <h6>Hi {session.username}</h6>
      <h6>You are now logged in!</h6> */}
      <Provider store={store}>
        <Tabs />
      </Provider>
      {/* <button onClick={logout}>Logout</button> */}
    </Layout>
  </>
);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
