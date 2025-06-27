/**
 * 🧪 Runtime Example: handleSignal.ts
 * -------------------------------------
 * Shows how an incoming signal can be checked
 * for scoring anomalies and paired with a mentor.
 */

import { checkForAnomaly, pairWithMentor } from '../../runtime/mentor_registry';
import { SignalPayload } from '../../ui/SignalValidator';

export function handleSignal(signal: SignalPayload) {
  if (checkForAnomaly(signal)) {
    const mentor = pairWithMentor(signal);
    console.log(`⚠️ Signal ${signal.id} shows anomalies. Mentor assigned: ${mentor}`);
  } else {
    console.log(`✅ Signal ${signal.id} passed initial screening.`);
  }
}
