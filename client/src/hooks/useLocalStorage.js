import { useEffect, useState } from 'react'

const PREFIX = 'whatsapp-clone-'

function useLocalStorage(key, initVal) {
  const prefixedKey = PREFIX + key
  const[value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey)
    if(jsonVal !== null && jsonVal !== 'undefined') return JSON.parse(jsonVal)
    if(typeof initVal === "function"){
        return initVal()
    }else{
        return initVal
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey,JSON.stringify(value))
  },[prefixedKey,value])

  return[value,setValue]
}

export default useLocalStorage