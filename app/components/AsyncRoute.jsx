import React, { Component } from 'react';
// import Loading from './Loading';

class AsyncRoute extends Component {
  props: {
    props: Object,
    loadingPromise: Object,
  };
  component = null;
  state = { loaded: false };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <h1>Loading...</h1>;
  }
}

export default AsyncRoute;
