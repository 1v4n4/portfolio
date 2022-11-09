import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import './CSS/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

Sentry.init({
  dsn: 'https://5788d1e3e3b24d129b864117115ee600@o1127431.ingest.sentry.io/6368246',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

root.render(
  <App />,
);
