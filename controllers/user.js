const signup = async (req, res) => {
	res.send('User signup');
};

const signin = async (req, res) => {
	res.send('User signin');
};

module.exports = {
	signup,
	signin,
};
