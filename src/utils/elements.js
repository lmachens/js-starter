export function createElement(tagName, { children, ...rest } = {}) {
  const element = document.createElement(tagName);
  Object.assign(element, rest);
  if (children) {
    element.append(...children);
  }
  return element;
}
