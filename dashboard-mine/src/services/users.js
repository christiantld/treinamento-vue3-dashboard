/* eslint-disable space-before-function-paren */
export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me')

    return {
      data: response.data
    }
  }
})
