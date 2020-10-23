export function createElement(tagName, { children, ...rest } = {}) {
  const element = document.createElement(tagName);
  Object.assign(element, rest);
  if (children) {
    element.append(...children);
  }
  return element;
}

export function styled(component, className) {
  return function (props) {
    const element = component(props);
    element.classList.add(className);
    return element;
  };
}
