import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const OptionalSizes = ({ size, isOpen, toggle, title, center, children }) => {
 return (
  <React.Fragment>
   <Modal
    size={size}
    isOpen={isOpen}
    toggle={toggle}
    centered={center}
    backdrop={true}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>{children}</ModalBody>
   </Modal>
  </React.Fragment>
 );
};

export default OptionalSizes;
