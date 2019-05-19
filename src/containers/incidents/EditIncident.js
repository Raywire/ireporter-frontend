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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getIncident(id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props)
    try {
      const articles = [];
      articles.push(nextProps.article);
      const article = articles[0];

      this.setState({
        title: article.title,
        description: article.description,
        comment,
        is_published: true,
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
    document.getElementById('title').classList.remove('is-invalid');
    document.getElementById('description').classList.remove('is-invalid');

    const id = this.props.match.params.id;
    const updatedArticle = {
      title: this.state.title,
      description: this.state.description,
      comment: this.state.comment,
    };
    this.props.updateIncidentComment(id, updatedArticle);
  }

  render() {
    // Prevent a user who is not logged in from accessing this page
    const author = {
      username: 'rayray'
    }

    return (
      <div className="container">
        {
          author && author.username && isOwner(author.username) ? (
            <div>
              <form onSubmit={this.handleSubmit} className="white">
                <h5 className="text-center mt-3">Edit Incident</h5>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" autoComplete="off" className="form-control" onChange={this.handleChange} value='' />
                  <div className="invalid-feedback" id="title-text" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Comment</label>
                  <input type="text" maxLength="128" id="description" autoComplete="off" onChange={this.handleChange} className="form-control" value="" />
                  <div className="invalid-feedback" id="description-text" />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary mt-3">Update Incident</button>
                </div>
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

});

const mapDispatchToProps = dispatch => ({
  updateIncidentComment: (id, article) => dispatch(updateIncidentComment(id, article)),
  getIncident: id => dispatch(getIncident(id)),
  deleteIncident: id => dispatch(deleteIncident(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncident);
