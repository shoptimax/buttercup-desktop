import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const wrapper = styled.div`
  .wrapper {
    flex: 1;
    min-height: 35px;
    line-height: 35px;
    margin-right: 6px;
    position: relative;
    white-space: pre-line;
  }
`;

const styles = styled.div`
  $spacing-one: 12px;
  $spacing-two: 20px;
  $spacing-half: $spacing-one / 2;

  $form-input-height: 35px;
  $form-textarea-height: 300px;

  $dark-primary: #292c33;
  $dark-secondary: #31353d;
  $brand-primary: #00b7ac;
  $gray-light: #f5f7fa;
  $gray: #e4e9f2;
  $gray-dark: #777;
  $red: #eb5767;
  $white-10: rgba(255, 255, 255, 0.1);
  $white-20: rgba(255, 255, 255, 0.2);
  $white-50: rgba(255, 255, 255, 0.5);
  $white-60: rgba(255, 255, 255, 0.6);
  $black-5: rgba(0, 0, 0, 0.05);
  $black-10: rgba(0, 0, 0, 0.1);
  $black-20: rgba(0, 0, 0, 0.2);
  $black-25: rgba(0, 0, 0, 0.25);
  $black-35: rgba(0, 0, 0, 0.35);
  $LEVEL_4: #5cab7d;
  $LEVEL_3: #8fbc94;
  $LEVEL_2: #ffbc42;
  $LEVEL_1: #e71d36;
  $LEVEL_0: #e71d36;

  .input {
    width: 100%;
    height: $form-input-height;
    padding-left: $spacing-half;
    border: 2px solid transparent;
    border-radius: 4px;

    &:focus {
      border-color: $brand-primary;
    }
  }

  .textarea {
    width: 100%;
    height: $form-textarea-height;
    padding-left: $spacing-half;
    border: 2px solid transparent;
    border-radius: 4px;

    &:focus {
      border-color: $brand-primary;
    }
  }

  .password {
    padding-right: 2.2rem;
  }

  .wrapper {
    flex: 1;
    min-height: $form-input-height;
    line-height: $form-input-height;
    margin-right: $spacing-half;
    position: relative;
    white-space: pre-line;
  }

  .generator {
    position: absolute;
    right: 6px;
    top: 4px;
    cursor: pointer;
    padding: 5px;
    border-radius: 2px;

    svg {
      display: block;
    }

    &:hover {
      background-color: $gray-light;
    }
  }

  .generatorActive {
    background-color: $gray !important;
  }
`;

const BareTextarea = ({ input, name, placeholder, rows, cols }) => {
  return (
    <textarea
      {...input}
      id={name}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      wrap="virtual"
      className={cx(styles.textarea, null)}
    />
  );
};

BareTextarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
  rows: PropTypes.string,
  cols: PropTypes.string,
  meta: PropTypes.object
};

export default class Textarea extends PureComponent {
  static propTypes = {
    input: PropTypes.object
  };

  render() {
    const { type, input } = this.props;
    return (
      <div className={styles.wrapper}>
        <BareTextarea {...this.props} />
      </div>
    );
  }
}
