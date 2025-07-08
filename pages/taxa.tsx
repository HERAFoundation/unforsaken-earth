import * as React from 'react';
import { useState } from 'react';
import * as Server from '@common/server';

import Page from '@components/Page';

import MinimalFooter from '@root/components/MinimalFooter';

import TaxaCard, { TaxaCardProps } from '@root/components/TaxaCard';
import FlippableTaxaCard from '@system/FlippableTaxaCard';
import styles from './taxa.module.scss';

function SearchTaxa(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  // this is just for demonstration purposes
  const ganodermaOregonense: TaxaCardProps = {
    id: 118062,
    rank: 'species',
    name: 'Ganoderma oregonense',
    preferred_common_name: 'West Coast Reishi',
    default_photo: {
      medium_url: 'https://inaturalist-open-data.s3.amazonaws.com/photos/249116347/medium.jpg',
      attribution: '(c) scramblyn, some rights reserved (CC BY-NC)',
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/Ganoderma_oregonense',
  };

  return (
    <Page title="Search" description="Search the biosphere for taxa using the Catalogue of Life API." url="https://unforsaken.earth/search" isNotOpenSourceExample={true}>
      <div className={styles.container}>
        <div className={styles.taxaCardWrapper}>
          <TaxaCard {...ganodermaOregonense} />
        </div>
        <div className={styles.taxaCardWrapper}>
          <FlippableTaxaCard {...ganodermaOregonense} backElement={<div>Back content for {ganodermaOregonense.preferred_common_name}</div>} />
        </div>
      </div>
      <MinimalFooter />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default SearchTaxa;
