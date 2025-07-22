/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const mapst = {};
  const mapts = {};
  for (let i = 0; i < s.length; i++) {
    let chars = s[i];
    let chart = t[i];

    if (mapst[chars] && mapst[chars] !== chart) return false;
    if (mapts[chart] && mapts[chart] !== chars) return false;

    mapst[chars] = chart;
    mapts[chart] = chars;
  }
  return true;
};
