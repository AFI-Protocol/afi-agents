/**
 * SignalValidator.tsx (MVP Demo)
 * React component for previewing AFI signal validation results.
 * Built for Factory.ai integration (UI module).
 */
import React from 'react';

export type SignalData = {
  id: string;
  timestamp: string;
  source: string;
  signalType: 'alpha' | 'beta' | 'anomaly';
  confidence: number;
  message: string;
};

type Props = { signal: SignalData };

const SignalValidator: React.FC<Props> = ({ signal }) => (
  <div
    data-factory-usable="true"
    style={{
      border: '1px solid #444',
      borderRadius: 12,
      maxWidth: 480,
      padding: '1rem',
      fontFamily: 'sans-serif',
    }}
  >
    <h2 style={{ margin: 0, color: '#a855f7' }}>🔍 Signal Validator (MVP)</h2>
    <p><strong>ID:</strong> {signal.id}</p>
    <p><strong>Source:</strong> {signal.source}</p>
    <p><strong>Type:</strong> {signal.signalType}</p>
    <p><strong>Confidence:</strong> {signal.confidence.toFixed(2)}%</p>
    <p style={{ fontStyle: 'italic', opacity: 0.8 }}>{signal.message}</p>
  </div>
);

export default SignalValidator;
