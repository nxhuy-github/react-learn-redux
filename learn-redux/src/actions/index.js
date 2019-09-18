export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num //data
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}