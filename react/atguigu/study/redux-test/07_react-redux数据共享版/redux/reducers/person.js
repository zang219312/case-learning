import { ADD_PERSON } from '../constant'

const initPerson = [{ id: '001', name: 'tom', age: 18 }]
export default function PersonReducer(preState = initPerson, action) {
  const { type, data } = action

  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]

    default:
      return preState
  }
}
