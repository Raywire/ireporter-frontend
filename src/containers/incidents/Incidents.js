import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getRedflags } from '../../store/actions/incidentActions';
import authStatus from '../../helpers/authStatus';

const smartTruncate = require('smart-truncate');

export class Incidents extends Component {
  componentDidMount() {
    const { type } = this.props;
    if (type === 'redflags'){
      this.props.getRedflags();
    }
  }

  render() {
    if (authStatus() === false) {
      window.location.replace('/signin');
    }
    const { errorMessage } = this.props;
    if (errorMessage && errorMessage.message === 'Token is invalid'){
      window.location.replace('/signin');
    }
    const { incidents } = this.props;
    if (incidents && incidents.length === 0) {
      return (
        <div className="container" data-test="articleListNone">
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="text-muted mt-1 ml-1">No incidents yet</p>
          </div>
        </div>
      );
    }
    return (
      <div className="redflag-list row" data-test="RedflagList">
        { incidents && incidents.slice(0, 10).map((incident) => {
          return (
            <div className="col-md-4" key={incident.id}>
            <div className="card mb-4 shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Redflag</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
              <div className="card-body">
                <h6 className="card-text">{smartTruncate(incident.title, 25)}</h6>
                <span className="">{incident.status}</span>
                <p>By {incident.username}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      <Link to={`/redflags/${incident.id}`}>
                        View
                      </Link>
                    </button>
                  </div>
                  <small className="text-muted">{moment(incident.createdon).fromNow()}</small>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    incidents: state.incidents.incidents,
    errorMessage: state.incidents.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRedflags: () => dispatch(getRedflags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);
