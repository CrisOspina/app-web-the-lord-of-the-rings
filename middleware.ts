import { withProtectedRoute, stackMiddlewares } from '@/app/_middlewares'

const middlewares = [withProtectedRoute]

export default stackMiddlewares(middlewares)
