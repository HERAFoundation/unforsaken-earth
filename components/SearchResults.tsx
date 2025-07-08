import styles from '@components/SearchResults.module.scss';
import TaxaCard, { TaxaCardProps } from './TaxaCard';

interface SearchResultsProps {
  results: TaxaCardProps[];
}

export default function SearchResults(props: SearchResultsProps) {
  const itemsPerRow = 4;
  const rows: TaxaCardProps[][] = [];
  for (let i = 0; i < props.results.length; i += itemsPerRow) {
    rows.push(props.results.slice(i, i + itemsPerRow));
  }

  return (
    <>
      {rows.map((rowItems, rowIndex) => (
        <div className={styles.searchResultsContainer}>
          <div key={rowIndex} className={styles.row}>
            {rowItems.map((result, columnIndex) => (
              <TaxaCard key={columnIndex} {...result} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
