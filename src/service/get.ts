// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function get(url: string, params?: any) {
  const baseUri = 'http://113.44.81.153/music'

  try {
    const response = await fetch(`${baseUri}${url}`, {
      method: 'GET',
      headers: {
        params,
      },
    })
    const data = await response.json()
    if (data.code === 0) {
      return data.result
    }
  } catch (error) {
    console.log(error)
  }
}
