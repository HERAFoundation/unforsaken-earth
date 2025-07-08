import styles from '@components/SearchResults.module.scss';

export interface TaxaCardProps {
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

export default function TaxaCard(props: TaxaCardProps) {
  return (
    <div key={props.id} className={styles.column}>
      {props.default_photo?.medium_url && <img src={props.default_photo.medium_url} alt={props.preferred_common_name || props.name} className={styles.image} />}
      <div className={styles.content}>
        {props.preferred_common_name || props.name}
        <div className={styles.latin}>{!props.preferred_common_name || props.name}</div>
        <div className={styles.rank}>{props.rank}</div>
      </div>
      <div className={styles.title}>
        <div className={styles.links}>
          {props.wikipedia_url && (
            <a href={props.wikipedia_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Wikipedia
            </a>
          )}
          <a href={`https://www.inaturalist.org/taxa/${props.id}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
            iNaturalist
          </a>
        </div>
      </div>
    </div>
  );
}
