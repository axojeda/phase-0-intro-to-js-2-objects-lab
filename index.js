// Write your solution in this file!
var employee = {}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    var newObj = Object.assign({}, obj)
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    var newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}