const mongoose =  require('mongoose');

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
        family: 4
	};
	try {
		mongoose.connect( 'mongodb+srv://impactbridge2022:1234@impactbridge.mw7ctdm.mongodb.net/', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};