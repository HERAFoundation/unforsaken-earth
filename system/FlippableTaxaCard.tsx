import styles from '@system/FlippableTaxaCard.module.scss';

import * as React from 'react';

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

const FlippableTaxaCard = (props: TaxaCardProps & { backElement?: React.ReactNode }) => {
  const [flipped, setFlipped] = React.useState(true);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const handleMouseMove = (e) => {
      const { width, height, left, top } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;
      const rotateX = ((y - centerY) / centerY) * -32;
      const rotateY = ((x - centerX) / centerX) * 32;

      card.style.transition = 'none';
      card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = '400ms ease all';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  let style = {};
  if (flipped) {
    style = { transform: `rotateY(180deg)`, zIndex: 1 };
  }

  return (
    <div ref={cardRef} className={styles.spacing}>
      <div
        className={styles.card}
        onClick={() => {
          setFlipped(!flipped);
        }}
      >
        <div className={styles.face} style={style}>
          <div className={styles.back}>{props.backElement}</div>
          <div className={styles.front}>
            <div className={styles.column}>
              {props.default_photo?.medium_url && <img src={props.default_photo.medium_url} alt={props.preferred_common_name || props.name} className={styles.image} />}
              <div className={styles.content}>
                <div className={styles.name}>{props.preferred_common_name || props.name}</div>
                <div className={styles.latin}>{props.name}</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableTaxaCard;
