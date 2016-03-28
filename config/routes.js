module.exports.routes = {

  /*************************************************************
   * JSON API                                                  *
   *************************************************************/

  'PUT /login': 'UserController.login',
  'GET /logout': 'UserController.logout',

  /*************************************************************
   * Server-rendered HTML Pages                                *
   *************************************************************/

  'GET /': 'PageController.showHomePage',  

  'GET /videos': 'PageController.showVideosPage',

  'GET /administration': 'PageController.showAdminPage',

  'GET /profile': 'PageController.showProfilePage',

  'GET /edit-profile': 'PageController.showEditProfilePage',

  'GET /restore-profile': 'PageController.showRestorePage',

  'GET /signup': 'PageController.showSignupPage',
};