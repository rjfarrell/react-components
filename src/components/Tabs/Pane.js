import React, { PropTypes } from 'react';

export default function Pane(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

Pane.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};
