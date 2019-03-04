import isomorphicFetch from "isomorphic-fetch";
import { paramFilter, getRequestQuery } from './utils';

const option = {
    method: 'GET',
    cache: 'no-cache',
    // body: '',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

export default function request(url, params = {}, opt = {}) {
    const options = Object.assign({}, option, opt);
    if(options.method === 'GET' || options.method === 'HEAD') {
        const query = getRequestQuery(params);
        if(query) {
            url = `${url}?${query}`;
        }
    }
    if(options.method === 'POST' || options.method === 'PUT') {
        options.body = JSON.stringify(paramFilter(params));
    }
    return isomorphicFetch(url, options)
        .then(response => {
            const ssologinurl = response.headers.get('sso-login-url');
            if(ssologinurl) { // 未登录时跳转sso
                const callbackurl = `http://${window.location.host}`;
                window.location.href = `${ssologinurl}&callback=${callbackurl}`;
                return;
            }
            if(response.status === 200) {
                return response;
            }
            console.log(response.statusText);
            return {json: () => ({})};
        })
        .catch(function(err) {
            console.log("Fetch Error : %S", err);
        });
}