/**
 * 过滤参数，过滤空字符串
 * */
export function paramFilter(params = {}) {
    let result = {};
    for(let k in params) {
        if (params[k] !== '' && params[k] !== undefined && params[k] !== null) {
            result[k] = window.encodeURIComponent(params[k]);
        }
    }
    return result;
}

export function getRequestQuery(params) {
    const query = paramFilter(params);
    const res = [];
    Object.entries(query).forEach(o => res.push(`${o[0]}=${o[1]}`));
    return res.join('&');
}

