import * as React from 'react';
import { useState } from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import { FormHeading } from '@root/system/typography/forms';
import Button from '@root/system/Button';
import MinimalFooter from '@root/components/MinimalFooter';

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

  const searchPageStyles = {
    pageContainer: {
      position: 'relative' as const,
      width: '100%',
      paddingBottom: 12,
    },
    centerContainer: {
      alignContent: 'center',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      paddingTop: 24,
      paddingBottom: 24,
    },
    headerLabel: {
      marginTop: 24,
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      paddingBottom: 12,
    },
    inputContainer: {
      paddingBottom: 12,
    },
    inputWrapper: {
      marginBottom: 12,
    },
    input: {
      marginTop: 8,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
  };

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

  const getResultsText = (count) => {
    if (count === 0) return null;
    return count === 1 ? `${count} result` : `${count} results`;
  };

  return (
    <Page title="Search" description="Search the biosphere for taxa using the Catalogue of Life API." url="https://unforsaken.earth/search" isNotOpenSourceExample={true}>
      <div style={searchPageStyles.pageContainer}>
        <div style={searchPageStyles.centerContainer}>
          <h1 className={styles.header}>unforsaken.earth</h1>
          <InputLabel style={searchPageStyles.headerLabel} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            style={searchPageStyles.form}
          >
            <div style={searchPageStyles.inputContainer}>
              <div style={searchPageStyles.inputWrapper}>
                <Input style={searchPageStyles.input} placeholder="Enter taxa (ex.Hummingbird, Ganoderma)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div style={searchPageStyles.buttonContainer}>
              <Button type="submit">Search the biosphere</Button>
            </div>
          </form>
          <div>{getResultsText(resultsCount)}</div>
        </div>
      </div>
      <SearchResults results={searchResults}></SearchResults>
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
