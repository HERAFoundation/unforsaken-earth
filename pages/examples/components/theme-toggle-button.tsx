import * as React from 'react';

import Content from '@system/layouts/Content';
import Footer from '@system/Footer';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';
import ThemeToggleButton from '@system/ThemeToggleButton';

import { H1, Lead, P } from '@system/typography';

function ExampleThemeToggleButton(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ components ➝ theme toggle button"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/components/theme-toggle-button"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <H1>Theme Toggle Button</H1>
          <Lead style={{ marginTop: `var(--type-scale-5)` }}>
            This component allows users to cycle through all available themes in the application. It uses the built-in theme switching functionality.
          </Lead>
          
          <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--theme-border)', borderRadius: '8px' }}>
            <P style={{ marginBottom: '1rem' }}>Click the button below to cycle through themes:</P>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <ThemeToggleButton />
              <ThemeToggleButton showLabel={false} />
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <P><strong>Available themes:</strong></P>
            <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
              <li>Light - Clean light theme</li>
              <li>Dark - Modern dark theme</li>
              <li>Daybreak - Warm orange theme</li>
              <li>Blue - Cool blue theme</li>
              <li>Neon Green - Cyberpunk green theme</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <P><strong>Usage:</strong></P>
            <pre style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              background: 'var(--theme-foreground)', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '14px'
            }}>
{`import ThemeToggleButton from '@system/ThemeToggleButton';

// With label (default)
<ThemeToggleButton />

// Without label
<ThemeToggleButton showLabel={false} />

// With custom styles
<ThemeToggleButton style={{ marginTop: '1rem' }} />`}
            </pre>
          </div>
        </Content>
      </SectionFullHeight>
      <Footer />
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleThemeToggleButton;
