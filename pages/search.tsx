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

function Example(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log('Search results:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Page title="Search" description="Search the biosphere for taxa using the Catalogue of Life API." url="https://unforsaken.earth/search" isNotOpenSourceExample={true}>
        <div style={{ paddingBottom: 12, alignContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className={styles.header}>unforsaken.earth</h1>
      <InputLabel style={{ marginTop: 24 }} />
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ paddingBottom: 12 }}>
          <div style={{ marginBottom: 12 }}>
            <Input style={{ marginTop: 8 }} placeholder="Enter taxa (ex.Hummingbird, Ganoderma)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <Button  type='submit'>Search the biosphere</Button>
      </form>
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

export default Example;
