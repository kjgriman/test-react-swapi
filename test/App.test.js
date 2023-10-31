// // src/components/StarWarsPeople.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import fetchMock from 'jest-fetch-mock';
// import PeoplePage from '../src/pages/people';

// beforeEach(() => {
//   fetchMock.enableMocks();
// });

// test('Muestra los personajes de Star Wars correctamente', async () => {
//   fetchMock.mockResponseOnce(
//     JSON.stringify({
//       results: [
//         { name: 'Luke Skywalker' },
//         { name: 'Leia Organa' },
//         { name: 'Han Solo' },
//       ],
//     })
//   );

//   render(<PeoplePage />);

//   expect(fetchMock).toHaveBeenCalledTimes(1);

//   const lukeElement = await screen.findByText('Luke Skywalker');
//   const leiaElement = screen.getByText('Leia Organa');
//   const hanElement = screen.getByText('Han Solo');

//   expect(lukeElement).toBeInTheDocument();
//   expect(leiaElement).toBeInTheDocument();
//   expect(hanElement).toBeInTheDocument();
// });