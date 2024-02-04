export function bind(target: Object, key: string, descriptor: PropertyDescriptor) {
  const { value } = descriptor;

  if (typeof value !== 'function') {
    throw new Error(`@bind decorator can only be applied to methods not: ${typeof value}`);
  }

  return {
    configurable: true,
    get() {
      const boundFn = value.bind(this);

      Object.defineProperty(this, key, {
        configurable: true,
        writable: true,
        value: boundFn,
      });

      return boundFn;
    },
  };
}
