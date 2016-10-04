/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import H1 from '../../components/H1';
import { Button, Grid } from 'react-bootstrap';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Grid fluid>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button bsStyle="primary">Primary</Button>
      </Grid>
    );
  }
}
