import '@root/global.scss';
import '@root/animations.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Bluesky from '@system/svg/social/Bluesky';
import PageComponent from '@components/Page';
import ListItem from '@components/ListItem';
import Package from '@root/package.json';
import Script from 'next/script';
import TaxaCard, { TaxaCardProps } from '@root/components/TaxaCard';
import searchStyles from '@components/SearchResults.module.scss';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://unforsaken.earth';

  return {
    metadataBase: new URL('https://unforsaken.earth'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      other: [{}],
    },
  };
}

export default async function Page(props) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://unforsaken.earth';

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
    <Page title="Home" description="greetings earthling" url="https://unforsaken.earth/search" isNotOpenSourceExample={true}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '24px',
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <div className={searchStyles.searchResultsContainer}>
            <div
              className={searchStyles.row}
              style={{
                gridTemplateColumns: '1fr',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <TaxaCard {...ganodermaOregonense} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
