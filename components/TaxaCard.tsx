import { INaturalistResult } from './SearchResults';
import styles from '@components/SearchResults.module.scss';

interface TaxaCardProps {
  result: INaturalistResult;
}

export default function TaxaCard(props: TaxaCardProps) {
  const result = props.result;

  return (
    <div key={result.id} className={styles.column}>
      {result.default_photo?.medium_url && <img src={result.default_photo.medium_url} alt={result.preferred_common_name || result.name} className={styles.image} />}
      <div className={styles.content}>
        {result.preferred_common_name || result.name}
        <div className={styles.latin}>{!result.preferred_common_name || result.name}</div>
        <div className={styles.rank}>{result.rank}</div>
      </div>
      <div className={styles.title}>
        <div className={styles.links}>
          {result.wikipedia_url && (
            <a href={result.wikipedia_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Wikipedia
            </a>
          )}
          <a href={`https://www.inaturalist.org/taxa/${result.id}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
            iNaturalist
          </a>
        </div>
      </div>
    </div>
  );
}
