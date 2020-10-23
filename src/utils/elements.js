export const createElement = (tagName, { children, ...rest } = {}) => {
  const element = document.createElement(tagName);
  Object.assign(element, rest);
  if (children) {
    element.append(...children);
  }
  return element;
};

export const styled = (component, className) => (props) => {
  const element = component(props);
  element.classList.add(className);
  return element;
};

export const Component = (tagName, props) => (elementProps) =>
  createElement(tagName, { ...props, ...elementProps });
