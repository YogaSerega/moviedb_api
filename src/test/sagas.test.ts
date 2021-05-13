import { fetchMovieList } from '../redux/sagas/sagas';

test('adds 1 + 2 to equal 3', () => {
  expect(fetchMovieList(1, 2)).toBe(3);
});

export {};
