import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Comments = ({ comments }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">نظرات</CardTitle>
        {(comments || [])?.map((comment, index) => (
          <div className="d-flex mb-4" key={index}>
            <div className="me-3">
              {comment.userImg ? (
                <img
                  className="media-object rounded-circle avatar-xs"
                  alt=""
                  src={comment.userImg}
                />
              ) : (
                <div className="avatar-xs">
                  <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">
                    {comment.username.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-grow-1">
              <h5 className="font-size-13 mb-1"> {comment.username}</h5>
              <p className="text-muted mb-1">{comment.comment}</p>
              {comment.reply && (
                <div className="d-flex mt-3">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar-xs">
                      {comment.reply.userImg ? (
                        <img
                          className="media-object rounded-circle avatar-xs"
                          alt=""
                          src={comment.userImg}
                        />
                      ) : (
                        <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">
                          {comment.reply.username.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="font-size-13 mb-1">زهرا نورایی</h5>
                    <p className="text-muted mb-1">به عنوان یک دوست</p>
                  </div>
                  <div className="ms-3">
                    <Link to="#" className="text-primary">
                      پاسخ
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="ml-3">
              <Link to="#" className="text-primary">
                پاسخ
              </Link>
            </div>
          </div>
        ))}
        <div className="text-center mt-4 pt-2">
          <Link to="#" className="btn btn-primary btn-sm">
            مشاهده بیشتر
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
