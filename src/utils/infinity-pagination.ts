import { InfinityPaginationResultType } from './types/infinity-pagination-result.type';
import { IPaginationOptions } from './types/pagination-options';

/**
 * Function to perform infinity pagination on the given data array based on the provided options.
 *
 * @param {T[]} data - the array of data to paginate
 * @param {IPaginationOptions} options - the pagination options
 * @return {InfinityPaginationResultType<T>} An object containing the paginated data and a flag indicating whether there is a next page
 */
export const infinityPagination = <T>(
  data: T[],
  options: IPaginationOptions,
): InfinityPaginationResultType<T> => {
  return {
    data,
    hasNextPage: data.length === options.limit,
  };
};
