/*
 * GET profile page.
 */

module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - Profile',
  	page: 'profile'
  });
}