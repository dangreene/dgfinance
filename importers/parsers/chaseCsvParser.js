const parse = require('csv-parse');

function parseCsv(cb) {
  const options = {
    columns: true,
    auto_parse: true,
    auto_parse_date: true
  };

  return parse(options, cb);
}

exports.parse = parseCsv;
