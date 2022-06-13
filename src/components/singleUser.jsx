import React from "react";
import { connect } from "react-redux";
import '../styles/style.css'

const SingleUser = (props) => {
  const showUserList = () => {
    if (!props.user.email) {
      return <div className="card">
         <h1>💥💥😎💥💥
            </h1>
     <h2 style={{color:"white"}}>Click Any button</h2>
    
      </div>;
    } else {
      return (
        <div className="card">
          <div className="img">
            <img src={props.user.avatar} />
          </div>
          <div className="infos">
            <div className="name">
              <h2>
                {props.user.first_name} {props.user.last_name}{" "}
              </h2>
              <h4>{props.user.email}</h4>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{showUserList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SingleUser);
