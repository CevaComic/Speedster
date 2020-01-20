import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import PreviewContainer from './container';

export default class PreviewDisplay extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <PreviewContainer className={this.props.className} />
      </ThemeProvider>
    );
  }
}
