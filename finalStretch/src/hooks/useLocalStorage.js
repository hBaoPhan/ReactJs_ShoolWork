import { useState, useEffect } from 'react'

// TODO (Câu 4): SV hoàn thiện custom hook useLocalStorage
// Hook này đồng bộ state với localStorage theo key
// Yêu cầu:
//   - Khi khởi tạo: đọc giá trị từ localStorage, nếu không có thì dùng initialValue
//   - Khi setValue: cập nhật state và ghi vào localStorage
//   - Trả về [value, setValue] giống useState
export function useLocalStorage(key, initialValue) {
  let [value, setValueState] = useState(() => {
    try {
      let item = localStorage.getItem(key)
      console.log(item)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error.message)
      return initialValue
    }
  })

  const setValue = (newValue) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue
      setValueState(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error.message)
    }
  }

  return [value, setValue]
}
