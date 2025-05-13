import PropTypes from 'prop-types'
import React from "react"
import { Col, Modal, ModalBody, Row } from "reactstrap"

const DeleteModal = ({ show, onDeleteClick, onCloseClick }) => {
  return (
    <Modal isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <i
                className="mdi mdi-alert-circle-outline"
                style={{ fontSize: "9em", color: "orange" }}
              />
              <h2>شما مطمعنید؟</h2>
              <h4>{"شما نمی توانید این را برگردانید!"}</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-success btn-lg ms-2"
                onClick={onDeleteClick}
              >
                بله حذفش کن!
              </button>
              <button
                type="button"
                className="btn btn-danger btn-lg ms-2"
                onClick={onCloseClick}
              >
                لغو
              </button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

DeleteModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any
}

export default DeleteModal
