import React, { Component } from 'react';
import { connect } from 'react-redux';

import authStatus from '../../helpers/authStatus';
import isOwner from '../../helpers/isOwner';
import { updateIncidentComment, getIncident } from '../../store/actions/incidentActions';

export class EditIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getIncident(id);
  }

  componentWillReceiveProps(nextProps) {
    try {
      const incidents = [];
      incidents.push(nextProps.incident);
      const incident = incidents[0];

      this.setState({
        title: incident.title,
        comment: incident.comment,
        location: incident.location,
      });
    } catch (e) {}
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const id = this.props.match.params.id;
    const updatedIncident = {
      title: this.state.title,
      location: this.state.location,
      comment: this.state.comment,
    };
    this.props.updateIncidentComment(id, 'redflags', updatedIncident.comment);
    this.props.history.replace(`/redflags/${id}`);
  }

  render() {
    // Prevent a user who is not logged in from accessing this page
    if ( authStatus() === false) {
      this.props.history.replace('/');
    }

    const incident = this.state;
    const incidentData = this.props.incident;

    return (
      <div className="container">
        {
          incidentData && incidentData.username && isOwner(incidentData.username) ? (
            <div>
              <form onSubmit={this.handleSubmit} className="white">
                <h3 className="text-center">Update Incident</h3>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" autoComplete="off" disabled className="form-control" onChange={this.handleChange} value={incident.title} />
                  <div className="invalid-feedback" id="title-text" />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment</label>
                  <textarea className="form-control" id="comment" rows="3" onChange={this.handleChange} value={incident.comment}></textarea>
                  <div className="invalid-feedback" id="comment-text" />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" autoComplete="off" onChange={this.handleChange} className="form-control" value={incident.location}/>
                  <div className="invalid-feedback" id="location-text" />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary mt-3">Update Incident</button>
                </div>
                <div className="alert" role="alert" id="success-text" />
              </form>
            </div>
          ) : (
           null
          )
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  incident: state.incidents.incident,
  incidentMessage: state.incidents.incidentMessage,
});

const mapDispatchToProps = dispatch => ({
  updateIncidentComment: (id, type, article) => dispatch(updateIncidentComment(id, type, article)),
  getIncident: id => dispatch(getIncident(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncident);
