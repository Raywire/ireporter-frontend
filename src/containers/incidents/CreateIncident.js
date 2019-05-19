import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIncident } from '../../store/actions/incidentActions';
import authStatus from '../../helpers/authStatus';


class CreateIncident extends Component {
  state = {
    title: '',
    comment: '',
    location: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const article = {
      title: this.state.title,
      location: this.state.location,
      comment: this.state.comment,
    };
    this.props.createIncident(article);
  }
  
  render() {
    const { errorMessage, incident } = this.props;
    if ( errorMessage && errorMessage.message.comment) {

    }
    if ( errorMessage && errorMessage.message.title) {

    }
    if ( errorMessage && errorMessage.message.location) {

    }
    if (incident && incident.title) {

    }
    
      return (
        <div className="container incident-details">

          <button type="button" className="btn btn-outline-primary mb-2 mt-2" data-toggle="modal" data-target="#exampleModalLong">
            Create Red Flag
          </button>

          <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit} className="white">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" id="title" autoComplete="off" className="form-control" onChange={this.handleChange} />
                      <div className="invalid-feedback" id="title-text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comment">Comment</label>
                      <textarea className="form-control" id="comment" rows="3" onChange={this.handleChange}></textarea>
                      <div className="invalid-feedback" id="comment-text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input type="text" id="location" autoComplete="off" onChange={this.handleChange} className="form-control" />
                      <div className="invalid-feedback" id="location-text" />
                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary mt-3">Create Incident</button>
                    </div>
                    <div className="alert" role="alert" id="success-text" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

  }
}

const mapStateToProps = state => ({
  incident: state.incidents.incident,
  errorMessage: state.incidents.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  createIncident: article => dispatch(createIncident(article)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateIncident);
