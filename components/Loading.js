import React from 'react';

const Loading = ({ className }) => (
  <div className={`${className ? className : ''} loading-wrapper layout-row layout-align-center-center`}>
    <div className="loading-spinner" />
  </div>
);

export default Loading;
