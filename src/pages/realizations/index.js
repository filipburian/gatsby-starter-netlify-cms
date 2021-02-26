import React from 'react';

import Layout from '../../components/Layout';
import RealizationItemContainer from '../../components/RealizationItemsContainer';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Ostatnie realizacje</h1>
        <section>
          <RealizationItemContainer />
        </section>
      </Layout>
    );
  }
}
