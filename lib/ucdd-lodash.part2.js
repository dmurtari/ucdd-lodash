/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
    var arr = []

    if (typeof end == 'undefined'){
        end = start
        start = 0
    }

    for (var start; start < end; start++) {
        arr.push(start)
    };

    return arr
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    var picks = {}

    if (typeof propertyNames == 'undefined') {
        return picks
    }

    for (var i = 0; i < propertyNames.length; i++) {
        property = propertyNames[i]

        if (property in object) {
            picks[property] = object[property]
        }
    }

    return picks
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return true
        }
    };

    return false
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i])) {
            return false
        }
    };

    return true
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
    return collection.filter(function(filtered) {
        for (key in object) {
            if (filtered[key] !== object[key]) {
                return false
            } 
            return true
        }
    })[0]
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib