module.exports = function check(str, brackets) {
  let i = 0;
  let pair = '';
  for (let j = 0; j < str.length*3; j++) {
    while (i < brackets.length) {
    pair = brackets[i].join('');
    while (str.indexOf(pair) >= 0) {
      str = str.replace(pair, "");
    }
    i++
  }
    i = 0;
  }
  if (str == '') {
    return true;
  } else return false;
}
