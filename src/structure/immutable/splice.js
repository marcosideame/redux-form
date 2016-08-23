import { List, toList } from 'immutable'

export default (list = List.isList(list) || List(), index, removeNum, value) => {
  const usedList = list instanceof List ? list : toList(list);
  if (index < usedList.count()) {
    if (value === undefined && !removeNum) { // inserting undefined
      // first insert null and then re-set it to undefined
      return usedList.splice(index, 0, null).set(index, undefined)
    }
    if (value != null) {
      return usedList.splice(index, removeNum, value)  // removing and adding
    } else {
      return usedList.splice(index, removeNum)  // removing
    }
  }
  if (removeNum) { // trying to remove non-existant item: return original array
    return usedList
  }
  // trying to add outside of range: just set value
  return usedList.set(index, value)
}
