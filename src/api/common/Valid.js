import _ from 'lodash';

export default class Valid {

    static parameters (options, validation = [], requiredOptions = false) {
        if (requiredOptions && !options) {
            throw new Error(`Impossible do the request without parameters`);
        }
        _.each(validation, function(val, i) {
            if (!options[val]) {
                throw new Error(`Missing ${val} parameter`);
            }
        })
    }

    static isString (param = '') {
        if (!_.isString(param)) {
            throw new TypeError(`${param} should be a string`);
        }
    }

    static isNumber (param) {
        if (!_.isNumber(param)) {
            throw new TypeError(`${param} should be a number`);
        }
    }

}
