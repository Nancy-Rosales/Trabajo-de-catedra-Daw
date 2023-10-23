import React from 'react';

function License() {
  const linkAttributes = {
    href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1',
    target: '_blank',
    rel: 'license noopener noreferrer',
  };

  return (
    <p style={{color:'white'}}>
      This work is licensed under{' '}
      <a  style={{ display: 'inline-block', fontSize: '10px', color:'white' }} {...linkAttributes}>
        Attribution-NonCommercial-NoDerivatives 4.0 International
        <img
          style={{ fontSize: '10px' }}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt="CC"
        />
        <img
          style={{ fontSize: '10px'}}
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          alt="BY"
        />
        <img
          style={{  fontSize: '10px'}}
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
          alt="NC"
        />
        <img
          style={{ fontSize: '10px' }}
          src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
          alt="ND"
        />
      </a>
    </p>
  );
}

export default License;
