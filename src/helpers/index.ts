export const getOnlyUpdatedFields = function (
  oldFilds: any,
  updatedFilds: any,
) {
  let result = {};
  for (let x in updatedFilds) {
    if (oldFilds[x] !== updatedFilds[x]) {
      result = { ...result, [x]: updatedFilds[x] };
    }
  }
  return result;
};
