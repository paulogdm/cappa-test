import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';

import Loading from '../components/Loading';

import '../styles/main.scss';

class Edit extends Component {

  render() {
    const { router } = this.props;
    return (
      <div>
        <h3>{router.query.id}</h3>
        <Loading />
      </div>
    );
  }
}

export default withRouter(Edit);
