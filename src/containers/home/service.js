import fetch from '../../utils/fetch';
import { API } from '../../constants/enum';

export function getPatentIndustry(params) {
    return fetch(`${API.V1}/patent/group-by-industry`, params)
            .then(response => response.json());
}
