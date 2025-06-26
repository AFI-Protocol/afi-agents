/**
 * SignalValidator.tsx (MVP Demo)
 * React component for previewing AFI signal validation results.
 * Built for Factory.ai integration (UI module).
 */

import React from 'react'

type SignalData = {
  id: string
  timestamp: string
  source: string
  signalType: 'alpha' | 'beta' | 'anomaly'
  confidence: number
  message: string
}

type Props = {
  signal: SignalData
}

const SignalValidator: React.FC<Props> = ({ signal }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-900 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2 text-purple-600">🔍 Signal Validator (MVP)</h2>
      <p><strong>ID:</strong> {signal.id}</p>
      <p><strong>Source:</strong> {signal.source}</p>
      <p><strong>Type:</strong> {signal.signalType}</p>
      <p><strong>Confidence:</strong> {signal.confidence.toFixed(2)}%</p>
      <p className="mt-2 text-sm italic text-gray-600 dark:text-gray-300">{signal.message}</p>
    </div>
  )
}

export default SignalValidator
