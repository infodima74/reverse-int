module.exports = function reverse (n) {
    n = n + "";
  
    let h=n.split("").reverse().join("");
    return parseInt(h)
  }