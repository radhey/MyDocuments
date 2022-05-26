//HOC -> A component (HOC) that render another component
//Reuse the code
//Render hijacking
//Props manipulation
//Abstract state
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <p>This info is {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private message dont show</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(
  <AdminInfo isAdmin={true} info={"There are the details"} />,
  document.getElementById("root")
);
