import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperation } from "../redux/auth";
import Pages from "../Routers/Routers";
import Container from "./Container";

import Header from "./Header";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Pages />
        </Container>
      </>
    )

  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
