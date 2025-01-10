function createElement(
  type: string,
  props: Record<string, any> = {},
  ...children: any[]
) {
  return {
    $$typeof: Symbol('own.element'),
    key: null,
    type,
    props: {
      ...props,
      children,
    },
  };
}

export default createElement;
