import fetch from '../../utils/fetch';
import { API } from '../../constants/enum';

export function getResource(ticket = 'null') {
    return fetch(`${API.V1}/auth/resource/list`, {ticket})
            .then(resource => resource.json());
}
