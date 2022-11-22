import React from 'react';
import { Helmet } from 'react-helmet';

export function MetaHead({ title, description, image, url }) {
  return (
    <Helmet>
      <meta name="apple-mobile-web-app-title" content="sebasdeveloper.dev" />
      <meta name="application-name" content="sebasdeveloper.dev" />
      <meta name="theme-color" content="#04001e" />
      <title>{`MocaFood - ${title}`}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`MocaFood - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="MocaFood" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@davecast_" />
      <meta name="twitter:creator" content="@davecast_" />
      <meta name="twitter:title" content={`MocaFood ${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
