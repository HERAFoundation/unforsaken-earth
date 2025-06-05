import styles from '@components/SearchResults.module.scss';
import * as React from 'react';

interface INaturalistResult {
  id: number;
  name: string;
  preferred_common_name?: string;
  default_photo?: {
    medium_url?: string;
    attribution?: string;
  };
  wikipedia_url?: string;
}

interface SearchResultsProps {
  results: INaturalistResult[];
}

export default function SearchResults(props: SearchResultsProps) {
  if (!props.results || props.results.length === 0) {
    return <div className={styles.noResults}>No results found.</div>;
  }

  const itemsPerRow = 4;
  const rows: INaturalistResult[][] = [];
  for (let i = 0; i < props.results.length; i += itemsPerRow) {
    rows.push(props.results.slice(i, i + itemsPerRow));
  }

  return (
    <>
      {rows.map((rowItems, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {rowItems.map((result, columnIndex) => (
            <div key={result.id} className={styles.column}>
              {result.default_photo?.medium_url && (
                <img
                  src={result.default_photo.medium_url}
                  alt={result.preferred_common_name || result.name}
                  className={styles.image}
                />
              )}
              <div className={styles.content}>
                {result.preferred_common_name || result.name}
              </div>
              <div className={styles.title}>
                <div className={styles.links}>
                  {result.wikipedia_url && (
                    <a
                      href={result.wikipedia_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Wikipedia
                    </a>
                  )}
                  <a
                    href={`https://www.inaturalist.org/taxa/${result.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    iNaturalist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
