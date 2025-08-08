import React, { Component } from "react";
import Swal from "sweetalert2";

class R056_Sweetalert2Basic extends Component {
  componentDidMount() {
    // Swal.fire("1. Sweet Alert)");
    // alert("2. alert()");
    Swal.fire("1. Sweet Alert").then((result) => {
      alert("2. alert() result.value: " + result.value);
    });
  }
  render() {
    return <h1>SweetAlert</h1>;
  }
}

export default R056_Sweetalert2Basic;
