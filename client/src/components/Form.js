import React, { Component } from "react";

const Form = React.createClass({
  getInitialState() {
    return {
      body: this.props.body || "",
      title: this.props.title || ""
    };
  }
});

export default Form;
