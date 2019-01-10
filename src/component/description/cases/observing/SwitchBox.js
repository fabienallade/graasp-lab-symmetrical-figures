import React from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import { Col, Row } from 'reactstrap';

const SwitchBox = ({
  handleChangeComplete,
  t,
}) => (
  <div className="control-container">
    <Row>
      <Col xs="12">
        <h4 className="modal-color-title">{t('Choose your panel color')}</h4>
        <CirclePicker onChangeComplete={handleChangeComplete} />
      </Col>
    </Row>
  </div>
);

SwitchBox.propTypes = {
  handleChangeComplete: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default SwitchBox;
