import { useEffect, useState } from 'react'

export const cleanObject = object => {
  const obj = { ...object }
  Object.keys(obj).forEach(k => {
    const value = obj[k]

    if (isFalsy(value)) {
      delete obj[k]
    }
  })

  return obj
}

export const isFalsy = val => val === 0 ? false : !val

export const useMount = (callback) => {
  useEffect(() => {
    callback && callback()
  }, [])
}

/*export const debounce = (fn, delay) => {
  let timeout
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn()
    }, delay)
  }
} */

export const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedVal(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedVal
}
