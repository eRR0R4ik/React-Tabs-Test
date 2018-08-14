import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  picture,
  name,
  description
}) => {
  return (
    <div className="phases-img">
      <img
        src={picture}
        style={{ float: 'left', width: '250px', padding: '0 25px 0 0' }}
      />
      <h4>{name}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

Description.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
