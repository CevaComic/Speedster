import temporary from './temporary'
import register from './register'
import uploadVehicle from './uploadVehicle'

const middlewares = [
	temporary,
	register,
	uploadVehicle
]

export default middlewares
