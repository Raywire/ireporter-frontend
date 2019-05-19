import React from 'react';
import Incidents from './Incidents';

const RedflagList = () => {
  return (
    <div className="container">
       <Incidents type='redflags' />
    </div>
  );
};

export default RedflagList;
