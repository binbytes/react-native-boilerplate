const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_TEXT = 'text/plain'
const CONTENT_TYPE = 'Content-Type'

export async function POST(url, body = null, token = null, status = null) {
  let headers

  if (token === null) {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON
    }
  } else {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: token
    }
  }

  if (body != null) body = JSON.stringify({ ...body })

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body
  })

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json()
    if (
      status === null
        ? res.status.toString().startsWith('2')
        : res.status === status
    ) {
      return { success: true, data: json }
    } else {
      return { success: false, err: json.error }
    }
  } else if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_TEXT)) {
    if (
      status === null
        ? res.status.toString().startsWith('2')
        : res.status === status
    ) {
      return { success: true, data: res.body }
    } else {
      return { success: false, err: res.body }
    }
  } else {
    console.log(res)
  }
}

export async function GET(url, token = null, status = null) {
  let headers

  if (token === null) {
    headers = {}
  } else {
    headers = {
      Authorization: token
    }
  }

  const res = await fetch(url, {
    method: 'GET',
    headers
  })

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json()
    if (
      status === null
        ? res.status.toString().startsWith('2')
        : res.status === status
    ) {
      return { success: true, data: json }
    } else {
      return { success: false, err: json.error }
    }
  } else {
    if (
      status === null
        ? res.status.toString().startsWith('2')
        : res.status === status
    ) {
      return { success: true, data: res.body }
    } else {
      return { success: false, err: res.body }
    }
  }
}
