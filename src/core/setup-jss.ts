import { JSS } from 'core/types';

/**
 * Setups the point where the MUI files will be injected. It is needed to override
 * the styles of the library.
 *
 * @name setupStylesInjectionPoint
 * @function
 * @param {JSS} jss - New jss instance.
 * @param {string} label - New jss instance.
 */
export const setupStylesInjectionPoint = (jss: JSS, label: string = 'custom-insertion-point'): void => {
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  jss.setup({insertionPoint: label});

  const styleNode = document.createComment(label);
  const nextTitleNode = document.head.getElementsByClassName('headMeterialUILink');

  !nextTitleNode.length
  ? document.head.appendChild(styleNode)
  : document.head.insertBefore(styleNode, nextTitleNode[0]);
};
