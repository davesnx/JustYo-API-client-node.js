import Base from './common/Base.js';
import Valid from './common/Valid.js';

const method = 'GET';
const REQUIRED_PARAMETERS = [];

export default class SubscribersCount extends Base {

    constructor(yo) {
        super(yo);
        this.endpoint = 'subscribers_count';
    }

    get(parameters) {
        return super.request(method, this.endpoint, parameters);
    }

}
