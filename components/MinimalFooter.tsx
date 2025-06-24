import ThemeToggleButton from '@root/system/ThemeToggleButton';
import searchStyles from '@components/SearchResults.module.scss';

export default function MinimalFooter() {
  return (
    <footer style={{ alignContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <a style={{ paddingBottom: '10px' }} className={searchStyles.link} href="https://github.com/HERAFoundation/unforsaken-earth">
        Source Code
      </a>
      <ThemeToggleButton showLabel={false} />
    </footer>
  );
}
