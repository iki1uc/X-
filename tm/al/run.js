import { enRun } from '../../en/core.js';
import { x4Check } from '../../x4/core.js';

export function tmAlRun(task) {
  const norm = x4Check(task);
  if (!norm.valid) return { ok: false, err: 'X4 invalid' };
  return enRun({ mode: '4ALL', task, norm });
}

