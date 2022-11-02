import fetch from 'node-fetch';

export default function handler(request, response) {
	const {user} = request.query
	console.log(request.query)
	
	async function getProfilePicture() {
		const link = await instagramdp.getDP(user)
		return response.json(link.picture)
	}
	
	getProfilePicture()
	
}
