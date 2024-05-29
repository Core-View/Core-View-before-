function create_code() {
  let n = Math.floor(Math.random() * 1000000);
  return n.toString().padStart(6, "0");
}

module.exports = { create_code };
