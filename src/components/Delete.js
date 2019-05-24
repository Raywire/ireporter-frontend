import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteIncident } from '../store/actions/incidentActions';

export class DeleteIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.deleteIncident(this.props.id);
    window.location.replace('/redflags');
  }

  render() {
    return (
            <div>
              <div className="ml-1">
                <div>
                  <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">
                    <i className="fas fa-trash" />
                  </button>
                  <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="deleteModalLabel">Delete Article</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Are you sure you want to delete this incident?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-danger" onClick={this.handleClick} data-dismiss="modal">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

const mapStateToProps = state => ({
  deleteMessage: state.incidents.deleteMessage,
});

const mapDispatchToProps = dispatch => ({
  deleteIncident: id => dispatch(deleteIncident(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteIncident);
