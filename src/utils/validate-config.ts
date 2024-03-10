import { plainToClass } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { validateSync } from 'class-validator';

/**
 * Validates the given config object based on the provided environment variables class.
 *
 * @param {Record<string, unknown>} config - The configuration object to validate
 * @param {ClassConstructor<T>} envVariablesClass - The class constructor for environment variables
 * @return {T} The validated and converted configuration object
 */
function validateConfig<T extends object>(
  config: Record<string, unknown>,
  envVariablesClass: ClassConstructor<T>,
): T {
  const validatedConfig = plainToClass(envVariablesClass, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

export default validateConfig;
