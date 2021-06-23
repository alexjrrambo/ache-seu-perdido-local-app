import { join, dirname, resolve } from 'path'
import { Low, JSONFile } from 'lowdb'

const __dirname = resolve(dirname(''))
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

class ObjectController {
  async index (req, res) {
    await db.read()

    const objectsData = db.data
    const { state = '', city = '', objectName = '' } = req.query

    let filteredObjects = objectsData.objects
    if (state) {
      filteredObjects = filteredObjects.filter(object => object.state.includes(state))
    }
    if (city) {
      filteredObjects = filteredObjects.filter(object => object.city.includes(city))
    }
    if (objectName) {
      filteredObjects = filteredObjects.filter(object => object.objectName.includes(objectName))
    }

    return res.json({ objects: filteredObjects })
  }

  async store (req, res) {
    await db.read()

    if (db.data === null) {
      db.data = { objects: [] }
    }

    const { objects } = db.data
    objects.push(req.body)

    await db.write()

    return res.json(req.body)
  }
}

export default new ObjectController()
