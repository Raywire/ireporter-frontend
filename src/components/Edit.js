import React from 'react';
import { Link } from 'react-router-dom';

const Edit = id => (
  <div data-test="Edit">
    <Link to={`/redflags/${id.id}/edit`}>
      <button className="btn btn-outline-primary" data-toggle="tooltip" data-placement="bottom" title="Edit Article" type="button">
        <i className="fas fa-edit" />
      </button>
    </Link>
  </div>

);

export default Edit;
