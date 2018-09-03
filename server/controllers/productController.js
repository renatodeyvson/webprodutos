exports.getAll = (req, res) => {
    res.json({type: 'get'});
};

exports.add = (req, res) => {
    res.json({type: 'post'});
};

exports.update = (req, res) => {
    res.json({type: 'put'});
};

exports.remove = (req, res) => {
    res.json({type: 'delete'});
};