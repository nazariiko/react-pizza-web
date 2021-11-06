import React from 'react';
import ContentLoader from 'react-content-loader';

function LoaderBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="120" r="110" />
      <rect x="0" y="260" rx="7" ry="7" width="280" height="30" />
      <rect x="0" y="300" rx="10" ry="10" width="280" height="90" />
      <rect x="0" y="400" rx="20" ry="20" width="100" height="40" />
      <rect x="120" y="400" rx="20" ry="20" width="160" height="40" />
    </ContentLoader>
  );
}

export default LoaderBlock;
