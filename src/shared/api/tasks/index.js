import localAPI from './local'
import serverAPI from './server'

const isLocal = import.meta.env.VITE_STATIC_BACKEND === 'true'

const tasksAPI = isLocal ? localAPI : serverAPI
console.log(isLocal)
console.log(tasksAPI)
export default tasksAPI

