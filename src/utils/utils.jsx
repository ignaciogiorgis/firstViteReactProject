const generateId = () => {
  let date = Date.now().toString(36)
  let random = Math.random().toString(36).substring(2)
  return date + random
}

export default generateId
