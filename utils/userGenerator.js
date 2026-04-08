export function generateUser() {
  const timestamp = Date.now()

  return {
    name: 'John',
    lastName: 'Doe',
    email: `aqa-${timestamp}@test.com`,
    password: 'Password1'
  }
}