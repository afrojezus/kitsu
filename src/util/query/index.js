/**
 * Constructs a URL query string for JSON:API parameters
 *
 * @param {Object} params Parameters to parse
 * @returns {string} URL query string
 * @private
 */
export function query (params) {
  let query = ''

  for (let param in params) {
    if (typeof params[param] === 'object') {
      Object.keys(params[param]).forEach(value => {
        query += `&${param}[${value}]=${params[param][value]}`
      })
    } else query += `&${param}=${params[param]}`
  }

  return params ? query.slice(1) : ''
}
