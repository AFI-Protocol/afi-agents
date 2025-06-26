/**
 * DemoApp.tsx
 * Quick usage example importing the MVP SignalValidator.
 * Run with `npm start` inside a Vite/React sandbox.
 */
import React from 'react';
import SignalValidator, { SignalData } from './SignalValidator';
import mockSignal from './mock_signal.json';

const DemoApp: React.FC = () => {
  const signal = mockSignal as SignalData;
  return (
    <div style={{ padding: 20 }}>
      <SignalValidator signal={signal} />
    </div>
  );
};

export default DemoApp;
