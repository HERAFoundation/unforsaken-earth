import styles from '@components/SearchResults.module.scss';
import TaxaCard from './TaxaCard';

export interface INaturalistResult {
  id: number;
  rank: string;
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
  const itemsPerRow = 4;
  const rows: INaturalistResult[][] = [];
  for (let i = 0; i < props.results.length; i += itemsPerRow) {
    rows.push(props.results.slice(i, i + itemsPerRow));
  }

  return (
    <>
      {rows.map((rowItems, rowIndex) => (
        <div className={styles.searchResultsContainer}>
          <div key={rowIndex} className={styles.row}>
            {rowItems.map((result, columnIndex) => (
              <>
                <TaxaCard result={result}></TaxaCard>
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
