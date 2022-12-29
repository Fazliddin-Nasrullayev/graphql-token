const jwt = require('jsonwebtoken')

module.exports = {
    sign: payload => jwt.sign(payload, 'application') ,
    verify: token => jwt.verify(token, 'application')
}