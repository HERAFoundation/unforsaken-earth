import styles from '@system/ThemeToggleButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export default function ThemeToggleButton(props) {
  const [currentTheme, setCurrentTheme] = React.useState('');

  React.useEffect(() => {
    // Get the current theme from body class
    const body = document.body;
    if (body.classList.contains('theme-light')) {
      setCurrentTheme('Light');
    } else if (body.classList.contains('theme-dark')) {
      setCurrentTheme('Dark');
    } else if (body.classList.contains('theme-daybreak')) {
      setCurrentTheme('Daybreak');
    } else if (body.classList.contains('theme-blue')) {
      setCurrentTheme('Blue');
    } else if (body.classList.contains('theme-neon-green')) {
      setCurrentTheme('Neon');
    } else {
      setCurrentTheme('Light'); // Default fallback
    }
  }, []);

  const handleThemeChange = () => {
    Utilities.onHandleThemeChange();
    
    // Update the current theme state after change
    setTimeout(() => {
      const body = document.body;
      if (body.classList.contains('theme-light')) {
        setCurrentTheme('Light');
      } else if (body.classList.contains('theme-dark')) {
        setCurrentTheme('Dark');
      } else if (body.classList.contains('theme-daybreak')) {
        setCurrentTheme('Daybreak');
      } else if (body.classList.contains('theme-blue')) {
        setCurrentTheme('Blue');
      } else if (body.classList.contains('theme-neon-green')) {
        setCurrentTheme('Neon');
      }
    }, 50);
  };

  return (
    <button 
      className={styles.root} 
      onClick={handleThemeChange}
      style={props.style}
      title={`Current theme: ${currentTheme}. Click to change theme.`}
    >
      <svg 
        className={styles.icon}
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 3V1M12 23V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle 
          cx="12" 
          cy="12" 
          r="5" 
          stroke="currentColor" 
          strokeWidth="2"
        />
      </svg>
      {props.showLabel !== false && (
        <span className={styles.label}>
          {currentTheme}
        </span>
      )}
    </button>
  );
}
