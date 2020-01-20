import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Tooltip from '@material-ui/core/Tooltip';

import ThemeService from '../service/theme';

export default class DownloadButton extends React.Component {
  state = {
    running: false,
  };

  handleClick = () => {
    this.setState({ running: true }, () => {
      ThemeService.download(this.props.theme)
        .then(() => this.setState({ running: false }));
    });
  };

  render() {
    const { rootClassName } = this.props;
    return (
      <Tooltip title="Download your theme" placement="left">
        <Fab
          className={rootClassName}
          color="primary"
          disabled={this.state.running}
          onClick={this.handleClick}
        >
          <CloudDownload />
	  </Fab>
      </Tooltip>
    );
  }
}
