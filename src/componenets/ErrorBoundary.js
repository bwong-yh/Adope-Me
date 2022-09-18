// error boundaries catches errors with apis with malformatted or weird; cannot use with hooks
import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  // specific method from react to return new state when there's an error
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.state({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error. <br />
          <Link to="/">Click here</Link> to go back to homepage. Or wait 5
          seconds to be redirected back to home.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
