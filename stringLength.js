const stringLength = (string) => {
  if (string.length < 1) {
    throw new Error("at least 1");
  } else if (string.length > 10) {
    throw new Error("not longer than 10");
  } else {
    return string.length;
  }
};

module.exports = stringLength;