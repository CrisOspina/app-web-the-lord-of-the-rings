type Route = {
  authSignIn: string
  authSignOut: string
}

const baseController: Route = {
  authSignIn: 'signin',
  authSignOut: 'signout'
}

export { baseController }
