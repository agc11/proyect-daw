import React, { PropTypes } from 'react';

class DirectoryFtp extends React.Component {

  constructor(props) {
    super(props)
  }

  onClickListDirectory(event) {
    event.preventDefault()
    const {host, user, password, root} = this.props
    this.props.ListDirectory({ host, user, password, root })
  }

  render() {

    return (
        <li onClick={ (event) => this.onClickListDirectory(event) } >{ this.props.dir.name } - { this.props.dir.date }</li>
    )
  }
}

DirectoryFtp.propTypes = {
  dir: React.PropTypes.object,
  host: React.PropTypes.string,
  user: React.PropTypes.string,
  password: React.PropTypes.string,
  root: React.PropTypes.string,

  ListDirectory: React.PropTypes.func,
}

export default DirectoryFtp
