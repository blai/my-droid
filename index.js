module.exports = function(context) {
  return {
    foo: function(req, res) {
      return res.text(JSON.stringify(req)).send();
    },
    help: function(req, res) {
      return res.text('help yourself').send();
    }
  };
};
