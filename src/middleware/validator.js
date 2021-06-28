module.exports = (req, res, next) => {
    if (`${Number(req.query.name)}` !== `NaN`) {
        next('Not a string!')
    } if (req.query.name === undefined) {
        console.log(req.query.name, Number(req.query.name), 'else');
        next('enter name')
    }
    else {
        next();
    }
}