const OC_SPACE = 'oc-space_'

const LocalStorage = {
  getSlice: (name: string): {} | undefined => {
    try {
      const slice = localStorage.getItem(OC_SPACE + name)
      if (slice !== null) {
        return JSON.parse(slice)
      } else {
        return undefined
      }
    } catch (err) {
      console.dir(err)
      return undefined
    }
  },
  setSlice: (name: string, data: {}) => {
    try {
      const slice = JSON.stringify(data)
      localStorage.setItem(OC_SPACE + name, slice)
    } catch (err) {
      console.dir(err)
    }
  }
}

export default LocalStorage