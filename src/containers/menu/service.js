import fetch from '../../utils/fetch';
import { API } from '../../constants/enum';

export function logout(ticket = 'null') {
    return fetch(`${API.V1}/auth/logout?ticket=${ticket}`, {}, {method: 'POST'})
            .then(resource => resource.json());
}