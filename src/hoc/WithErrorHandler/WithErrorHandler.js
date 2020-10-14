import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxx from '../Auxx/Auxx';

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Auxx>
        <Modal show>
          show something
        </Modal>
        <WrappedComponent {...props}/>
      </Auxx>
    );
  }
}


export default withErrorHandler;
