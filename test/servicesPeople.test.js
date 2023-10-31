import { expect, test } from 'vitest'
import { getPeople} from '../src/services/people'
import data from '../src/data.json'

test('api enpoitn swapi should be equal to data mock saved locally', async () => {
  expect(await getPeople()).toStrictEqual(data)
},-1)