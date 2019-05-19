import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getIncident } from '../../store/actions/incidentActions';
import authStatus from '../../helpers/authStatus';
import isOwner from '../../helpers/isOwner';
import Edit from '../../components/Edit';


class IncidentDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getIncident(id);
  }

  render() {
    const { incident } = this.props;
    console.log(this.props)
    if (incident && incident.comment) {
      return (
        <div className="container incident-details">
          <div className="row float-right mt-4">
          {isOwner(incident.username) ? <Edit id={incident.id} /> : null}
          </div>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className="row">
                <div className="col-lg-3">
                  <span
                    className="btn btn-info profile-img d-flex align-items-center justify-content-center"
                  >
                    {incident.username.slice(0, 2)}
                  </span>
                </div>
                <div className="col-lg-9">
                  <div className="text-muted">
                    <span className="mr-1">By</span>
                    {incident.username}
                  </div>
                  <div className="text-muted">{moment(incident.createdon).fromNow()}</div>
                  <div className="text-primary mb-0">
                    <span className="mr-1">Status:</span>
                    {incident.status}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="mt-4">{incident.title}</h1>
            </div>
          </div>
          <div className="container-fluid text-center">
            <hr />
            <img
              src="https://res.cloudinary.com/dv85uhrw5/image/upload/v1556052045/pocvovruu6lhhic2fhq1.jpg"
              alt=""
              className="img-fluid rounded"
            />
            <hr />
          </div>
          <div className="container-fluid container-width">
            <div className="lead">{incident.comment}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incident: state.incidents.incident,
});

const mapDispatchToProps = dispatch => ({
  getIncident: id => dispatch(getIncident(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentDetails);
