import { useEffect, useState } from 'react'

export const cleanObject = (object: object) => {
  const obj = { ...object }
  Object.keys(obj).forEach(k => {
    // @ts-ignore
    const value = obj[k]

    if (isFalsy(value)) {
      // @ts-ignore
      delete obj[k]
    }
  })

  return obj
}

export const isFalsy = (val: any): boolean => val === 0 ? false : !val

// export const isFalsy2: (val: any) => boolean = (val) => val === 0 ? false : !val


export const useMount = (callback: () => void) => {
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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedVal, setDebouncedVal] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedVal(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedVal
}

export const useArray = <T>(arr: T[]) => {
  const [val, setVal] = useState(arr)

  return {
    value: val,
    setVal,
    removeIndex: (index: number) => {
      const copy = [...val]
      copy.splice(index, 1)
      setVal(copy)
    },
    clear: () => setVal([]),
    add: (item: T) => setVal([...val, item])
  }
}
