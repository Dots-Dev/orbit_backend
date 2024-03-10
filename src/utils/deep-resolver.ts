/**
 * Asynchronously resolves all promises in the input, including nested promises within arrays and objects.
 *
 * @param {any} input - the input value to be resolved
 * @return {Promise<any>} - a Promise that resolves to the fully resolved value
 */
async function deepResolvePromises(input: any): Promise<any> {
  if (input instanceof Promise) {
    return await input;
  }

  if (Array.isArray(input)) {
    const resolvedArray = await Promise.all(input.map(deepResolvePromises));
    return resolvedArray;
  }

  if (input instanceof Date) {
    return input;
  }

  if (typeof input === 'object' && input !== null) {
    const keys = Object.keys(input);
    const resolvedObject = {};

    for (const key of keys) {
      const resolvedValue = await deepResolvePromises(input[key]);
      resolvedObject[key] = resolvedValue;
    }

    return resolvedObject;
  }

  return input;
}

export default deepResolvePromises;
