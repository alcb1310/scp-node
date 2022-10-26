const app = require('./src/app');
const port = 5050;

app.listen(port, () => {
	console.log(`Application running on port ${port}`);
	console.log(`Press control-C to stop the server`);
});
