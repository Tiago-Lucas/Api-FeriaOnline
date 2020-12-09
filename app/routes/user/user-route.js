const userController = require('../../controllers/user/user-controller');

module.exports = (app) => {
    app.route('/novo-usuario').post(userController.novoUsuario);
    app.route('/login-usuario').post(userController.loginUsuario);
}
