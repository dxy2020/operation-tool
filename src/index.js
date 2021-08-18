export function add (...args) {
  return args.reduce((a, b) => {
    return a + b
  })
}

export default {
  add
}