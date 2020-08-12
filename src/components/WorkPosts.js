import React, { Fragment } from "react";
import { Form } from "./Form";
import { connect } from "react-redux";
import { deleteWorkPost, redactWorkPost } from "../redux/actions";
import { Redacting } from "./Redacting";

function WorkPosts_({ workPosts, setDelete, setRedact /* , currPath */ }) {
  /* console.log(currPath); */
  return (
    <div className="conversations">
      <div className="dialog">
        {workPosts.map((post) => (
          <Fragment key={post[1]}>
            <div className="profile profile_ml">
              <img
                className="icon"
                src={require("../images/Bender.jpg")}
                alt="profile-icon"
              />
              <div className="title title_ml title_marlef">Ivan Petrovich</div>
            </div>
            <div className="dialog__post">{post[0]}</div>
            <div className="dialog__control-buttons">
              <button
                className="del"
                onClick={() => setDelete(post[0], post[1])}
              >
                Удалить
              </button>
              {/*  {currPath === "/work" && ( */}
              <Redacting post={post} setRedact={setRedact} />
              {/*   )} */}
            </div>
          </Fragment>
        ))}
      </div>
      <Form />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDelete: (...value) => {
      dispatch(deleteWorkPost(...value));
    },
    setRedact: (...value) => {
      dispatch(redactWorkPost(...value));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    workPosts: state.workPosts,
    /* currPath: state.currPath, */
  };
};

export const WorkPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPosts_);