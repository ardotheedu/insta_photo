const express = require('express');
const instagramdp = require("instagramdp");

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
const customers = [];
app.use(express.json());
app.get('/user',  (request, response) => {
	const {user} = request.query
	console.log(request.query)
	
	async function getProfilePicture() {
		const link = await instagramdp.getDP(user)
		return response.json(link.picture)
	}
	
	getProfilePicture()
	
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);