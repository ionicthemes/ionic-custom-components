import { defineCustomElements } from 'c-coffee-icon';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      defineCustomElements(win);
    }
  };
}
