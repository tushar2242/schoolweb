import React from "react";

export default class LoadingPage extends React.Component {
  render() {
    const { msg } = this.props;
    return (
      <>
        <div className="loader-background">
          <div className="loader">{msg}...</div>
        </div>
      </>
    );
  }
}
