import * as React from 'react';
import { useState } from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import { FormHeading } from '@root/system/typography/forms';
import Button from '@root/system/Button';

import { InputLabel } from '@root/system/typography/forms';
import Input from '@root/system/Input';

import styles from '@system/typography/FormTypography.module.scss';
import DemoSearchComponentFour from '@root/demos/DemoSearchComponentFour';
import ThemeToggleButton from '@root/system/ThemeToggleButton';
import SearchResults from '@root/components/SearchResults';
import searchStyles from '@components/SearchResults.module.scss';

function SearchTaxa(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(searchTerm)}&per_page=100`);
      const data = await response.json();
      setSearchResults(data.results);
      setResultsCount(data.total_results);
      console.log('Search results:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Page title="Search" description="Search the biosphere for taxa using the Catalogue of Life API." url="https://unforsaken.earth/search" isNotOpenSourceExample={true}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: 12 }}>
        <div style={{ alignContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24, paddingBottom: 24 }}>
          <h1 className={styles.header}>unforsaken.earth</h1>
          <InputLabel style={{ marginTop: 24 }} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 12 }}
          >
            <div style={{ paddingBottom: 12 }}>
              <div style={{ marginBottom: 12 }}>
                <Input style={{ marginTop: 8 }} placeholder="Enter taxa (ex.Hummingbird, Ganoderma)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button type="submit">Search the biosphere</Button>
            </div>
          </form>
      <div>
        {resultsCount > 0 ? (
          <>
            {resultsCount} results
          </>
        ) : null}
      </div>
        </div>
      </div>


      <SearchResults results={searchResults}></SearchResults>

      <div style={{ alignContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a style={{ paddingBottom: '10px' }} className={searchStyles.link} href="https://github.com/HERAFoundation/unforsaken-earth">
          Source Code
        </a>
        <ThemeToggleButton showLabel={false} />
      </div>
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
