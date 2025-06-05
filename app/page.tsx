import '@root/global.scss';
import '@root/animations.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Bluesky from '@system/svg/social/Bluesky';
import DefaultLayout from '@components/DefaultLayout';
import ListItem from '@components/ListItem';
import Package from '@root/package.json';
import Script from 'next/script';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://unforsaken.earth';
  const handle = '@jackallard.xyz';

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
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
      ],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  return <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png"></DefaultLayout>;
}
