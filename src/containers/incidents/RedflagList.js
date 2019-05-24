import React from 'react';
import Incidents from './Incidents';
import CreateIncident from './CreateIncident';

const RedflagList = () => {
  return (
    <div className="container">
      <CreateIncident />
      <Incidents type='redflags' />
    </div>
  );
};

export default RedflagList;
