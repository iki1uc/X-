// ITEM: tm-ck-x4
// REV: 1.2
// ROLE: X4-Mapper (Struktur-KOOP)

/**
 * x4 drückt 4 Zustände aus:
 * 0 = OFF
 * 1 = ON
 * 2 = WARN
 * 3 = FAIL
 */

export const X4_STATES = {
  0: { id: 0, tag: 'OFF',  ok: false },
  1: { id: 1, tag: 'ON',   ok: true  },
  2: { id: 2, tag: 'WARN', ok: false },
  3: { id: 3, tag: 'FAIL', ok: false }
};

/**
 * Nimmt einen Wert (0–3) und gibt den X4-Ausdruck zurück.
 */
export function x4(expr) {
  const s = X4_STATES[expr] ?? X4_STATES[0];
  return {
    x4: expr,
    tag: s.tag,
    ok: s.ok
  };
}

/**
 * Kleine Hilfsfunktion: ist der Zustand „gültig aktiv“?
 */
export function x4Active(expr) {
  return x4(expr).ok === true;
}
