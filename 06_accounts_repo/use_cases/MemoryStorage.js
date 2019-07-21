/**
 * Implementa a interface do AsyncStorage
 * Pode ser usado no código de produção, mas seu
 * objetivo inicial é servir como substitudo do 
 * AsyncStorage nos testes. 
*/

export class MemoryStorage {
  values = {}

  setItem = (key, value) => {
    this.values[key] = value
    return new Promise((resolve) => {
      resolve()
    })
  }

  getItem = (key) => new Promise((resolve) => {
    resolve(this.values[key])
  })

  hasItem = (key) => new Promise((resolve) => {
    resolve(this.values[key] !== undefined)
  })

  removeItem = (key) => new Promise((resolve) => {
    delete this.values[key]
    resolve()
  })
}
